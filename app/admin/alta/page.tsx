"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AppBar } from "@/components/ui/AppBar";
import { Button } from "@/components/ui/Button";
import { LinkButton } from "@/components/ui/LinkButton";
import { Field, Input } from "@/components/ui/Field";
import { StatusPill } from "@/components/ui/StatusPill";
import { Icon } from "@/components/ui/Icon";

interface FormState {
  nombre: string;
  apellido: string;
  dni: string;
  eslabon: string;
}

export default function AltaPage() {
  const router = useRouter();
  const [f, setF] = useState<FormState>({
    nombre: "",
    apellido: "",
    dni: "",
    eslabon: "00713",
  });
  const [done, setDone] = useState(false);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setF((s) => ({ ...s, [k]: e.target.value }));

  if (done) {
    return (
      <div className="screen">
        <AppBar title="Alta de socio" backHref="/admin/padron" />
        <div className="screen-pad success-wrap">
          <div className="success-ring">
            <Icon name="check" size={46} stroke={2.6} />
          </div>
          <h2 className="success-title">Socio dado de alta</h2>
          <p className="success-sub">Se sumó un nuevo eslabón a la cadena.</p>
          <div className="receipt">
            <div className="receipt-row">
              <span>Nombre</span>
              <b>
                {f.nombre || "—"} {f.apellido}
              </b>
            </div>
            <div className="receipt-row">
              <span>DNI</span>
              <b>{f.dni || "—"}</b>
            </div>
            <div className="receipt-row">
              <span>N° de eslabón</span>
              <b className="mono">{f.eslabon}</b>
            </div>
            <div className="receipt-row">
              <span>Estado</span>
              <b>
                <StatusPill estado="vencida" />
              </b>
            </div>
          </div>
          <LinkButton block lg href="/admin/padron">
            Volver al padrón
          </LinkButton>
        </div>
      </div>
    );
  }

  return (
    <div className="screen">
      <AppBar title="Alta de socio" backHref="/admin/padron" />
      <div className="screen-pad">
        <p className="form-intro">
          Cargá los datos del nuevo vecino. El número de eslabón es único e identifica al socio.
        </p>
        <div className="field-2col">
          <Field label="Nombre">
            <Input value={f.nombre} onChange={set("nombre")} placeholder="Marina" />
          </Field>
          <Field label="Apellido">
            <Input value={f.apellido} onChange={set("apellido")} placeholder="Quiroga" />
          </Field>
        </div>
        <Field label="DNI">
          <Input
            value={f.dni}
            onChange={set("dni")}
            placeholder="34.221.908"
            inputMode="numeric"
          />
        </Field>
        <Field label="N° de eslabón" hint="Sugerido automáticamente. Debe ser único.">
          <div className="eslabon-input">
            <span className="eslabon-hash">#</span>
            <Input className="input mono" value={f.eslabon} onChange={set("eslabon")} />
          </div>
        </Field>
      </div>
      <div className="screen-foot screen-foot-2">
        <Button variant="ghost" onClick={() => router.push("/admin/padron")}>
          Cancelar
        </Button>
        <Button block onClick={() => setDone(true)}>
          Dar de alta
        </Button>
      </div>
    </div>
  );
}
