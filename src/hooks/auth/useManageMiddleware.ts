import * as React from "react";
import { useLocation, useNavigate } from "react-router";

export default function useManageMiddleware() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = React.useState(true);
  const exceptedPath = ["/login"];
  const hideNavbar = exceptedPath.includes(location.pathname);
  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user && location.pathname !== "/login") {
      navigate("/login", { replace: true });
    } else if (user && location.pathname === "/login") {
      navigate("/", { replace: true });
    }
    setIsLogin(false);
  }, [navigate, location.pathname]);
  return {
    hideNavbar,
    isChecking: isLogin,
  };
}
