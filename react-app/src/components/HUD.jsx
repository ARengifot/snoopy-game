import React from 'react';

const HUD = ({ level, suns, wave, totalWaves, onBack }) => {
  return (
    <div className="game-hud">
      <div className="hud-left">
        <button className="btn-back" onClick={onBack}>← MENÚ</button>
        <h2>Nivel {level}: 9 Meses de Amor 💕</h2>
      </div>

      <div className="hud-center">
        <div className="wave-info">
          Oleada {wave} de {totalWaves}
        </div>
      </div>

      <div className="hud-right">
        <div className="resource">
          <span>☀️ Amor:</span>
          <span id="suns">{suns}</span>
        </div>
        <div className="resource">
          <span>🎯 Derrotados:</span>
          <span id="zombiesDefeated">0</span>
        </div>
      </div>
    </div>
  );
};

export default HUD;
