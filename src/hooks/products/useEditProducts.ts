import * as React from "react";
import { useNavigate } from "react-router";
import { productsValidationForm } from "@/lib/validation";
import useGetProductById from "./useGetProductById";
import { ProductProps } from "types/product";

const useUpdateProducts = () => {
  const product = useGetProductById();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState<ProductProps | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  React.useEffect(() => {
    if (product) {
      setFormData({
        ...product,
        description: product.description || "",
      });
    }
  }, [product]);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (!formData) return;

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    const validationError = productsValidationForm(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    const products = localStorage.getItem("products");
    if (products) {
      const parsedProducts: ProductProps[] = JSON.parse(products);
      const updatedProducts = parsedProducts.map((p) =>
        p.id === formData.id ? formData : p
      );
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      navigate("/");
    }
  };

  return { formData, error, handleChange, handleSubmit, product: formData };
};

export default useUpdateProducts;
