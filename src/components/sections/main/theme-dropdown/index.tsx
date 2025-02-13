import DropdownMenu, { DropdownItemProps } from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";
import { MoonIcon, CogIcon, SunIcon } from "lucide-react";

export default function ThemeDropdown() {
  const { theme, setTheme } = useTheme();

  const dropdownItems: DropdownItemProps[] = [
    { label: "Light", onClick: () => setTheme("light"), Icon: SunIcon },
    { label: "Dark", onClick: () => setTheme("dark"), Icon: MoonIcon },
    { label: "Auto", onClick: () => setTheme("auto"), Icon: CogIcon },
  ];
  return (
    <DropdownMenu
      trigger={
        <div>
          {theme === "light" ? (
            <SunIcon className="h-6 w-6 text-primary dark:text-secondary " />
          ) : (
            <MoonIcon className="h-6 w-6 text-primary dark:text-secondary " />
          )}
        </div>
      }
      items={dropdownItems}
    />
  );
}
