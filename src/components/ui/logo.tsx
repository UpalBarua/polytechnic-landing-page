import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="snhpi logo"
      height={50}
      width={50}
      className={cn(className)}
    />
  );
}
