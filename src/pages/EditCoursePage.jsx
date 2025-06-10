import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../style/dashboard.css';

const EditCoursePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`https://retoolapi.dev/6QbyzP/cursos-online/${id}`);
        if (!response.ok) throw new Error('No se encontró el curso');
        const curso = await response.json();
        reset(curso);  
        setLoading(false);
      } catch (error) {
        Swal.fire('Error', 'No se pudo cargar el curso', 'error');
        navigate('/dashboard');
      }
    };
    fetchCourse();
  }, [id, reset, navigate]);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`https://retoolapi.dev/6QbyzP/cursos-online/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        Swal.fire('¡Curso actualizado!', 'Los cambios fueron guardados.', 'success');
        navigate('/dashboard');
      } else {
        throw new Error('Error al actualizar');
      }
    } catch (error) {
      Swal.fire('Error', 'No se pudo actualizar el curso.', 'error');
    }
  };

  if (loading) return <p className="loading-text">Cargando curso...</p>;

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Editar Curso</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div className="form-group">
          <label>Nombre del Curso</label>
          <input {...register('curso', { required: 'Este campo es obligatorio' })} />
          {errors.curso && <span>{errors.curso.message}</span>}
        </div>

        <div className="form-group">
          <label>Temática</label>
          <input {...register('tematica', { required: 'Este campo es obligatorio' })} />
          {errors.tematica && <span>{errors.tematica.message}</span>}
        </div>

        <div className="form-group">
          <label>Instructor</label>
          <input {...register('instructor', { required: 'Este campo es obligatorio' })} />
          {errors.instructor && <span>{errors.instructor.message}</span>}
        </div>

        <div className="form-group">
          <label>Descripción</label>
          <textarea {...register('descripcion', { required: 'Este campo es obligatorio' })} rows={4} />
          {errors.descripcion && <span>{errors.descripcion.message}</span>}
        </div>

        <div className="buttons-group" style={{ marginTop: '1.5rem' }}>
          <button type="submit" className="btn btn-create">Guardar Cambios</button>
          <button
            type="button"
            className="btn btn-delete"
            onClick={() => navigate('/dashboard')}
            style={{ marginLeft: '1rem' }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCoursePage;
