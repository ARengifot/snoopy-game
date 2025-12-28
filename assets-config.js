// CONFIGURACIÓN DE IMÁGENES Y ASSETS
// Este archivo contiene las URLs de las imágenes necesarias para el juego

const ASSET_CONFIG = {
    // Imágenes de Snoopy
    snoopy: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop',
    
    // Plantas (usar emojis o URLs)
    plants: {
        shooter: '🌻',  // Puedes reemplazar con URL
        bomb: '💣',
        ice: '❄️',
        light: '💡',
        shield: '🛡️'
    },
    
    // Zombies (usar emojis o URLs)
    zombies: {
        normal: '🧟',
        fast: '🏃',
        strong: '💪',
        armored: '🤖',
        boss: '👹'
    },
    
    // Efectos de sonido (opcional)
    sounds: {
        shoot: '',
        explosion: '',
        victory: '',
        defeat: ''
    }
};

// Función para cargar la configuración de imágenes
function loadAssets() {
    console.log('Cargando assets del juego...');
    
    // Si usas URLs reales en lugar de emojis, descomenta:
    /*
    setImagePaths({
        snoopy: ASSET_CONFIG.snoopy,
        plants: ASSET_CONFIG.plants,
        zombies: ASSET_CONFIG.zombies
    });
    */
    
    // Por ahora usamos emojis como fallback
    useEmojiAssets();
}

// Usar emojis como representación visual
function useEmojiAssets() {
    // Crear elementos con emojis
    const plantElements = {
        shooter: '🌻',
        bomb: '💣',
        ice: '❄️',
        light: '💡',
        shield: '🛡️'
    };
    
    const zombieElements = {
        normal: '🧟',
        fast: '🏃‍♂️',
        strong: '💪🧟',
        armored: '🤖',
        boss: '👹'
    };
    
    // Guardar en variables globales para usar en CSS/HTML
    window.EMOJI_ASSETS = {
        plants: plantElements,
        zombies: zombieElements,
        snoopy: '🐕'
    };
    
    console.log('Assets emoji cargados correctamente');
}

// Llamar al cargar la página
window.addEventListener('DOMContentLoaded', loadAssets);
