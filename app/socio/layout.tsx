"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { BottomNav, type BottomNavItem } from "@/components/ui/BottomNav";

const ITEMS: BottomNavItem[] = [
  { href: "/socio/carnet", label: "Carnet", icon: "card" },
  { href: "/socio/promos", label: "Beneficios", icon: "gift" },
];

const NAV_ON: string[] = ["/socio/carnet", "/socio/promos"];

export default function SocioLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showNav = pathname ? NAV_ON.includes(pathname) : false;
  return (
    <PhoneFrame>
      {children}
      {showNav && <BottomNav items={ITEMS} />}
    </PhoneFrame>
  );
}
