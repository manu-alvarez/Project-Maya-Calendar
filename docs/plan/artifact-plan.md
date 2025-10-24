# Artefactos a Recrear en `FINAL`

## Documentos Escritos
| Categoría | Archivo objetivo | Fuente original | Contenido clave |
| --- | --- | --- | --- |
| Backlog completo | `FINAL/docs/backlog/` (nueva carpeta) | `planificacion-scrum/backlog.md` | Épicas, user stories (IDs, SP, criterios, notas técnicas) |
| Scrum & Métricas | `FINAL/docs/scrum/estructura.md` | `planificacion-scrum/estructura-scrum.md` | Roles, ceremonias, DoR/DoD, velocity, burndown, métricas de calidad |
| Roadmap & Gantt | `FINAL/docs/roadmap/cronograma.md` | `cronograma/roadmap.md` | Fases, horarios, tablas semanales, hitos, timeline visual |
| Progreso por sprint | `FINAL/docs/reports/progreso-sprints.md` | `sprints/**`, `cronograma/roadmap.md` | Tabla consolidada (capacidad, SP plan vs real, entregables, estado) |
| Historias / tareas por sprint | Actualizar archivos `FINAL/docs/sprints/sprint-0X-*.md` | `sprints/*` | Vincular historias específicas, tareas, dependencias |

## Diagramas y Gráficos
| Tipo | Archivo objetivo | Fuente/Referencia | Notas de diseño |
| --- | --- | --- | --- |
| Roadmap macro | `FINAL/design/diagramas/roadmap-gantt.svg` | `cronograma/roadmap.md`, `diagramas-excalidraw/roadmap-estado-real.excalidraw` | Combinar timeline y hitos con formato uniforme |
| Backlog por épica | `FINAL/design/diagramas/backlog-epics.svg` | `planificacion-scrum/backlog.md` | Mostrar épicas + stories asociadas |
| Burndown template | `FINAL/design/diagramas/burndown.svg` | `planificacion-scrum/estructura-scrum.md` | Gráfico base para documentación |
| Velocity por sprint | `FINAL/design/diagramas/velocity.svg` | `cronograma/roadmap.md` | Barras SP plan vs real (Sprints 0-8) |
| Arquitectura app (revisada) | `FINAL/design/diagramas/arquitectura.svg` | `sprints/arquitectura-app.excalidraw` | Ajustar layout a plantilla SVG |
| Proceso app (UX flow) | `FINAL/design/diagramas/ux-flow.svg` | `sprints/03...`, wireframes y mockups | Visualizar interacción principal |

## Reglas Visuales y de Formato
- Actualizar `FINAL/diagramas-excalidraw/guia-visual-diagramas.md` con:
  - Margen inferior uniforme (p.ej. 40 px) para textos finales.
  - Uso obligatorio de `<foreignObject>` para textos largos y listas.
  - Tipos de alineación (centrado para títulos, texto justificado dentro de bloques).
- Plantilla SVG base reutilizable con parámetros de ancho, padding y footer.

## Próximos Pasos
1. Crear estructura `FINAL/docs/backlog/` y trasladar épicas/historias con tablas.
2. Documentar estructura Scrum en `FINAL/docs/scrum/` siguiendo formato limpio.
3. Generar plantilla SVG unificada y rehacer diagramas existentes para cumplirla.
4. Producir nuevos diagramas (roadmap, backlog épicas, velocity, burndown, arquitectura, UX flow).
5. Completar reportes de progreso y enlazar historias por sprint.
