// Game Configuration
export const GAME_CONFIG = {
  lanes: 5,
  gridCols: 6,
  suns: 100,
};

export const PLANTS = {
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

export const ZOMBIES = {
  normal: {
    name: 'Zombi Normal',
    health: 1,
    speed: 1,
    damage: 1,
  },
  fast: {
    name: 'Zombi Rápido',
    health: 1,
    speed: 2,
    damage: 1,
  },
  strong: {
    name: 'Zombi Fuerte',
    health: 3,
    speed: 0.5,
    damage: 2,
  },
  armored: {
    name: 'Zombi Coraza',
    health: 2,
    speed: 1,
    damage: 1,
  },
  boss: {
    name: 'Jefe Zombi',
    health: 5,
    speed: 0.5,
    damage: 3,
  }
};

export const LEVEL_CONFIG = {
  1: {
    zombieTypes: ['normal', 'normal', 'normal'],
    waveDelay: 2000,
    waves: 3,
  },
  2: {
    zombieTypes: ['fast', 'normal', 'fast'],
    waveDelay: 1500,
    waves: 4,
  },
  3: {
    zombieTypes: ['strong', 'normal', 'strong'],
    waveDelay: 1000,
    waves: 4,
  },
  4: {
    zombieTypes: ['armored', 'fast', 'normal'],
    waveDelay: 800,
    waves: 5,
  },
  5: {
    zombieTypes: ['boss', 'strong', 'fast'],
    waveDelay: 500,
    waves: 5,
  },
};

export const LEVEL_STORIES = {
  1: {
    title: "El Primer Encuentro",
    intro: "Donde comenzó todo",
    message: "¡Valen! No dejaré que nada te toque 💪",
    quote: "Nuestro amor comenzó en un simple momento... y ya es infinito.",
    snoopyText: "¡Alejandro protegerá a Valentina siempre!"
  },
  2: {
    title: "Corazones en Batalla",
    intro: "Juntos crecemos",
    message: "¡Cada día contigo es una victoria! 🎯",
    quote: "Juntos superamos cualquier obstáculo.",
    snoopyText: "¡Nada puede separarnos!"
  },
  3: {
    title: "La Prueba del Amor",
    intro: "Nada nos detiene",
    message: "¡Mi amor por ti es más fuerte que cualquier enemigo! 💚",
    quote: "Nuestro amor ha sido probado y sigue siendo perfectamente fuerte.",
    snoopyText: "¡Valentina, eres mi razón de existir!"
  },
  4: {
    title: "Momento Crítico",
    intro: "Más unidos que nunca",
    message: "¡En los momentos difíciles, nuestro amor brilla más! ✨",
    quote: "Cada obstáculo que superamos nos hace más fuertes.",
    snoopyText: "¡Juntos somos invencibles!"
  },
  5: {
    title: "Nuestro Destino",
    intro: "Juntos para siempre",
    message: "¡Este es nuestro juego, Valen! ¡Juntos ganamos la vida! 🏆",
    quote: "9 meses, infinitos momentos de amor, ¡y muchos más por venir!",
    snoopyText: "¡Te amo infinitamente, Valentina! 💕"
  }
};

export const LOVE_MESSAGES = [
  "Alejandro ama a Valentina infinitamente 💕",
  "Nuestro amor es eterno 🌙✨",
  "Juntos para siempre 💑",
  "Mi vida cambió cuando te conocí 💕",
  "Eres mi razón de sonreír todos los días 😊",
  "9 meses de puro amor 💕",
  "Contigo quiero todo 💕",
  "Te amo más cada día 💕",
  "Eres lo mejor que me pasó en la vida 💕",
  "Mi corazón es tuyo, siempre 💕",
];
