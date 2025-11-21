export type Kin = {
  num: number;
  sello: number;
  tono: number;
};

const FECHA_BASE = new Date(Date.UTC(1910, 0, 1)); // Kin 63
const KIN_BASE = 63;

const esHunabKu = (date: Date): boolean =>
  date.getUTCMonth() === 1 && date.getUTCDate() === 29;

const utcDateOnly = (date: Date): Date =>
  new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));

const diasSinHunabKu = (inicio: Date, fin: Date): number => {
  let dias = 0;
  const actual = new Date(inicio);

  if (fin.getTime() === inicio.getTime()) {
    return 0;
  }

  if (fin > inicio) {
    while (actual < fin) {
      actual.setUTCDate(actual.getUTCDate() + 1);
      if (!esHunabKu(actual)) dias++;
    }
  } else {
    while (actual > fin) {
      if (!esHunabKu(actual)) dias--;
      actual.setUTCDate(actual.getUTCDate() - 1);
    }
  }
  return dias;
};

export const kinFromDate = (input: Date): Kin => {
  const fecha = utcDateOnly(input);
  if (esHunabKu(fecha)) {
    return { num: 0, sello: 0, tono: 0 };
  }

  const dias = diasSinHunabKu(FECHA_BASE, fecha);
  const num = (((KIN_BASE - 1 + dias) % 260) + 260) % 260 + 1;
  const sello = ((num - 1) % 20) + 1;
  const tono = ((num - 1) % 13) + 1;

  return { num, sello, tono };
};

export const formatKin = (kin: Kin): string =>
  `Kin ${kin.num} · Sello ${kin.sello} · Tono ${kin.tono}`;
