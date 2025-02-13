import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import useCreateProducts from "@/hooks/products/useCreateProducts";
import { cn } from "@/lib/utils";
export default function CreateProductForm() {
  const { handleSubmit, handleChange, error } = useCreateProducts();
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto [&>*]:mb-4">
      <div >
        <Label htmlFor="name" >
          Name:
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div >
        <Label htmlFor="price">
          Price:
        </Label>
        <Input
          type="number"
          id="price"
          name="price"
          onChange={handleChange}
          step="0.01"
          min="0"
        />
      </div>
      <div >
        <Label htmlFor="stock" >
          Price:
        </Label>
        <Input
          type="number"
          name="stock"
          id="stock"
          onChange={handleChange}
          step="1"
          min="0"
        />
      </div>
      <div >
        <div className="mb-2">
          <Label htmlFor="description">Description:</Label>
          <p className="text-xs text-muted-foreground">
            Description is Optional.
          </p>
        </div>
        <Textarea id="description" name="description" onChange={handleChange} />
      </div>
      {error && <p className="text-destructive text-sm">{error}</p>}
      <Button type="submit" className={cn("w-full lg:w-auto")}>Add Product</Button>
    </form>
  );
}
