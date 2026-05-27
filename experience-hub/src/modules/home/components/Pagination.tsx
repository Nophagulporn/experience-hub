import { XStack } from "@/shared/components/Stack";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
};

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pageNumbers: (number | string)[] = [];

  // Always show first page
  pageNumbers.push(1);

  // Show ellipsis and pages around current page
  if (currentPage > 3) {
    pageNumbers.push("...");
  }

  for (
    let i = Math.max(2, currentPage - 1);
    i <= Math.min(totalPages - 1, currentPage + 1);
    i++
  ) {
    if (pageNumbers[pageNumbers.length - 1] !== "...") {
      pageNumbers.push(i);
    }
  }

  // Show ellipsis and last page
  if (currentPage < totalPages - 2) {
    pageNumbers.push("...");
  }

  if (totalPages > 1) {
    pageNumbers.push(totalPages);
  }

  return (
    <XStack center className="gap-2 mt-8">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange?.(currentPage - 1)}
        className="px-3 py-1 text-gray-600 hover:bg-gray-200 rounded disabled:opacity-50"
      >
        ← Previous
      </button>

      {pageNumbers.map((page, index) => (
        <button
          key={index}
          disabled={page === "..."}
          onClick={() => typeof page === "number" && onPageChange?.(page)}
          className={`
            px-3
            py-1
            rounded
            transition-colors
            ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : page === "..."
                  ? "text-gray-600 cursor-default"
                  : "text-gray-600 hover:bg-gray-200"
            }
          `}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange?.(currentPage + 1)}
        className="px-3 py-1 text-gray-600 hover:bg-gray-200 rounded disabled:opacity-50"
      >
        Next →
      </button>
    </XStack>
  );
}
