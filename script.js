// CONFIGURACIÓN DEL JUEGO
const GAME_CONFIG = {
    lanes: 5,
    gridCols: 6,
    suns: 100,
};

// CONFIGURACIÓN DE PLANTAS
const PLANTS = {
    shooter: {
        name: 'Tirador',
        cost: 75,
        damage: 1,
        cooldown: 1000,
        range: 400,
        description: 'Dispara balas mágicas a los zombies'
    },
    bomb: {
        name: 'Bomba',
        cost: 150,
        damage: 3,
        cooldown: 2000,
        range: 200,
        description: 'Explota cerca del zombi más cercano'
    },
    ice: {
        name: 'Hielo',
        cost: 100,
        damage: 0.5,
        cooldown: 1500,
        range: 300,
        slowFactor: 0.3,
        description: 'Congela zombies ralentizándolos'
    },
    light: {
        name: 'Luz',
        cost: 125,
        damage: 0,
        cooldown: 800,
        range: 0,
        description: 'Genera soles mágicos sin atacar'
    },
    shield: {
        name: 'Escudo',
        cost: 200,
        damage: 0,
        cooldown: 0,
        range: 0,
        health: 500,
        protective: true,
        description: 'Protege plantas - mucha vida, sin ataque'
    }
};

// CONFIGURACIÓN DE ZOMBIES
const ZOMBIES = {
    normal: {
        name: 'Zombi Normal',
        health: 1,
        speed: 1,
        damage: 1,
        color: '#4a4a4a'
    },
    fast: {
        name: 'Zombi Rápido',
        health: 0.8,
        speed: 1.5,
        damage: 0.8,
        color: '#2c3e50'
    },
    strong: {
        name: 'Zombi Fuerte',
        health: 2.5,
        speed: 0.6,
        damage: 1.5,
        color: '#34495e'
    },
    armored: {
        name: 'Zombi Coraza',
        health: 4,
        speed: 0.5,
        damage: 1.2,
        color: '#16a085'
    },
    boss: {
        name: 'Zombi Jefe',
        health: 6,
        speed: 0.4,
        damage: 2,
        color: '#8b0000'
    }
};

// MENSAJES DE AMOR
const LOVE_MESSAGES = [
    "Te amo Valentina 💕",
    "Eres mi razón para sonreír 😊",
    "Estos 9 meses contigo han sido los mejores 💫",
    "Tu amor me hace invencible 🦸",
    "Juntos podemos vencer cualquier obstáculo 💪",
    "Cada día contigo es una bendición ❤️",
    "Mi amor por ti crece cada segundo 💕",
    "Eres mi mayor tesoro Valentina 💎",
    "Contigo siempre quiero estar 🥰",
    "Tu sonrisa ilumina mis días 🌟",
    "Eres lo mejor que me pudo pasar 🍀",
    "Te amaré siempre Valentina 🌹",
    "Tú eres mi todo 💖",
    "Alejandro ama a Valentina infinitamente 💕",
    "Feliz mes de amor mi vida 🎂💕"
];

// MINI HISTORIAS POR NIVEL
const LEVEL_STORIES = {
    1: {
        title: "El Primer Encuentro",
        intro: "Snoopy se levanta en su pequeño jardín...",
        message: "¡Valen! No dejaré que nada te toque 💪",
        quote: "Nuestro amor comenzó en un simple momento... y ya es infinito.",
        snoopyText: "¡Alejandro protegerá a Valentina siempre!"
    },
    2: {
        title: "Corazones en Batalla",
        intro: "Los zombies se multiplican, pero nuestro amor es más fuerte...",
        message: "¡Por nosotros, por nuestro futuro 💕!",
        quote: "Cada planta que planto es una promesa de amor para ti.",
        snoopyText: "¡9 meses de amor no se detienen aquí!"
    },
    3: {
        title: "La Prueba del Amor",
        intro: "El camino se oscurece, pero tu luz guía mis pasos...",
        message: "¡Valen, tu amor me da fuerzas! 💖",
        quote: "Juntos somos invencibles, como el amor que nos une.",
        snoopyText: "¡Alejandro lucha por Valentina sin rendirse!"
    },
    4: {
        title: "Momento Crítico",
        intro: "Los zombies más fuertes avanzan, pero nuestro amor también...",
        message: "¡Te amo, Valentina, eso es todo lo que necesito! ❤️",
        quote: "En las pruebas más duras, nuestro amor brilla más fuerte.",
        snoopyText: "¡Este es el momento de demostrar nuestro amor!"
    },
    5: {
        title: "El Encuentro Final",
        intro: "La batalla definitiva llega... El jefe supremo aparece...",
        message: "¡VALENTINA! ¡Por ti, por nosotros, VENCEREMOS! 💕",
        quote: "9 meses de amor, un mismo corazón, una misma meta: VENCER JUNTOS.",
        snoopyText: "¡Alejandro ama a Valentina y nada lo detendrá!"
    }
};

