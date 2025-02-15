import * as React from "react";
import { ProductProps } from "types/product";
import { dummyProducts } from '../../../data/product';
const useGetProducts = () => {
    const [products, setProducts] = React.useState<ProductProps[]>(() => {
      // Check if products exist in localStorage
      const storedProducts = localStorage.getItem("products");
      return storedProducts ? JSON.parse(storedProducts) : dummyProducts;
    });
    React.useEffect(() => {
      if (!localStorage.getItem("products")) {
        localStorage.setItem("products", JSON.stringify(dummyProducts));
      }
    }, []);
  
    return {
        products,
        setProducts
    };
};

export default useGetProducts;