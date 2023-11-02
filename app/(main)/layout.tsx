import React from "react";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/navbar/Footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <div className="sticky bottom-0 md:hidden">
        <Footer />
      </div>
    </>
  );
}
