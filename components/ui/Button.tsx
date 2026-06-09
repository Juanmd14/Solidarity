import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "ghost" | "oncolor";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  block?: boolean;
  lg?: boolean;
  icon?: IconName;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  block,
  lg,
  icon,
  children,
  className = "",
  type = "button",
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
    <button type={type} className={classes} {...rest}>
      {icon && <Icon name={icon} size={lg ? 21 : 19} />}
      {children}
    </button>
  );
}
