"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AppBar } from "@/components/ui/AppBar";
import { Button } from "@/components/ui/Button";
import { Field, Input, Textarea } from "@/components/ui/Field";
import { SelectRow } from "@/components/ui/SelectRow";
import { RUBROS } from "@/lib/mock-data";

const VIGENCIAS = ["Sin vencimiento", "Fin de mes", "30 días", "90 días"];

export default function NuevaPromoPage() {
  const router = useRouter();
  const [titulo, setTitulo] = useState("");
  const [desc, setDesc] = useState("");
  const [rubro, setRubro] = useState("");
  const [vig, setVig] = useState("");

  const rubroOpts = RUBROS.filter((r) => r !== "Todos");

  return (
    <div className="screen">
      <AppBar title="Nueva promo" backHref="/comercio/panel" />
      <div className="screen-pad">
        <Field label="Título de la promo">
          <Input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ej: 15% en la compra total"
          />
        </Field>
        <Field label="Descripción" hint="Condiciones, horarios y restricciones.">
          <Textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows={4}
            placeholder="Contale al vecino cómo aprovechar el beneficio…"
          />
        </Field>
        <Field label="Rubro">
          <SelectRow
            label="Elegí un rubro"
            value={rubro}
            options={rubroOpts}
            onChange={setRubro}
          />
        </Field>
        <Field label="Vigencia">
          <SelectRow
            label="¿Hasta cuándo?"
            value={vig}
            options={VIGENCIAS}
            onChange={setVig}
          />
        </Field>
      </div>
      <div className="screen-foot screen-foot-2">
        <Button variant="ghost" onClick={() => router.push("/comercio/panel")}>
          Cancelar
        </Button>
        <Button block onClick={() => router.push("/comercio/panel")}>
          Guardar promo
        </Button>
      </div>
    </div>
  );
}
