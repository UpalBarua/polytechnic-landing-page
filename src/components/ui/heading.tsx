import { cn } from '@/lib/utils';
import * as React from 'react';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};

export function Heading({ children, className }: HeadingProps) {
  return (
    <h2
      className={cn(
        'pb-2 text-2xl font-medium tracking-tight text-center md:pb-4 md:text-start',
        className
      )}>
      {children}
    </h2>
  );
}
