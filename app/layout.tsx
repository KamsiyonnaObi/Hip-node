import React from "react";

import NextAuthProvider from "../providers/NextAuthProvider";
import { getServerSession } from "next-auth";

import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/ThemeProvider";
import { cn } from "@/utils";
import { Toaster } from "@/components/ui/toaster";

const SourceSansPro = Source_Sans_3({ subsets: ["latin"] });
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Hipnode",
  description: "Modern Social Media Forum Web App",
  keywords: ["Next.js", "React", "JavaScript", "Developer"],
  openGraph: {
    images: [
      {
        url: `${baseURL}/meta.png`,
        width: 1200,
        height: 630,
        alt: "Hipnode",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(SourceSansPro.className, "bg-bkg")}>
        <NextAuthProvider session={session}>
          <Providers>{children}</Providers>
        </NextAuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
