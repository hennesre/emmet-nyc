import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "emmet.nyc",
  description:
    "Product manager based in New York. Into coffee, books, and exploring every corner of this city I can get to.",
  openGraph: {
    title: "emmet.nyc",
    description:
      "Product manager based in New York. Into coffee, books, and exploring every corner of this city I can get to.",
    url: "https://emmet.nyc",
    siteName: "emmet.nyc",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "emmet.nyc",
    description:
      "Product manager based in New York. Into coffee, books, and exploring every corner of this city I can get to.",
  },
  metadataBase: new URL("https://emmet.nyc"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
