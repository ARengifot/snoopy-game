# Snoopy vs Zombies - React Edition

Esta es la versión React de Snoopy vs Zombies, optimizada para compilación con CodeMagic y despliegue móvil.

## Setup para Desarrollo

```bash
cd react-app
npm install
npm start
```

## Build para Producción

```bash
npm run build
```

## Deploy con CodeMagic

1. Conecta tu repositorio GitHub a CodeMagic
2. Usa el archivo `codemagic.yaml` para configuración
3. CodeMagic compilará y desplegará automáticamente

## Estructura del Proyecto

```
react-app/
├── src/
│   ├── components/       # Componentes React
│   │   ├── Game.jsx
│   │   ├── Menu.jsx
│   │   ├── GameScreen.jsx
│   │   ├── GameBoard.jsx
│   │   ├── HUD.jsx
│   │   ├── Plant.jsx
│   │   └── Zombie.jsx
│   ├── config/          # Configuración del juego
│   │   └── gameConfig.js
│   ├── index.jsx        # Entry point
│   └── index.css
├── public/
│   └── index.html
├── package.json
└── .gitignore
```

## Dependencias

- React 18.2.0
- React DOM 18.2.0
- React Scripts 5.0.1

## Notas

Esta versión React mantiene toda la lógica del juego original while optimizing for mobile deployment.
