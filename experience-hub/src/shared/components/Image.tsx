import { cn } from "@/shared/utils/cn";
import type { ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  circle?: boolean;
};

export function Image({ className, circle, ...props }: Props) {
  return <img className={cn(circle && "rounded-full", className)} {...props} />;
}
