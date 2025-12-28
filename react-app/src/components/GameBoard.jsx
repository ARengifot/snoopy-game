import React from 'react';
import './GameBoard.css';
import Plant from './Plant';
import Zombie from './Zombie';

const GameBoard = ({ level, selectedPlant, onPlantSelect, onPlacePlant }) => {
  const gardenCells = Array.from({ length: 5 * 6 }, (_, i) => i);

  return (
    <div className="game-board">
      {Array.from({ length: 5 }, (_, laneIndex) => (
        <div key={laneIndex} className={`lane lane-${laneIndex + 1}`}>
          <div className="garden">
            {gardenCells.slice(laneIndex * 6, (laneIndex + 1) * 6).map((cell, col) => (
              <div
                key={`${laneIndex}-${col}`}
                className="garden-cell"
                onClick={() => onPlacePlant(laneIndex, col)}
              >
                <Plant type="sample" />
              </div>
            ))}
          </div>

          <div className="zombie-lane">
            {/* Zombies will be rendered here */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
