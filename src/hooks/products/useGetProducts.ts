import * as React from "react";
import { ProductProps } from "./useManageProducts";

const useGetProducts = () => {
    const [products, setProducts] = React.useState<ProductProps[]>();
    React.useEffect(() => {
      const products = localStorage.getItem("products");
      if (products) setProducts(JSON.parse(products));
    }, []);
  
    return {
        products,
        setProducts
    };
};

export default useGetProducts;