import { YStack } from "@/shared/components/Stack";

import SidebarBottom from "./SidebarBottom";
import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  return (
    <YStack
      className="
        rounded-2xl
        border
        border-gray-200
        bg-white
      "
    >
      <SidebarLogo />

      <SidebarMenu />

      <SidebarBottom />
    </YStack>
  );
}
