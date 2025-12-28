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
    snoopy: null,                 // Imagen principal de Snoopy
    snoopyDialogs: null,          // JPG para diálogos/character
    plants: {
        shooter: null,
        bomb: null,
        ice: null,
        light: null,
        shield: null
    },
    zombies: {
        normal: null,
        fast: null,
        strong: null,
        armored: null,
        boss: null
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
