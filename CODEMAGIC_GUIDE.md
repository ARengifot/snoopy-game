# 🚀 Guía CodeMagic - Snoopy vs Zombies

## ✅ Estado Actual

El juego está **100% listo** para CodeMagic:

- ✅ Web app funcional (HTML5 + CSS3 + JavaScript)
- ✅ PWA con manifest.json
- ✅ Todas las imágenes integradas
- ✅ Guardado con LocalStorage
- ✅ Responsive design
- ✅ Sin dependencias externas

---

## 📱 Compilar para Android

### Opción 1: Con CodeMagic (RECOMENDADO)

#### Paso 1: Subir a GitHub
```bash
git remote add origin https://github.com/tu-usuario/snoopy-game.git
git push -u origin master
```

#### Paso 2: Conectar CodeMagic
1. Abre: https://codemagic.io
2. Haz clic en "Add repository"
3. Selecciona tu repositorio de GitHub
4. CodeMagic detectará `codemagic.yaml` automáticamente

#### Paso 3: Configurar Build
1. Selecciona el workflow **"android-build"**
2. CodeMagic descargará Cordova
3. Compilará la APK automáticamente
4. Tendrás el APK descargable

#### Paso 4: Descargar APK
- Ir a "Artifacts"
- Descargar `app-release.apk`
- ¡Listo para instalar en Android!

---

### Opción 2: Local (Manual)

Si quieres compilar localmente:

```bash
# 1. Instalar Cordova
npm install -g cordova

# 2. Crear proyecto Android
cordova create snoopy-android com.game.snoopy SnoopyVsZombies
cd snoopy-android

# 3. Agregar plataforma Android
cordova platform add android

# 4. Copiar archivos del juego
cp ../index.html www/
cp ../*.js www/
cp ../*.css www/
cp ../*.png www/
cp ../*.jpg www/
cp ../manifest.json www/

# 5. Compilar APK
cordova build android --release
```

---

## 📋 Archivos Necesarios (Ya Presentes)

✅ `codemagic.yaml` - Configuración de build  
✅ `cordova.json` - Config de Cordova  
✅ `AndroidManifest.xml` - Permisos Android  
✅ `package.json` - Dependencias Node  
✅ `manifest.json` - PWA manifest  
✅ `index.html` - App principal  
✅ Todas las imágenes (PNG/JPG)  

---

## 🎯 Flujo CodeMagic

```
GitHub Repository
       ↓
   CodeMagic detecta codemagic.yaml
       ↓
   Descarga tu código
       ↓
   Instala Node.js + Cordova
       ↓
   Copia archivos web a www/
       ↓
   Compila APK release
       ↓
   Genera app-release.apk
       ↓
   Puedes descargar y distribuir
```

---

## 🔑 Configuración Importante

### En codemagic.yaml:
```yaml
android-build:
  environment:
    java: 11
    android_sdk: 33
    ndk: 23.1.7779620
```

### En AndroidManifest.xml:
```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

---

## 📧 Email para Notificaciones

Actualiza en `codemagic.yaml`:
```yaml
publishing:
  email:
    recipients:
      - tu-email@example.com  ← Cambiar aquí
```

---

## 🚀 Pasos para Ir en Vivo

### 1. Prepara tu código
```bash
git add -A
git commit -m "Ready for CodeMagic release"
git push
```

### 2. En CodeMagic
- Abre https://codemagic.io
- Conecta tu repositorio GitHub
- Selecciona workflow "android-build"
- Haz clic en "Build"

### 3. Espera la compilación
- CodeMagic compilará automáticamente
- Verás progreso en tiempo real
- Recibirás email cuando termine

### 4. Descarga APK
- Ve a "Artifacts"
- Descarga `app-release.apk`
- ¡Listo para instalar!

---

## 📥 Instalar en Tu Android

1. **Descarga** el APK desde CodeMagic
2. **Transfiere** a tu teléfono Android
3. **Abre** el gestor de archivos
4. **Toca** el APK
5. **Sigue** las instrucciones
6. ¡**A JUGAR!** 🎮

---

## 🐛 Si Algo Falla

### Error: "Cordova no encontrado"
- CodeMagic lo instala automáticamente

### Error: "APK no se genera"
- Verifica que codemagic.yaml está bien formado
- Comprueba que AndroidManifest.xml existe

### Error: "Permisos insuficientes"
- La app ya tiene permisos necesarios

### El juego se ve roto en Android
- Verifica que las imágenes están en `www/`
- El manifest.json está copiado correctamente

---

## ✨ Features del APK

- ✅ 5 niveles playables
- ✅ Guardado automático (LocalStorage)
- ✅ 5 tipos de plantas
- ✅ 5 tipos de zombies
- ✅ Diálogos con imágenes
- ✅ Responsive en cualquier pantalla
- ✅ Sin conexión a internet necesaria
- ✅ Pesa ~5MB

---

## 📊 Especificaciones

| Dato | Valor |
|------|-------|
| API Mínimo | Android 5.0 (API 21) |
| API Objetivo | Android 13 (API 33) |
| Tamaño APK | ~5-8 MB |
| Memoria | ~50-100 MB en runtime |
| Permisos | Internet, Network Access |

---

## 🎯 Resumen Rápido

```
1. GitHub → Sube tu código
2. CodeMagic → Conecta repositorio
3. Build → Haz clic en "Build"
4. APK → Descarga app-release.apk
5. Instala → En tu teléfono Android
6. ¡Disfruta! 🎮
```

---

## 📱 URLs Útiles

- **CodeMagic**: https://codemagic.io
- **GitHub**: https://github.com
- **Apache Cordova**: https://cordova.apache.org
- **Android Studio**: https://developer.android.com

---

## ❓ Preguntas Frecuentes

**P: ¿Necesito Android Studio?**  
R: No, CodeMagic lo hace por ti automáticamente.

**P: ¿Puedo usar el APK sin internet?**  
R: Sí, el juego funciona completamente offline.

**P: ¿Puedo publicar en Google Play?**  
R: Sí, necesitarás crear una cuenta de developer ($25).

**P: ¿Cuánto tiempo tarda el build?**  
R: ~3-5 minutos en CodeMagic.

**P: ¿Puedo probar antes de publicar?**  
R: Sí, instala el APK en tu teléfono primero.

---

**¡Tu juego está listo para CodeMagic! 🚀**
