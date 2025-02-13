import * as React from "react";
import useGetProducts from "./useGetProducts";
export type ProductProps = {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
};
const useManageProducts = () => {
  const [search, setSearch] = React.useState<string>("");
  const { products, setProducts } = useGetProducts();

  const handleDelete = (id: number) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts?.filter(
        (product) => product.id !== id
      );
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  //search
  const filteredProducts = products?.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.id.toString().toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return {
    products: filteredProducts,
    handleDelete,
    handleSearch,
    search,
  };
};

export default useManageProducts;
