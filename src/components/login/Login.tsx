// src/components/login/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
export const Login: React.FC = () => {
const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue

    setError('');
    setMessage('');

    // Validación básica
    if (!email || !password) {
      setError('Por favor, ingresa tu email y contraseña.');
      return;
    }

    if (!email.includes('@')) {
      setError('Por favor, ingresa un email válido.');
      return;
    }

    // Aca iría la lógica de autenticación real
    // Por ahora, solo simulación
    if (email === 'test@example.com' && password === 'password123') {
      setMessage('¡Inicio de sesión exitoso!');
      // Redirigir al usuario o actualizar el estado de autenticación
      console.log('Usuario autenticado:', email);
      setEmail('');
      setPassword('');
    } else {
      setError('Email o contraseña incorrectos.');
    }
  };

  const handleRegisterButtonClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita el comportamiento por defecto si fuera un botón de submit
    navigate('/register'); // <-- esta es la ruta de la página de registro
  };

  // Función placeholder para el restablecimiento de contraseña
  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita que el enlace recargue la página
    alert('Funcionalidad de restablecimiento de contraseña pendiente.');
    console.log('Solicitud de restablecimiento de contraseña');
    // En el futuro, aca se podra redirigir a una página o modal específica
    // para el restablecimiento de contraseña.
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Inicia Sesión</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}

          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>

          {/* Enlace de restablecimiento de contraseña */}
          <p className="forgot-password-link">
            <a href="#" onClick={handleForgotPassword}>¿Olvidaste tu contraseña?</a>
          </p>
        </form>
        <div className="register-section">
          <p>¿No tienes una cuenta?</p>
          {/* Botón de registro */}
          <button type="button" onClick={handleRegisterButtonClick} className="register-button">
            Regístrate
          </button>
        </div>
      </div>
    </div>
  );
};
