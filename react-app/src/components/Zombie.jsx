import React from 'react';

const Zombie = ({ type, health, position }) => {
  const zombieEmojis = {
    normal: '🧟',
    fast: '🏃‍♂️',
    strong: '💪',
    armored: '🤖',
    boss: '👑',
  };

  return (
    <div
      className="zombie"
      style={{
        right: `${position}px`,
      }}
    >
      <span>{zombieEmojis[type]}</span>
      <div className="health-bar" style={{ width: `${health * 100}%` }}></div>
    </div>
  );
};

export default Zombie;
