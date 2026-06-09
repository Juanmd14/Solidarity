import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  action?: ReactNode;
}

export function Section({ children, action }: Props) {
  return (
    <div className="section">
      <h3 className="section-title">{children}</h3>
      {action}
    </div>
  );
}
