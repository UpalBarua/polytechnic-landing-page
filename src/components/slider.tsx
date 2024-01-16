import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export function Slider() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
      <CarouselContent>
        {Array(5)
          .fill('')
          .map((_, i) => (
            <CarouselItem key={i} className="relative w-full h-[26rem]">
              <Image
                className="object-center object-cover"
                src={`/slider${i}.jpg`}
                alt="slider image"
                fill
              />
            </CarouselItem>
          ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
