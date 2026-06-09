import Link from "next/link";
import type { Promo } from "@/lib/types";
import { Icon } from "@/components/ui/Icon";
import { Monogram } from "@/components/ui/Monogram";
import { RUBRO_TINT } from "@/lib/mock-data";

interface Props {
  promo: Promo;
  href?: string;
  own?: boolean;
}

export function PromoCard({ promo, href, own }: Props) {
  const tint = RUBRO_TINT[promo.rubro];
  const content = (
    <>
      <Monogram text={promo.inicial} tint={tint} size={46} />
      <div className="promo-body">
        <div className="promo-shop">{promo.comercio}</div>
        <div className="promo-deal">{promo.promo}</div>
        <span className="promo-rubro" style={{ color: tint }}>
          {promo.rubro}
        </span>
      </div>
      {!own && <Icon name="chevR" size={18} className="promo-arrow" />}
    </>
  );

  if (own || !href) {
    return <div className={`promo-card ${own ? "promo-card-own" : ""}`}>{content}</div>;
  }
  return (
    <Link href={href} className="promo-card">
      {content}
    </Link>
  );
}
