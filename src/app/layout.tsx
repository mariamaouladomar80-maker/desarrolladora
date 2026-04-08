import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mariam Aoulad Omar | Desarrolladora & Ingeniera",
  description: "Portfolio profesional de Mariam Aoulad Omar - Desarrolladora Junior e Ingeniera Electrónica Industrial y Automática",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-[#0F172A] text-white`}>
        {children}
      </body>
    </html>
  );
}