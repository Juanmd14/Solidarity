import { VerificacionView } from "@/components/screens/VerificacionView";
import type { ResultadoVerificacion } from "@/lib/types";

interface PageProps {
  searchParams: Promise<{
    result?: string;
    nombre?: string;
    eslabon?: string;
  }>;
}

export default async function ResultPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const result: ResultadoVerificacion = sp.result === "vencida" ? "vencida" : "al_dia";
  const socio = {
    nombre: sp.nombre ?? "Marina Quiroga",
    eslabon: sp.eslabon ?? "00428",
  };
  return <VerificacionView result={result} socio={socio} />;
}
