import { useNavigate } from "react-router";
type UserProps = {
    username: string;
    password: string;
  } | null
export default function useGetUser():UserProps {
  //ambil data dari local storeg
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  if (!user) {
    navigate("/login");
    return null;
  }
  return JSON.parse(user);
}
