import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";

interface ReceiptRow {
  label: string;
  value: string;
  mono?: boolean;
}

interface Props {
  title: string;
  sub: string;
  rows: ReceiptRow[];
  footer?: ReactNode;
}

export function SuccessReceipt({ title, sub, rows, footer }: Props) {
  return (
    <>
      <div className="success-ring">
        <Icon name="check" size={46} stroke={2.6} />
      </div>
      <h2 className="success-title">{title}</h2>
      <p className="success-sub">{sub}</p>
      <div className="receipt">
        {rows.map((r) => (
          <div className="receipt-row" key={r.label}>
            <span>{r.label}</span>
            <b className={r.mono ? "mono" : undefined}>{r.value}</b>
          </div>
        ))}
      </div>
      {footer}
    </>
  );
}
