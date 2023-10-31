import React from "react";

import NextAuthProvider from "../providers/NextAuthProvider";
import { getServerSession } from "next-auth";

import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/ThemeProvider";
import { cn } from "@/utils";

const SourceSansPro = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hipnode",
  description: "Modern Social Media Forum Web App",
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
      </body>
    </html>
  );
}
