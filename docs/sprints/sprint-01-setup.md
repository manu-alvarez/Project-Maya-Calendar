# Sprint 1 · Setup Fundacional

- **Duración**: 1 semana (40 h)
- **Objetivo**: Tener el proyecto Expo listo para desarrollo continuo con las herramientas de calidad configuradas.
- **Incremento esperado**: Repositorio base inicializado, scripts de trabajo disponibles y documentación de entorno lista.

## Sprint Goal
> "Levantar la base técnica del Calendario Maya para poder construir el MVP sin fricciones."

## Backlog del Sprint
| ID | Elemento | Tipo | Estimación |
| --- | --- | --- | --- |
| S1-01 | Inicializar proyecto Expo con TypeScript | Historia | 8 SP |
| S1-02 | Configurar ESLint y scripts de desarrollo | Tarea técnica | 5 SP |
| S1-03 | Estructurar carpetas `src/`, `assets/`, `docs/` | Tarea técnica | 5 SP |
| S1-04 | Documentar setup local (Node, Expo CLI) | Historia | 5 SP |
| S1-05 | Crear plantilla de tablero Kanban y métricas | Historia | 4 SP |
| S1-06 | Preparar guía rápida de contribución | Historia | 4 SP |

**Total**: 31 SP

## Definition of Done (Sprint 1)
- Proyecto compila y abre en Expo Go / emulador.
- Linting corre con un comando (`npm run lint`).
- README técnico describe prerequisitos, scripts y estructura carpetas.
- Kanban inicial publicado (ver artefacto en `design/diagramas`).

## Métricas
- **Capacidad utilizada**: 34 h.
- **Historias completadas**: 6 / 6 (31 SP).
- **Defectos**: 0 bloqueantes, 2 mejoras pendientes (documentar husos horarios, automatizar formateo).

## Riesgos y Mitigaciones
- **Dependencias Expo**: se fijaron versiones exactas para evitar incompatibilidades.
- **Tiempo de setup en máquinas nuevas**: guía de instalación incluye verificación rápida (`expo doctor`).
- **Assets culturales**: se reservó tiempo en Sprint 3 para producirlos con calma.

## Retro breve
- Herramientas listas y script de arranque funcional.
- Mejora para siguientes sprints: añadir checklist "Antes de commitear" al README contributivo.
