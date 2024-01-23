import Image from 'next/image';
import React, { Fragment } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Button } from './ui/button';
import { Heading } from './ui/heading';

export function RecentPictures() {
  return (
    <section className="container pt-14 max-w-5xl lg:pt-16">
      <Heading className="md:text-center">আমাদের স্মৃতিচারণ মুহূর্ত</Heading>
      <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 md:grid-cols-3">
        {Array(5)
          .fill('')
          .map((_, i) => (
            <PhotoView key={i} src={`/slider${i}.jpg`}>
              <Image
                src={`/slider${i}.jpg`}
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
