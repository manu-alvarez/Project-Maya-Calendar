# Sprint 8 · Excelencia Técnica (Planificado)

- **Duración estimada**: 1 semana (40 h)
- **Objetivo**: Migrar el almacenamiento de JSON a SQLite, implementar búsqueda avanzada y habilitar analytics básicos.
- **Estado actual**: Pendiente.

## Sprint Goal
> "Escalar el rendimiento y la observabilidad del Calendario Maya para soportar nuevas features."

## Backlog Tentativo
| ID | Elemento | Tipo | Estimación |
| --- | --- | --- | --- |
| S8-01 | Diseñar schema SQLite (kines, ondas, favoritos) | Historia | 8 SP |
| S8-02 | Implementar migración JSON → SQLite | Historia | 8 SP |
| S8-03 | Crear búsqueda avanzada (filtros + texto) | Historia | 8 SP |
| S8-04 | Añadir analytics básicos (eventos clave) | Historia | 6 SP |
| S8-05 | Optimizar performance (caching, lazy loading) | Historia | 7 SP |
| S8-06 | Documentar despliegue y rollback | Historia | 5 SP |

**Total estimado**: 42 SP

## Consideraciones Técnicas
- Uso de `expo-sqlite` o migración a backend ligero (por evaluar).
- Mantener fallback JSON mientras se valida estabilidad.

## Riesgos
- Incremento tamaño app → optimizar consultas y limpieza.
- Complejidad de migración → planear scripts y pruebas exhaustivas.

## Notas
- Diagrama de arquitectura en `design/diagramas/sprint-08-sqlite.svg`.
- Checklist de migración se completará antes del commit final.
