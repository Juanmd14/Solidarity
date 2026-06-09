import type { EstadoSocio } from "@/lib/types";

const MAP: Record<EstadoSocio, { cls: string; label: string }> = {
  al_dia: { cls: "pill-ok", label: "Al día" },
  vencida: { cls: "pill-bad", label: "Cuota vencida" },
  inactivo: { cls: "pill-idle", label: "Inactivo" },
};

interface Props {
  estado: EstadoSocio;
  size?: "md" | "lg";
}

export function StatusPill({ estado, size = "md" }: Props) {
  const m = MAP[estado];
  return (
    <span className={`pill ${m.cls} ${size === "lg" ? "pill-lg" : ""}`}>
      <span className="pill-dot" />
      {m.label}
    </span>
  );
}
