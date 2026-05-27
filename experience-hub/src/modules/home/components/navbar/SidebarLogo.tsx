import type { ReactNode } from "react";
import { Image } from "@/shared/components/Image";
import { YStack } from "@/shared/components/Stack";

type Props = {
  src?: string;
  alt?: string;
  children?: ReactNode;
};

export default function SidebarLogo({ src, alt = "logo", children = "M" }: Props) {
  return (
    <YStack center>
      <YStack
        center
        className="h-12 w-12 overflow-hidden"
      >
        {src ? (
          <Image src={src} alt={alt} className="h-full w-full object-cover" />
        ) : (
          children
        )}
      </YStack>
    </YStack>
  );
}
