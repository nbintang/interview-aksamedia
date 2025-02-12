import * as React from "react";
import { Theme, ThemeContext } from "@/hooks/useTheme";

const initialTheme = (): Theme => {
  if (typeof window === "undefined") return "auto";
  const storedTheme = localStorage.getItem("theme");
  return storedTheme === "light" || storedTheme === "dark"
    ? (storedTheme as Theme)
    : "auto";
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>(initialTheme);
  React.useEffect(() => {
    if (theme === "light" || theme === "dark" || theme === "auto") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);
  React.useEffect(() => {
    if (theme !== "auto") {
      document.documentElement.dataset.theme = theme;
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const setAutoTheme = () => {
      const newTheme = mediaQuery.matches ? "dark" : "light";
      document.documentElement.dataset.theme = newTheme;
      setTheme(newTheme);
    };
    setAutoTheme();

    function handleChange(e: MediaQueryListEvent) {
      document.documentElement.dataset.theme = e.matches ? "dark" : "light";
    }

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
