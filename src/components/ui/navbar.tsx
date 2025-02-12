import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { MenuIcon, MoonIcon, MountainIcon, SunIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button/variants";
import useGetUser from "@/hooks/useGetUser";

const navList = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const user = useGetUser();
  const navigate = useNavigate();
  const dropdownItems = [
    { label: "Light", onClick: () => setTheme("light") },
    { label: "Dark", onClick: () => setTheme("dark") },
    { label: "Auto", onClick: () => setTheme("auto") },
  ];

  const dropdownUser = [
    { label: user!.username, onClick: () => navigate("/profile") },
    {
      label: "Logout",
      onClick: () => {
        localStorage.removeItem("user");
        navigate("/login");
      },
    },
  ];

  return (
    <header className="flex border-b shadow h-20 w-full shrink-0 items-center px-4 md:px-6">
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
              <Link
                key={index}
                to={item.href}
                className={cn(
                  buttonVariants({
                    variant: theme === "dark" ? "default" : "outline",
                    size: "sm",
                  })
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
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
                  variant: theme === "dark" ? "default" : "ghost",
                  size: "sm",
                })
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className=" flex items-center gap-x-3">
          <DropdownMenu
            trigger={
              <div>
                <img src="/user.jpeg" alt="" className="rounded-full" />
              </div>
            }
            items={dropdownUser}
          />
          <DropdownMenu
            trigger={
              <div>
                {
                  //change icon based on theme
                  theme === "light" ? (
                    <SunIcon className="h-6 w-6 text-primary dark:text-secondary " />
                  ) : (
                    <MoonIcon className="h-6 w-6 text-primary dark:text-secondary " />
                  )
                }
              </div>
            }
            items={dropdownItems}
          />
        </div>
      </div>
    </header>
  );
}
