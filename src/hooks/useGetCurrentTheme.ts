import { useTheme } from "./useTheme";

const useGetCurrentThemeForButton = () => {
      const { theme } = useTheme();
    const getThemeVariant = () => {
        const currentTheme =
          theme === "auto"
            ? document.documentElement.dataset.theme || "light"
            : theme;
        return currentTheme === "dark" ? "default" : "outline";
      };
      return getThemeVariant();
};

export default useGetCurrentThemeForButton;