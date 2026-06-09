import type { EstadoSocio } from "@/lib/types";
import { Icon } from "@/components/ui/Icon";
import { StatusPill } from "@/components/ui/StatusPill";
import { money } from "@/lib/mock-data";

interface Props {
  estado: EstadoSocio;
  vence: string;
  cuota: number;
}

export function EstadoBanner({ estado, vence, cuota }: Props) {
  const alDia = estado === "al_dia";
  return (
    <div className={`estado-banner ${alDia ? "is-ok" : "is-bad"}`}>
      <div className="estado-ic">
        <Icon name={alDia ? "check" : "clock"} size={26} stroke={2.4} />
      </div>
      <div className="estado-tx">
        <span className="estado-lead">{alDia ? "Estás al día" : "Tu cuota venció"}</span>
        <span className="estado-sub">
          {alDia ? `Próximo vencimiento · ${vence}` : `Cuota de ${money(cuota)} pendiente`}
        </span>
      </div>
      <StatusPill estado={estado} />
    </div>
  );
}
