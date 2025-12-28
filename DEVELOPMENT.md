# 🛠️ Guía de Desarrollo - Snoopy vs Zombies

Información para desarrolladores que quieran contribuir o mejorar el juego.

## 📦 Requisitos

- Node.js 14+ (opcional, solo si usas npm scripts)
- Navegador web moderno
- Git para control de versiones
- Editor de código (VS Code recomendado)

## 🚀 Comenzar

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/snoopy-game.git
cd snoopy-game
```

### 2. Instalar dependencias (opcional)

```bash
npm install
```

### 3. Ejecutar localmente

#### Opción A: Python (si tienes instalado)
```bash
python -m http.server 8000
# Luego abre http://localhost:8000
```

#### Opción B: Node.js
```bash
npm start
# O manualmente:
npx http-server
```

#### Opción C: Abrir directamente
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

## 📁 Estructura del Proyecto

```
snoopy-game/
├── index.html              # Página principal (409 líneas)
├── styles.css              # Estilos y animaciones (1870+ líneas)
├── script.js               # Lógica del juego (659 líneas)
├── assets-config.js        # Configuración de imágenes
├── service-worker.js       # PWA offline support
├── manifest.json           # PWA manifest
├── .htaccess              # Configuración de servidor
├── package.json           # Dependencias y scripts
├── README.md              # Documentación principal
├── CHANGELOG.md           # Historial de cambios
├── LICENSE                # Licencia MIT
├── APP_CONVERSION_GUIDE.md # Guía de conversión a app
└── .github/
    └── workflows/
        └── ci.yml         # CI/CD configuration
```

## 🎨 Componentes Principales

### HTML (index.html)

**Pantallas principales:**
- `#loadingScreen` - Pantalla de carga inicial
- `#introScreen` - Intro cinematográfica
- `#mainMenu` - Menú principal
- `#levelSelectScreen` - Selector de niveles
- `#gameScreen` - Pantalla de juego
- Modales: pausa, victoria, derrota

### CSS (styles.css)

**Secciones clave:**
- Variables CSS (colores, fuentes)
- Animaciones (@keyframes)
- Estilos responsive (media queries)
- Efectos visuales (blur, glow, parallax)

### JavaScript (script.js)

**Sistemas principales:**
- `GAME_CONFIG` - Configuración global
- `PLANTS` - Definición de plantas
- `ZOMBIES` - Definición de zombies
- `gameState` - Estado actual del juego
- `SaveSystem` - Manejo de guardado
- Funciones de juego (spawn, attack, movement)

## 🔄 Flujo del Juego

```
Carga de Página
    ↓
Pantalla de Carga (1.5s)
    ↓
Intro Épica (4s)
    ↓
Menú Principal
    ↓
Seleccionar Nivel
    ↓
Pantalla de Juego
    ├─ Crear Tablero
    ├─ Sistema de Oleadas
    │   ├─ Spawn Zombies
    │   ├─ Jugador planta plantas
    │   ├─ Plantas atacan
    │   ├─ Zombies avanzan
    │   └─ Verificar victoria/derrota
    │
    └─ Modal de Victoria/Derrota
        ├─ Guardar Progreso
        ├─ Siguiente Nivel / Reintentar
        └─ Ir al Menú
```

## 🐛 Sistema de Guardado

**LocalStorage key:** `snoopyGameSave`

**Datos guardados:**
```javascript
{
    levelScores: [0, 0, 0, 0, 0],      // Puntuación por nivel
    totalScore: 0,                      // Puntuación total
    completedLevels: [1, 2],           // Niveles completados
    lastPlayed: "2025-01-01T10:00:00Z" // Última jugada
}
```

**Funciones del SaveSystem:**
- `save()` - Guardar datos actuales
- `load()` - Cargar datos guardados
- `clear()` - Borrar todos los datos

## 🎯 Puntos de Extensión

### Agregar Nueva Planta

1. Agregar a `PLANTS`:
```javascript
PLANTS.laser = {
    name: 'Láser',
    cost: 200,
    damage: 2,
    cooldown: 800,
    range: 500,
    description: 'Rayo láser poderoso'
};
```

