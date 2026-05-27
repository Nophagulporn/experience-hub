import { cn } from '@/shared/utils/cn';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export function Icon({
  children,
  className,
}: Props) {
  return (
    <span
      className={cn(
        'mr-[10px] text-[16px]',
        className,
      )}
    >
      {children}
    </span>
  );
}