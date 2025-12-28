import React, { useState, useEffect, useCallback } from 'react';
import './GameScreen.css';
import GameBoard from './GameBoard';
import HUD from './HUD';

const GameScreen = ({ level, initialSuns, onBack }) => {
  const [gameData, setGameData] = useState({
    suns: initialSuns,
    selectedPlant: null,
    plants: [],
    zombies: [],
    wave: 1,
    totalWaves: 5,
  });

  const handlePlantSelect = useCallback((plantType) => {
    setGameData(prev => ({
      ...prev,
      selectedPlant: prev.selectedPlant === plantType ? null : plantType,
    }));
  }, []);

  const handlePlacePlant = useCallback((row, col) => {
    // Lógica para colocar planta
  }, []);

  return (
    <div className="game-screen-container">
      <HUD 
        level={level}
        suns={gameData.suns}
        wave={gameData.wave}
        totalWaves={gameData.totalWaves}
        onBack={onBack}
      />

      <GameBoard 
        level={level}
        selectedPlant={gameData.selectedPlant}
        onPlantSelect={handlePlantSelect}
        onPlacePlant={handlePlacePlant}
      />
    </div>
  );
};

export default GameScreen;
