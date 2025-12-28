import React from 'react';
import './Menu.css';

const Menu = ({ onPlay, onQuit }) => {
  return (
    <div className="screen menu-screen active">
      <div className="menu-background">
        <div className="parallax-layer parallax-1"></div>
        <div className="parallax-layer parallax-2"></div>
        <div className="parallax-layer parallax-3"></div>
      </div>

      <div className="menu-content epic-menu">
        <div className="menu-stars">
          <span className="star">⭐</span>
          <span className="star">⭐</span>
          <span className="star">⭐</span>
        </div>

        <h1 className="menu-title">🐕 SNOOPY PROTEGE A VALENTINA 💕</h1>
        <p className="menu-subtitle">9 Meses de Amor Eterno</p>

        <div className="menu-buttons">
          <button className="btn btn-primary btn-large" onClick={onPlay}>
            <span className="btn-icon">▶</span>
            JUGAR POR VALENTINA
          </button>

          <button className="btn btn-secondary btn-large">
            <span className="btn-icon">?</span>
            ¿CÓMO JUEGO?
          </button>

          <button className="btn btn-accent btn-large">
            <span className="btn-icon">♥</span>
            NUESTRA HISTORIA
          </button>

          <button className="btn btn-light btn-large" onClick={onQuit}>
            SALIR
          </button>
        </div>

        <div className="menu-footer">
          <p>Creado con ❤️ para Valentina</p>
          <p>v3.0.0 - React Edition</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
