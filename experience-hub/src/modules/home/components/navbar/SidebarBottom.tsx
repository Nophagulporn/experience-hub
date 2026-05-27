import type { ComponentType, ReactNode, SVGProps } from "react";
import { YStack } from "@/shared/components/Stack";

type Props = {
  notificationIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  notificationChildren?: ReactNode;
  profileSrc?: string;
  profileAlt?: string;
  profileChildren?: ReactNode;
};

export default function SidebarBottom({
  notificationIcon: NotificationIcon,
  notificationChildren = "M",
  profileSrc,
  profileAlt = "profile",
  profileChildren = "P",
}: Props) {
  return (
    <YStack center className="gap-4">
      <YStack center className="h-12 w-12">
        {NotificationIcon ? (
          <NotificationIcon className="h-full w-full" />
        ) : (
          <YStack
            center
            className="h-12 w-12 rounded-full bg-black text-white font-bold overflow-hidden"
          >
            {notificationChildren}
          </YStack>
        )}
      </YStack>

      <YStack>
        {profileSrc ? (
          <img
            src={profileSrc}
            alt={profileAlt}
            className="h-full w-full object-cover"
          />
        ) : (
          <YStack
            center
            className="h-12 w-12 rounded-full bg-black text-white font-bold overflow-hidden"
          >
            {profileChildren}
          </YStack>
        )}
      </YStack>
    </YStack>
  );
}
