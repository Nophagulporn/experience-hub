import { XStack } from "@/shared/components/Stack";

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (value: string) => void;
  onFilter?: () => void;
};

export function SearchBar({
  placeholder = "Search Event",
  onSearch,
  onFilter,
}: SearchBarProps) {
  return (
    <XStack spaceBetween className="w-full gap-4">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch?.(e.target.value)}
        className="
          flex-1
          px-4
          py-2
          rounded-lg
          bg-white
          text-sm
        "
      />
      <button
        onClick={onFilter}
        className="
          px-4
          py-2
          rounded-lg
          bg-white
          text-sm
          font-medium
          hover:bg-gray-50
        "
      >
        Filter
      </button>
    </XStack>
  );
}
