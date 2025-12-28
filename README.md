# 🎮 Snoopy vs Zombies - 9 Meses de Amor 💕

Un juego especial y profesional creado para celebrar 9 meses de amor con Valentina.

## 📋 Descripción

Este es un juego tipo Plants vs Zombies donde Snoopy es el protagonista. Las plantas Snoopy disparan a diferentes tipos de zombies para proteger el jardín. El juego incluye:

- **Menú Principal profesional** con opciones de jugar, instrucciones y sobre el juego
- **5 Niveles diferentes** con dificultad progresiva
- **5 Tipos de Plantas Snoopy** cada una con habilidades únicas
- **5 Tipos de Zombies** con diferentes características y resistencia
- **Mensajes de amor románticos** que aparecen durante el juego
- **Interfaz moderna y responsiva**

## 🚀 Cómo Usar

### 1. **Estructura de Archivos**
```
snoopy-game/
├── index.html     (Archivo principal - ABRE ESTE)
├── styles.css     (Estilos del juego)
├── script.js      (Lógica del juego)
└── README.md      (Este archivo)
```

### 2. **Agregar las Imágenes PNG**

Debes proporcionarme links de las imágenes PNG en formato URL directa. Una vez tengas los links, abre el archivo `index.html` en tu navegador y ejecuta este código en la consola JavaScript:

```javascript
setImagePaths({
    snoopy: 'AQUI_TU_LINK_SNOOPY',
    plants: {
        shooter: 'AQUI_TU_LINK_PLANTA_TIRADOR',
        bomb: 'AQUI_TU_LINK_PLANTA_BOMBA',
        ice: 'AQUI_TU_LINK_PLANTA_HIELO',
        light: 'AQUI_TU_LINK_PLANTA_LUZ',
        shield: 'AQUI_TU_LINK_PLANTA_ESCUDO'
    },
    zombies: {
        normal: 'AQUI_TU_LINK_ZOMBI_NORMAL',
        fast: 'AQUI_TU_LINK_ZOMBI_RAPIDO',
        strong: 'AQUI_TU_LINK_ZOMBI_FUERTE',
        armored: 'AQUI_TU_LINK_ZOMBI_CORAZA',
        boss: 'AQUI_TU_LINK_ZOMBI_JEFE'
    }
});
```

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
