import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa';
import Link from 'next/link';
import { chairmansMessage } from '@/config';

export function ChairmansMessage() {
  return (
    <div className="mx-auto space-y-3 max-w-sm rounded-md sm:border sm:shadow-sm sm:max-w-full sm:p-6">
      <Image
        className="object-cover object-center rounded-full border aspect-square"
        src={chairmansMessage.picture}
        alt="chairman"
        height={150}
        width={150}
        quality={90}
      />
      <div className="flex gap-x-6 items-end">
        <h2 className="text-2xl font-bold tracking-tight">
          চেয়ারম্যানের বাণী
        </h2>
        <FaQuoteRight className="text-5xl text-primary/25" />
      </div>
      <p className="leading-relaxed text-foreground/80">
        {chairmansMessage.message.slice(0, 250) + '...'}
        <Link
          href="/chairmans-message"
          className="font-bold underline underline-offset-2">
          আরো পড়ুন
        </Link>
      </p>
    </div>
  );
}
