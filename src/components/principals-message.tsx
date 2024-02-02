import { principleMessage } from "@/config";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "./ui/heading";

export function PrincipalsMessage() {
  const { name, picture, message, position } = principleMessage;

  return (
    <div
      className="container flex max-w-5xl flex-col items-center justify-center gap-8 rounded-md border bg-background/80 py-10 text-center shadow-md sm:items-start sm:gap-6 md:px-8"
      data-aos="fade-left"
      data-duration="10"
    >
      <div className="relative mx-auto aspect-square min-w-56 md:min-w-[14rem]">
        <Image
          className="rounded-full border object-cover object-center shadow-lg"
          src={picture}
          alt="chairman"
          quality={95}
          fill
        />
      </div>
      <div>
        <Heading className="sm:!pb-3 md:text-center">অধ্যক্ষের বাণী</Heading>
        <p className="mx-auto px-3 leading-relaxed text-foreground/60 md:px-0">
          {message.slice(0, 400) + "..."}
          <Link
            href="/chairmans-message"
            className="font-medium underline underline-offset-2"
          >
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
