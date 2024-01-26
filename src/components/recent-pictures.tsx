import Image from 'next/image';
import React, { Fragment } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import { Heading } from './ui/heading';

export function RecentPictures({ pictures }) {
  console.log(pictures);
  return (
    <section className="container pt-14 max-w-5xl lg:pt-16">
      <Heading className="md:text-center">আমাদের স্মৃতিচারণ মুহূর্ত</Heading>
      <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 md:grid-cols-4">
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
