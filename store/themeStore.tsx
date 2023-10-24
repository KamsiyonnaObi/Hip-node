import { create } from "zustand";

interface ThemeStore {
  theme: string;
  toggleTheme: () => void;
}

const useThemeState = create<ThemeStore>((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));

export default useThemeState;
