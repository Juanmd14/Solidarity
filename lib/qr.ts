import "server-only";
import QRCode from "qrcode";

export async function qrSvg(value: string, size = 180): Promise<string> {
  return QRCode.toString(value, {
    type: "svg",
    margin: 0,
    width: size,
    color: { dark: "#231b16", light: "#ffffff" },
    errorCorrectionLevel: "L",
  });
}
