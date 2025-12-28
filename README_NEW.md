# 🎮 Snoopy vs Zombies - Edición Mejorada v2.0

Un videojuego de defensa épico dedicado a **9 meses de amor infinito 💕**

## 🌟 Características Principales

### 🎯 Gameplay Mejorado
- **5 Niveles Progresivos**: Desde fácil hasta extremadamente difícil
- **5 Tipos de Plantas**: Cada una con habilidades únicas
- **5 Tipos de Zombies**: Diferentes velocidades y resistencias
- **Sistema de Oleadas**: Desafíos dinámicos y emocionantes

### 🎨 Diseño Épico
- **Intro Cinematográfica**: Animación épica al iniciar
- **Menú Principal Hermoso**: Con efectos parallax y animaciones fluidas
- **Selector de Niveles Visual**: Muestra tu progreso y mejores puntuaciones
- **Fondos Cinematográficos**: Gradientes y efectos visuales de calidad

### 💾 Persistencia de Datos
- **Guardado Automático**: Tu progreso se guarda en LocalStorage
- **Puntuaciones Guardadas**: Mantiene tu mejor puntuación por nivel
- **Sistema de Estrellas**: ⭐⭐⭐ basado en desempeño
- **Estadísticas Globales**: Puntuación total y niveles completados

### 💕 Detalles Especiales
- **Mensajes de Amor**: Notificaciones románticas durante el juego
- **Dedicatoria Personalizada**: Para Valentina, con 9 meses de amor
- **Animaciones Suaves**: Efectos visuales profesionales
- **Responsive Design**: Funciona en computadoras, tablets y móviles

## 🎮 Cómo Jugar

1. **Selecciona un Nivel** del menú de selección
2. **Elige una Planta** del selector inferior
3. **Haz clic en las celdas** del jardín para plantarlas
4. **Defiéndete** de los zombies que avanzan
5. **Sobrevive** todas las oleadas para ganar

### Plantas Disponibles

- **🔫 Tirador** (75☀): Dispara continuamente
- **💣 Bomba** (150☀): Explota causando daño masivo
- **❄️ Hielo** (100☀): Congela y ralentiza zombies
- **💡 Luz** (125☀): Daña zombies oscuros
- **🛡️ Escudo** (200☀): Protege plantas cercanas

### Zombies a Enfrentar

- **Zombi Normal**: Débil y lento
- **Zombi Rápido**: Muy veloz pero frágil
- **Zombi Fuerte**: Resistente y poderoso
- **Zombi Coraza**: Protegido con casco
- **Zombi Jefe**: El enemigo final, ¡extremadamente peligroso!

## 🚀 Instalación

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para cargar imágenes)

### Pasos

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/snoopy-game.git
cd snoopy-game
```

2. Abre `index.html` en tu navegador:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

3. ¡O simplemente abre el archivo en tu navegador favorito!

## 📁 Estructura del Proyecto

```
snoopy-game/
├── index.html          # Página principal con HTML
├── styles.css          # Estilos y animaciones
├── script.js           # Lógica del juego
├── .gitignore          # Archivos ignorados por Git
└── README.md           # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Animaciones y efectos visuales avanzados
- **JavaScript Vanilla**: Lógica del juego sin dependencias
- **LocalStorage API**: Persistencia de datos

## 📊 Sistema de Puntuación

- **Soles Restantes**: Contribuyen a la puntuación
- **Zombies Derrotados**: +10 puntos cada uno
- **Bonus de Nivel**: Aumenta según dificultad
- **Máximo**: 3 Estrellas ⭐⭐⭐

### Baremos
- ⭐⭐⭐: 150+ puntos
- ⭐⭐☆: 100-149 puntos
- ⭐☆☆: 50-99 puntos
- ☆☆☆: 0-49 puntos

## 💾 Guardado Automático

Tu progreso se guarda automáticamente en:
- **LocalStorage** (en tu navegador)
- Se mantiene incluso si cierras la app
- Puedes limpiar datos desde la consola del navegador

```javascript
// Para ver tus datos:
console.log(JSON.parse(localStorage.getItem('snoopyGameSave')));

// Para limpiar datos:
localStorage.removeItem('snoopyGameSave');
```

## 🎨 Mejoras en v2.0

✨ **Nuevo en esta versión:**
- Intro cinematográfica épica
- Menú principal rediseñado con efectos parallax
- Selector de niveles con visualización de progreso
- Sistema de guardado persistente
- Animaciones suaves y profesionales
- Estrella en nivel final (Modo Extremo)
- Estadísticas globales
- Diseño responsive mejorado
- Efectos de luz y brillo mejorados

## 🐛 Reportar Problemas

Si encuentras un bug, por favor:
1. Abre las DevTools (F12)
2. Verifica la consola para errores
3. Reporta el problema con detalles

## 🤝 Contribuir

¿Quieres mejorar el juego? ¡Adelante!

1. Fork el proyecto
2. Crea una rama: `git checkout -b feature/mejora`
3. Commit cambios: `git commit -m 'Agrega mejora'`
4. Push: `git push origin feature/mejora`
5. Abre un Pull Request

## 💕 Dedicatoria

> *Este juego fue creado con amor para Valentina, como celebración de 9 meses de una relación extraordinaria. Cada planta representa un momento compartido, cada zombi derrotado es un obstáculo superado juntos.*
>
> *"Contigo siempre quiero estar. Te amo, Valentina. ❤️"*

## 📜 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

¿Preguntas o sugerencias? ¡Contáctame!

---

**Hecho con ❤️ para Valentina**

v2.0 - Edición Mejorada - 2025
