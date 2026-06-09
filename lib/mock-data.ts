import type {
  Comercio,
  PadronEntry,
  Promo,
  Recaudacion,
  Rubro,
  RubroFiltro,
  Socio,
} from "./types";

export const CUOTA = 3500;

export const CURRENT_SOCIO: Socio = {
  nombre: "Marina",
  apellido: "Quiroga",
  dni: "34.221.908",
  eslabon: "00428",
  estado: "al_dia",
  desde: "Marzo 2024",
  vence: "30 Jun 2026",
  cuota: CUOTA,
  email: "marina.quiroga@mail.com",
};

export const CURRENT_COMERCIO: Comercio = {
  nombre: "Panadería La Espiga",
  rubro: "Gastronomía",
  inicial: "LE",
};

export const PADRON: PadronEntry[] = [
  { nombre: "Marina Quiroga", dni: "34.221.908", eslabon: "00428", estado: "al_dia" },
  { nombre: "Carlos Méndez", dni: "28.119.440", eslabon: "00312", estado: "al_dia" },
  { nombre: "Lucía Fernández", dni: "39.882.106", eslabon: "00501", estado: "vencida" },
  { nombre: "Jorge Ramírez", dni: "22.540.771", eslabon: "00187", estado: "al_dia" },
  { nombre: "Sofía Castro", dni: "41.003.298", eslabon: "00622", estado: "vencida" },
  { nombre: "Diego Sosa", dni: "20.118.633", eslabon: "00076", estado: "al_dia" },
  { nombre: "Valentina Ruiz", dni: "38.776.012", eslabon: "00489", estado: "al_dia" },
  { nombre: "Hernán Gómez", dni: "25.640.917", eslabon: "00254", estado: "inactivo" },
];

export const PROMOS: Promo[] = [
  {
    id: "p1",
    comercio: "Almacén Don Pepe",
    inicial: "DP",
    rubro: "Almacén",
    promo: "15% en la compra total",
    detalle: "Válido de lunes a viernes, presentando el carnet digital.",
  },
  {
    id: "p2",
    comercio: "Panadería La Espiga",
    inicial: "LE",
    rubro: "Gastronomía",
    promo: "2x1 en facturas por la mañana",
    detalle: "De 8 a 11 hs. No acumulable con otras promociones.",
  },
  {
    id: "p3",
    comercio: "Farmacia Sur",
    inicial: "FS",
    rubro: "Salud",
    promo: "20% en perfumería",
    detalle: "Excepto medicamentos. Tope de $20.000 por compra.",
  },
  {
    id: "p4",
    comercio: "Café Tostado",
    inicial: "CT",
    rubro: "Gastronomía",
    promo: "Café gratis con cada combo",
    detalle: "Un café de filtrado por combo. Para llevar o en salón.",
  },
  {
    id: "p5",
    comercio: "Óptica Visión",
    inicial: "OV",
    rubro: "Salud",
    promo: "30% en armazones",
    detalle: "En armazones seleccionados. Consultá stock en local.",
  },
  {
    id: "p6",
    comercio: "Gimnasio Energía",
    inicial: "GE",
    rubro: "Bienestar",
    promo: "1ª semana gratis + 25%",
    detalle: "Sobre el plan mensual. Solo nuevos ingresos.",
  },
  {
    id: "p7",
    comercio: "Verdulería El Jardín",
    inicial: "EJ",
    rubro: "Almacén",
    promo: "10% pagando en efectivo",
    detalle: "Todos los días. Acumulable con ofertas del día.",
  },
  {
    id: "p8",
    comercio: "Librería Atril",
    inicial: "AT",
    rubro: "Hogar",
    promo: "15% en útiles escolares",
    detalle: "Temporada escolar. No incluye electrónica.",
  },
];

export const RUBROS: RubroFiltro[] = [
  "Todos",
  "Gastronomía",
  "Salud",
  "Almacén",
  "Bienestar",
  "Hogar",
];

export const RECAUDACION: Recaudacion = {
  mesActual: "Junio 2026",
  total: 1246000,
  sociosAlDia: 356,
  sociosTotales: 412,
  destinadoAyuda: 872000,
  meses: [
    { m: "Ene", v: 980 },
    { m: "Feb", v: 1010 },
    { m: "Mar", v: 1095 },
    { m: "Abr", v: 1140 },
    { m: "May", v: 1198 },
    { m: "Jun", v: 1246 },
  ],
};

export const RUBRO_TINT: Record<Rubro, string> = {
  Gastronomía: "#C77B3B",
  Salud: "#3E8E84",
  Almacén: "#A8743F",
  Bienestar: "#8A6BB0",
  Hogar: "#B06A57",
  Indumentaria: "#5E82A8",
};

export function money(n: number): string {
  return "$" + n.toLocaleString("es-AR");
}
