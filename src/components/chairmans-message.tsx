import { chairmansMessage } from '@/config';
import Image from 'next/image';
import Link from 'next/link';

export function ChairmansMessage() {
  return (
    <div className="flex flex-col gap-y-2 justify-center items-center p-4 mx-auto max-w-sm text-center rounded-md md:text-start md:items-start md:border md:shadow-sm md:max-w-full md:p-6 md:bg-background/80">
      <div className="relative mb-4 w-48 md:w-full aspect-square">
        <Image
          className="object-cover object-center rounded-md"
          src={chairmansMessage.picture}
          alt="chairman"
          quality={90}
          fill
        />
      </div>
      <h2 className="text-2xl font-medium tracking-tight">
        চেয়ারম্যান মহোদয়ের বাণী
      </h2>
      <p className="leading-relaxed text-foreground/60">
        {chairmansMessage.message.slice(0, 260) + '...'}
        <Link
          href="/chairmans-message"
          className="font-medium underline underline-offset-2">
          আরো পড়ুন
        </Link>
      </p>
    </div>
  );
}
