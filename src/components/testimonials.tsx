import { testimonials } from "@/config";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Heading } from "./ui/heading";
import { m } from "framer-motion";

export function Testimonials() {
  return (
    <m.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="transition-opacity duration-700"
    >
      <Heading className="px-4 md:text-center">
        অভিভাবক ও প্রাক্তনদের মতামত
      </Heading>
      <Marquee className="w-screen overflow-hidden py-2">
        <ul className="flex gap-x-4 px-2">
          {testimonials.map((testimonial, i) => (
            <Testimonial key={testimonial.name + i} {...testimonial} />
          ))}
        </ul>
      </Marquee>
    </m.section>
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
    <li className="flex max-w-sm flex-col rounded-md border bg-background/60 p-8 shadow-md">
      <p className="flex-1 pb-4 leading-relaxed text-foreground/60">
        {comment}
      </p>
      <div className="flex items-center gap-x-3">
        <Image
          src={image}
          alt={name}
          height={40}
          width={40}
          className="aspect-square rounded-full border object-cover object-center"
        />
        <div className="text-sm">
          <p className="font-medium">{name}</p>
          <p className="text-foreground/60">{identity}</p>
        </div>
      </div>
    </li>
  );
}
