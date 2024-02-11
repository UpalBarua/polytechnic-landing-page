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
      className="relative flex-1 rounded-md border shadow-md"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="rounded-md">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <CarouselItem key={i} className="relative h-[26rem] w-full">
              <Image
                className="rounded object-cover object-center"
                src={`/slider${i}.jpg`}
                alt="slider image"
                fill
              />
            </CarouselItem>
          ))}
      </CarouselContent>
      <div className="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center rounded-md bg-gradient-to-t from-foreground/95 to-foreground/50 text-background md:items-end md:justify-start">
        <div className="flex flex-col items-center justify-center gap-y-2 p-6 text-center md:items-start md:justify-start md:p-8">
          <Logo className="mb-3 h-auto w-24 rounded-full bg-background p-1" />
          <h2 className="text-2xl font-medium capitalize text-primary md:text-3xl lg:text-4xl">
            সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট
          </h2>
          <span className="text-background/80 lg:text-xl">
            সমৃদ্ধ বাংলাদেশ গড়ার হাতিয়ার, ডিপ্লোমা ইঞ্জিনিয়ার
          </span>
        </div>
      </div>
      <div className="absolute right-4 top-8 flex items-center gap-x-2 opacity-75">
        <CarouselPrevious className="static" />
        <CarouselNext className="static" />
      </div>
    </Carousel>
  );
}
