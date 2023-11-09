import React from 'react';
import '../../dist/LoginForm.css'; // Importa tu archivo CSS para dar estilo


function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Inicia sesión</h2>
        <div className="input-group">
          <input type="text" placeholder="Usuario" />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Contraseña" />
        </div>
        <button className="login-button">Iniciar sesión</button>
        <div className="checkbox-group">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Recuérdame</label>
        </div>
        <div className="help-link">¿Necesitas ayuda?</div>
      </div>
    </div>
  );
}

export default Login;
