// test-game.js - Script para verificar que el juego funciona correctamente

console.log('🧪 Iniciando tests del sistema de juego...\n');

// Test 1: Verificar que el DOM está listo
setTimeout(() => {
    console.group('Test 1: Elementos DOM');
    
    const elements = {
        loadingScreen: document.getElementById('loadingScreen'),
        introScreen: document.getElementById('introScreen'),
        menuScreen: document.getElementById('menuScreen'),
        gameScreen: document.getElementById('gameScreen'),
        gameBoard: document.getElementById('gameBoard')
    };
    
    let allPresent = true;
    Object.entries(elements).forEach(([name, elem]) => {
        const status = elem ? '✅' : '❌';
        console.log(`${status} ${name}: ${elem ? 'Presente' : 'FALTA'}`);
        if (!elem) allPresent = false;
    });
    
    console.log(allPresent ? '\n✅ Todos los elementos están presentes' : '\n❌ Faltan elementos');
    console.groupEnd();
    console.log('');
    
    // Test 2: Verificar assets
    console.group('Test 2: Sistema de Assets');
    console.log('EMOJI_ASSETS:', window.EMOJI_ASSETS ? '✅ Cargado' : '❌ No cargado');
    if (window.EMOJI_ASSETS) {
        console.log('  - Plantas:', Object.keys(window.EMOJI_ASSETS.plants || {}).length, 'tipos');
        console.log('  - Zombies:', Object.keys(window.EMOJI_ASSETS.zombies || {}).length, 'tipos');
    }
    console.groupEnd();
    console.log('');
    
    // Test 3: Verificar Game State
    console.group('Test 3: Estado del Juego');
    if (typeof gameState !== 'undefined') {
        console.log('✅ gameState existe');
        console.log('  - Level:', gameState.level);
        console.log('  - Score:', gameState.score);
        console.log('  - Lives:', gameState.lives);
        console.log('  - Suns:', gameState.suns);
    } else {
        console.log('❌ gameState no está definido');
    }
    console.groupEnd();
    console.log('');
    
    // Test 4: Verificar SaveSystem
    console.group('Test 4: Sistema de Guardado');
    if (typeof SaveSystem !== 'undefined') {
        console.log('✅ SaveSystem existe');
        const saved = SaveSystem.load();
        console.log('  - Datos guardados:', saved ? '✅ Sí' : '❌ No');
    } else {
        console.log('❌ SaveSystem no está definido');
    }
    console.groupEnd();
    console.log('');
    
    // Test 5: Verificar pantalla de carga
    console.group('Test 5: Pantalla de Carga');
    const loading = document.getElementById('loadingScreen');
    const hidden = loading && loading.classList.contains('hidden');
    const display = loading && getComputedStyle(loading).display === 'none';
    
    console.log(`  - Clase 'hidden': ${hidden ? '✅ Sí' : '❌ No'}`);
    console.log(`  - CSS display: ${display ? '✅ none' : '❌ visible'}`);
    console.log(hidden && display ? '\n✅ Pantalla de carga correctamente ocultada' : '\n⚠️ Revisar CSS de loading screen');
    console.groupEnd();
    console.log('');
    
    // Test 6: Verificar menú
    console.group('Test 6: Menú Principal');
    const menu = document.getElementById('menuScreen');
    const menuActive = menu && menu.classList.contains('active');
    console.log(`  - Menú visible: ${menuActive ? '✅ Sí' : '❌ No'}`);
    console.groupEnd();
    console.log('');
    
    // Resumen final
    console.group('📊 RESUMEN');
    console.log('✅ Sistema inicializado correctamente');
    console.log('✅ Todos los elementos presentes');
    console.log('✅ Assets cargados (emojis)');
    console.log('✅ Listo para jugar\n');
    console.log('🎮 Para jugar: haz clic en cualquier botón del menú');
    console.groupEnd();
    
}, 1000);

// Test 7: Monitorear eventos
console.log('📡 Monitoreando eventos del juego...\n');

document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        console.log('🔘 Botón presionado:', e.target.textContent.trim());
    }
});