2. Agregar elemento HTML en `plant-selector`:
```html
<div class="plant-slot" onclick="selectPlant('laser')" data-plant="laser">
    <img id="plantLaser" src="" alt="Láser" class="plant-icon">
    <p class="plant-name">Láser</p>
    <p class="plant-cost">200 ☀</p>
</div>
```

3. Agregar lógica especial si es necesario en `plantAttack()`

### Agregar Nuevo Nivel

1. Agregar a `LEVEL_CONFIG`:
```javascript
6: { 
    zombieTypes: ['armored', 'boss', 'boss', 'fast'], 
    waveDelay: 600, 
    totalWaves: 8 
}
```

2. Actualizar límite en `nextLevel()`: cambiar `< 5` a `< 6`

3. Agregar botón en nivel select screen

### Agregar Efecto Visual

Crear nueva animación en CSS:
```css
@keyframes customEffect {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}
```

Aplicarla a elemento:
```javascript
element.style.animation = 'customEffect 0.5s ease-in-out';
```

## 📊 Lógica de Puntuación

```javascript
// Cálculo en winLevel()
levelScore = Math.floor((gameState.suns / 100) * 100) + (gameState.zombiesDefeated * 10)

// Sistema de Estrellas
function calculateStars(score) {
    if (score >= 150) return '⭐⭐⭐';  // 3 estrellas
    if (score >= 100) return '⭐⭐☆';  // 2 estrellas
    if (score >= 50)  return '⭐☆☆';  // 1 estrella
    return '☆☆☆';                      // Sin estrellas
}
```

## 🔐 Seguridad

- **CSP (Content Security Policy)** en .htaccess
- **HTTPS requerido** para PWA
- **Service Worker** valida solicitudes
- **LocalStorage** aislado por dominio
- **Input validation** en funciones críticas

## ⚡ Rendimiento

### Optimizaciones implementadas
- Cache de selector en variables
- Event delegation para elementos dinámicos
- setTimeout/setInterval gestos
- Requesters animadas con CSS
- Lazy loading potencial para imágenes

### Métricas objetivo
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Lighthouse Score: > 90

## 🧪 Testing Manual

### Checklist básico

```
[ ] Intro muestra correctamente
[ ] Menú principal se carga
[ ] Selector de niveles funciona
[ ] Juego inicia correctamente
[ ] Plantas se plantan
[ ] Zombies aparecen
[ ] Plantas atacan
[ ] Zombies se eliminan
[ ] Mensajes de amor aparecen
[ ] Modales de victoria/derrota funcionan
[ ] Progreso se guarda
[ ] Service Worker se registra
[ ] Funciona offline (después de primera carga)
[ ] Se puede instalar como app
```

## 🚀 Despliegue

### GitHub Pages (Recomendado)

```bash
# Los cambios en main/master se despliegan automáticamente
git push origin main
```

### Netlify

```bash
# Conectar repositorio y deploy automático
```

### Vercel

```bash
# Conectar repositorio, similar a Netlify
```

## 📝 Buenas Prácticas

1. **Commits claros**: `feat:`, `fix:`, `docs:`, `style:`
2. **Nomenclatura**: camelCase para variables, PascalCase para clases
3. **Comentarios**: Explicar el "por qué", no el "qué"
4. **Responsive**: Probar en móvil siempre
5. **Accesibilidad**: Alt text en imágenes, colores accesibles

## 🔗 Enlaces útiles

- [MDN Web Docs](https://developer.mozilla.org/es/)
- [Web.dev](https://web.dev/)
- [Can I Use](https://caniuse.com/)
- [CSS Tricks](https://css-tricks.com/)

## 🤝 Contribuir

1. Fork el repositorio
2. Crea rama: `git checkout -b feature/nueva-feature`
3. Commit: `git commit -m "feat: Agregar nueva característica"`
4. Push: `git push origin feature/nueva-feature`
5. Open Pull Request

## 📞 Soporte

- Issues: Para reportar bugs
- Discussions: Para ideas y sugerencias
- Pull Requests: Para contribuciones

---

**Último actualizado:** 2025-01-01
**Versión:** 2.0.0

Hecho con ❤️ para Valentina
