import { principleMessage } from "@/config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { InView } from "react-intersection-observer";
import { Heading } from "./ui/heading";

export function PrincipalsMessage() {
  const { name, message, position, picture } = principleMessage;

  return (
    <InView>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={cn(
            "container flex max-w-5xl flex-col items-center justify-center gap-8 rounded-md border bg-background/60 py-10 text-center shadow-md transition-transform duration-700 sm:items-start sm:gap-10 md:px-8",
            inView ? "translate-x-0" : "translate-x-full",
          )}
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
              অধ্যক্ষের বাণী
            </Heading>
            <p className="mx-auto px-3 leading-relaxed text-foreground/60 md:px-0">
              {message.slice(0, 400) + "..."}
              <Link
                href="/principal"
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
        </div>
      )}
    </InView>
  );
}
