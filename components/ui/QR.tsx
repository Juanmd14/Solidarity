interface Props {
  svg: string;
  size?: number;
}

export function QR({ svg, size = 172 }: Props) {
  return (
    <div
      className="qr"
      style={{ width: size, height: size }}
      aria-label="Código QR del carnet"
      role="img"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
