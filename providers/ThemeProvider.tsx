"use client";
import useThemeState from "@/store/themeStore";
import React, { ReactNode } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeState();

  return <div className={theme}>{children} </div>;
};

export default ThemeProvider;
