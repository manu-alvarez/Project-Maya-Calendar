# Calendario Maya - Mano Eléctrica Azul

Aplicación móvil React Native/Expo para calcular y visualizar el Calendario Maya (Tzolkin) y las Ondas Encantadas del Sincronario de 13 Lunas.

## 📋 Características

- **Cálculo de Kin del Día**: Determina el Kin Maya correspondiente a cualquier fecha
- **Visualización de Ondas Encantadas**: Muestra la Onda Encantada correspondiente con sus detalles
- **Reflexiones Diarias**: Proporciona reflexiones espirituales para cada Kin
- **Navegación Temporal**: Permite navegar entre fechas con controles intuitivos
- **Búsqueda Manual**: Capacidad para buscar cualquier fecha específica
- **Glassmorphism UI**: Interfaz moderna con efectos de desenfoque

## 🚀 Stack Tecnológico

- **Framework**: React Native con Expo
- **Lenguaje**: JavaScript (con TypeScript para utilidades)
- **UI**: React Native + expo-blur para glassmorphism
- **Plataformas**: iOS, Android, Web

## 📁 Estructura del Proyecto

```
Project-Maya-Calendar/
├── app/                          # Aplicación principal
│   ├── App.js                      # Punto de entrada
│   ├── index.ts                    # Entry point de Expo
│   ├── app.json                    # Configuración de la app
│   ├── package.json                # Dependencias
│   ├── tsconfig.json              # Configuración TypeScript
│   ├── babel.config.js            # Configuración Babel
│   ├── eas.json                   # Configuración EAS Build
│   ├── reflexiones_completas.json  # Reflexiones para cada Kin
│   │
│   ├── src/                       # Código fuente
│   │   └── utils/
│   │       ├── kin.ts            # Lógica de cálculo de Kin
│   │       ├── selloData.js      # Datos de los 20 Sellos Solares
│   │       └── ondasEncantadasDetalles.json  # Detalles de ondas
│   │
│   ├── assets/                    # Recursos gráficos
│   │   ├── background-galaxy.png   # Fondo galáctico
│   │   ├── icon.png               # Icono de la app
│   │   ├── favicon.png            # Favicon
│   │   ├── adaptive-icon.png      # Icono adaptativo
│   │   ├── splash-icon.png        # Splash screen
│   │   ├── fonts/                 # Tipografías
│   │   │   └── SpaceMono-Regular.ttf
│   │   └── sellos/                # Imágenes de sellos (1-20.png)
│   │
│   ├── android/                   # Configuración Android
│   ├── scripts/                   # Scripts utilitarios
│   │   ├── reset-project.js       # Script de reset
│   │   ├── BUILD_LOCAL.bat        # Script de build local
│   │   └── parse_wavespells.js    # Parser de wavespells
│   └── .vscode/                   # Configuración VS Code
│
├── docs/                          # Documentación
│   ├── vision/                    # Visión del proyecto
│   │   ├── vision-statement.md
│   │   ├── stakeholders.md
│   │   └── product-roadmap.md
│   ├── roadmap/                   # Roadmaps y cronogramas
│   │   └── cronograma.md
│   ├── sprints/                   # Documentación por sprint
│   │   ├── sprint-01-setup.md
│   │   ├── sprint-02-mvp.md
│   │   ├── sprint-03-uiux.md
│   │   ├── sprint-04-ondas.md
│   │   ├── sprint-05-favoritos.md
│   │   ├── sprint-06-notificaciones.md
│   │   ├── sprint-07-social.md
│   │   └── sprint-08-excelencia.md
│   ├── reports/                   # Reportes y reviews
│   │   ├── sprint-01-review.md
│   │   ├── sprint-02-review.md
│   │   ├── sprint-03-review.md
│   │   └── sprint-03-release-checklist.md
│   ├── backlog/                   # Gestión del backlog
│   │   ├── overview.md
│   │   ├── epics.md
│   │   └── stories.md
│   ├── scrum/                     # Artefactos Scrum
│   │   ├── estructura.md
│   │   └── templates.md
│   └── plan/                      # Planificación
│       ├── artifact-plan.md
│       └── inventory.md
│
├── design/                        # Diseños y diagramas
│   ├── diagramas/                 # Diagramas técnicos
│   │   ├── arquitectura-app.svg
│   │   ├── backlog-epics.svg
│   │   ├── base-template.svg
│   │   ├── burndown.svg
│   │   ├── roadmap-gantt.svg
│   │   ├── sprint-00-roadmap.svg
│   │   ├── sprint-01-kanban.svg
│   │   ├── sprint-02-flujo.svg
│   │   ├── sprint-02-qa.svg
│   │   ├── sprint-04-ondas.svg
│   │   ├── sprint-05-favoritos.svg
│   │   ├── sprint-06-notificaciones.svg
│   │   ├── sprint-08-sqlite.svg
│   │   ├── ux-flow.svg
│   │   └── velocity.svg
│   ├── mockups/                   # Mockups visuales
│   │   ├── sprint-03-mockup.svg
│   │   └── sprint-07-social.svg
│   └── wireframes/                # Wireframes
│       └── sprint-03-layout.md
│
├── tools/                         # Herramientas de desarrollo
│   └── setup-checklist.md         # Checklist de setup
│
├── APKs/                         # Builds compilados
├── .gitattributes                # Configuración Git
└── README.md                    # Este archivo
```

