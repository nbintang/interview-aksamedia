import * as React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button/variants";
import { Button } from "./button";
import useGetCurrentThemeForButton from "@/hooks/useGetCurrentTheme";

export type DropdownItemProps = {
  label: string;
  onClick: () => void;
  className?: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};
interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: DropdownItemProps[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,

  items,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const theme = useGetCurrentThemeForButton();
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      )
        setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left " ref={dropdownRef}>
      <div>
        <div
          className={cn(
            "dark:hover:bg-primary hover:bg-white",
            buttonVariants({
             variant: theme,
              size: "icon",
            })
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {trigger}
        </div>
      </div>
      {isOpen && (
        <div className={cn(
          "absolute right-0 z-[9999] mt-2 w-56 -translate-y-4 origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
          "dark:bg-primary bg-white"
        )}>
          <div className="py-1  ">
            {items.map((item, index) => (
              <Button
                key={index}
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
                variant={theme}
                className={cn(
                  item.className,
                  "w-full flex items-center justify-start"
                )}
              >
                {item.Icon && <item.Icon className="mr-2 h-5 w-5" />}
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
