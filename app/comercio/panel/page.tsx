import Link from "next/link";
import { AppBar } from "@/components/ui/AppBar";
import { Icon } from "@/components/ui/Icon";
import { Monogram } from "@/components/ui/Monogram";
import { Section } from "@/components/ui/Section";
import { CURRENT_COMERCIO, PROMOS, RUBRO_TINT } from "@/lib/mock-data";

export default function ComercioPanelPage() {
  const c = CURRENT_COMERCIO;
  const mias = PROMOS.filter((p) => p.comercio === c.nombre);
  return (
    <div className="screen">
      <AppBar
        title={c.nombre}
        action={
          <Link href="/login" className="appbar-btn" aria-label="Salir">
            <Icon name="logout" size={20} />
          </Link>
        }
      />
      <div className="screen-pad">
        <Link href="/comercio/scan" className="verify-cta">
          <span className="verify-cta-ic">
            <Icon name="scan" size={30} stroke={2} />
          </span>
          <span className="verify-cta-tx">
            <b>Verificar socio</b>
            <small>Escaneá el QR para confirmar si está al día</small>
          </span>
          <Icon name="chevR" size={20} />
        </Link>

        <Section
          action={
            <Link href="/comercio/promo" className="section-add">
              <Icon name="plus" size={18} />
              Nueva
            </Link>
          }
        >
          Mis promociones
        </Section>

        <div className="promo-list">
          {mias.map((p) => (
            <div key={p.id} className="promo-card promo-card-own">
              <Monogram text={c.inicial} tint={RUBRO_TINT[p.rubro]} size={46} />
              <div className="promo-body">
                <div className="promo-shop">{p.promo}</div>
                <div className="promo-deal-sm">{p.detalle}</div>
                <span className="promo-rubro" style={{ color: RUBRO_TINT[p.rubro] }}>
                  {p.rubro} · Activa
                </span>
              </div>
            </div>
          ))}
          <Link href="/comercio/promo" className="promo-add-card">
            <Icon name="plus" size={20} /> Subir una nueva promo
          </Link>
        </div>
      </div>
    </div>
  );
}
