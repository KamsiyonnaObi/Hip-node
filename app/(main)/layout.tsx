import React from "react";

import NextAuthProvider from "@/providers/NextAuthProvider";
import { getServerSession } from "next-auth";

import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Source_Sans_3 } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/navbar/Footer";

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
    <html lang="en">
      <body className={SourceSansPro.className}>
        <NextAuthProvider session={session}>
          <div className="bg-background2 dark:bg-dark3">
            <Navbar />
            {children}
            <div className="sticky bottom-0 md:hidden">
              <Footer />
            </div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
