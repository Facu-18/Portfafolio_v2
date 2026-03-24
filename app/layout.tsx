import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moriconi Facundo — Software Developer | Fullstack Node.js",
  description:
    "Especialista en construir soluciones escalables y eficientes. Con un fuerte enfoque en Node.js, Next.js y automatizaciones inteligentes, transformo ideas complejas en productos digitales de alto impacto.",
  keywords: ["Fullstack Developer", "Node.js", "Next.js", "TypeScript", "React", "API", "Backend", "Córdoba Argentina"],
  authors: [{ name: "Facundo Moriconi" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    title: "Moriconi Facundo — Software Developer",
    description: "Portfolio profesional de Facundo Moriconi — Fullstack Node.js Developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
