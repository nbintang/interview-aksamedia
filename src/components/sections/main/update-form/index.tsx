import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useUpdateProducts from "@/hooks/products/useEditProducts";
export default function UpdateProductForm() {
  const { handleSubmit, handleChange, error, product } = useUpdateProducts();
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto [&>*]:mb-4">
      <div>
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={product?.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="price">Price:</Label>
        <Input
          type="number"
          id="price"
          name="price"
          value={product?.price}
          onChange={handleChange}
          step="0.01"
          min="0"
        />
      </div>
      <div>
        <Label htmlFor="stock">Price:</Label>
        <Input
          type="number"
          name="stock"
          id="stock"
          value={product?.stock}
          onChange={handleChange}
          step="1"
          min="0"
        />
      </div>
      <div>
        <div className="mb-2">
          <Label htmlFor="description">Description:</Label>
          <p className="text-xs text-muted-foreground">
            Description is Optional.
          </p>
        </div>
        <Textarea
          id="description"
          name="description"
          value={product?.description}
          onChange={handleChange}
        />
      </div>
      {error && <p className="text-destructive text-sm">{error}</p>}
      <Button type="submit" className={cn("w-full lg:w-auto")}>
        Add Product
      </Button>
    </form>
  );
}
