import { ChevronLeft, ChevronRight } from "lucide-react";
import { XStack } from "@/shared/components/Stack";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
};

function buildPages(current: number, total: number): (number | "...")[] {
  const BOUNDARY = 3;
  const SIBLINGS = 1;

  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const startPages = Array.from({ length: BOUNDARY }, (_, i) => i + 1);
  const endPages = Array.from({ length: BOUNDARY }, (_, i) => total - BOUNDARY + i + 1);
  const midStart = Math.max(BOUNDARY + 1, current - SIBLINGS);
  const midEnd = Math.min(total - BOUNDARY, current + SIBLINGS);
  const currentPages: number[] = [];
  for (let i = midStart; i <= midEnd; i++) currentPages.push(i);

  const combined = [
    ...new Set([...startPages, ...currentPages, ...endPages]),
  ].sort((a, b) => a - b);

  const result: (number | "...")[] = [];
  for (let i = 0; i < combined.length; i++) {
    const prev = i > 0 ? combined[i - 1] : 0;
    const gap = combined[i] - prev;
    if (i > 0 && gap === 2) {
      result.push(combined[i] - 1);
    } else if (i > 0 && gap > 2) {
      result.push("...");
    }
    result.push(combined[i]);
  }

  return result;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = buildPages(currentPage, totalPages);

  return (
    <XStack
      spaceBetween
      className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 items-center"
    >
      {/* Page info */}
      <span className="text-sm text-gray-500 hidden sm:block whitespace-nowrap">
        Page {currentPage} of {totalPages}
      </span>

      {/* Controls */}
      <XStack center className="gap-1 mx-auto sm:mx-0">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange?.(currentPage - 1)}
          className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {pages.map((page, index) => (
          <button
            key={index}
            disabled={page === "..."}
            onClick={() => typeof page === "number" && onPageChange?.(page)}
            className={`
              w-8 h-8 rounded-full text-sm transition-colors
              ${
                page === currentPage
                  ? "bg-blue-100 text-blue-600 font-medium"
                  : page === "..."
                    ? "text-gray-400 cursor-default"
                    : "text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            {page}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange?.(currentPage + 1)}
          className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </XStack>
    </XStack>
  );
}
