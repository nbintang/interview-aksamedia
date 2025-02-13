import { Main as TableProducts } from "@/components/sections/main";
import TablePagination from "@/components/sections/main/table-pagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useManageProducts from "@/hooks/products/useManageProducts";
import { useNavigate } from "react-router";

export default function Main() {
  const navigate = useNavigate();
  const {
    search,
    setSearch,
    products,
    page,
    setPage,
    totalPages,
    handleDelete,
  } = useManageProducts();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);
  return (
    <main className="grid place-items-center container mx-auto min-h-screen md:min-h-[calc(80vh-40px)] dark:text-white text-black">
      <div className="flex flex-col space-y-3 justify-center  w-[80%] ">
        <div className="flex flex-wrap [&>*]:w-full lg:[&>*]:w-auto gap-4 justify-between ">
          <Button className="px-7" onClick={() => navigate("/create")}>
            Create
          </Button>
          <div className="">
            <Input placeholder="Search" className="dark:bg-black dark:text-white" value={search} onChange={handleSearch} />
          </div>
        </div>
        <div className="overflow-x-auto">
          <TableProducts
            products={products ?? []}
            handleDelete={handleDelete}
          />
        </div>
     <div>
     <TablePagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
     </div>
      </div>
    </main>
  );
}