// SISTEMA DE GUARDADO - LOCAL STORAGE
const SaveSystem = {
    STORAGE_KEY: 'snoopyGameSave',
    
    save() {
        const data = {
            levelScores: gameState.levelScores,
            totalScore: gameState.totalScore,
            completedLevels: gameState.completedLevels,
            lastPlayed: new Date().toISOString()
        };
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    },
    
    load() {
        const data = localStorage.getItem(this.STORAGE_KEY);
        if (data) {
            try {
                return JSON.parse(data);
            } catch(e) {
                console.log('Error al cargar datos guardados');
                return null;
            }
        }
        return null;
    },
    
    clear() {
        localStorage.removeItem(this.STORAGE_KEY);
    }
};

// VARIABLES GLOBALES
let gameState = {
    currentLevel: 1,
    suns: 100,
    isPaused: false,
    selectedPlant: null,
    plants: [],
    zombies: [],
    lanes: [],
    gameActive: false,
    zombiesSpawned: 0,
    zombiesDefeated: 0,
    levelWon: false,
    levelScores: [0, 0, 0, 0, 0],
    totalScore: 0,
    completedLevels: []
};

let imagePaths = {
    snoopy: '',
    plants: {
        shooter: '',
        bomb: '',
        ice: '',
        light: '',
        shield: ''
    },
    zombies: {
        normal: '',
        fast: '',
        strong: '',
        armored: '',
        boss: ''
    }
};

// INICIALIZACIÓN
window.addEventListener('DOMContentLoaded', () => {
    console.log('🎮 Snoopy vs Zombies - v2.0 Iniciando...');
    loadGameData();
    
    // Cargar assets y mostrar intro después de un pequeño delay
    setTimeout(() => {
        hideLoadingScreen();
        showIntro();
    }, 500);
});

function loadGameData() {
    const saved = SaveSystem.load();
    if (saved) {
        gameState.levelScores = saved.levelScores;
        gameState.totalScore = saved.totalScore;
        gameState.completedLevels = saved.completedLevels;
        console.log('📊 Datos cargados desde guardado anterior');
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
        loadingScreen.classList.add('hidden');
    }
}

function showIntro() {
    const introScreen = document.getElementById('introScreen');
    if (!introScreen) return;
    
    // Mostrar intro
    introScreen.classList.add('active');
    
    // Después de 3 segundos, ir al menú
    setTimeout(() => {
        introScreen.classList.remove('active');
        updateLevelDisplay();
    }, 3000);
}

// NAVEGACIÓN DE MENÚS
function startGame() {
    switchScreen('levelSelectScreen');
    updateLevelDisplay();
}

function updateLevelDisplay() {
    for (let i = 1; i <= 5; i++) {
        const score = gameState.levelScores[i - 1];
        const stars = calculateStars(score);
        
        document.getElementById(`stars-${i}`).textContent = stars;
        document.getElementById(`score-${i}`).textContent = score + ' pts';
    }
    
    const completedCount = gameState.completedLevels.length;
    document.getElementById('levelsCompleted').textContent = `${completedCount}/5`;
    document.getElementById('totalScore').textContent = gameState.totalScore;
}

function calculateStars(score) {
    if (score >= 150) return '⭐⭐⭐';
    if (score >= 100) return '⭐⭐☆';
    if (score >= 50) return '⭐☆☆';
    return '☆☆☆';
}

function showInstructions() {
    switchScreen('instructionsScreen');
}

function showAbout() {
    switchScreen('aboutScreen');
}

