import CreateProductForm from "@/components/sections/main/create-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CreateProduct() {
  return (
    <main className="mx-auto grid min-h-screen md:min-h-[calc(100vh-100px)] place-items-center container">
      <Card className="lg:w-[400px]  w-full border-0 lg:border dark:bg-black shadow-none lg:shadow">
        <CardHeader className="text-center">
          <h1 className="text-3xl font-bold dark:text-white text-primary">Add New Product</h1>
          <p className="text-muted-foreground text-sm">
            Please fill in the form below to add a new product.
          </p>
        </CardHeader>
        <CardContent>
          <CreateProductForm />
        </CardContent>
      </Card>
    </main>
  );
}
