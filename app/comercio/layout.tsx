import type { ReactNode } from "react";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

export default function ComercioLayout({ children }: { children: ReactNode }) {
  return <PhoneFrame>{children}</PhoneFrame>;
}
