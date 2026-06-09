"use client";

import { useState } from "react";
import { AppBar } from "@/components/ui/AppBar";
import { Icon } from "@/components/ui/Icon";
import { PromoCard } from "@/components/screens/PromoCard";
import { PROMOS, RUBROS } from "@/lib/mock-data";
import type { RubroFiltro } from "@/lib/types";

export default function PromosPage() {
  const [rubro, setRubro] = useState<RubroFiltro>("Todos");
  const [q, setQ] = useState("");

  const list = PROMOS.filter(
    (p) =>
      (rubro === "Todos" || p.rubro === rubro) &&
      (q === "" || (p.comercio + p.promo).toLowerCase().includes(q.toLowerCase())),
  );

  return (
    <div className="screen">
      <AppBar title="Beneficios" />
      <div className="screen-pad">
        <div className="searchbar">
          <Icon name="search" size={19} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar comercio o promo"
          />
        </div>
        <div className="chips-scroll">
          {RUBROS.map((r) => (
            <button
              key={r}
              className={`chip ${rubro === r ? "sel" : ""}`}
              onClick={() => setRubro(r)}
              type="button"
            >
              {r}
            </button>
          ))}
        </div>

        <div className="promo-list">
          {list.map((p) => (
            <PromoCard key={p.id} promo={p} href={`/socio/promos/${p.id}`} />
          ))}
          {list.length === 0 && <div className="empty">No hay promos para ese filtro.</div>}
        </div>
      </div>
    </div>
  );
}
