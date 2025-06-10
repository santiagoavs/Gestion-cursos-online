// src/App.jsx
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import SplashScreen from '../components/splashScreen.jsx';
import Home from '../pages/DashboardPage.jsx'; 

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1>hola proFe</h1>
        <p>CARGANDO...</p>
      </div>
    </div>
  );
};

export default WelcomePage;