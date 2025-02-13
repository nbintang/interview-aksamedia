import { Card, CardContent, CardHeader } from "@/components/ui/card";
import UpdateProductForm from "@/components/sections/main/update-form";
import NotFound from "@/pages/404";
import useGetProductById from "@/hooks/products/useGetProductById";

export default function EditProducts() {
  const product = useGetProductById();
  return product ? (
    <main className="mx-auto grid min-h-[calc(80vh-3rem)] place-items-center container">
      <Card className="lg:w-[400px]  w-full border-0 lg:border shadow-none lg:shadow">
        <CardHeader className="text-center">
          <h1 className="text-3xl font-bold">Edit Product {product.name}</h1>
          <p className="text-muted-foreground text-sm">
            Please fill in the form below to edit product.
          </p>
        </CardHeader>
        <CardContent>
          <UpdateProductForm />
        </CardContent>
      </Card>
    </main>
  ) : <NotFound />
}
