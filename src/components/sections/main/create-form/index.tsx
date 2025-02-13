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
      <div>
        <Label htmlFor="name" className="dark:text-white">
          Name:
        </Label>
        <Input
          type="text"
          id="name"
          className="dark:bg-black dark:text-white dark:placeholder:text-muted-foreground"
          placeholder="Product Name"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div>
        <div className="mb-2">
          <Label htmlFor="price" className="dark:text-white">
            Price:
          </Label>
          <p className="text-xs text-muted-foreground"> In Dollar ($)</p>
        </div>
        <Input
          type="number"
          id="price"
          name="price"
          className="dark:bg-black dark:text-white dark:placeholder:text-muted-foreground"
          placeholder="Product Price"
          onChange={handleChange}
          step="0.01"
          min="0"
        />
      </div>
      <div>
        <Label htmlFor="stock" className="dark:text-white">
          Price:
        </Label>
        <Input
          type="number"
          className="dark:bg-black dark:text-white dark:placeholder:text-muted-foreground"
          name="stock"
          id="stock"
          onChange={handleChange}
          step="1"
          placeholder="Product Stock"
          min="0"
        />
      </div>
      <div>
        <div className="mb-2">
          <Label htmlFor="description" className="dark:text-white">
            Description:
          </Label>
          <p className="text-xs text-muted-foreground">
            Description is Optional.
          </p>
        </div>
        <Textarea
          id="description"
          className="dark:bg-black dark:text-white dark:placeholder:text-muted-foreground"
          placeholder="Product Description"
          name="description"
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
