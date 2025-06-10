import { useNavigate } from 'react-router-dom';

const CourseCard = ({ curso, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h3>{curso.curso}</h3>
      <p><strong>Instructor:</strong> {curso.instructor}</p>
      <p><strong>Temática:</strong> {curso.tematica}</p>
      <p>{curso.descripcion}</p>

      <div className="buttons-group">
        <button
          className="btn btn-edit"
          onClick={() => navigate(`/editar/${curso.id}`)}
          aria-label={`Editar curso ${curso.curso}`}
        >
          Editar
        </button>

        <button
          className="btn btn-delete"
          onClick={() => onDelete(curso.id)}
          aria-label={`Eliminar curso ${curso.curso}`}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export { CourseCard };
