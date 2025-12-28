# 🎮 Snoopy Protege a Valentina - 9 Meses de Amor 💕

Un juego profesional, interactivo y romántico creado para celebrar 9 meses de amor y una relación especial con Valentina.

## 📋 Descripción General

**Snoopy Protege a Valentina** es un juego tower-defense estilo Plants vs Zombies, personalizado completamente para una historia de amor. El objetivo es defender el jardín usando plantas mágicas (representadas por Snoopy en diferentes formas) para proteger a Valentina de los zombies.

### Características Principales

✨ **Experiencia Romántica Completamente Personalizada**
- Todos los textos del juego hacen referencias a la relación de amor entre Alejandro y Valentina
- 5 niveles con historias románticas únicas para cada uno
- Mensajes de amor que aparecen aleatoriamente durante el gameplay
- Dedicatoria especial: "9 meses de amor eterno 💕"

🎮 **Gameplay Profesional**
- 5 plantas Snoopy diferentes con habilidades únicas
- 5 tipos de zombies con diferentes características
- Sistema de oleadas progresivas con dificultad escalable
- Puntuación basada en desempeño y eficiencia
- Almacenamiento persistente de puntuaciones (LocalStorage)

🎨 **Animaciones y Efectos Visuales Épicos**
- Animaciones fluidas de plantas disparo
- Efectos de muerte de zombies con explosión de partículas
- Efecto de recolección de soles con números flotantes
- Vibración de pantalla cuando pierdes
- Lluvia de confeti cuando ganas
- Flash de luz de victoria
- Proyectiles con brillo y trail efectos

📱 **Totalmente Responsivo**
- Compatible con dispositivos móviles (phones, tablets)
- Interfaz adaptativa para diferentes tamaños de pantalla
- Optimizado para instalación como PWA (Progressive Web App)
- Funciona offline con service worker

## 🎯 Cómo Jugar

### Objetivo
Defender el jardín derrotando zombies antes de que lleguen al final de cada carril. Snoopy (a través de sus plantas) dispara proyectiles mágicos para eliminar a los enemigos.

### Controles
- **Click/Tap en una planta** → Selecciona la planta para colocar
- **Click/Tap en un espacio vacío** → Coloca la planta seleccionada (si tienes suficientes soles)
- **Click/Tap en un zombi** → Puedes atacarlo directamente (aunque el juego es automático)

### Recursos
- **Amor (Soles) ☀️** → Moneda del juego. Necesaria para colocar plantas. Se recolecta al derrotar zombies

### Plantas Disponibles (Snoopy en diferentes formas)

| Planta | Costo | Daño | Efecto |
|--------|-------|------|--------|
| **Tirador** 🔫 | 75 Amor | 1 | Dispara balas mágicas continuas |
| **Bomba** 💣 | 150 Amor | 3 | Explota con gran daño |
| **Hielo** ❄️ | 100 Amor | 0.5 | Ralentiza zombies |
| **Luz** 💡 | 125 Amor | 2 | Ilumina y daña |
| **Escudo** 🛡️ | 200 Amor | 0 | Protege plantas cercanas |

### Zombies Enemigos

| Zombi | Vida | Velocidad | Efecto |
|-------|------|-----------|--------|
| **Normal** | 1 | Normal | Enemigo básico |
| **Rápido** 🏃 | 1 | Rápido | Se mueve velozmente |
| **Fuerte** 💪 | 3 | Lento | Mucha resistencia |
| **Coraza** 🤖 | 2 | Normal | Defensa mejorada |
| **Jefe** 👑 | 5 | Lento | El enemigo más peligroso |

### Niveles

1. **El Primer Encuentro** - "Donde comenzó todo"
2. **Corazones en Batalla** - "Juntos crecemos"
3. **La Prueba del Amor** - "Nada nos detiene"
4. **Momento Crítico** - "Más unidos que nunca"
5. **Nuestro Destino** - "Juntos para siempre"

Cada nivel tiene su propia historia romántica que aparece antes de comenzar.

## 📁 Estructura del Proyecto

```
snoopy-game/
├── index.html                    # Archivo HTML principal
├── styles.css                    # Estilos CSS (2000+ líneas)
├── script.js                     # Lógica del juego (964 líneas)
├── manifest.json                 # Configuración PWA
├── service-worker.js             # Service worker para offline
├── .htaccess                     # Configuración Apache
├── package.json                  # Metadata del proyecto
├── README.md                     # Este archivo
├── DEVELOPMENT.md                # Guía de desarrollo
├── CHANGELOG.md                  # Historial de cambios
├── LICENSE                       # Licencia del proyecto
└── Gemini_Generated_Image_...png # Mapa del juego generado
```

