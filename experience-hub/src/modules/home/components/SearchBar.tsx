import { Calendar, Search, SlidersHorizontal } from "lucide-react";
import { XStack } from "@/shared/components/Stack";

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (value: string) => void;
  onFilter?: () => void;
  dateRange?: string;
  onDateRangeClick?: () => void;
};

export function SearchBar({
  placeholder = "Search Event",
  onSearch,
  onFilter,
  dateRange = "Jan 6, 2025 - Jan 13, 2025",
  onDateRangeClick,
}: SearchBarProps) {
  return (
    <XStack className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 gap-3 items-center">
      {/* Search input */}
      <XStack className="flex-1 gap-2 items-center min-w-0">
        <Search className="h-4 w-4 text-gray-400 shrink-0" />
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => onSearch?.(e.target.value)}
          className="flex-1 text-sm text-gray-700 placeholder:text-gray-400 outline-none min-w-0 bg-transparent"
        />
      </XStack>

      {/* Divider */}
      <div className="h-5 w-px bg-gray-200 shrink-0 hidden sm:block" />

      {/* Date range */}
      <button
        onClick={onDateRangeClick}
        className="hidden sm:flex items-center gap-2 text-sm text-gray-500 whitespace-nowrap hover:text-gray-700 transition-colors"
      >
        <Calendar className="h-4 w-4 text-gray-400 shrink-0" />
        <span>{dateRange}</span>
      </button>

      {/* Divider */}
      <div className="h-5 w-px bg-gray-200 shrink-0" />

      {/* Filter button */}
      <button
        onClick={onFilter}
        className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors whitespace-nowrap"
      >
        <SlidersHorizontal className="h-4 w-4 shrink-0" />
        <span className="hidden sm:inline">Filter</span>
      </button>
    </XStack>
  );
}
