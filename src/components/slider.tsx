import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { FaSchool } from 'react-icons/fa';

export function Slider() {
  return (
    <Carousel
      className="relative rounded-md"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
      <CarouselContent className="rounded-md">
        {Array(5)
          .fill('')
          .map((_, i) => (
            <CarouselItem key={i} className="relative w-full h-[26rem]">
              <Image
                className="object-cover object-center rounded"
                src={`/slider${i}.jpg`}
                alt="slider image"
                fill
              />
            </CarouselItem>
          ))}
      </CarouselContent>
      <div className="flex absolute inset-0 justify-start items-end w-full h-full bg-gradient-to-t rounded-md pointer-events-none text-background from-foreground/95 to-foreground/20">
        <div className="flex flex-col gap-y-2 p-8">
          <div className="flex justify-center items-center w-16 rounded-full shadow aspect-square bg-background/60 text-foreground">
            <FaSchool className="text-4xl" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-primary">
            সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট
          </h2>
          <span className="text-lg">
            সমৃদ্ধ বাংলাদেশ গড়ার হাতিয়ার, ডিপ্লোমা ইঞ্জিনিয়ার
          </span>
        </div>
      </div>
      <div className="flex absolute right-4 top-8 gap-x-2 items-center opacity-75">
        <CarouselPrevious className="static" />
        <CarouselNext className="static" />
      </div>
    </Carousel>
  );
}
