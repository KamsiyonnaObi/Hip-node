import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";

const SourceSansPro = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hipnode",
  description: "Modern Social Media Forum Web App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={SourceSansPro.className}>{children}</body>
    </html>
  );
}
