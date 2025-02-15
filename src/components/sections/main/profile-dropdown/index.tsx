import DropdownMenu, { DropdownItemProps } from "@/components/ui/dropdown-menu";
import useGetProfile from "@/hooks/profile/useGetProfile";
import { LogOutIcon, User } from "lucide-react";
import { useNavigate } from "react-router";

export default function ProfileDropdown() {
  const profile = useGetProfile();
  const navigate = useNavigate();
  const dropDownItems: DropdownItemProps[] = [
    {
      label: profile?.fullname
        ? profile?.fullname
        : profile?.username ?? "User",
      onClick: () => navigate("/profile"),
      Icon: User,
    },
    {
      label: "Logout",
      onClick: () => {
        localStorage.removeItem("user");
        navigate("/login");
      },
      Icon: LogOutIcon,
      
    },
  ];
  return (
    <DropdownMenu 
    className="mt-4"
      trigger={
        <div className="flex flex-col items-center">
          <img
            src="/user.jpeg"
            alt={profile?.username ?? ""}
            className="rounded-full w-9 h-9"
          />
          <span className="text-xs text-muted-foreground ">{profile?.fullname ?? profile?.username ?? "User"}</span>
        </div>
      }
      items={dropDownItems}
    />
  );
}
