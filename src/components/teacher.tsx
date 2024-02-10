import { TTeacher } from "@/types";
import Image from "next/image";

export function Teacher({ imgURL, department, name }: TTeacher) {
  return (
    <div className="rounded-md border bg-background/60 shadow-md">
      <div className="relative h-52">
        <Image
          className="aspect-square rounded-md rounded-b-none object-cover object-center"
          src={imgURL}
          alt=""
          fill
        />
      </div>
      <div className="flex flex-col gap-y-1 px-4 py-4">
        <h3 className="font-medium">{name}</h3>
        <div className="flex items-center gap-x-1 text-sm text-foreground/60">
          <span>{department} Department</span>
        </div>
      </div>
    </div>
  );
}
