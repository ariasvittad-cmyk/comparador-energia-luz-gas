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

  verification: {
  google: "rhCWrEko4K7RKt91Rr0SN2mIP7vmd6RFs5m43A3ZfyQ",
  other: {
    "msvalidate.01": "AEF3B7601FD0D611B517883B2683731E",
  },
},

  openGraph: {
    title: "CRSL Comparador de Energía",
    description:
      "Comparamos tu tarifa actual y te decimos cuánto puedes ahorrar cada mes.",
    siteName: "CRSL Comparador de Energía",
    images: [
      {
        url: "https://cronossl-comparador-energia-luz-gas.vercel.app/logo.png",
        width: 350,
        height: 350,
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
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}