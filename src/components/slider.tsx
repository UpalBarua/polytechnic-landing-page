import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Logo } from "./ui/logo";

export function Slider() {
  return (
    <Carousel
      className="relative flex-1 rounded-md border shadow-md transition-transform duration-700"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent className="rounded-md">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <CarouselItem
              key={i}
              className="relative h-[26rem] w-full rounded-md lg:h-[32rem]"
            >
              <Image
                className="rounded-md object-cover object-center"
                src={`/images/slider${i}.jpg`}
                alt={`slider image ${i}`}
                fill
                priority
              />
            </CarouselItem>
          ))}
      </CarouselContent>
      <div className="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center rounded-md bg-gradient-to-t from-foreground/90 to-foreground/25 text-background md:items-end md:justify-start">
        <div className="flex flex-col items-center justify-center gap-y-3 p-6 text-center md:items-start md:justify-start md:p-10">
          <Logo className="mb-4 h-24 w-24 rounded-full bg-background p-1" />
          <h2 className="text-2xl font-medium capitalize text-primary md:text-3xl lg:text-4xl">
            সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট
          </h2>
          <span className="text-background/80 md:text-lg lg:text-xl">
            সমৃদ্ধ বাংলাদেশ গড়ার হাতিয়ার, ডিপ্লোমা ইঞ্জিনিয়ার!
          </span>
        </div>
      </div>
      <div className="absolute right-4 top-8 hidden items-center gap-x-2 opacity-75 md:flex">
        <CarouselPrevious className="static" />
        <CarouselNext className="static" />
      </div>
    </Carousel>
  );
}
