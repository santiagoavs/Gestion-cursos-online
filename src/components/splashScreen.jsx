// src/components/SplashScreen.jsx
import React, { useEffect } from 'react';
import '../style/splashscreen.css';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Llama a una función para ocultar el splash screen
    }, 3000); // 3 segundos

    return () => clearTimeout(timer);
  }, [onFinish]);

};

export default SplashScreen;