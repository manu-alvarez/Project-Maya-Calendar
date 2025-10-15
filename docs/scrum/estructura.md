# Estructura Scrum Adaptada

## Roles y Capacidades
- **Product Owner (virtual)**: define visión, prioriza backlog, valida incrementos.
- **Scrum Master (virtual)**: facilita ceremonias, remueve bloqueos, protege foco.
- **Development Team (Manuel)**: dedicación 0.5–1.5 h/día, 7.5–15 h por sprint.

## Duración de Sprints
- Duración estándar: 2 semanas.
- Inicio cada lunes; ceremonias clave programadas (planning, review, retro).
- Capacidad objetivo: ~10 h por sprint (ajustable según disponibilidad real).

## Ceremonias
| Ceremonia | Duración | Objetivo | Output |
| --- | --- | --- | --- |
| Sprint Planning | 30 min | Seleccionar historias y definir sprint goal | Sprint backlog, commitment |
| Daily (registro) | 5 min | Revisar avance y bloqueos | Log diario en Markdown |
| Sprint Review | 45 min | Demostrar incremento y recibir feedback | Feedback del PO, próximos pasos |
| Retrospective | 30 min | Reflexionar sobre proceso | Action items para mejorar |

## Definition of Ready
- Historia entendible con criterios de aceptación.
- Estimación en SP revisada.
- Dependencias identificadas.
- Approach técnico y estrategia de testing considerados.

## Definition of Done
- Funcionalidad implementada y probada (tests básicos pasando).
- Sin errores críticos ni warnings.
- Documentación actualizada (README o guías relevantes).
- Demo válida en dispositivo/emulador.

## Métricas y Seguimiento
- **Velocity objetivo**: 8–12 SP por sprint.
- **Burndown**: seguimiento diario de SP pendientes.
- **Calidad**: cobertura ≥60%, defectos <1 por SP, performance <2s carga.
- **Seguimiento**: registrar resultados de review/retro en `FINAL/docs/reports/`.

Próximos archivos: plantillas de burndown, velocity y registros de progreso por sprint.
