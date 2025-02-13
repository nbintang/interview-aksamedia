import { ProductProps } from "@/hooks/products/useManageProducts";

export const userValidationForm = (username: string, password: string, fullname: string) => {
  if (username.length >= 6 && password.length >= 6) {
    return true;
  }
  if(fullname && fullname.length >= 3) return true
  return false;
};

export const productsValidationForm = (formData: ProductProps): string | null => {
    if (!formData.name || !formData.price || !formData.stock) {
      return "All fields are required";
    }
    if (Number(formData.price) < 0 || Number(formData.stock) < 0) {
      return "Price and Stock must be greater than 0";
    }
    if (formData.name.length < 3) {
      return "Name must be at least 3 characters long";
    }
    return null;
  };
