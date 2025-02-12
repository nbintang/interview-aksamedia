import { Route, Routes } from "react-router";
import Navbar from "@/components/ui/navbar";
import useManageMiddleware from "@/hooks/useManageMiddleware";
import { LoginPages, Main, NotFound } from "@/pages";
import CreateProduct from "./pages/main/create";

function App() {
  const { hideNavbar, isChecking } = useManageMiddleware();
  if (isChecking) {
    return null;
  }
  return (
    <main className="dark:bg-black bg-background min-h-screen">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/login" element={<LoginPages />} />
        <Route>
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<CreateProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
