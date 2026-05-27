import { YStack } from '@/shared/components/Stack';

export default function SidebarBottom() {
  return (
    <YStack center className="gap-4">
      <button
        className="
          h-11
          w-11
          rounded-full
          bg-gray-100
        "
      />

      <button
        className="
          h-11
          w-11
          rounded-full
          bg-black
        "
      />
    </YStack>
  );
}