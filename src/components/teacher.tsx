import { TTeacher } from '@/types';
import Image from 'next/image';
import { FaRegUser } from 'react-icons/fa';
import { MdLocalPhone } from 'react-icons/md';

export function Teacher({ phone, imgURL, position, name }: TTeacher) {
  return (
    <div className="border shadow-md bg-background/80 rounded-md">
      <div className="relative h-52">
        <Image
          className="object-cover object-center rounded-md rounded-b-none aspect-square"
          src={imgURL}
          alt=""
          fill
        />
      </div>
      <div className="flex flex-col gap-y-1 py-5 px-4">
        <h3 className="font-medium">{name}</h3>
        <div className="text-sm text-foreground/60 flex items-center gap-x-2">
          <FaRegUser />
          <span>{position}</span>
        </div>
        {phone ? (
          <div className="text-sm text-foreground/60 flex items-center gap-x-2">
            <MdLocalPhone />
            <span>{phone}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
