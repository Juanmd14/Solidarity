import type { CSSProperties, ReactNode } from "react";

export type IconName =
  | "back"
  | "chevR"
  | "chevD"
  | "chevU"
  | "plus"
  | "close"
  | "check"
  | "card"
  | "qr"
  | "scan"
  | "gift"
  | "store"
  | "users"
  | "wallet"
  | "chart"
  | "gear"
  | "menu"
  | "search"
  | "user"
  | "logout"
  | "heart"
  | "link"
  | "clock"
  | "shield"
  | "camera"
  | "trash";

const PATHS: Record<IconName, ReactNode> = {
  back: <polyline points="15 5 8 12 15 19" />,
  chevR: <polyline points="9 5 16 12 9 19" />,
  chevD: <polyline points="5 9 12 16 19 9" />,
  chevU: <polyline points="5 15 12 8 19 15" />,
  plus: (
    <>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </>
  ),
  close: (
    <>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </>
  ),
  check: <polyline points="4 12 10 18 20 6" />,
  card: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2.5" />
      <line x1="3" y1="10.5" x2="21" y2="10.5" />
    </>
  ),
  qr: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <line x1="14" y1="14" x2="14" y2="20" />
      <line x1="17.5" y1="14" x2="17.5" y2="17.5" />
      <line x1="20" y1="14" x2="20" y2="20" />
      <line x1="14" y1="20" x2="20" y2="20" />
    </>
  ),
  scan: (
    <>
      <path d="M4 8V6a2 2 0 0 1 2-2h2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M20 16v2a2 2 0 0 1-2 2h-2" />
      <path d="M8 20H6a2 2 0 0 1-2-2v-2" />
      <line x1="4" y1="12" x2="20" y2="12" />
    </>
  ),
  gift: (
    <>
      <rect x="4" y="9" width="16" height="11" rx="1.5" />
      <line x1="4" y1="13" x2="20" y2="13" />
      <line x1="12" y1="9" x2="12" y2="20" />
      <path d="M12 9C12 6.5 10.5 5 9 5a2 2 0 0 0 0 4z" />
      <path d="M12 9c0-2.5 1.5-4 3-4a2 2 0 0 1 0 4z" />
    </>
  ),
  store: (
    <>
      <path d="M4 9.5 5.2 5h13.6L20 9.5" />
      <path d="M4 9.5a2.4 2.4 0 0 0 4.8 0 2.4 2.4 0 0 0 4.8 0 2.4 2.4 0 0 0 4.8 0" />
      <path d="M5.2 11v8.5h13.6V11" />
      <line x1="5.2" y1="19.5" x2="18.8" y2="19.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6" />
      <path d="M17 14.2a5.5 5.5 0 0 1 3.5 4.8" />
    </>
  ),
  wallet: (
    <>
      <rect x="3.5" y="6" width="17" height="13" rx="2.5" />
      <path d="M16 12.5h1.5" />
      <path d="M3.5 9h13a1.5 1.5 0 0 1 0 0" />
    </>
  ),
  chart: (
    <>
      <line x1="5" y1="20" x2="19" y2="20" />
      <rect x="6" y="12" width="3" height="6" rx="1" />
      <rect x="11" y="8" width="3" height="10" rx="1" />
      <rect x="16" y="5" width="3" height="13" rx="1" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.5 1.5M16.5 16.5 18 18M18 6l-1.5 1.5M7.5 16.5 6 18" />
    </>
  ),
  menu: (
    <>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <line x1="15.5" y1="15.5" x2="20" y2="20" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
  logout: (
    <>
      <path d="M14 5H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8" />
      <polyline points="16 8 20 12 16 16" />
      <line x1="20" y1="12" x2="9" y2="12" />
    </>
  ),
  heart: <path d="M12 20s-7-4.3-9.2-8.6C1.3 8.5 2.8 5 6 5c2 0 3.2 1.4 4 2.6C10.8 6.4 12 5 14 5c3.2 0 4.7 3.5 3.2 6.4C19 15.7 12 20 12 20z" />,
  link: (
    <>
      <path d="M10 13.5 14 9.5" />
      <path d="M8.5 11 7 12.5a3 3 0 0 0 4.2 4.2L13 15" />
      <path d="M15.5 13 17 11.5a3 3 0 0 0-4.2-4.2L11 9" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <polyline points="12 8 12 12 15 14" />
    </>
  ),
  shield: <path d="M12 3.5 5 6v5c0 4 3 7.5 7 9 4-1.5 7-5 7-9V6z" />,
  camera: (
    <>
      <rect x="3.5" y="7" width="17" height="12.5" rx="2.5" />
      <circle cx="12" cy="13.2" r="3.2" />
      <path d="M8.5 7l1.2-2h4.6l1.2 2" />
    </>
  ),
  trash: (
    <>
      <polyline points="4 7 20 7" />
      <path d="M9 7V5h6v2" />
      <path d="M6 7l1 13h10l1-13" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  size?: number;
  stroke?: number;
  className?: string;
  style?: CSSProperties;
}

export function Icon({ name, size = 22, stroke = 1.8, className, style }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
