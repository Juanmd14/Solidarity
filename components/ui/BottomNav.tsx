"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, type IconName } from "./Icon";

export interface BottomNavItem {
  href: string;
  label: string;
  icon: IconName;
}

interface Props {
  items: BottomNavItem[];
}

export function BottomNav({ items }: Props) {
  const pathname = usePathname();
  return (
    <nav className="bottomnav">
      {items.map((it) => {
        const active = pathname === it.href;
        return (
          <Link
            key={it.href}
            href={it.href}
            className={`bn-item ${active ? "active" : ""}`}
          >
            <Icon name={it.icon} size={23} stroke={active ? 2.1 : 1.8} />
            <span>{it.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
