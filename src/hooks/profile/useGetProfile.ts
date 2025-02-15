import * as React from "react";
import { useNavigate } from "react-router";
import { UserProps } from '../../../types/user';

export default function useGetProfile(): UserProps | null {
  //ambil data dari local storeg
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  if (!user) navigate("/login");
  const [profile, setProfile] = React.useState<UserProps | null>(null);
  React.useEffect(() => {
    if (user) setProfile(JSON.parse(user));
  }, [user]);
  return profile;
}
