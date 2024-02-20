import { testimonials } from "@/config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { InView } from "react-intersection-observer";
import { Heading } from "./ui/heading";

export function Testimonials() {
  return (
    <InView>
      {({ ref, inView }) => (
        <section
          ref={ref}
          className={cn(
            "transition-opacity duration-700",
            inView ? "opacity-1" : "opacity-0",
          )}
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
        </section>
      )}
    </InView>
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
