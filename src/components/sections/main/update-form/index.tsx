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
        <Label htmlFor="name" className="dark:text-white">
          Name:
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          className="dark:bg-black dark:text-white dark:placeholder:text-muted-foreground"
          value={product?.name}
          placeholder="Product Name"
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
          value={product?.price}
          onChange={handleChange}
          placeholder="Product Price"
          className="dark:bg-black dark:text-white dark:placeholder:text-muted-foreground"
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
          name="stock"
          id="stock"
          placeholder="Product Stock"
          className="dark:bg-black dark:text-white dark:placeholder:text-muted-foreground"
          value={product?.stock}
          onChange={handleChange}
          step="1"
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
          placeholder="Product Description"
          name="description"
          className="dark:bg-black dark:text-white dark:placeholder:text-muted-foreground"
          value={product?.description}
          onChange={handleChange}
        />
      </div>
      {error && <p className="text-destructive text-sm">{error}</p>}
      <Button type="submit" className={cn("w-full lg:w-auto")}>
        Update Product
      </Button>
    </form>
  );
}
