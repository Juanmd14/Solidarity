interface Props {
  text: string;
  tint?: string;
  size?: number;
}

export function Monogram({ text, tint, size = 44 }: Props) {
  const color = tint ?? "var(--accent)";
  const bg = tint ? tint + "1a" : "color-mix(in srgb, var(--accent) 10%, transparent)";
  return (
    <div
      className="monogram"
      style={{
        width: size,
        height: size,
        background: bg,
        color,
        fontSize: size * 0.36,
        flex: "none",
      }}
    >
      {text}
    </div>
  );
}
