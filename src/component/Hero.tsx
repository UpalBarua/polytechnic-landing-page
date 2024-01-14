import {
  Carousel,
  CarouselContent,
  type CarouselApi,
  CarouselItem,
} from "@/components/ui/carousel";

export function Example() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

import Image from "next/image";
import React from "react";
const Hero = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>
          {" "}
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww"
            alt=""
            height={700}
            width={800}
          ></Image>
        </CarouselItem>
        <CarouselItem>
          {" "}
          <Image
            src="https://images.unsplash.com/photo-1613592498887-da347580ec0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            height={700}
            width={800}
          ></Image>
        </CarouselItem>
        <CarouselItem>
          {" "}
          <Image
            src="https://images.unsplash.com/photo-1569447891824-7a1758aa73a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            height={700}
            width={800}
          ></Image>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Hero;

//
