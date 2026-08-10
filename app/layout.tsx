import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRSL Comparador de Energía",
  description:
    "Comparamos tu tarifa actual y te decimos cuánto puedes ahorrar cada mes.",

  icons: {
    icon: "/logo.png",
  },

  openGraph: {
    title: "CRSL Comparador de Energía",
    description:
      "Comparamos tu tarifa actual y te decimos cuánto puedes ahorrar cada mes.",
    url: "https://cronosll-comparador-energia-luz-gas.vercel.app",
    siteName: "CRSL Comparador de Energía",
    images: [
      {
        url: "https://cronosll-comparador-energia-luz-gas.vercel.app/logo.png",
        width: 512,
        height: 512,
        alt: "CRSL Comparador de Energía",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
