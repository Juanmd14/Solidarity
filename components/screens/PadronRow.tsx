import type { PadronEntry } from "@/lib/types";
import { Monogram } from "@/components/ui/Monogram";
import { StatusPill } from "@/components/ui/StatusPill";

interface Props {
  entry: PadronEntry;
}

export function PadronRow({ entry }: Props) {
  const initials = entry.nombre
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="padron-row">
      <Monogram text={initials} size={42} />
      <div className="padron-body">
        <div className="padron-name">{entry.nombre}</div>
        <div className="padron-meta">
          <span className="mono">#{entry.eslabon}</span> · DNI {entry.dni}
        </div>
      </div>
      <StatusPill estado={entry.estado} />
    </div>
  );
}
