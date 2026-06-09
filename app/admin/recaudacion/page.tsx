import { AppBar } from "@/components/ui/AppBar";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { RECAUDACION, money } from "@/lib/mock-data";

export default function RecaudacionPage() {
  const r = RECAUDACION;
  const max = Math.max(...r.meses.map((m) => m.v));
  const porcentajeAlDia = Math.round((r.sociosAlDia / r.sociosTotales) * 100);

  return (
    <div className="screen">
      <AppBar title="Recaudación" backHref="/admin/padron" />
      <div className="screen-pad">
        <div className="recaud-hero">
          <span className="recaud-hero-lbl">Total recaudado · {r.mesActual}</span>
          <span className="recaud-hero-num">{money(r.total)}</span>
          <div className="recaud-hero-split">
            <span>
              <b>{r.sociosAlDia}</b> socios al día
            </span>
            <span className="dot-sep">·</span>
            <span>{porcentajeAlDia}% del padrón</span>
          </div>
        </div>

        <div className="ayuda-card">
          <div className="ayuda-ic">
            <Icon name="heart" size={22} />
          </div>
          <div className="ayuda-tx">
            <span className="ayuda-num">{money(r.destinadoAyuda)}</span>
            <span className="ayuda-lbl">destinados a ayuda este mes</span>
          </div>
        </div>

        <Section>Últimos 6 meses</Section>
        <div className="bars">
          {r.meses.map((m) => (
            <div key={m.m} className="bar-col">
              <div className="bar-track">
                <div
                  className={`bar-fill ${m.m === "Jun" ? "cur" : ""}`}
                  style={{ height: `${(m.v / max) * 100}%` }}
                />
              </div>
              <span className="bar-lbl">{m.m}</span>
            </div>
          ))}
        </div>
        <p className="bars-cap">
          En miles de pesos · crecimiento sostenido del padrón activo.
        </p>
      </div>
    </div>
  );
}
