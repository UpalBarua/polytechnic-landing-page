import Image from "next/image";
import React, { Fragment, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Heading } from "./ui/heading";

export function RecentPictures({ pictures }) {
  useEffect(() => {
    AOS.init({
      delay: 400,
      duration: 800,
    });
  });

  return (
    <section className="container pt-14 max-w-5xl lg:pt-16">
      <Heading className="md:text-center">আমাদের স্মৃতিচারণ মুহূর্ত</Heading>
      <div
        className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 md:grid-cols-4"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2000"
      >
        {}
        {pictures?.map(({ imageUrl }, index) => (
          <PhotoView key={index} src={imageUrl}>
            <Image
              src={imageUrl}
              alt=""
              className="object-cover object-center rounded aspect-square"
              height={1200}
              width={1200}
            />
          </PhotoView>
        ))}
      </div>
    </section>
  );
}
