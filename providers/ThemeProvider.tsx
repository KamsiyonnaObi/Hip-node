"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider enableSystem attribute="data-theme">
      {children}
    </ThemeProvider>
  );
}
