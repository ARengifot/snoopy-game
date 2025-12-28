# 🐕 Guía para Agregar tus Imágenes de Snoopy

## 📋 Lo que necesitas hacer

Tienes **6 imágenes de Snoopy** y **1 JPG para diálogos**. Aquí te muestro exactamente cómo integrarlas.

## 📁 Paso 1: Colocar los archivos

Copia tus 7 imágenes a la carpeta raíz del proyecto:

```
c:\snoopy-game\
├── index.html
├── script.js
├── styles.css
├── assets-config.js
├── snoopy-1.png          ← TUS 6 IMÁGENES
├── snoopy-2.png
├── snoopy-3.png
├── snoopy-4.png
├── snoopy-5.png
├── snoopy-6.png
└── snoopy-dialog.jpg     ← TU JPG PARA DIÁLOGOS
```

> **Nota**: Puedes usar otros nombres, solo asegúrate de recordarlos.

## 🔧 Paso 2: Actualizar `assets-config.js`

Abre el archivo `assets-config.js` y busca esta sección:

```javascript
let imagePaths = {
    snoopy: null,                 // ← ACTUALIZA
    snoopyDialogs: null,          // ← ACTUALIZA
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
```

Reemplaza `null` con los nombres de tus archivos. Ejemplo:

```javascript
let imagePaths = {
    snoopy: 'snoopy-1.png',           // ← La principal
    snoopyDialogs: 'snoopy-dialog.jpg', // ← Para diálogos
    plants: {
        shooter: null,  // Por ahora emojis
        bomb: null,
        ice: null,
        light: null,
        shield: null
    },
    zombies: {
        normal: null,   // Por ahora emojis
        fast: null,
        strong: null,
        armored: null,
        boss: null
    }
};
```

## 🎨 Paso 3: Usar tus 6 Imágenes de Snoopy

Las 6 imágenes de Snoopy se pueden usar en diferentes partes del juego:

### Opción A: Una sola imagen en todo el juego
```javascript
snoopy: 'snoopy-1.png',  // Usa la que prefieras
```

### Opción B: Diferentes imágenes por contexto
Deberías esperar a que actualice el código para soportar esto. Por ahora, usa la mejor.

### Opción C: Crear un carrusel de Snoopy
Podemos crear una función especial después.

## 🎬 Paso 4: Usar el JPG para Diálogos

Cuando aparezcan diálogos (durante la historia), automáticamente usará:
```javascript
snoopyDialogs: 'snoopy-dialog.jpg'
```

## ✅ Paso 5: Probar

1. Guarda los cambios en `assets-config.js`
2. Recarga el navegador (F5)
3. Deberías ver tus imágenes en lugar de los emojis
4. ¡Listo!

## 💡 Consejos

### Nombres de archivo
- ✅ Usa nombres simples sin espacios: `snoopy-1.png`
- ❌ Evita caracteres especiales: `snoopy (1) &.png`
- ✅ Mantén la extensión: `.png`, `.jpg`

### Formatos recomendados
- **PNG**: Mejor para ilustraciones (con transparencia)
- **JPG**: Mejor para fotos (más comprimidas)

### Tamaños sugeridos
| Uso | Tamaño | Formato |
|-----|--------|---------|
| Snoopy principal | 200x200 px | PNG |
| Diálogos | 400x600 px | JPG |
| Plantas | 100x100 px | PNG |
| Zombies | 100x100 px | PNG |

## 🚨 Si algo no funciona

Si las imágenes no aparecen:

1. **Verifica los nombres** en `assets-config.js`
   ```javascript
   // ❌ INCORRECTO
   snoopy: 'Snoopy-1.PNG'  // Diferente mayúscula/extensión
   
   // ✅ CORRECTO
   snoopy: 'snoopy-1.png'  // Mismo que el archivo real
   ```

2. **Revisa la carpeta** - Los archivos deben estar en `c:\snoopy-game\`

3. **Abre la consola** (F12 en el navegador) y busca errores

4. **Los emojis seguirán funcionando** si algo falla - no hay problema

## 🎯 Resumen Rápido

1. Copia 7 imágenes a `c:\snoopy-game\`
2. Abre `assets-config.js`
3. Reemplaza `null` en `imagePaths` con tus nombres de archivo
4. Recarga el navegador
5. ¡Hecho!

---

## 📞 Ayuda Adicional

Si necesitas:
- **Usar las 6 imágenes en diferentes momentos**: Te ayudo a crear un sistema de rotación
- **Personalizar dónde aparecen**: Podemos actualizar el código de mostrar sprites
- **Añadir imágenes de plantas/zombies**: Mismo proceso, solo actualiza `plants` y `zombies` en `imagePaths`

¡Avísame cuando tengas las imágenes listas!
