# Imágenes de Snoopy - Estructura de Archivos

## 📁 Ubicación esperada
Todas las imágenes deben colocarse en la carpeta raíz del proyecto (`c:\snoopy-game\`)

## 🖼️ Imágenes Necesarias

### 1. **Imágenes de Snoopy (6 archivos)**
Estas se usarán para diferentes animaciones y escenarios del juego:

```
- snoopy-1.png/jpg    (Pose neutra/reposo)
- snoopy-2.png/jpg    (Pose de ataque)
- snoopy-3.png/jpg    (Pose de celebración)
- snoopy-4.png/jpg    (Pose de defensa)
- snoopy-5.png/jpg    (Pose corriendo)
- snoopy-6.png/jpg    (Pose saltando)
```

### 2. **Imagen para Diálogos (1 archivo JPG)**
```
- snoopy-dialog.jpg   (Retrato de Snoopy para los diálogos en pantalla)
```

## ⚙️ Configuración del Código

Una vez que agregues las imágenes, debes actualizar `assets-config.js` así:

```javascript
// Después de cargar el HTML, llamar esta función con tus rutas
setImagePaths({
    snoopy: 'snoopy-1.png',
    snoopyDialogs: 'snoopy-dialog.jpg',
    plants: {
        shooter: 'planta-shooter.png',
        bomb: 'planta-bomb.png',
        ice: 'planta-ice.png',
        light: 'planta-light.png',
        shield: 'planta-shield.png'
    }
});
```

## 📋 Estado Actual
- ✅ Sistema de assets preparado
- ✅ Emojis funcionando como fallback
- ✅ Estructura lista para recibir imágenes
- ⏳ Esperando que subas las 6 imágenes de Snoopy + 1 JPG de diálogo

## 🚀 Pasos para Usar tus Imágenes

1. **Copia las 7 imágenes** a `c:\snoopy-game\`
2. **Abre `assets-config.js`** y busca la función `setImagePaths()`
3. **Reemplaza los nombres** con los nombres reales de tus archivos
4. **Recarga el navegador** (F5) y verás tus imágenes en el juego

## 💡 Formato Recomendado
- **Formato**: PNG (transparencia) o JPG (fotografías)
- **Tamaño Snoopy**: 200x200px mínimo
- **Tamaño Dialog**: 400x600px recomendado
- **Compresión**: Optimizar para web (máximo 500KB cada una)

---

Cuando tengas las imágenes listas, colócalas aquí y actualiza las rutas en `assets-config.js`.
