import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <main className="grid place-items-center min-h-screen md:min-h-[calc(80vh-100px)]">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl  dark:text-white text-black">
          404 | Not Found
        </h1>
        <Button
          variant="link"
          className="dark:text-white text-black"
          onClick={() => navigate("/")}
        >
          <ChevronLeft className="w-6 h-6" />
          <p>Home</p>
        </Button>
      </div>
    </main>
  );
}
