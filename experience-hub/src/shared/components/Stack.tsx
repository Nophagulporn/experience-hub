import { cn } from "@/shared/utils/cn";
import type { ReactNode } from "react";

type ResponsiveValue = "row" | "col" | "row-reverse" | "col-reverse";

type StackProps = {
  children: ReactNode;
  className?: string;

  center?: boolean;
  spaceBetween?: boolean;
  content?: boolean;
  box?: boolean;

  direction?: ResponsiveValue;

  mobileDirection?: ResponsiveValue;
  tabletDirection?: ResponsiveValue;
  desktopDirection?: ResponsiveValue;

  gap?: number;
};

const directionMap = {
  row: "flex-row",
  col: "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse",
};

export function XStack({
  children,
  className,

  center,
  spaceBetween,
  content,
  box,

  direction = "row",

  mobileDirection,
  tabletDirection,
  desktopDirection,

  gap,
}: StackProps) {
  return (
    <div
      className={cn(
        // BASE
        "flex",

        // DIRECTION
        directionMap[direction],

        mobileDirection && directionMap[mobileDirection],

        tabletDirection && `md:${directionMap[tabletDirection]}`,

        desktopDirection && `lg:${directionMap[desktopDirection]}`,

        // ALIGNMENT
        center && "items-center justify-center",

        spaceBetween && "justify-between",

        // RESPONSIVE CONTAINER
        content &&
          `
          w-full
          max-w-screen-2xl
          mx-auto
          px-4
          md:px-6
          lg:px-8
        `,

        // BOX
        box &&
          `
          rounded-[20px]
          border
          border-gray-200
          bg-white
          p-4
          md:p-6
        `,

        // GAP
        gap && `gap-[${gap}px]`,

        className,
      )}
    >
      {children}
    </div>
  );
}

export function YStack({ children, className, ...props }: StackProps) {
  return (
    <XStack direction="col" className={className} {...props}>
      {children}
    </XStack>
  );
}
