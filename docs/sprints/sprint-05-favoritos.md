# Sprint 5 · Favoritos y Personalización (Planificado)

- **Duración estimada**: 1 semana (40 h)
- **Objetivo**: Permitir guardar kines favoritos, organizarlos en categorías y acceder a ellos rápidamente.
- **Estado actual**: Pendiente de ejecución.

## Sprint Goal
> "Ofrecer a los usuarios un espacio personal para marcar y revisar sus kines más significativos."

## Backlog Tentativo
| ID | Elemento | Tipo | Estimación |
| --- | --- | --- | --- |
| S5-01 | Definir modelo de almacenamiento (AsyncStorage/SQLite) | Historia | 8 SP |
| S5-02 | Diseñar UI de lista de favoritos | Historia | 8 SP |
| S5-03 | Implementar guardado y eliminación de kines | Historia | 8 SP |
| S5-04 | Crear categorías o etiquetas personalizadas | Historia | 8 SP |
| S5-05 | Sincronizar con pantalla principal (acceso rápido) | Historia | 5 SP |
| S5-06 | Medir adopción y registrar eventos | Historia | 5 SP |

**Total estimado**: 42 SP

## Consideraciones Técnicas
- Opciones: iniciar con `AsyncStorage` y preparar transición a SQLite.
- Se requiere hook personalizado `useFavorites` con persistencia.

## Riesgos
- Uso intensivo de disco si se guardan muchas notas → limitar a datos esenciales.
- Experiencia de usuario: evitar sobrecargar pantalla principal.

## Notas
- Diagramas y mockups se establecerán antes de iniciar el sprint.
- Métricas clave: % de usuarios que añaden al menos 1 favorito, tiempo medio para acceder.
