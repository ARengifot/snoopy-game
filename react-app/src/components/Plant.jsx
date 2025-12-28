import React from 'react';

const Plant = ({ type, isSelected }) => {
  const plantEmojis = {
    shooter: '🔫',
    bomb: '💣',
    ice: '❄️',
    light: '💡',
    shield: '🛡️',
  };

  return (
    <div className={`plant-item ${isSelected ? 'selected' : ''}`} data-plant={type}>
      <span className="plant-emoji">{plantEmojis[type]}</span>
      <span className="plant-name">{type}</span>
    </div>
  );
};

export default Plant;
