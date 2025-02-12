import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
export default function CreateProductForm() {
  const [formData, setFormData] = React.useState({
    id: Math.floor(Math.random() * 1000),
    name: "",
    price: "",
    stock: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <Label htmlFor="name" className="block mb-2">
          Name:
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="price" className="block mb-2">
          Price:
        </Label>
        <Input
          type="number"
          id="price"
          name="price"
          onChange={handleChange}
          required
          step="0.01"
          min="0"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="stock" className="block mb-2">
          Price:
        </Label>
        <Input
          type="number"
          name="stock"
          id="stock"
          onChange={handleChange}
          required
          step="1"
          min="0"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="description" className="block mb-2">
          Description:
        </Label>
        <Textarea
          id="description"
          name="description"
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit">Add Product</Button>
    </form>
  );
}
