import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { MenuIcon, MountainIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button/variants";
import ProfileDropdown from "../sections/main/profile-dropdown";
import ThemeDropdown from "../sections/main/theme-dropdown";
import { Button } from "./button";
import useGetCurrentThemeForButton from "@/hooks/useGetCurrentTheme";
const navList = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
];

export default function Navbar() {
  const theme = useGetCurrentThemeForButton();
  const navigate = useNavigate();

  return (
    <header className="flex border-b shadow h-20 w-full shrink-0 items-center px-4 md:px-6">
      {/* Mobile navigation */}
      <Sheet>
        <SheetTrigger>
          <div
            className={cn(
              "flex lg:hidden",
              buttonVariants({ variant: "ghost", size: "sm" })
            )}
          >
            <MenuIcon className="h-6 w-6 text-primary dark:text-secondary" />
            <span className="sr-only">Toggle navigation menu</span>
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="dark:bg-black bg-background ">
          <Link to="#" className="mr-6  lg:hidden flex ">
            <MountainIcon className="h-6 w-6 text-primary dark:text-secondary " />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6">
            {navList.map((item, index) => (
              <Button
                key={index}
                variant={theme}
                size="sm"
                onClick={() => navigate(item.href)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      {/* Desktop navigation */}
      <Link to="#" className="mr-6 hidden lg:flex">
        <MountainIcon className="h-6 w-6 text-primary dark:text-secondary " />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <div className="ml-auto flex items-center gap-x-4">
        <nav className=" hidden lg:flex gap-3 ">
          {navList.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={cn(
                buttonVariants({
                  variant: theme,
                  size: "sm",
                })
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className=" flex items-center gap-x-3">
          <ProfileDropdown />
          <ThemeDropdown />
        </div>
      </div>
    </header>
  );
}
