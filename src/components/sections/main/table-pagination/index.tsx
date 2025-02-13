
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

type TablePaginationProps = {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
};

export default function TablePagination({ page, setPage, totalPages }: TablePaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={page === 1 ? "pointer-events-none opacity-50" : undefined}
            onClick={() => setPage(page - 1)}
          />
        </PaginationItem>

        <span className="px-4 text-xs text-muted-foreground">
          Page {page} of {totalPages}
        </span>

        <PaginationItem>
          <PaginationNext
            className={page === totalPages ? "pointer-events-none opacity-50" : undefined}
            onClick={() => setPage(page + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
