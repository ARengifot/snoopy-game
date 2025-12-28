// CONFIGURACIÓN DE IMÁGENES Y ASSETS
// Este archivo contiene las configuraciones para imágenes locales

// Usa emojis como fallback por defecto
window.EMOJI_ASSETS = {
    plants: {
        shooter: '🔫',
        bomb: '💣',
        ice: '❄️',
        light: '💡',
        shield: '🛡️'
    },
    zombies: {
        normal: '🧟',
        fast: '🏃‍♂️',
        strong: '💪',
        armored: '🤖',
        boss: '👹'
    },
    snoopy: '🐕'
};

// Variables para almacenar rutas de imágenes locales
let imagePaths = {
    snoopy: 'snoopy1.png',                 // Imagen principal de Snoopy
    snoopyDialogs: 'snoopy1.png',          // Para diálogos/character
    plants: {
        shooter: 'snoopy1.png',
        bomb: 'snoopy4.png',
        ice: 'snoopy5.png',
        light: 'snoopy2.png',              // Luz - como dijiste
        shield: 'snoopy3.png'              // Escudo - como dijiste
    },
    zombies: {
        normal: 'zombie1.png',
        fast: 'zombie2.png',
        strong: 'zombie3.png',
        armored: 'zombie4.png',
        boss: 'zombie5.jpg'
    }
};

// Función para establecer rutas de imágenes locales
function setImagePaths(paths) {
    imagePaths = { ...imagePaths, ...paths };
    console.log('✅ Rutas de imágenes configuradas:', imagePaths);
}

// Función para obtener una imagen (local o emoji de fallback)
function getAsset(type, name) {
    const path = imagePaths[type]?.[name];
    if (path) return path;
    return window.EMOJI_ASSETS[type]?.[name] || '❓';
}

console.log('✅ Sistema de assets inicializado (usando emojis como fallback)');
