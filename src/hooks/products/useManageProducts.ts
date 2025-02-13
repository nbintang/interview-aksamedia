import * as React from "react";
import useGetProducts from "./useGetProducts";
import { useSearchParams } from "react-router";
export type ProductProps = {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
};
const useManageProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, setProducts } = useGetProducts();
  const [search, setSearch] = React.useState(searchParams.get("search") || "");
  const [page, setPage] = React.useState(Number(searchParams.get("page")) || 1);
  const rowsPerpage = 6;

  React.useEffect(() => {
    setSearchParams({ search, page: page.toString() });
  }, [search, page, setSearchParams]);

  const handleDelete = (id: number) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts?.filter(
        (product) => product.id !== id
      );
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil((filteredProducts?.length ?? 0) / rowsPerpage);

  const paginatedProducts = filteredProducts?.slice(
    (page - 1) * rowsPerpage,
    page * rowsPerpage
  );
  return {
    products: paginatedProducts,
    handleDelete,
    setSearch,
    setPage,
    page,
    totalPages,
    paginatedProducts,
    search,
  };
};

export default useManageProducts;
