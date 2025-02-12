import * as React from "react";

export type Theme = "light" | "dark" | "auto";
type ThemeContextType = { theme: Theme; setTheme: (theme: Theme) => void };

export const ThemeContext = React.createContext<ThemeContextType | null>(null);
export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
