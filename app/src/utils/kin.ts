export type Kin = { num: number; sello: number; tono: number };

// Función para detectar 29 de febrero (Hunab Ku)
function esHunabKu(date: Date): boolean {
  return date.getUTCMonth() === 1 && date.getUTCDate() === 29;
}

// Función para contar días excluyendo 29 de febrero
function diasSinHunabKu(fechaInicio: Date, fechaFin: Date): number {
  let dias = 0;
  let actual = new Date(fechaInicio.getTime());

  if (fechaFin.getTime() === fechaInicio.getTime()) {
    return 0;
  }

  if (fechaFin > fechaInicio) {
    while (actual < fechaFin) {
      actual.setUTCDate(actual.getUTCDate() + 1);
      if (!esHunabKu(actual)) {
        dias++;
      }
    }
  } else {
    while (actual > fechaFin) {
      if (!esHunabKu(actual)) {
        dias--;
      }
      actual.setUTCDate(actual.getUTCDate() - 1);
    }
  }
  return dias;
}

// Devuelve una fecha UTC sin horas
function getUTCDateOnly(date: Date): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

// Función principal para calcular Kin con base 1910-01-01 Kin 63
export function kinFromDate(d: Date): Kin {
  const fechaBase = new Date(Date.UTC(1910, 0, 1)); // 1 de enero de 1910
  const kinBase = 63;

  const fechaSeleccionada = getUTCDateOnly(d);

  if (esHunabKu(fechaSeleccionada)) {
    return { num: 0, sello: 0, tono: 0 };
  }

  let dias = diasSinHunabKu(fechaBase, fechaSeleccionada);

  // No sumar 1 aquí, ya que el conteo está corregido
  // if (fechaSeleccionada < fechaBase) {
  //   dias += 1;
  // }

  const num = (((kinBase - 1 + dias) % 260) + 260) % 260 + 1;
  const sello = ((num - 1) % 20) + 1;
  const tono = ((num - 1) % 13) + 1;

  return { num, sello, tono };
}

// Diccionarios para nombres y colores
export const SELLO_NOMBRES = {
  1: 'Dragón', 2: 'Viento', 3: 'Noche', 4: 'Semilla',
  5: 'Serpiente', 6: 'Enlazador', 7: 'Mano', 8: 'Estrella',
  9: 'Luna', 10: 'Perro', 11: 'Mono', 12: 'Humano',
  13: 'Caminante', 14: 'Mago', 15: 'Águila', 16: 'Guerrero',
  17: 'Tierra', 18: 'Espejo', 19: 'Tormenta', 20: 'Sol',
};

export const TONO_NOMBRES = {
  1: 'Magnético', 2: 'Lunar', 3: 'Eléctrico', 4: 'Autoexistente', 5: 'Entonado',
  6: 'Rítmico', 7: 'Resonante', 8: 'Galáctico', 9: 'Solar', 10: 'Planetario',
  11: 'Espectral', 12: 'Cristal', 13: 'Cósmico',
};

export const COLOR_NOMBRES = {
  1: 'Rojo', 2: 'Blanco', 3: 'Azul', 4: 'Amarillo',
};

export function colorFromSello(sello: number): string {
  const colorIndex = ((sello - 1) % 4) + 1;
  return COLOR_NOMBRES[colorIndex as keyof typeof COLOR_NOMBRES];
}
