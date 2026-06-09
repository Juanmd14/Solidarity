"use client";

import Link from "next/link";
import { useState } from "react";
import { AppBar } from "@/components/ui/AppBar";
import { Icon } from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { PadronRow } from "@/components/screens/PadronRow";
import { PADRON, RECAUDACION, money } from "@/lib/mock-data";
import type { EstadoSocio, PadronFiltro } from "@/lib/types";

const FILTRO_MAP: Record<PadronFiltro, EstadoSocio | null> = {
  Todos: null,
  "Al día": "al_dia",
  Vencida: "vencida",
  Inactivo: "inactivo",
};
const FILTROS: PadronFiltro[] = ["Todos", "Al día", "Vencida", "Inactivo"];

export default function PadronPage() {
  const [filtro, setFiltro] = useState<PadronFiltro>("Todos");
  const [q, setQ] = useState("");
  const r = RECAUDACION;

  const targetEstado = FILTRO_MAP[filtro];
  const list = PADRON.filter(
    (p) =>
      (targetEstado === null || p.estado === targetEstado) &&
      (q === "" ||
        (p.nombre + p.dni + p.eslabon).toLowerCase().includes(q.toLowerCase())),
  );

  return (
    <div className="screen">
      <AppBar
        title="Administración"
        action={
          <Link href="/login" className="appbar-btn" aria-label="Salir">
            <Icon name="logout" size={20} />
          </Link>
        }
      />
      <div className="screen-pad">
        <Link href="/admin/recaudacion" className="recaud-stat">
          <div className="recaud-stat-main">
            <span className="recaud-stat-lbl">Recaudación · {r.mesActual}</span>
            <span className="recaud-stat-num">{money(r.total)}</span>
          </div>
          <div className="recaud-stat-side">
            <span className="recaud-mini">
              <b>{r.sociosAlDia}</b>
              <small>al día</small>
            </span>
            <span className="recaud-mini">
              <b>{r.sociosTotales}</b>
              <small>socios</small>
            </span>
            <Icon name="chevR" size={18} />
          </div>
        </Link>

        <LinkButton block lg icon="plus" href="/admin/alta">
          Alta de socio
        </LinkButton>

        <Section action={<span className="section-count">{list.length}</span>}>
          Padrón de socios
        </Section>
        <div className="searchbar">
          <Icon name="search" size={19} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por nombre, DNI o eslabón"
          />
        </div>
        <div className="chips-scroll">
          {FILTROS.map((f) => (
            <button
              key={f}
              className={`chip ${filtro === f ? "sel" : ""}`}
              onClick={() => setFiltro(f)}
              type="button"
            >
              {f}
            </button>
          ))}
        </div>

        <div className="padron">
          {list.map((p) => (
            <PadronRow key={p.eslabon} entry={p} />
          ))}
          {list.length === 0 && <div className="empty">Sin resultados.</div>}
        </div>
      </div>
    </div>
  );
}
