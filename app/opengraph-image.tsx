import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a1630",
          color: "#f5f8fc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 8, color: "#c98d1c", fontWeight: 700 }}>
          ZyraTec
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 16 }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800, lineHeight: 1.05 }}>
            Engineering Intelligence.
          </div>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800, lineHeight: 1.05 }}>
            Building What&apos;s Next.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, marginTop: 24, color: "#8b98ac" }}>
          Software · AI · Data · Cloud · Cybersecurity · ZELDA Women Safety App · Trichy, India
        </div>
      </div>
    ),
    { ...size }
  );
}
