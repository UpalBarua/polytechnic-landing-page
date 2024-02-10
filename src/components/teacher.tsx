import { TTeacher } from "@/types";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";

export function Teacher({ phone, imgURL, position, name }: TTeacher) {
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
      <div className="flex flex-col gap-y-1 px-4 py-5">
        <h3 className="font-medium">{name}</h3>
        <div className="flex items-center gap-x-2 text-sm text-foreground/60">
          <FaRegUser />
          <span>{position}</span>
        </div>
        {phone ? (
          <div className="flex items-center gap-x-2 text-sm text-foreground/60">
            <MdLocalPhone />
            <span>{phone}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
