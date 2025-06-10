import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage"; // Asegúrate de tener esta página creada
import CreateCoursePage from "./pages/CreateCoursePage"; // Asegúrate de tener esta página creada
import EditCoursePage from "./pages/EditCoursePage"; // Asegúrate de tener esta página creada


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/crear" element={<CreateCoursePage />} />
        <Route path="/editar/:id" element={<EditCoursePage />} />
      </Routes>
    </Router>
  );
}

export default App;
