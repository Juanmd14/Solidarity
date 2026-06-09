"use client";

import Link from "next/link";
import { useState } from "react";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Field, Input } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const ROLES: Array<{ href: string; title: string; sub: string; icon: "user" | "store" | "shield" }> = [
  { href: "/socio/carnet", title: "Vecino", sub: "Acceder a mi carnet y beneficios", icon: "user" },
  { href: "/comercio/panel", title: "Comercio adherido", sub: "Verificar socios y publicar promos", icon: "store" },
  { href: "/admin/padron", title: "Administración", sub: "Padrón y recaudación", icon: "shield" },
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <PhoneFrame>
      <div className="login-screen">
        <div className="login-hero">
          <div className="login-hero-fallback" />
          <div className="login-hero-veil" />
          <div className="login-brand">
            <span className="brand-mark brand-mark-lg">S</span>
            <span className="brand-word">Solidarity</span>
          </div>
          <p className="login-tag">Red solidaria de beneficios — sostené la cadena.</p>
        </div>

        <div className="login-body">
          <h1 className="login-title">Bienvenida de vuelta</h1>
          <p className="login-sub">Ingresá con tu correo para entrar a tu carnet.</p>

          <Field label="Correo electrónico">
            <Input
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="vecino@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>
          <Field label="Contraseña">
            <Input
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>

          <Button block lg onClick={() => {}}>
            Ingresar
          </Button>
          <button className="login-link" type="button">
            ¿Olvidaste tu contraseña?
          </button>

          <div className="login-divider">o entrá como</div>

          <div className="role-cards">
            {ROLES.map((r) => (
              <Link key={r.href} href={r.href} className="role-card">
                <span className="role-ic">
                  <Icon name={r.icon} size={22} />
                </span>
                <span className="role-tx">
                  <b>{r.title}</b>
                  <small>{r.sub}</small>
                </span>
                <Icon name="chevR" size={20} className="role-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
