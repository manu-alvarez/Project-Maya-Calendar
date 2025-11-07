# Setup Técnico (Sprint 1)

## Requisitos
- Node.js 20.x
- Expo CLI (`npm install -g expo-cli`)
- Android Studio o Xcode (opcional para emuladores)

## Scripts
```bash
npm install         # instala dependencias
npm run start       # levanta Metro bundler
npm run android     # abre en emulador / dispositivo Android
npm run ios         # abre en simulador iOS
npm run lint        # ejecuta ESLint con la configuración base
```

## Estructura inicial
```
src/app/
├── App.tsx          # Componente raíz
├── eslint.config.js # Reglas base
├── package.json     # Scripts y dependencias
└── tsconfig.json    # Soporte TypeScript
```

Esta estructura fue creada en el Sprint 1 y servirá como punto de partida para el MVP del calendario maya. Ajusta las versiones si Expo publica releases posteriores.
