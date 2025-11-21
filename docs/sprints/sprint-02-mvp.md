# Sprint 2 · MVP Kin Calculator

- **Duración**: 1 semana (40 h)
- **Objetivo**: Implementar el cálculo del kin maya y cargar la base de datos de 260 kines con reflexiones resumidas.
- **Incremento esperado**: Aplicación capaz de mostrar el kin del día y consultar cualquier fecha.

## Sprint Goal
> "Entregar el núcleo funcional del calendario maya: kin del día, navegación básica y dataset completo."

## Backlog del Sprint
| ID | Elemento | Tipo | Estimación |
| --- | --- | --- | --- |
| S2-01 | Implementar algoritmo `kinFromDate` con manejo de Hunab Ku | Historia | 8 SP |
| S2-02 | Crear utilidades de fecha (UTC local) | Tarea técnica | 5 SP |
| S2-03 | Construir dataset JSON con 260 kines y reflexiones | Historia | 8 SP |
| S2-04 | Añadir navegación día anterior/siguiente y selección manual | Historia | 5 SP |
| S2-05 | Documentar pruebas unitarias y resultados de QA | Historia | 4 SP |
| S2-06 | Validar culturalmente sellos y tonos | Historia | 5 SP |

**Total**: 35 SP

## Definition of Done
- Algoritmo matemático verificado con fechas clave (Kin 1, 63, 260).
- JSON de reflexiones validado (estructura consistente, 260 entradas).
- Componentes de navegación en la app mostrando kin y reflexión.
- Reporte de QA con casos de prueba y resultado.
- Feedback cultural registrado (fuentes consultadas).

## Métricas y Pruebas
- **Capacidad usada**: 36 h efectivas / 40 h planeadas.
- **Cobertura de pruebas unitarias**: 12 funciones probadas, 100% branches en utilidades.
- **Tiempo de cálculo**: < 5 ms por consulta en dispositivos mid-range.
- **Incidentes**: 1 bug corregido (29 de febrero / Hunab Ku); 0 pendientes.

## Riesgos y Mitigaciones
- *Riesgo*: dataset grande en JSON → **Mitigación**: preparación temprana del plan SQLite (Sprint 8).
- *Riesgo*: errores por timezone → **Mitigación**: convertir todas las fechas a UTC a medianoche local.

## Retro breve
- Testear edge cases temprano evitó regresiones.
- Pendiente: documentar equivalencias con otros calendarios para preguntas frecuentes (tras Sprint 3).
