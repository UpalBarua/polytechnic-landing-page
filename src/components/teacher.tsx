import { TTeacher } from "@/types";
import Image from "next/image";

export function Teacher({ imgURL, position, name }: TTeacher) {
  return (
    <div className="w-full max-w-[24rem] rounded-md border bg-background/60 shadow-md">
      <div className="relative min-h-[22rem] md:min-h-[26rem]">
        <Image
          className="aspect-square rounded-md rounded-b-none object-cover object-top"
          src={imgURL}
          alt=""
          sizes="100%"
          fill
          priority
        />
      </div>
      <div className="flex flex-col gap-y-1 px-4 py-4">
        <h3 className="font-medium">{name}</h3>
        <div className="flex items-center gap-x-1 text-sm text-foreground/60">
          <span>{position}</span>
        </div>
      </div>
    </div>
  );
}
