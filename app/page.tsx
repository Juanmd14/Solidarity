import Link from "next/link";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

interface DevLink {
  href: string;
  label: string;
  route: string;
}

const GROUPS: Array<{ title: string; items: DevLink[] }> = [
  {
    title: "Inicio",
    items: [{ href: "/login", label: "Login", route: "/login" }],
  },
  {
    title: "Vecino",
    items: [
      { href: "/socio/carnet", label: "Carnet digital · al día", route: "/socio/carnet" },
      { href: "/socio/carnet?estado=vencida", label: "Carnet digital · vencida", route: "/socio/carnet?estado=vencida" },
      { href: "/socio/pago", label: "Pagar cuota", route: "/socio/pago" },
      { href: "/socio/promos", label: "Beneficios", route: "/socio/promos" },
      { href: "/socio/promos/p3", label: "Detalle de promo", route: "/socio/promos/[id]" },
    ],
  },
  {
    title: "Comercio",
    items: [
      { href: "/comercio/panel", label: "Panel del comercio", route: "/comercio/panel" },
      { href: "/comercio/promo", label: "Nueva promo", route: "/comercio/promo" },
      { href: "/comercio/scan", label: "Escanear QR", route: "/comercio/scan" },
      {
        href: "/comercio/result?result=al_dia&nombre=Marina+Quiroga&eslabon=00428",
        label: "Verificación · al día",
        route: "/comercio/result",
      },
      {
        href: "/comercio/result?result=vencida&nombre=Luc%C3%ADa+Fern%C3%A1ndez&eslabon=00501",
        label: "Verificación · vencida",
        route: "/comercio/result",
      },
    ],
  },
  {
    title: "Admin",
    items: [
      { href: "/admin/padron", label: "Padrón", route: "/admin/padron" },
      { href: "/admin/alta", label: "Alta de socio", route: "/admin/alta" },
      { href: "/admin/recaudacion", label: "Recaudación", route: "/admin/recaudacion" },
    ],
  },
];

export default function Home() {
  return (
    <PhoneFrame>
      <div className="dev-landing">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <span className="brand-mark">S</span>
            <h1 className="dev-title">Solidarity</h1>
          </div>
          <p className="dev-sub">
            Red solidaria de beneficios · index de pantallas para revisar el diseño.
          </p>
        </div>

        {GROUPS.map((g) => (
          <div key={g.title} className="dev-group">
            <div className="dev-group-title">{g.title}</div>
            {g.items.map((it) => (
              <Link key={it.href} href={it.href} className="dev-link">
                <span>{it.label}</span>
                <small>{it.route}</small>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </PhoneFrame>
  );
}
