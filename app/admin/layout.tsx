"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { BottomNav, type BottomNavItem } from "@/components/ui/BottomNav";

const ITEMS: BottomNavItem[] = [
  { href: "/admin/padron", label: "Padrón", icon: "users" },
  { href: "/admin/recaudacion", label: "Recaudación", icon: "chart" },
];

const NAV_ON: string[] = ["/admin/padron", "/admin/recaudacion"];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showNav = pathname ? NAV_ON.includes(pathname) : false;
  return (
    <PhoneFrame>
      {children}
      {showNav && <BottomNav items={ITEMS} />}
    </PhoneFrame>
  );
}
