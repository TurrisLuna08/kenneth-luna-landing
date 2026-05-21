import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kenneth Luna · Business Broker · Vibe Coder",
  description:
    "Landing page personal de Kenneth Luna: Business Broker y Vibe Coder construyendo proyectos con IA.",
  keywords: ["Kenneth Luna", "Business Broker", "Vibe Coder", "AI Agents", "Web Development"],
  authors: [{ name: "Kenneth Luna" }],
  openGraph: {
    title: "Kenneth Luna · Business Broker · Vibe Coder",
    description: "Conecto oportunidades de negocio con ejecución práctica en tecnología.",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenneth Luna · Business Broker · Vibe Coder",
    description: "Conecto oportunidades de negocio con ejecución práctica en tecnología.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} ${geist.variable} min-h-screen flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}