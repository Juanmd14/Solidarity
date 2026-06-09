export type EstadoSocio = "al_dia" | "vencida" | "inactivo";

export type Rubro =
  | "Gastronomía"
  | "Salud"
  | "Almacén"
  | "Bienestar"
  | "Hogar"
  | "Indumentaria";

export type RubroFiltro = "Todos" | Rubro;

export type PadronFiltro = "Todos" | "Al día" | "Vencida" | "Inactivo";

export type Method = "tarjeta" | "mp" | "transfer";

export type ResultadoVerificacion = "al_dia" | "vencida";

export interface Socio {
  nombre: string;
  apellido: string;
  dni: string;
  eslabon: string;
  estado: EstadoSocio;
  desde: string;
  vence: string;
  cuota: number;
  email: string;
}

export interface Comercio {
  nombre: string;
  rubro: Rubro;
  inicial: string;
}

export interface PadronEntry {
  nombre: string;
  dni: string;
  eslabon: string;
  estado: EstadoSocio;
}

export interface Promo {
  id: string;
  comercio: string;
  inicial: string;
  rubro: Rubro;
  promo: string;
  detalle: string;
}

export interface Recaudacion {
  mesActual: string;
  total: number;
  sociosAlDia: number;
  sociosTotales: number;
  destinadoAyuda: number;
  meses: Array<{ m: string; v: number }>;
}
