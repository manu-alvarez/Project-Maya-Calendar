# Sprint 6 · Notificaciones y Engagement (Planificado)

- **Duración estimada**: 1 semana (40 h)
- **Objetivo**: Implementar notificaciones push diarias, recordatorios configurables y panel de preferencias.
- **Estado actual**: Pendiente.

## Sprint Goal
> "Mantener a los usuarios conectados con su kin diario mediante notificaciones útiles y personalizables."

## Backlog Tentativo
| ID | Elemento | Tipo | Estimación |
| --- | --- | --- | --- |
| S6-01 | Configurar Expo Notifications y permisos | Historia | 8 SP |
| S6-02 | Crear scheduler para kin del día y recordatorios | Historia | 8 SP |
| S6-03 | Diseñar centro de preferencias | Historia | 8 SP |
| S6-04 | Implementar diferenciación de eventos especiales | Historia | 5 SP |
| S6-05 | Registrar métricas de engagement (opt-in, CTR) | Historia | 5 SP |
| S6-06 | Validar copy y localización de mensajes | Historia | 5 SP |

**Total estimado**: 39 SP

## Consideraciones Técnicas
- Uso de `expo-notifications` con backend ligero o scheduling local según disponibilidad.
- Respetar normativas de privacidad y frecuencia (políticas Google).

## Riesgos
- Permisos rechazados por usuarios → ofrecer valor añadido en la pantalla de configuración.
- Complejidad horaria global → normalizar a zona seleccionada en dispositivo.

## Notas
- Definir KPIs: tasa opt-in target 70%, CTR 30%.
- Diagrama de flujo en `design/diagramas/sprint-06-notificaciones.svg`.
