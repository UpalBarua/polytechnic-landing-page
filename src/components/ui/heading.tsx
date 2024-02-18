import { cn } from "@/lib/utils";
import * as React from "react";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};

export function Heading({ children, className }: HeadingProps) {
  return (
    <h2
      className={cn(
        "pb-4 text-center text-2xl font-medium tracking-tight md:pb-6 md:text-start md:text-3xl lg:pb-8",
        className,
      )}
    >
      {children}
    </h2>
  );
}
