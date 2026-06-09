import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

const RESULT_OK = "/comercio/result?result=al_dia&nombre=Marina+Quiroga&eslabon=00428";
const RESULT_BAD = "/comercio/result?result=vencida&nombre=Luc%C3%ADa+Fern%C3%A1ndez&eslabon=00501";

export default function ScanPage() {
  return (
    <div className="screen scan-screen">
      <div className="scan-cam">
        <Link href="/comercio/panel" className="scan-back" aria-label="Volver">
          <Icon name="back" size={22} />
        </Link>
        <div className="scan-reticle">
          <span className="r-c r-tl" />
          <span className="r-c r-tr" />
          <span className="r-c r-bl" />
          <span className="r-c r-br" />
          <div className="scan-line" />
        </div>
        <p className="scan-help">Apuntá la cámara al QR del carnet del socio</p>
        <div className="scan-demo">
          <span className="scan-demo-lbl">Demo · simular lectura</span>
          <div className="scan-demo-btns">
            <Link href={RESULT_OK} className="scan-demo-ok">
              <Icon name="check" size={18} /> Socio al día
            </Link>
            <Link href={RESULT_BAD} className="scan-demo-bad">
              <Icon name="close" size={18} /> Socio vencido
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