function backToMenu() {
    switchScreen('mainMenu');
}

function switchScreen(screenId) {
    // Ocultar todas las pantallas
    document.querySelectorAll('.menu-screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Mostrar la pantalla deseada
    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.add('active');
    }
}

// SELECCIÓN DE NIVEL
function selectLevel(level) {
    gameState.currentLevel = level;
    startLevelGame();
}

function startLevelGame() {
    // Ocultar menús
    document.querySelectorAll('.menu-screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Mostrar pantalla de juego
    const gameScreen = document.getElementById('gameScreen');
    gameScreen.classList.add('active');

    // Reiniciar estado del juego
    gameState.suns = 100 + (gameState.currentLevel * 25);
    gameState.isPaused = false;
    gameState.selectedPlant = null;
    gameState.plants = [];
    gameState.zombies = [];
    gameState.gameActive = true;
    gameState.zombiesSpawned = 0;
    gameState.zombiesDefeated = 0;
    gameState.levelWon = false;

    // Actualizar UI
    updateGameUI();

    // Crear tablero
    createGameBoard();

    // Mostrar intro del nivel
    showLevelStory();
}

function showLevelStory() {
    const story = LEVEL_STORIES[gameState.currentLevel];
    if (!story) {
        startWaveSystem();
        return;
    }

    // Crear modal de historia
    const storyModal = document.createElement('div');
    storyModal.className = 'modal active';
    storyModal.id = 'storyModal';
    storyModal.innerHTML = `
        <div class="modal-content story-modal">
            <div class="story-header">
                <h3 style="color: #667eea; font-size: 1.8em; margin-bottom: 10px;">⚔️ ${story.title}</h3>
            </div>
            <div class="story-content">
                <p class="story-intro">${story.intro}</p>
                <div class="story-snoopy">
                    <p class="snoopy-quote">"${story.snoopyText}"</p>
                </div>
                <p class="story-dedication">${story.quote}</p>
            </div>
            <div class="story-footer">
                <button class="btn btn-play" style="margin-top: 20px; width: 200px;" onclick="closeStoryAndStart()">
                    ¡VAMOS! 💪
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(storyModal);
}

function closeStoryAndStart() {
    const modal = document.getElementById('storyModal');
    if (modal) {
        modal.remove();
    }
    startWaveSystem();
}

function createGameBoard() {
    const gameBoard = document.querySelector('.game-board');
    gameBoard.innerHTML = '';

    for (let i = 0; i < GAME_CONFIG.lanes; i++) {
        const lane = document.createElement('div');
        lane.className = `lane lane-${i + 1}`;

        const garden = document.createElement('div');
        garden.className = 'garden';

        // Crear celdas del jardín
        for (let j = 0; j < GAME_CONFIG.gridCols; j++) {
            const cell = document.createElement('div');
            cell.className = 'garden-cell';
            cell.dataset.lane = i;
            cell.dataset.col = j;
            cell.addEventListener('click', (e) => plantOnCell(e, i, j));
            garden.appendChild(cell);
        }

        const zombieLane = document.createElement('div');
        zombieLane.className = 'zombie-lane';
        zombieLane.dataset.lane = i;

        lane.appendChild(garden);
        lane.appendChild(zombieLane);
        gameBoard.appendChild(lane);

        gameState.lanes[i] = {
            plants: [],
            zombies: [],
            laneElement: zombieLane
        };
    }
}

function plantOnCell(event, lane, col) {
    if (!gameState.selectedPlant || gameState.isPaused || !gameState.gameActive) return;

    const plantType = gameState.selectedPlant;
    const cost = PLANTS[plantType].cost;

    if (gameState.suns < cost) {
        showLoveNotification("¡No tienes suficientes soles! 💛");
        return;
    }

    const cell = event.target.closest('.garden-cell');
    if (cell.querySelector('.plant')) {
        showLoveNotification("¡Ya hay una planta aquí! 🌱");
        return;
    }

    // Crear planta
    const plantElement = document.createElement('img');
    plantElement.src = imagePaths.plants[plantType];
    plantElement.className = 'plant';
    plantElement.alt = PLANTS[plantType].name;

    cell.appendChild(plantElement);
    cell.classList.add('occupied');

    // Agregar a lista de plantas
    const plant = {
        type: plantType,
        lane: lane,
        col: col,
        element: plantElement,
        lastShot: 0,
        health: 3
    };

    gameState.lanes[lane].plants.push(plant);
    gameState.plants.push(plant);

    // Descontar soles
    gameState.suns -= cost;
    updateGameUI();

    // Iniciar acciones de la planta
    plantStartAttacking(plant);
}

function plantStartAttacking(plant) {
    if (PLANTS[plant.type].damage === 0) return; // Escudo no ataca

    const attackInterval = setInterval(() => {
        if (!gameState.gameActive) {
            clearInterval(attackInterval);
            return;
        }

        const now = Date.now();
        if (now - plant.lastShot >= PLANTS[plant.type].cooldown) {
            plantAttack(plant);
            plant.lastShot = now;
        }
    }, 100);
}

function plantAttack(plant) {
    const zombiesInRange = gameState.lanes[plant.lane].zombies.filter(z => {
        const distance = Math.abs(z.position - plant.col);
        return distance <= PLANTS[plant.type].range / 100;
    });

    if (zombiesInRange.length === 0) return;

    const target = zombiesInRange[0];
    const plantType = plant.type;

    // Animaciones únicas por tipo de planta
    plant.element.style.animation = 'none';
    setTimeout(() => {
        switch(plantType) {
            case 'shooter':
                // Disparo rápido y repetitivo
                plant.element.style.animation = 'plantShoot 0.3s ease-in-out';
                break;
            case 'bomb':
                // Expansión y contracción explosiva
                plant.element.style.animation = 'bombAttack 0.5s ease-in-out';
                break;
            case 'ice':
                // Pulso de congelación
                plant.element.style.animation = 'iceAttack 0.4s ease-in-out';
                break;
            case 'light':
                // Destello de luz (no ataca)
                plant.element.style.animation = 'lightAttack 0.3s ease-in-out';
                break;
            case 'shield':
                // Sin ataque
                break;
            default:
                plant.element.style.animation = 'plantShoot 0.3s ease-in-out';
        }
    }, 10);

    // Luz y Escudo NO atacan
    if (plantType === 'light' || plantType === 'shield') {
        // Luz da soles cuando aparece
        if (plantType === 'light') {
            gameState.suns += 5;
            updateGameUI();
        }
        return;
    }

    // Crear efecto visual de proyectil para plantas que atacan
    if (PLANTS[plantType].damage > 0) {
        createProjectile(plant, target);
    }

    // Aplicar daño
    target.health -= PLANTS[plantType].damage;

    if (PLANTS[plantType].slowFactor) {
        target.currentSpeed = target.speed * PLANTS[plantType].slowFactor;
        setTimeout(() => {
            target.currentSpeed = target.speed;
        }, 3000);
    }

    if (target.health <= 0) {
        // Crear efecto visual de muerte
        createDeathEffect(target.element);
        
        target.element.remove();
        gameState.lanes[plant.lane].zombies = gameState.lanes[plant.lane].zombies.filter(z => z !== target);
        gameState.zombies = gameState.zombies.filter(z => z !== target);
        gameState.zombiesDefeated++;
        gameState.suns += 25;
        
        // Crear efecto visual de recolección de soles
        createSunCollectEffect(target.element, 25);
        
        updateGameUI();

        // Mensaje de amor aleatorio
        if (Math.random() < 0.3) {
            const message = LOVE_MESSAGES[Math.floor(Math.random() * LOVE_MESSAGES.length)];
            showLoveNotification(message);
        }

        checkWaveComplete();
    }
}

function createProjectile(plant, target) {
    const lane = document.querySelector(`.lane-${plant.lane + 1} .zombie-lane`);
    const projectile = document.createElement('div');
    projectile.className = 'projectile';

    const plantRect = plant.element.getBoundingClientRect();
    projectile.style.left = plantRect.left + 'px';
    projectile.style.top = plantRect.top + 'px';

    lane.appendChild(projectile);

    const targetRect = target.element.getBoundingClientRect();
    const startX = plantRect.left;
    const startY = plantRect.top;
    const endX = targetRect.left + targetRect.width / 2;
    const endY = targetRect.top + targetRect.height / 2;

    const distance = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
    const duration = distance / 500;

    projectile.animate([
        { left: '0', top: '0', opacity: 1 },
        { left: (endX - startX) + 'px', top: (endY - startY) + 'px', opacity: 0.5 }
    ], {
        duration: duration * 1000,
        easing: 'linear'
    });

    setTimeout(() => projectile.remove(), duration * 1000);
}

// SISTEMA DE OLEADAS
const LEVEL_CONFIG = {
    1: { zombieTypes: ['normal', 'normal', 'fast'], waveDelay: 2000, totalWaves: 3 },
    2: { zombieTypes: ['normal', 'fast', 'fast', 'strong'], waveDelay: 1500, totalWaves: 4 },
    3: { zombieTypes: ['normal', 'fast', 'strong', 'strong', 'armored'], waveDelay: 1200, totalWaves: 5 },
    4: { zombieTypes: ['fast', 'strong', 'strong', 'armored', 'armored'], waveDelay: 1000, totalWaves: 6 },
    5: { zombieTypes: ['strong', 'armored', 'armored', 'boss'], waveDelay: 800, totalWaves: 7 }
};

let waveSystem = {
    currentWave: 0,
    totalWaves: 0,
    spawningZombies: false
};

function startWaveSystem() {
    const config = LEVEL_CONFIG[gameState.currentLevel];
    waveSystem.totalWaves = config.totalWaves;
    waveSystem.currentWave = 0;

    spawnWave();
}

function spawnWave() {
    if (waveSystem.currentWave >= waveSystem.totalWaves) {
        // Después de la última oleada, esperar a que se eliminen todos los zombies
        const checkZombies = setInterval(() => {
            if (gameState.zombies.length === 0 && !waveSystem.spawningZombies) {
                clearInterval(checkZombies);
                winLevel();
            }
        }, 100);
        return;
    }

    waveSystem.currentWave++;
    waveSystem.spawningZombies = true;

    const config = LEVEL_CONFIG[gameState.currentLevel];
    const zombieTypes = config.zombieTypes;

    let spawnIndex = 0;
    const spawnInterval = setInterval(() => {
        if (spawnIndex >= zombieTypes.length) {
            clearInterval(spawnInterval);
            waveSystem.spawningZombies = false;

            // Esperar antes de la próxima oleada
            if (waveSystem.currentWave < waveSystem.totalWaves) {
                setTimeout(spawnWave, config.waveDelay);
            } else {
                // Esperar a que se eliminen todos los zombies
                const checkZombies = setInterval(() => {
                    if (gameState.zombies.length === 0) {
                        clearInterval(checkZombies);
                        winLevel();
                    }
                }, 100);
            }
            return;
        }

        const zombieType = zombieTypes[spawnIndex];
        const laneIndex = spawnIndex % GAME_CONFIG.lanes;
        spawnZombie(zombieType, laneIndex);

        spawnIndex++;
    }, 800);
}

function spawnZombie(type, laneIndex) {
    const zombieConfig = ZOMBIES[type];
    const laneElement = gameState.lanes[laneIndex].laneElement;

    const zombieElement = document.createElement('img');
    zombieElement.src = imagePaths.zombies[type];
    zombieElement.alt = zombieConfig.name;
    zombieElement.style.right = '0px';

    laneElement.appendChild(zombieElement);

    const zombie = {
        type: type,
        element: zombieElement,
        lane: laneIndex,
        position: laneElement.offsetWidth,
        health: zombieConfig.health,
        speed: zombieConfig.speed,
        currentSpeed: zombieConfig.speed,
        damage: zombieConfig.damage,
        config: zombieConfig
    };

    gameState.lanes[laneIndex].zombies.push(zombie);
    gameState.zombies.push(zombie);
    gameState.zombiesSpawned++;

    moveZombie(zombie);
}

function moveZombie(zombie) {
    const moveInterval = setInterval(() => {
        if (!gameState.gameActive) {
            clearInterval(moveInterval);
            return;
        }

        const laneElement = gameState.lanes[zombie.lane].laneElement;
        const gardenElement = laneElement.previousElementSibling;

        zombie.position -= zombie.currentSpeed;
        zombie.element.style.right = zombie.position + 'px';

        // Verificar si llegó al final - PODADORA activada
        if (zombie.position <= -100) {
            clearInterval(moveInterval);
            
            // Activar podadora - mata todos los zombies de esta fila
            activateLawnMower(zombie.lane);
            
            // Remover este zombie
            zombie.element.remove();
            gameState.lanes[zombie.lane].zombies = gameState.lanes[zombie.lane].zombies.filter(z => z !== zombie);
            gameState.zombies = gameState.zombies.filter(z => z !== zombie);

            }
        }
    }, 50);
}

function checkWaveComplete() {
    if (gameState.zombies.length === 0 && !waveSystem.spawningZombies) {
        if (waveSystem.currentWave < waveSystem.totalWaves) {
            const config = LEVEL_CONFIG[gameState.currentLevel];
            setTimeout(spawnWave, config.waveDelay);
        } else {
            winLevel();
        }
    }
}

// CONTROLES DEL JUEGO
function selectPlant(plantType) {
    // Deseleccionar plant anterior
    document.querySelectorAll('.plant-slot').forEach(slot => {
        slot.classList.remove('selected');
    });

    // Seleccionar nueva planta
    gameState.selectedPlant = gameState.selectedPlant === plantType ? null : plantType;

    if (gameState.selectedPlant) {
        document.querySelector(`[data-plant="${plantType}"]`).classList.add('selected');
    }
}

function updateGameUI() {
    document.getElementById('suns').textContent = gameState.suns;
    document.getElementById('levelDisplay').textContent = gameState.currentLevel;
    document.getElementById('zombieCount').textContent = gameState.zombies.length;
}

function pauseGame() {
    gameState.isPaused = true;
    const modal = document.getElementById('pauseModal');
    modal.classList.add('active');
}

function resumeGame() {
    gameState.isPaused = false;
    const modal = document.getElementById('pauseModal');
    modal.classList.remove('active');
}

function goToMenu() {
    gameState.gameActive = false;
    gameState.zombies.forEach(z => z.element.remove());
    gameState.plants.forEach(p => p.element.remove());
    gameState.zombies = [];
    gameState.plants = [];

    document.getElementById('gameScreen').classList.remove('active');
    document.getElementById('pauseModal').classList.remove('active');
    document.getElementById('victoryModal').classList.remove('active');
    document.getElementById('defeatModal').classList.remove('active');

    switchScreen('mainMenu');
}

// VICTORIA Y DERROTA
function winLevel() {
    gameState.gameActive = false;
    gameState.levelWon = true;

    // Crear efecto de victoria
    createVictoryEffect();

    // Calcular puntuación del nivel
    const levelScore = Math.floor((gameState.suns / 100) * 100) + (gameState.zombiesDefeated * 10);
    const currentScore = gameState.levelScores[gameState.currentLevel - 1];
    
    // Mantener la puntuación más alta
    if (levelScore > currentScore) {
        gameState.levelScores[gameState.currentLevel - 1] = levelScore;
    }
    
    // Agregar a total y niveles completados
    if (!gameState.completedLevels.includes(gameState.currentLevel)) {
        gameState.completedLevels.push(gameState.currentLevel);
        gameState.totalScore += levelScore;
    }
    
    // Guardar datos
    SaveSystem.save();

    const victoryModal = document.getElementById('victoryModal');
    const victoryText = document.getElementById('victoryText');
    const victoryMessage = document.getElementById('victoryMessage');

    victoryText.textContent = `¡Ganaste el Nivel ${gameState.currentLevel}!\n\nPuntuación: ${gameState.levelScores[gameState.currentLevel - 1]} pts`;
    victoryMessage.textContent = LOVE_MESSAGES[Math.floor(Math.random() * LOVE_MESSAGES.length)];

    setTimeout(() => {
        victoryModal.classList.add('active');
    }, 500);
}

function loseLevel() {
    gameState.gameActive = false;

    // Crear efecto de vibración cuando pierdes
    createShakeEffect();

    const defeatModal = document.getElementById('defeatModal');
    const defeatText = document.getElementById('defeatText');

    defeatText.textContent = `Nivel ${gameState.currentLevel} - Los zombies ganaron esta ronda`;

    setTimeout(() => {
        defeatModal.classList.add('active');
    }, 300);
}

function nextLevel() {
    if (gameState.currentLevel < 5) {
        gameState.currentLevel++;
        document.getElementById('victoryModal').classList.remove('active');
        startLevelGame();
    } else {
        // Ganaste todo el juego
        const totalPts = gameState.totalScore;
        SaveSystem.save();
        alert(`¡FELICIDADES! 🎉\n\n¡Completaste TODOS los niveles!\n\nPuntuación Total: ${totalPts} pts\n\n¡Valentina, ganamos juntos!\n\n9 meses de amor eterno 💕`);
        document.getElementById('victoryModal').classList.remove('active');
        goToMenu();
    }
}

function restartLevel() {
    document.getElementById('defeatModal').classList.remove('active');
    startLevelGame();
}

// NOTIFICACIONES DE AMOR
function showLoveNotification(message) {
    const notification = document.getElementById('loveNotification');
    const messageElement = document.getElementById('loveMessage');

    messageElement.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}

// CREAR EFECTO VISUAL DE MUERTE
function createDeathEffect(zombieElement) {
    const rect = zombieElement.getBoundingClientRect();
    
    // Crear explosión de partículas
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        const angle = (360 / 8) * i;
        const distance = 80;
        const tx = Math.cos(angle * Math.PI / 180) * distance;
        const ty = Math.sin(angle * Math.PI / 180) * distance;
        
        particle.style.position = 'fixed';
        particle.style.left = rect.left + rect.width / 2 + 'px';
        particle.style.top = rect.top + rect.height / 2 + 'px';
        particle.style.width = '12px';
        particle.style.height = '12px';
        particle.style.background = i % 2 === 0 ? '#FFD700' : '#FF6B6B';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.animation = `particleExplode 0.6s ease-out forwards`;
        particle.style.animationDelay = (i * 0.05) + 's';
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 600);
    }
    
    // Crear efecto de destello
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.left = rect.left + 'px';
    flash.style.top = rect.top + 'px';
    flash.style.width = rect.width + 'px';
    flash.style.height = rect.height + 'px';
    flash.style.background = 'radial-gradient(circle, rgba(255, 255, 0, 0.8) 0%, transparent 70%)';
    flash.style.borderRadius = '50%';
    flash.style.pointerEvents = 'none';
    flash.style.animation = 'flashEffect 0.3s ease-out forwards';
    document.body.appendChild(flash);
    
    setTimeout(() => flash.remove(), 300);
}

// CREAR EFECTO DE VIBRACIÓN
function createShakeEffect() {
    const gameScreen = document.getElementById('gameScreen');
    
    // Aplicar animación de vibración
    gameScreen.style.animation = 'shake 0.5s ease-in-out';
    
    // Reproducir sonido de derrota (si está disponible)
    // Puedes añadir un sonido aquí si deseas
    
    // Remover la animación después de que termine
    setTimeout(() => {
        gameScreen.style.animation = '';
    }, 500);
}

// CREAR EFECTO DE VICTORIA CON CONFETI
function createVictoryEffect() {
    const colors = ['#FFD700', '#FF6B6B', '#667eea', '#764ba2', '#e74c3c'];
    
    // Crear confeti cayendo
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomSize = Math.random() * 8 + 4;
        const randomDelay = Math.random() * 0.5;
        const randomDuration = Math.random() * 2 + 2.5;
        
        confetti.style.position = 'fixed';
        confetti.style.width = randomSize + 'px';
        confetti.style.height = randomSize + 'px';
        confetti.style.background = randomColor;
        confetti.style.borderRadius = '50%';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '5000';
        confetti.style.animation = `fall ${randomDuration}s linear ${randomDelay}s forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), (randomDelay + randomDuration) * 1000);
    }
    
    // Crear efecto de flash de luz
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = '0';
    flash.style.left = '0';
    flash.style.width = '100%';
    flash.style.height = '100%';
    flash.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, transparent 70%)';
    flash.style.pointerEvents = 'none';
    flash.style.zIndex = '4999';
    flash.style.animation = 'victoryFlash 0.6s ease-out forwards';
    
    document.body.appendChild(flash);
    
    setTimeout(() => flash.remove(), 600);
}
function createSunCollectEffect(zombieElement, amount) {
    const rect = zombieElement.getBoundingClientRect();
    const sunsElement = document.getElementById('suns');
    const sunsRect = sunsElement.getBoundingClientRect();
    
    // Crear múltiples soles flotantes hacia el contador
    for (let i = 0; i < 3; i++) {
        const sunParticle = document.createElement('div');
        sunParticle.textContent = '☀️';
        sunParticle.style.position = 'fixed';
        sunParticle.style.left = rect.left + rect.width / 2 + 'px';
        sunParticle.style.top = rect.top + rect.height / 2 + 'px';
        sunParticle.style.fontSize = '24px';
        sunParticle.style.pointerEvents = 'none';
        sunParticle.style.zIndex = '9999';
        sunParticle.style.animation = `collectSun 1s ease-in forwards`;
        sunParticle.style.setProperty('--targetX', sunsRect.left - rect.left + 'px');
        sunParticle.style.setProperty('--targetY', sunsRect.top - rect.top + 'px');
        sunParticle.style.animationDelay = (i * 0.1) + 's';
        document.body.appendChild(sunParticle);
        
        setTimeout(() => sunParticle.remove(), 1000);
    }
    
    // Mostrar número flotante
    const floatingText = document.createElement('div');
    floatingText.textContent = '+' + amount;
    floatingText.style.position = 'fixed';
    floatingText.style.left = rect.left + rect.width / 2 + 'px';
    floatingText.style.top = rect.top + 'px';
    floatingText.style.fontSize = '24px';
    floatingText.style.fontWeight = 'bold';
    floatingText.style.color = '#FFD700';
    floatingText.style.pointerEvents = 'none';
    floatingText.style.zIndex = '9999';
    floatingText.style.textShadow = '0 0 10px rgba(255, 215, 0, 0.8)';
    floatingText.style.animation = 'floatUp 1s ease-out forwards';
    document.body.appendChild(floatingText);
    
    setTimeout(() => floatingText.remove(), 1000);
}

