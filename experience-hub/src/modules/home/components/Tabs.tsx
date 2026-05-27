import { XStack } from "@/shared/components/Stack";

type TabsProps = {
  tabs: string[];
  activeTab?: number;
  onChange?: (index: number) => void;
};

export function Tabs({ tabs, activeTab = 0, onChange }: TabsProps) {
  return (
    <XStack className="gap-4 border-b border-gray-200">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          onClick={() => onChange?.(index)}
          className={`
            pb-3
            text-sm
            font-medium
            transition-colors
            ${
              index === activeTab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </XStack>
  );
}
