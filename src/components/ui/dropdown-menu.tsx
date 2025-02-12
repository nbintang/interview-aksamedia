import * as React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button/variants";

interface DropdownMenuProps {
  trigger: React.ReactNode;

  items: { label: string; onClick: () => void }[];
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  items,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

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
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <div
          className={cn(
            "dark:hover:bg-primary hover:bg-white",
            buttonVariants({ variant: "ghost", size: "icon" })
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {trigger}
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
                className={cn(
                  "block w-full px-4 py-2 text-left text-sm",
                  "hover:bg-gray-100 hover:text-gray-900",
                  "focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
