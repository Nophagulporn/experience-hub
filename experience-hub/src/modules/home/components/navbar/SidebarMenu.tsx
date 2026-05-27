import type { ComponentType, SVGProps } from "react";
import { YStack } from "@/shared/components/Stack";
import { Text } from "@/shared/components/Text";

type MenuItem = {
  label: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

type Props = {
  items?: MenuItem[];
  activeIndex?: number;
};

const DEFAULT_ITEMS: MenuItem[] = [
  { label: "A" },
  { label: "B" },
  { label: "C" },
];


export default function SidebarMenu({
  items = DEFAULT_ITEMS,
  activeIndex = 0,
}: Props) {
  return (
    <YStack className="flex-1 gap-3">
      {items.map((item, index) => (
        <button
          key={item.label}
          className={`
            rounded-2xl
            px-3
            py-4
            transition-all
            ${index === activeIndex ? "bg-blue-50 text-[#3C7ACB]" : "text-[#616161] hover:bg-gray-100"}
          `}
        >
          <YStack center className="gap-1">
            {item.icon && (
              <item.icon className="h-6 w-6" />
            )}
            <Text center variant="subMenu" className="font-medium">
              {item.label}
            </Text>
          </YStack>
        </button>
      ))}
    </YStack>
  );
}
