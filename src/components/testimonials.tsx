import { testimonials } from '@/config';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { Heading } from './ui/heading';

export function Testimonials() {
  return (
    <section className="pt-14 md:pt-26">
      <Heading className="md:text-center">
        আমাদের প্রাক্তন ছাত্র দের মতামত
      </Heading>
      <Marquee className="overflow-hidden w-screen">
        <ul className="flex gap-x-4 px-2">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
        </ul>
      </Marquee>
    </section>
  );
}

type TestimonialProps = (typeof testimonials)[number];

export function Testimonial({
  name,
  identity,
  image,
  comment,
}: TestimonialProps) {
  return (
    <li className="flex flex-col p-8 max-w-sm rounded-md border shadow-md bg-background/80">
      <p className="flex-1 pb-4 leading-relaxed text-foreground/60">
        {comment}
      </p>
      <div className="flex gap-x-3 items-center">
        <Image
          src={image}
          alt={name}
          height={40}
          width={40}
          className="object-cover object-center rounded-full border aspect-square"
        />
        <div className="text-sm">
          <p className="font-medium">{name}</p>
          <p className="text-foreground/60">{identity}</p>
        </div>
      </div>
    </li>
  );
}
