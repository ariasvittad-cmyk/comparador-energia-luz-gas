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
  metadataBase: new URL(
    "https://cronossl-comparador-energia-luz-gas.vercel.app"
  ),

  title: {
    default: "CRSL Comparador de Energía",
    template: "%s | CRSL Comparador de Energía",
  },

  description:
    "Compara tu tarifa de luz y gas y descubre cuánto puedes ahorrar cada mes.",

  keywords: [
    "comparador de energía",
    "comparador de luz",
    "comparador de gas",
    "ahorrar en luz",
    "ahorrar en gas",
    "tarifa de luz",
    "tarifa de gas",
    "comparador tarifas",
  ],

  authors: [
    {
      name: "CRSL Comparador de Energía",
    },
  ],

  creator: "CRSL Comparador de Energía",

  icons: {
    icon: "/logo.png",
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  verification: {
    google: "rhCWrEko4K7RKt91Rr0SN2mIP7vmd6RFs5m43A3ZfyQ",
    other: {
      "msvalidate.01": "AEF3B7601FD0D611B517883B2683731E",
    },
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "CRSL Comparador de Energía",

    title: "CRSL Comparador de Energía",

    description:
      "Compara tu tarifa de luz y gas y descubre cuánto puedes ahorrar cada mes.",

    images: [
      {
        url: "/logo.png",
        width: 350,
        height: 350,
        alt: "CRSL Comparador de Energía",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CRSL Comparador de Energía",
    description:
      "Compara tu tarifa de luz y gas y descubre cuánto puedes ahorrar cada mes.",
    images: ["/logo.png"],
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