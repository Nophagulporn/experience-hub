import { YStack } from '@/shared/components/Stack';

import SidebarBottom from './SidebarBottom';
import SidebarLogo from './SidebarLogo';
import SidebarMenu from './SidebarMenu';

export default function Sidebar() {
  return (
    <YStack
      className="
        flex

        w-[88px]
        shrink-0

        border-r
        border-gray-200
        bg-white

        px-3
        py-6
      "
    >
      <SidebarLogo />

      <SidebarMenu />

      <SidebarBottom />
    </YStack>
  );
}