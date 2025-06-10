import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../style/dashboard.css'; 

const CreateCoursePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://retoolapi.dev/6QbyzP/cursos-online', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        Swal.fire('¡Curso creado!', 'El curso fue registrado correctamente.', 'success');
        navigate('/dashboard');
      } else {
        throw new Error('Error al guardar');
      }
    } catch (error) {
      Swal.fire('Error', 'No se pudo guardar el curso.', 'error');
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Crear Nuevo Curso</h2>

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
          <button type="submit" className="btn btn-create">Guardar</button>
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

export default CreateCoursePage;
