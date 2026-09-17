import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Starkio Labs — Data · Software · AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #08080F 0%, #1A1A2E 100%)",
          color: "#F5F5F7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: 10, marginBottom: 36 }}>
          <div style={{ width: 14, height: 64, borderRadius: 7, background: "#6C63FF" }} />
          <div style={{ width: 14, height: 88, borderRadius: 7, background: "#34D399" }} />
          <div style={{ width: 14, height: 112, borderRadius: 7, background: "#A78BFA" }} />
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, letterSpacing: -3 }}>
          Stark<span style={{ color: "#6C63FF" }}>io</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "rgba(245,245,247,0.6)", marginTop: 16 }}>
          Data · Software · AI
        </div>
      </div>
    ),
    { ...size }
  );
}
