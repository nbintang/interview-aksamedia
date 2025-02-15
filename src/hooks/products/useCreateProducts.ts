import * as React from "react";
import { useNavigate } from "react-router";
import { productsValidationForm } from "@/lib/validation";
import { ProductProps } from "types/product";
const useCreateProducts = () => {
  const [formData, setFormData] = React.useState<ProductProps>({
    id: Math.floor(Math.random() * 1000),
    name: "",
    price: 0,
    stock: 0,
    description: "",
  });

  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = productsValidationForm(formData);
    if (validationError) {
      setError(validationError);
      return;
    }
    const products = localStorage.getItem("products");
    if (products) {
      const parsedProducts = JSON.parse(products);
      parsedProducts.push(formData);
      localStorage.setItem("products", JSON.stringify(parsedProducts));
      navigate("/");
    } else {
      localStorage.setItem("products", JSON.stringify([formData]));
      navigate("/");
    }
    setFormData({
      id: Math.floor(Math.random() * 1000),
      name: "",
      price: 0,
      stock: 0,
      description: "",
    });
  };

  return { formData, error, handleChange, handleSubmit };
};

export default useCreateProducts;
