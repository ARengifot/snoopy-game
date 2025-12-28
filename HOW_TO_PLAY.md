# 🎮 CÓMO EJECUTAR EL JUEGO

## Opción 1: Abrir directamente en navegador (MÁS SIMPLE)

1. Abre la carpeta `snoopy-game`
2. **Haz click derecho** en `index.html`
3. Selecciona **"Abrir con"** → **Tu navegador favorito**
   - Chrome, Firefox, Safari, Edge (cualquiera funciona)

¡Y listo! El juego debería abrirse inmediatamente.

---

## Opción 2: Usar servidor local Python

Si quieres que funcione como si estuviese en un servidor web real:

### Windows (PowerShell):
```powershell
cd c:\snoopy-game
python -m http.server 8000
# Luego abre en navegador: http://localhost:8000
```

### macOS / Linux:
```bash
cd ~/snoopy-game
python3 -m http.server 8000
# Luego abre en navegador: http://localhost:8000
```

---

## Opción 3: Usar VS Code (Si lo tienes instalado)

1. Abre la carpeta del proyecto en VS Code
2. Instala la extensión **"Live Server"** (Search en extensiones)
3. Click derecho en `index.html`
4. Selecciona **"Open with Live Server"**

---

## 🎯 Una Vez que Abre el Juego

### Primera Pantalla: Introducción
- Verás: "SNOOPY PROTEGE VALENTINA"
- Presiona cualquier botón para comenzar

### Menú Principal
Tienes 3 opciones:
- 🎮 **JUGAR POR VALENTINA** → Inicia el juego
- ❓ **¿CÓMO JUEGO?** → Lee las instrucciones
- 💕 **NUESTRA HISTORIA** → Lee la dedicatoria de amor

### Selector de Niveles
- Verás 5 niveles disponibles
- Haz click en uno para jugarlo
- Se mostrarán tus puntuaciones anteriores

### Durante el Juego
- **Click en una planta** → La seleccionas
- **Click en un espacio vacío** → Colocas la planta
- Defiende contra los zombies
- ¡Gana todas las oleadas para completar el nivel!

---

## ⚙️ Requisitos

- ✅ Navegador web moderno (Chrome, Firefox, Safari, Edge)
- ✅ Conexión a internet (para fondos de fondo externo)
- ✅ Python (solo si usas Opción 2)
- ✅ ¡Eso es todo!

---

## 🐛 Si Algo No Funciona

### El juego no carga
- Intenta con otro navegador
- Borra el caché (Ctrl+Shift+Delete)
- Verifica que tengas conexión a internet

### Los fondos no se ven
- Es normal si no hay conexión a internet
- El juego funciona igual, solo sin la imagen de fondo

### Las animaciones se ven lentas
- Tu dispositivo podría ser lento
- Intenta cerrar otras aplicaciones
- Prueba con otro navegador más ligero (Firefox)

### Los datos de puntuación no se guardan
- Algunos navegadores privados no permiten localStorage
- Intenta en modo normal (no privado)

---

## 💾 Tus Datos Guardados

El juego guarda automáticamente:
- Puntuaciones de cada nivel
- Puntuación total
- Niveles completados

Los datos se guardan localmente en tu navegador (no se envían a servidores).

Para **borrar tus datos**, abre la consola JavaScript (F12) y escribe:
```javascript
localStorage.clear();
```

---

## 📱 En Dispositivos Móviles

1. Abre el navegador del teléfono
2. Accede a la URL donde esté el juego
3. El juego se adaptará automáticamente a la pantalla
4. Toca para interactuar igual que con click

**Bonus**: Puedes instalar el juego como aplicación:
- iPhone: Botón Compartir → Añadir a Inicio
- Android: Menú → Instalar aplicación

---

## 🎬 Cómo Jugar: Guía Rápida

1. **Selecciona una planta** haciendo click en ella
2. **Coloca la planta** en un espacio vacío (cuesta soles)
3. **La planta dispara automáticamente** a los zombies
4. **Gana dinero** al derrotar enemigos
5. **Completa las oleadas** (waves) para ganar el nivel
6. **Derrota zombies** antes de que lleguen al final

**Plantas disponibles:**
- 🔫 **Tirador** (75 amor) - Dispara continuo
- 💣 **Bomba** (150 amor) - Gran explosión
- ❄️ **Hielo** (100 amor) - Congela enemigos
- 💡 **Luz** (125 amor) - Daño luminoso
- 🛡️ **Escudo** (200 amor) - Protege otras plantas

**Zombies a defender:**
- Normal, Rápido, Fuerte, Coraza, Jefe

---

## 🎓 Modo de Aprendizaje

Si nunca has jugado un Plants vs Zombies:

1. **Comienza en Nivel 1** - Es fácil
2. **Lee las instrucciones** - Click en "¿CÓMO JUEGO?"
3. **Experimenta** - Prueba diferentes plantas
4. **Aprende los patrones** - Cada nivel es diferente
5. **Mejora tu estrategia** - Próximas partidas serán más fáciles

---

¡**DIVIÉRTETE JUGANDO!** 🎮💕

*Snoopy Protege a Valentina - 9 meses de amor eterno*
