import { DropdownItemProps, DropdownMenu } from "@/components/ui/dropdown-menu";
import useGetProfile from "@/hooks/profile/useGetProfile";
import { LogOutIcon, User } from "lucide-react";
import { useNavigate } from "react-router";

export default function ProfileDropdown() {
  const profile = useGetProfile();
  const navigate = useNavigate();
  const dropDownItems: DropdownItemProps[] = [
    {
      label: profile?.username ?? "",
      onClick: () => navigate("/profile"),
      Icon: User,
    },
    {
      label: "Logout",
      onClick: () => {
        localStorage.removeItem("user");
        navigate("/login");
      },
      Icon: LogOutIcon
    },
  ];
  return (
    <DropdownMenu
      trigger={
        <div>
          <img
            src="/user.jpeg"
            alt={profile?.username ?? ""}
            className="rounded-full"
          />
        </div>
      }
      items={dropDownItems}
    />
  );
}
