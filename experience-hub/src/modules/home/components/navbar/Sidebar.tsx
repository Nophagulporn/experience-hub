import { YStack } from "@/shared/components/Stack";

import SidebarBottom from "./SidebarBottom";
import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";

import NotificationIcon from "@/assets/sideBar/notification.svg?react";
import CloudIcon from "@/assets/sideBar/cloud.svg?react";
import logo from "@/assets/appLogo/logo.svg";
import MissionIcon from "@/assets/sideBar/mission.svg?react";
import HubIcon from "@/assets/sideBar/hub.svg?react";

export default function Sidebar() {
  return (
    <YStack
      className="
        sticky
        top-4
        self-start
        h-[calc(100vh-2rem)]
        justify-between
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-4
        gap-3
      "
    >
      <SidebarLogo src={logo} />

      <SidebarMenu
        activeIndex={0}
        items={[
          { label: "Credential\nCloud", icon: CloudIcon },
          { label: "Mission\nRoom", icon: MissionIcon },
          { label: "Experience\nHub", icon: HubIcon },
        ]}
      />

      <SidebarBottom notificationIcon={NotificationIcon} />
    </YStack>
  );
}