## 🎨 Características de Diseño

### Colores Temáticos
- **Primario**: Púrpura-Azul (#667eea)
- **Acento**: Rojo Rosa (#e74c3c)
- **Éxito**: Verde (#27ae60)
- **Fondo**: Gradientes románticos con overlay oscuro

### Animaciones CSS
- **Aparición de plantas** (0.4s)
- **Reposo de plantas** (3s loop)
- **Disparo de plantas** (0.3s)
- **Caminata de zombies** (0.8s loop)
- **Vuelo de proyectiles** (0.5s)
- **Explosión de muerte** (0.6s con partículas)
- **Recolección de soles** (1s)
- **Vibración de pantalla** (0.5s)
- **Lluvia de confeti** (2.5s+)
- **Flash de victoria** (0.6s)

### Efectos Especiales
- **Partículas de muerte**: 8 partículas en explosión radial
- **Soles flotantes**: 3 soles se mueven hacia el contador
- **Números flotantes**: Muestra dinero ganado
- **Destello**: Efecto de destello radial en muerte
- **Confeti**: 30 elementos cayendo con rotación
- **Flash de pantalla**: Efecto de luz en victoria/derrota

## 💾 Almacenamiento Persistente

El juego utiliza `localStorage` para guardar automáticamente:

```javascript
{
    levelScores: [100, 250, 150, 200, 300],  // Puntuación de cada nivel
    totalScore: 1000,                         // Puntuación total
    completedLevels: [1, 2, 3],               // Niveles completados
    lastPlayed: 1735299600000                 // Timestamp último juego
}
```

Las puntuaciones se cargan automáticamente al iniciar el juego.

## 🌐 Instalación y Despliegue

### Opción 1: Archivo Local
1. Descarga todos los archivos
2. Abre `index.html` en tu navegador

### Opción 2: Servidor Local Python
```bash
cd snoopy-game
python -m http.server 8000
# Abre http://localhost:8000 en tu navegador
```

### Opción 3: PWA (Instalable)
El juego es una Progressive Web App completa:
- Puede ser instalado como aplicación en el inicio
- Funciona offline
- Rápido y responsivo

## 🔧 Desarrollo

Ver `DEVELOPMENT.md` para información detallada sobre:
- Estructura del código
- Cómo modificar plantas y zombies
- Cómo agregar nuevos niveles
- Personalización de colores y estilos
- Build y deployment

## 📊 Especificaciones Técnicas

- **Lenguaje**: HTML5, CSS3, Vanilla JavaScript (sin dependencias)
- **Compatibilidad**: Chrome, Firefox, Safari, Edge
- **Responsive**: 480px, 768px, 1024px+ breakpoints
- **Performance**: ~60 FPS en dispositivos modernos
- **Tamaño**: < 500KB total (sin imágenes externas)
- **Modo Oscuro**: Soportado automáticamente

## 🎯 Roadmap Futuro

- [ ] Sonidos y música de fondo
- [ ] Sistema de power-ups
- [ ] Modo multijugador local
- [ ] Temas visuales alternativos
- [ ] Logros y badges
- [ ] Sistema de retos diarios
- [ ] Traducción a otros idiomas
- [ ] Integración con redes sociales

## 📝 Personalización

Todos los textos del juego pueden personalizarse editando las constantes en `script.js`:

```javascript
LOVE_MESSAGES = [
    "Tu amor es mi fortaleza 💪",
    "Juntos somos invencibles ❤️",
    // ... más mensajes
];

LEVEL_STORIES = {
    1: {
        title: "El Primer Encuentro",
        intro: "Donde comenzó todo",
        message: "¡Valen!",
        // ...
    },
    // ... más historias
};
```

## 📄 Licencia

Este proyecto es un regalo especial creado con amor. Todos los derechos reservados.

---

**Creado con ❤️ para Valentina**
"9 meses de amor eterno"

*Snoopy Protege a Valentina - 2024*


### 3. **Ejemplo de Uso con Links Reales**

```javascript
setImagePaths({
    snoopy: 'https://example.com/snoopy.png',
    plants: {
        shooter: 'https://example.com/snoopy-shooter.png',
        bomb: 'https://example.com/snoopy-bomb.png',
        ice: 'https://example.com/snoopy-ice.png',
        light: 'https://example.com/snoopy-light.png',
        shield: 'https://example.com/snoopy-shield.png'
    },
    zombies: {
        normal: 'https://example.com/zombie-normal.png',
        fast: 'https://example.com/zombie-fast.png',
        strong: 'https://example.com/zombie-strong.png',
        armored: 'https://example.com/zombie-armored.png',
        boss: 'https://example.com/zombie-boss.png'
    }
});
```

## 🎮 Cómo Jugar

### Objetivo
Ayuda a Snoopy a defender su jardín usando plantas especiales para eliminar zombies antes de que invadan.

### Mecánicas Básicas
1. Haz clic en una celda del jardín para colocar plantas
2. Cada planta cuesta soles (☀)
3. Ganas soles eliminando zombies (25 soles por zombi)
4. Las plantas disparan automáticamente a los zombies cercanos
5. Elimina todos los zombies para ganar la ronda
6. ¡No dejes que los zombies lleguen al final!

### 🌱 Plantas Disponibles

| Planta | Costo | Daño | Cooldown | Habilidad |
|--------|-------|------|----------|-----------|
| **Tirador** | 75 ☀ | 1 | 1s | Dispara balas mágicas continuamente |
| **Bomba** | 150 ☀ | 3 | 2s | Explota causando daño masivo |
| **Hielo** | 100 ☀ | 0.5 | 1.5s | Congela zombies ralentizándolos |
| **Luz** | 125 ☀ | 2 | 1.2s | Ilumina y daña zombies oscuros |
| **Escudo** | 200 ☀ | 0 | - | Protege plantas cercanas |

### 🧟 Tipos de Zombies

| Zombi | Vida | Velocidad | Daño |
|-------|------|-----------|------|
| **Normal** | Baja | Lenta | Normal |
| **Rápido** | Muy Baja | Muy Rápido | Bajo |
| **Fuerte** | Alta | Lenta | Alto |
| **Coraza** | Muy Alta | Muy Lenta | Normal |
| **Jefe** | Extrema | Muy Lenta | Muy Alto |

### 📊 Niveles

- **Nivel 1** - Comienzo Tranquilo: Pocos zombies normales
- **Nivel 2** - Más Desafío: Mix de zombies normales y rápidos
- **Nivel 3** - Batalla Media: Aparecen zombies fuertes
- **Nivel 4** - Muy Difícil: Más zombies armados
- **Nivel 5** - Modo Extremo: ¡El Jefe aparece!

## 💕 Características Especiales

### Mensajes de Amor
Durante el juego, aparecerán mensajes románticos de amor para Valentina como:
- "Te amo Valentina 💕"
- "Eres mi razón para sonreír 😊"
- "Estos 9 meses contigo han sido los mejores 💫"
- Y muchos más...

Estos mensajes aparecen:
- Cuando no tienes suficientes soles
- Cuando derrotas zombies
- En pantallas de victoria
- De forma aleatoria durante el juego

## 🛠️ Personalización

### Cambiar Colores
En el archivo `styles.css` puedes modificar los gradientes y colores:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Modificar Costos de Plantas
En `script.js`, modifica el objeto `PLANTS`:

```javascript
const PLANTS = {
    shooter: {
        cost: 75,  // Cambia este número
        // ...
    }
}
```

### Ajustar Dificultad de Niveles
En `script.js`, modifica `LEVEL_CONFIG`:

```javascript
const LEVEL_CONFIG = {
    1: { 
        zombieTypes: ['normal', 'normal', 'fast'], 
        waveDelay: 2000, 
        totalWaves: 3 
    }
    // ...
}
```

## 📱 Compatibilidad

- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)
- ✅ Desktop y Tablet (Responsive Design)
- ✅ Mobile (interfaz optimizada)

## 🎯 Paso a Paso para Activar el Juego

1. **Abre el archivo `index.html`** en tu navegador
2. **Presiona F12** para abrir las herramientas del desarrollador
3. **Ve a la pestaña "Consola"** (Console)
4. **Copia y pega el comando `setImagePaths()`** con tus URLs de imágenes
5. **Presiona Enter**
6. **¡El juego está listo para jugar!**

## 📞 Soporte

Si encuentras algún error o necesitas modificaciones:
1. Abre la consola del navegador (F12)
2. Verifica si hay mensajes de error rojo
3. Asegúrate de que los links de las imágenes sean accesibles
4. Verifica que los links terminen en .png o .jpg

## 🎉 ¡Disfruta!

Este juego fue creado con amor para celebrar 9 meses especiales. ¡Que disfrutes jugando con Valentina!

**Te amo Valentina 💕**
