import type { Metadata } from "next";
import "../styles/globals.css";
import CookieBanner from "@/components/CookieBanner";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://starkio.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Starkio Labs — Data · Software · AI",
    template: "%s",
  },
  description:
    "Holding familiar de tecnología. Construimos empresas de Data, Software e Inteligencia Artificial que resuelven problemas reales.",
  openGraph: {
    title: "Starkio Labs",
    description: "Building what endures.",
    url: siteUrl,
    siteName: "Starkio Labs",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Starkio Labs",
    description: "Building what endures.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
