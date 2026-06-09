import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/LinkButton";
import type { ResultadoVerificacion } from "@/lib/types";

interface Props {
  result: ResultadoVerificacion;
  socio: { nombre: string; eslabon: string };
}

export function VerificacionView({ result, socio }: Props) {
  const alDia = result === "al_dia";
  return (
    <div className={`verif-screen ${alDia ? "is-ok" : "is-bad"}`}>
      <div className="verif-inner">
        <div className="verif-ic">
          <Icon name={alDia ? "check" : "close"} size={88} stroke={2.8} />
        </div>
        <div className="verif-head">{alDia ? "SOCIO AL DÍA" : "CUOTA VENCIDA"}</div>
        <div className="verif-sub">
          {alDia ? "Beneficio habilitado" : "No corresponde el beneficio"}
        </div>

        <div className="verif-card">
          <div className="verif-name">{socio.nombre}</div>
          <div className="verif-eslabon">
            Eslabón <b className="mono">{socio.eslabon}</b>
          </div>
        </div>

        <p className="verif-note">
          <Icon name="shield" size={16} /> Verificación de identidad — no es un cobro
        </p>
      </div>
      <div className="verif-foot">
        <LinkButton block lg variant="oncolor" icon="scan" href="/comercio/scan">
          Verificar otro socio
        </LinkButton>
        <Link href="/comercio/panel" className="verif-link">
          Volver al panel
        </Link>
      </div>
    </div>
  );
}
