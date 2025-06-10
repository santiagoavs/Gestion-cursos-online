import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import DashboardPage from "./pages/DashboardPage"; 
import CreateCoursePage from "./pages/CreateCoursePage"; 
import EditCoursePage from "./pages/EditCoursePage"; 
import WelcomePage from "./pages/WelcomePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/crear" element={<CreateCoursePage />} />
        <Route path="/editar/:id" element={<EditCoursePage />} />
        <Route path="/" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
