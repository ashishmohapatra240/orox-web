import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "OROX Global – Expanding Investment Access with Innovation and Expertise",
  description:
    "OROX Global delivers quant-driven investment solutions that bridge traditional and emerging markets. Backed by expert teams and cutting-edge tech, we empower investors worldwide with smarter, risk-aware strategies.",
  openGraph: {
    images: [
      {
        url: "/OG.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
