import { Route, Routes } from "react-router";
import Navbar from "@/components/ui/navbar";
import useManageMiddleware from "@/hooks/auth/useManageMiddleware";
import { EditProducts, LoginPages, Main, NotFound } from "@/pages";
import CreateProduct from "./pages/main/create";
import Profile from "./pages/main/profile";

function App() {
  const { hideNavbar, isChecking } = useManageMiddleware();
  if (isChecking) {
    return null;
  }
  return (
    <main className="dark:bg-black bg-background min-h-screen">
      {!hideNavbar && <Navbar />}
      <Routes>
        {/* auth routes */}
        <Route path="/login" element={<LoginPages />} />
        {/* main routes*/}
        <Route>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/edit/:id" element={<EditProducts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
