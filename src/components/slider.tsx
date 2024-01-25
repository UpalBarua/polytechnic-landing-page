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
import { Logo } from './ui/logo';

export function Slider() {
  return (
    <Carousel
      className="relative flex-1 rounded-md border shadow-md"
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
      <div className="flex absolute inset-0 justify-center items-center w-full h-full bg-gradient-to-t rounded-md pointer-events-none text-background from-foreground/95 to-foreground/50 md:justify-start md:items-end">
        <div className="flex flex-col gap-y-2 justify-center items-center p-6 text-center md:items-start md:justify-start md:p-8">
          <Logo />
          <h2 className="text-2xl italic font-medium capitalize text-primary">
            সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট
          </h2>
          <span className="text-background/80">
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
