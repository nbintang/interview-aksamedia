import * as React from "react";
import { useParams } from "react-router";
import { ProductProps } from "types/product";
const useGetProductById = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState<ProductProps>();
  React.useEffect(() => {
    if (!id) return;
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      const parsedProducts: ProductProps[] = JSON.parse(storedProducts);
      const foundProduct = parsedProducts.find((p) => p.id.toString() === id);
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [id]);

  return product;
};

export default useGetProductById;
