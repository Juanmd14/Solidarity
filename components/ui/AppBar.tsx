import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

interface Props {
  title: string;
  backHref?: string;
  action?: ReactNode;
}

export function AppBar({ title, backHref, action }: Props) {
  return (
    <div className="appbar">
      {backHref ? (
        <Link href={backHref} className="appbar-btn" aria-label="Volver">
          <Icon name="back" />
        </Link>
      ) : (
        <span className="appbar-brand">
          <span className="brand-mark">S</span>
        </span>
      )}
      <span className="appbar-title">{title}</span>
      <span className="appbar-action">{action}</span>
    </div>
  );
}
