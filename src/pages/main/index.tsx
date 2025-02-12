import { Main as TableUser } from "@/components/sections/main";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router";

export default function Main() {
  const navigate = useNavigate();
  return (
    <main className="grid place-items-center  min-h-[calc(80vh-100px)] dark:text-white text-black">
      <div className="flex flex-col gap-4 min-w-[80%] ">
        <div className="flex flex-wrap [&>*]:w-full lg:[&>*]:w-auto gap-4 justify-between ">
          <Button className="px-7" onClick={() => navigate("/create")}>Create</Button>
         <div className="">
         <Input placeholder="Search" />
         </div>
        </div>
        <TableUser />
      </div>
    </main>
  );
}
