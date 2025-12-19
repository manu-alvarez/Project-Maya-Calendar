# Sprint 4 · Ondas Encantadas (Planificado)

- **Duración estimada**: 1 semana (40 h)
- **Objetivo**: Incorporar las 20 ondas encantadas con navegación por ciclos de 13 días.
- **Estado actual**: Pendiente de ejecución.

## Sprint Goal
> "Modelar y visualizar las ondas encantadas en la app para enriquecer la interpretación del Tzolkin."

## Backlog Tentativo
| ID | Elemento | Tipo | Estimación |
| --- | --- | --- | --- |
| S4-01 | Definir estructura de datos de ondas (20 x 13) | Historia | 8 SP |
| S4-02 | Diseño componente "Onda actual" | Historia | 8 SP |
| S4-03 | Implementar integración kin ↔ ondas | Historia | 8 SP |
| S4-04 | Navegación por ciclo de 13 días | Historia | 8 SP |
| S4-05 | Validación cultural y contenido | Historia | 5 SP |
| S4-06 | Actualizar documentación y pruebas | Historia | 5 SP |

**Total estimado**: 42 SP

## Consideraciones Técnicas
- Reutilizar utilidades de fecha para mapear kin → posición en onda.
- Mantener dataset separado (`waves.json`) para facilitar migración futura a SQLite.

## Riesgos
- Exactitud cultural: requiere revisión con expertos o fuentes de confianza.
- Complejidad visual: UI puede recargar la pantalla; planificar diseño modular.
- Performance: calcular ondas en tiempo real podría ser costoso; considerar memoización.

## Notas
- Los diagramas y wireframes se almacenarán en `design/wireframes` y `design/diagramas`.
- Checklist específico del sprint se completará antes del commit correspondiente.
