import { create } from "zustand";

interface ThemeStore {
  theme: string;
  toggleTheme: () => void;
}
let defaultTheme = "light";
if (typeof window !== "undefined") {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    defaultTheme = "dark";
  }
}
const useThemeState = create<ThemeStore>((set) => ({
  theme: defaultTheme,
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));

export default useThemeState;
