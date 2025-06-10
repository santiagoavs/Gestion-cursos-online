import { useEffect, useState } from "react";
import { useFetchData } from "../hooks/userFetchdata";
import { Title } from "../components/title";
import { CourseCard } from "../components/card";
import { Button } from "../components/button";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../style/dashboard.css";

export default function DashboardPage() {
  const { data: courses, fetchData } = useFetchData("https://retoolapi.dev/6QbyzP/cursos-online");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "¿Eliminar curso?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (confirm.isConfirmed) {
      try {
        setIsLoading(true);
        await fetch(`https://retoolapi.dev/6QbyzP/cursos-online/${id}`, { method: "DELETE" });
        await fetchData();
        Swal.fire("¡Eliminado!", "El curso ha sido eliminado.", "success");
      } catch (error) {
        Swal.fire("Error", "No se pudo eliminar el curso", "error");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="dashboard-container">
      <Title text="Gestión de Cursos Online" />

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <Button text="Agregar Curso" onClick={() => navigate("/crear")} />
      </div>

      {isLoading && (
        <p style={{ textAlign: "center", color: "#4f46e5", fontWeight: "600" }}>Procesando...</p>
      )}

      {courses.length === 0 && !isLoading ? (
        <p style={{ textAlign: "center", color: "#6b7280" }}>No hay cursos disponibles.</p>
      ) : (
        <div className="grid">
          {courses.map((curso) => (
            <CourseCard key={curso.id} curso={curso} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
