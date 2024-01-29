import { TPicture } from '@/types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { buttonVariants } from './ui/button';
import { Heading } from './ui/heading';
import { Picture } from './picture';

type RecentPicturesProps = {
  pictures: TPicture[];
};

export function RecentPictures({ pictures }: RecentPicturesProps) {
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
        data-aos-duration="2000">
        {pictures.slice(0, 12).map((picture) => (
          <Picture key={picture.id} {...picture} />
        ))}
      </div>
      <div className="flex justify-center items-center pt-6">
        <Link
          href="/gallery"
          className={buttonVariants({
            variant: 'outline',
          })}>
          সকল ছবি দেখুন
        </Link>
      </div>
    </section>
  );
}
