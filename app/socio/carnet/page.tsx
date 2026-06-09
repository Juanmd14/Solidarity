import Link from "next/link";
import { AppBar } from "@/components/ui/AppBar";
import { Icon } from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/LinkButton";
import { Carnet } from "@/components/screens/Carnet";
import { EstadoBanner } from "@/components/screens/EstadoBanner";
import { CURRENT_SOCIO, PROMOS, money } from "@/lib/mock-data";
import { qrSvg } from "@/lib/qr";
import type { EstadoSocio } from "@/lib/types";

interface PageProps {
  searchParams: Promise<{ estado?: string }>;
}

export default async function CarnetPage({ searchParams }: PageProps) {
  const { estado: estadoParam } = await searchParams;
  const estado: EstadoSocio = estadoParam === "vencida" ? "vencida" : "al_dia";

  const socio = { ...CURRENT_SOCIO, estado };
  const alDia = estado === "al_dia";
  const qrValue = `https://solidarity.org/v/${socio.eslabon}`;
  const svg = await qrSvg(qrValue, 172);

  return (
    <div className="screen">
      <AppBar
        title="Mi carnet"
        action={
          <Link href="/login" className="appbar-btn" aria-label="Salir">
            <Icon name="logout" size={20} />
          </Link>
        }
      />
      <div className="screen-pad">
        <Carnet socio={socio} estado={estado} qrSvg={svg} />

        <EstadoBanner estado={estado} vence={socio.vence} cuota={socio.cuota} />

        <LinkButton
          block
          lg
          variant={alDia ? "ghost" : "primary"}
          icon="wallet"
          href="/socio/pago"
        >
          {alDia ? "Pagar próxima cuota" : `Pagar cuota · ${money(socio.cuota)}`}
        </LinkButton>

        <Link href="/socio/promos" className="row-link">
          <span className="row-link-ic">
            <Icon name="gift" size={20} />
          </span>
          <span className="row-link-tx">
            <b>Ver beneficios</b>
            <small>{PROMOS.length} comercios adheridos</small>
          </span>
          <Icon name="chevR" size={18} />
        </Link>
      </div>
    </div>
  );
}