// ACTIVAR PODADORA - MATA TODOS LOS ZOMBIES DE LA FILA
function activateLawnMower(laneIndex) {
    const laneElement = gameState.lanes[laneIndex].laneElement;
    const zombiesInLane = [...gameState.lanes[laneIndex].zombies];
    
    // Crear efecto de podadora cortando
    const lawnMower = document.createElement('div');
    lawnMower.textContent = '🪚';
    lawnMower.style.position = 'fixed';
    lawnMower.style.left = '100%';
    lawnMower.style.top = laneElement.getBoundingClientRect().top + 'px';
    lawnMower.style.fontSize = '60px';
    lawnMower.style.zIndex = '10000';
    lawnMower.style.pointerEvents = 'none';
    lawnMower.style.animation = 'lawnMowerAttack 0.8s ease-in-out forwards';
    document.body.appendChild(lawnMower);
    
    // Matar todos los zombies de esta fila después de que la podadora pase
    setTimeout(() => {
        zombiesInLane.forEach(zombie => {
            // Crear efecto de muerte para cada zombi
            createDeathEffect(zombie.element);
            
            // Remover zombi visualmente
            zombie.element.remove();
            
            // Remover de arrays
            gameState.lanes[laneIndex].zombies = gameState.lanes[laneIndex].zombies.filter(z => z !== zombie);
            gameState.zombies = gameState.zombies.filter(z => z !== zombie);
            gameState.zombiesDefeated++;
            gameState.suns += 25;
        });
        
        // Remover podadora
        lawnMower.remove();
        
        updateGameUI();
        checkWaveComplete();
    }, 400);
}

// FUNCIÓN PARA CARGAR IMÁGENES
function setImagePaths(config) {
    imagePaths = config;
    document.getElementById('menuSnoopy').src = imagePaths.snoopy;
    document.getElementById('plantShooter').src = imagePaths.plants.shooter;
    document.getElementById('plantBomb').src = imagePaths.plants.bomb;
    document.getElementById('plantIce').src = imagePaths.plants.ice;
    document.getElementById('plantLight').src = imagePaths.plants.light;
    document.getElementById('plantShield').src = imagePaths.plants.shield;

    console.log('Imágenes cargadas correctamente');
}

// EXPORTAR FUNCIÓN PARA PODER USARLA
window.setImagePaths = setImagePaths;