## 🏃 Ejecución Local

### Prerrequisitos
- Node.js (v16 o superior)
- Expo CLI (`npm install -g expo-cli`)
- Para Android: Android Studio
- Para iOS: Xcode (macOS)

### Instalación

```bash
cd app
npm install
```

### Ejecución

```bash
# Iniciar servidor de desarrollo
npm start

# O usar Expo Go en tu dispositivo móvil
npx expo start

# Para iOS (macOS)
npx expo run:ios

# Para Android
npx expo run:android
```

### Build Local

```bash
cd app
cd scripts
BUILD_LOCAL.bat
```

## 📊 Lógica del Calendario Maya

### Cálculo de Kin

El código implementa el algoritmo del Calendario Maya Tzolkin:

1. **Fecha de inicio**: 26 de julio de 1987 (Kin 1 - Dragón Magnético)
2. **Ciclo**: 260 días (20 sellos × 13 tonos)
3. **Cálculo**: Días desde fecha de inicio → módulo 260 → Kin correspondiente

### Onda Encantada

Cada Onda Encantada está compuesta por 13 Kines (Kin Magnético al Kin Cósmico).

**Fórmula para Kin Magnético**:
```
Kin Magnético = Kin Actual - (Tono Actual - 1)
```

### Sellos Solares (20)
1. Dragón (Imix)
2. Viento (Ik)
3. Noche (Akbal)
4. Semilla (Kan)
5. Serpiente (Chicchan)
6. Enlazador de Mundos (Cimi)
7. Mano (Manik)
8. Estrella (Lamat)
9. Luna (Muluc)
10. Perro (Oc)
11. Mono (Chuen)
12. Humano (Eb)
13. Caminante del Cielo (Ben)
14. Mago (Ix)
15. Águila (Men)
16. Guerrero (Cib)
17. Tierra (Caban)
18. Espejo (Etznab)
19. Tormenta (Cauac)
20. Sol (Ahau)

### Tonos Galácticos (13)
1. Magnético
2. Lunar
3. Eléctrico
4. Autoexistente
5. Entonado
6. Rítmico
7. Resonante
8. Galáctico
9. Solar
10. Planetario
11. Espectral
12. Cristal
13. Cósmico

## 🎨 UI/UX

La aplicación utiliza un diseño **Glassmorphism** moderno con:
- Fondo galáctico
- Tarjetas semitransparentes con blur
- Colores vibrantes para elementos importantes
- Tipografía clara y legible
- Iconos de sellos mayas para cada Kin

## 📖 Documentación Adicional

- **Visión del Proyecto**: `docs/vision/`
- **Sprints**: `docs/sprints/`
- **Roadmap**: `docs/roadmap/`
- **Diseños**: `design/`

## 🔧 Scripts

- `scripts/reset-project.js` - Resetea el proyecto a estado inicial
- `scripts/BUILD_LOCAL.bat` - Realiza build local de la app
- `scripts/parse_wavespells.js` - Parser para datos de wavespells

## 📝 Roadmap de Sprints

- ✅ **Sprint 0**: Concepción y visión
- ✅ **Sprint 1**: Setup fundacional
- ✅ **Sprint 2**: MVP Kin Calculator
- ✅ **Sprint 3**: UI/UX Producción
- ✅ **Sprint 4**: Ondas Encantadas
- 🚧 **Sprint 5**: Favoritos y Personalización (pendiente)
- 🚧 **Sprint 6**: Notificaciones y Engagement (pendiente)
- 🚧 **Sprint 7**: Features Sociales (pendiente)
- 🚧 **Sprint 8**: Excelencia Técnica (pendiente)

## 🤝 Contribuciones

Este proyecto sigue metodología Scrum. Para contribuir, revisa:
- `docs/scrum/estructura.md` para la estructura del equipo
- `docs/backlog/` para historias de usuario pendientes

## 📄 Licencia

Proyecto desarrollado para el Sincronario de 13 Lunas.

---

**Versión actual**: 1.0.0  
**Última actualización**: Diciembre 2025
