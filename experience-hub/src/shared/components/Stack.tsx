import { cn } from "@/shared/utils/cn";
import { ReactNode } from "react";

type StackProps = {
  children: ReactNode;
  className?: string;

  center?: boolean;
  spaceBetween?: boolean;
  content?: boolean;
  box?: boolean;
};

export function XStack({
  children,
  className,
  center,
  spaceBetween,
  content,
}: StackProps) {
  return (
    <div
      className={cn(
        "flex flex-row flex-wrap whitespace-pre-line",

        center && "items-center justify-center",

        spaceBetween && "justify-between",

        content && "w-full max-w-[1300px]",

        className,
      )}
    >
      {children}
    </div>
  );
}

export function YStack({
  children,
  className,
  center,
  content,
  box,
}: StackProps) {
  return (
    <div
      className={cn(
        "flex flex-col whitespace-pre-line",

        center && "items-center justify-center",

        content && "w-full max-w-[1300px]",

        box &&
          `
          rounded-[20px]
          border
          border-transparent
          border-t-[1px]
          border-r-[1px]
          border-b-0
          border-l-0
          p-[25px]
          bg-white
          bg-[linear-gradient(0deg,#FFFFFF,#FFFFFF),linear-gradient(256deg,rgba(12,97,224,0.5)_0.38%,rgba(12,97,224,0)_48.17%)]
          bg-origin-border
          bg-clip-padding
        `,

        className,
      )}
    >
      {children}
    </div>
  );
}
