"use client";

import { useState } from "react";
import { AppBar } from "@/components/ui/AppBar";
import { Button } from "@/components/ui/Button";
import { LinkButton } from "@/components/ui/LinkButton";
import { Field, Input } from "@/components/ui/Field";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SuccessReceipt } from "@/components/screens/SuccessReceipt";
import { CURRENT_SOCIO, money } from "@/lib/mock-data";
import type { Method } from "@/lib/types";

const METHODS: Array<{ k: Method; label: string; ic: "card" | "wallet" | "link" }> = [
  { k: "tarjeta", label: "Tarjeta", ic: "card" },
  { k: "mp", label: "Mercado Pago", ic: "wallet" },
  { k: "transfer", label: "Transferencia", ic: "link" },
];

export default function PagoPage() {
  const s = CURRENT_SOCIO;
  const [method, setMethod] = useState<Method>("tarjeta");
  const [paid, setPaid] = useState(false);

  if (paid) {
    return (
      <div className="screen">
        <AppBar title="Pago" backHref="/socio/carnet" />
        <div className="screen-pad success-wrap">
          <SuccessReceipt
            title="¡Cuota pagada!"
            sub="Ya estás al día. Gracias por sostener la cadena."
            rows={[
              { label: "Período", value: "Junio 2026" },
              { label: "Monto", value: money(s.cuota) },
              { label: "Eslabón", value: s.eslabon, mono: true },
              { label: "Próximo vencimiento", value: "31 Jul 2026" },
            ]}
            footer={
              <LinkButton block lg href="/socio/carnet">
                Volver al carnet
              </LinkButton>
            }
          />
        </div>
      </div>
    );
  }

  return (
    <div className="screen">
      <AppBar title="Pagar cuota" backHref="/socio/carnet" />
      <div className="screen-pad">
        <div className="pay-amount">
          <span className="pay-amount-lbl">Cuota mensual · Junio 2026</span>
          <span className="pay-amount-num">{money(s.cuota)}</span>
          <span className="pay-amount-meta">
            {s.nombre} {s.apellido} · eslabón <b className="mono">{s.eslabon}</b>
          </span>
        </div>

        <div className="pay-help">
          <Icon name="heart" size={18} />
          <span>Tu cuota financia la ayuda a vecinos que lo necesitan.</span>
        </div>

        <Section>Medio de pago</Section>
        <div className="method-grid">
          {METHODS.map((m) => (
            <button
              key={m.k}
              className={`method ${method === m.k ? "sel" : ""}`}
              onClick={() => setMethod(m.k)}
              type="button"
            >
              <Icon name={m.ic} size={22} />
              <span>{m.label}</span>
            </button>
          ))}
        </div>

        {method === "tarjeta" && (
          <div className="pay-card-fields">
            <Field label="Número de tarjeta">
              <Input placeholder="•••• •••• •••• ••••" inputMode="numeric" />
            </Field>
            <div className="field-2col">
              <Field label="Vencimiento">
                <Input placeholder="MM/AA" inputMode="numeric" />
              </Field>
              <Field label="CVV">
                <Input placeholder="•••" inputMode="numeric" />
              </Field>
            </div>
            <Field label="Titular">
              <Input placeholder="Nombre y apellido" />
            </Field>
          </div>
        )}
        {method === "mp" && (
          <div className="pay-note">Te vamos a redirigir a Mercado Pago para completar el pago.</div>
        )}
        {method === "transfer" && (
          <div className="pay-note">
            CBU <b className="mono">000 0000 0000 0000 0000 00</b>
            <br />
            Alias <b>solidarity.cuota</b>
          </div>
        )}
      </div>
      <div className="screen-foot">
        <Button block lg onClick={() => setPaid(true)}>
          Pagar {money(s.cuota)}
        </Button>
      </div>
    </div>
  );
}
