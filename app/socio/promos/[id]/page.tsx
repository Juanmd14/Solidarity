import { notFound } from "next/navigation";
import { AppBar } from "@/components/ui/AppBar";
import { Icon } from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/LinkButton";
import { Monogram } from "@/components/ui/Monogram";
import { PROMOS, RUBRO_TINT } from "@/lib/mock-data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PromoDetailPage({ params }: PageProps) {
  const { id } = await params;
  const p = PROMOS.find((x) => x.id === id);
  if (!p) notFound();

  const tint = RUBRO_TINT[p.rubro];

  return (
    <div className="screen">
      <AppBar title={p.rubro} backHref="/socio/promos" />
      <div className="screen-pad">
        <div className="promo-detail-head" style={{ background: tint + "14" }}>
          <Monogram text={p.inicial} tint={tint} size={64} />
          <div className="promo-detail-deal" style={{ color: tint }}>
            {p.promo}
          </div>
          <div className="promo-detail-shop">{p.comercio}</div>
        </div>
        <p className="promo-detail-text">{p.detalle}</p>
        <div className="info-row">
          <Icon name="store" size={19} />
          <span>Av. San Martín 1240</span>
        </div>
        <div className="info-row">
          <Icon name="clock" size={19} />
          <span>Lun a Sáb · 9 a 20 hs</span>
        </div>
        <div className="promo-cta">
          <LinkButton block lg icon="qr" href="/socio/carnet">
            Mostrar mi carnet
          </LinkButton>
          <p className="promo-cta-hint">Presentá tu QR para acceder al beneficio</p>
        </div>
      </div>
    </div>
  );
}
