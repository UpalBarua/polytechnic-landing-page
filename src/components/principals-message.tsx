import { chairmansMessage } from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import { FaQuoteRight } from 'react-icons/fa';

export function PrincipalsMessage() {
  return (
    <div className="flex gap-x-4 items-center py-12">
      <Image
        className="object-cover object-center rounded-full border aspect-square"
        src={chairmansMessage.picture}
        alt="chairman"
        height={160}
        width={160}
        quality={90}
      />
      <div className="space-y-4">
        <div className="flex gap-x-6 items-end">
          <h2 className="text-2xl font-bold tracking-tight">
            চেয়ারম্যানের বাণী
          </h2>
          <FaQuoteRight className="text-5xl text-primary/25" />
        </div>
        <p className="leading-relaxed text-foreground/80">
          {chairmansMessage.message.slice(0, 220) + '...'}
          <Link
            href="/chairmans-message"
            className="font-bold underline underline-offset-2">
            আরো পড়ুন
          </Link>
        </p>
      </div>
    </div>
  );
}
