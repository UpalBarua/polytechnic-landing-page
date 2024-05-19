import { chairmansMessage } from "@/config";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "./ui/heading";
import { m } from "framer-motion";

export function ChairmansMessage() {
  const { name, picture, message, position } = chairmansMessage;

  return (
    <m.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="container flex max-w-5xl flex-col items-center justify-center gap-8 rounded-md border bg-background/60 py-10 text-center shadow-md transition-transform duration-700 sm:items-start sm:gap-10 md:px-8"
    >
      <div className="relative mx-auto aspect-square min-w-56 md:min-w-[14rem]">
        <Image
          className="rounded-full border object-cover object-center shadow-lg"
          src={picture}
          alt="chairman"
          quality={95}
          sizes="100%"
          fill
        />
      </div>
      <div>
        <Heading className="sm:!pb-3 md:text-center">
          চেয়ারম্যান মহোদয়ের বাণী
        </Heading>
        <p className="mx-auto px-3 text-justify leading-relaxed text-foreground/60 md:px-0">
          {message.slice(0, 400) + "..."}
          <Link
            href="/chairman"
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            আরো পড়ুন
          </Link>
        </p>
        <div className="flex flex-col pt-6">
          <span className="font-medium">{name}</span>
          <span className="text-foreground/60">{position}</span>
        </div>
      </div>
    </m.div>
  );
}
