import type { EstadoSocio, Socio } from "@/lib/types";
import { QR } from "@/components/ui/QR";

interface Props {
  socio: Socio;
  estado: EstadoSocio;
  qrSvg: string;
}

export function Carnet({ socio, estado, qrSvg }: Props) {
  const alDia = estado === "al_dia";
  const initials = `${socio.nombre[0] ?? ""}${socio.apellido[0] ?? ""}`.toUpperCase();
  return (
    <div className={`carnet ${alDia ? "is-ok" : "is-bad"}`}>
      <div className="carnet-top">
        <span className="carnet-brand">
          <span className="brand-mark brand-mark-sm">S</span>
          Solidarity
        </span>
        <span className="carnet-chip">Socio vecino</span>
      </div>
      <div className="carnet-id">
        <div className="carnet-avatar" aria-label="Foto del socio">
          {initials}
        </div>
        <div>
          <div className="carnet-name">
            {socio.nombre} {socio.apellido}
          </div>
          <div className="carnet-since">Eslabón desde {socio.desde}</div>
        </div>
      </div>
      <div className="carnet-eslabon">
        <span className="carnet-eslabon-lbl">N° de eslabón</span>
        <span className="carnet-eslabon-num mono">{socio.eslabon}</span>
      </div>
      <div className="carnet-qr-wrap">
        <QR svg={qrSvg} size={172} />
        <p className="carnet-qr-hint">Mostrá este QR en el comercio adherido</p>
      </div>
    </div>
  );
}
