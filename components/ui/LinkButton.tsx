import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "ghost" | "oncolor";

interface Props extends Omit<LinkProps, "children"> {
  variant?: Variant;
  block?: boolean;
  lg?: boolean;
  icon?: IconName;
  className?: string;
  children: ReactNode;
}

export function LinkButton({
  variant = "primary",
  block,
  lg,
  icon,
  children,
  className = "",
  ...rest
}: Props) {
  const classes = [
    "btn",
    `btn-${variant}`,
    block ? "btn-block" : "",
    lg ? "btn-lg" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <Link className={classes} {...rest}>
      {icon && <Icon name={icon} size={lg ? 21 : 19} />}
      {children}
    </Link>
  );
}
