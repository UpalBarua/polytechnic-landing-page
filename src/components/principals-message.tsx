import { principleMessage } from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import { Heading } from './ui/heading';
import { FaQuoteRight } from 'react-icons/fa';

export function PrincipalsMessage() {
  const { name, picture, message, position } = principleMessage;

  return (
    <div className="container flex flex-col gap-8 justify-center items-center max-w-5xl text-center md:flex-row md:text-start md:gap-10 lg:gap-16">
      <div className="order-last md:order-first">
        <FaQuoteRight className="hidden mb-6 text-6xl lg:block text-primary/20" />
        <Heading>অধ্যক্ষের বাণী</Heading>
        <p className="px-3 mx-auto leading-relaxed md:px-0 text-foreground/60">
          {message.slice(0, 550) + '...'}
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
      <div className="relative min-w-56 md:min-w-[22rem] aspect-square">
        <Image
          className="object-cover object-center rounded-full border shadow-lg"
          src={picture}
          alt="chairman"
          quality={95}
          fill
        />
      </div>
    </div>
  );
}
