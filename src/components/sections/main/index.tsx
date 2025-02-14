import DropdownMenu from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/lib/format";
import { PencilIcon, SquarePen, Trash } from "lucide-react";
import { useNavigate } from "react-router";
import { ProductProps } from "types/product";

export function Main({
  products,
  handleDelete,
}: {
  products: ProductProps[];
  handleDelete: (id: number) => void;
}) {
  const navigate = useNavigate();

  return (
    <>
      <Table className="border rounded w-full   ">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="h-[150px]">
          {products && products.length > 0 ? (
            products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{formatCurrency(product.price)}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell className="text-right ">
                  <DropdownMenu
                    trigger={
                      <>
                        <span className="sr-only">Open menu</span>
                        <SquarePen className="h-4 w-4" />
                      </>
                    }
                    items={[
                      {
                        label: "Edit",
                        onClick: () => navigate(`/edit/${product.id}`),
                        Icon: PencilIcon,
                      },
                      {
                        label: "Delete",
                        onClick: () => handleDelete(product.id),
                        className: "text-destructive",
                        Icon: Trash,
                      },
                    ]}
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center py-5 text-muted-foreground"
              >
                No products found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
