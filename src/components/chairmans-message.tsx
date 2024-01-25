import { chairmansMessage } from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import { FaQuoteRight } from 'react-icons/fa';
import { Heading } from './ui/heading';

export function ChairmansMessage() {
  const { name, picture, message, position } = chairmansMessage;

  return (
    <div className="container flex flex-col gap-8 sm:gap-6 justify-center items-center max-w-5xl text-center sm:items-start">
      <div className="relative mx-auto min-w-56 md:min-w-[14rem] aspect-square">
        <Image
          className="object-cover object-center rounded-full border shadow-lg"
          src={picture}
          alt="chairman"
          quality={95}
          fill
        />
      </div>
      <div>
        <Heading className="sm:!pb-3 md:text-center">
          চেয়ারম্যান মহোদয়ের বাণী
        </Heading>
        <p className="px-3 mx-auto leading-relaxed md:px-0 text-foreground/60">
          {message.slice(0, 400) + '...'}
          <Link
            href="/chairmans-message"
            className="font-medium underline underline-offset-2">
            আরো পড়ুন
          </Link>
        </p>
        <div className="flex flex-col pt-6">
          <span className="font-medium">{name}</span>
          <span className="text-foreground/60">{position}</span>
        </div>
      </div>
    </div>
  );
}
