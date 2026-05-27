// src/shared/components/Text.tsx

import { cn } from "@/shared/utils/cn";
import type { ReactNode } from 'react';

type TextVariant =
  | "xlarge"
  | "pageTitle"
  | "title"
  | "subtitle"
  | "body"
  | "description"
  | "subMenu"
  | "footnote";

type TextProps = {
  children: ReactNode;
  className?: string;

  variant?: TextVariant;

  center?: boolean;
  bold?: boolean;
  error?: boolean;
  required?: boolean;
  success?: boolean;
  disable?: boolean;
  labelDisable?: boolean;
  opacity?: boolean;
  noWrap?: boolean;
  underline?: boolean;
};

const variantClasses: Record<TextVariant, string> = {
  xlarge: "text-[40px]",
  pageTitle: "text-[32px]",
  title: "text-[24px]",
  subtitle: "text-[20px]",
  body: "text-[16px]",
  description: "text-[14px]",
  subMenu: "text-[13px]",
  footnote: "text-[12px]",
};

export function Text({
  children,
  className,
  variant = "body",

  center,
  bold,
  error,
  required,
  success,
  disable,
  labelDisable,
  opacity,
  noWrap,
  underline,
}: TextProps) {
  return (
    <span
      className={cn(
        "text-left whitespace-pre-wrap",

        variantClasses[variant],

        center && "text-center",

        bold && "font-bold",

        error && "mt-1 text-[red] leading-4",

        required && "text-red-500",

        success && "text-green-500",

        disable && "text-gray-400",

        labelDisable && "text-gray-500",

        opacity && "opacity-40",

        noWrap && "whitespace-nowrap",

        underline && "underline",

        className,
      )}
    >
      {children}
    </span>
  );
}
