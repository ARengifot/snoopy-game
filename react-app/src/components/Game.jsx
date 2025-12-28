import React, { useState, useEffect, useCallback } from 'react';
import './Game.css';

// Importar configuración del juego
import { GAME_CONFIG, PLANTS, ZOMBIES, LEVEL_CONFIG, LEVEL_STORIES, LOVE_MESSAGES } from '../config/gameConfig';
import GameScreen from './GameScreen';
import Menu from './Menu';

const Game = () => {
  const [gameState, setGameState] = useState({
    currentScreen: 'intro', // intro, menu, levelSelect, game
    currentLevel: 1,
    suns: 100,
    selectedPlant: null,
    gameActive: false,
    zombiesDefeated: 0,
    levelScores: [0, 0, 0, 0, 0],
    totalScore: 0,
    completedLevels: [],
    lastPlayed: null,
  });

  // Cargar datos guardados
  useEffect(() => {
    const savedData = localStorage.getItem('snoopyGameData');
    if (savedData) {
      try {
        const data = JSON.parse(savedData);
        setGameState(prev => ({ ...prev, ...data }));
      } catch (e) {
        console.error('Error loading saved data:', e);
      }
    }
  }, []);

  // Guardar datos cuando cambian
  useEffect(() => {
    localStorage.setItem('snoopyGameData', JSON.stringify(gameState));
  }, [gameState]);

  const handleStartGame = useCallback((level) => {
    setGameState(prev => ({
      ...prev,
      currentLevel: level,
      currentScreen: 'game',
      suns: 100 + (level * 25),
      selectedPlant: null,
      gameActive: true,
      zombiesDefeated: 0,
    }));
  }, []);

  const handleGoToMenu = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      currentScreen: 'menu',
      gameActive: false,
    }));
  }, []);

  const handleGoToLevelSelect = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      currentScreen: 'levelSelect',
    }));
  }, []);

  return (
    <div className="game-container">
      {gameState.currentScreen === 'intro' && (
        <div className="screen intro-screen active">
          <div className="intro-overlay">
            <div className="intro-content">
              <h1>🐕 SNOOPY PROTEGE A VALENTINA 💕</h1>
              <p className="intro-subtitle">9 Meses de Amor Eterno</p>
              <button 
                className="btn btn-primary"
                onClick={() => setGameState(prev => ({ ...prev, currentScreen: 'menu' }))}
              >
                COMENZAR
              </button>
            </div>
          </div>
        </div>
      )}

      {gameState.currentScreen === 'menu' && (
        <Menu 
          onPlay={() => handleGoToLevelSelect()}
          onQuit={() => setGameState(prev => ({ ...prev, currentScreen: 'intro' }))}
        />
      )}

      {gameState.currentScreen === 'levelSelect' && (
        <div className="screen level-select-screen active">
          {/* Level selector UI */}
        </div>
      )}

      {gameState.currentScreen === 'game' && (
        <GameScreen 
          level={gameState.currentLevel}
          initialSuns={gameState.suns}
          onBack={handleGoToMenu}
        />
      )}
    </div>
  );
};

export default Game;
