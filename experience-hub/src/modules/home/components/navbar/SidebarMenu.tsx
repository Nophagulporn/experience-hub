import { YStack } from "@/shared/components/Stack";

const menus = ["Home", "Events", "History"];

export default function SidebarMenu() {
  return (
    <YStack className="flex-1 gap-3">
      {menus.map((menu, index) => (
        <button
          key={menu}
          className={`
            rounded-2xl
            px-3
            py-4
            text-sm
            font-medium
            transition-all

            ${
              index === 0
                ? "bg-blue-50 text-blue-500"
                : "text-gray-500 hover:bg-gray-100"
            }
          `}
        >
          {menu}
        </button>
      ))}
    </YStack>
  );
}
