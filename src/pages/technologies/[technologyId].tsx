import { Heading } from '@/components/ui/heading';
import { technologies } from '@/config';
import Link from 'next/link';
import { FaBookReader, FaChevronRight } from 'react-icons/fa';
import * as React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function getStaticPaths() {
  const paths = technologies.map(({ id }) => ({
    params: {
      technologyId: id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export function getStaticProps({
  params,
}: {
  params: { technologyId: string };
}) {
  const technology = technologies.find(({ id }) => id === params.technologyId);

  return {
    props: {
      technology: { ...technology, Icon: '' },
    },
  };
}

export default function Technology({ technology }) {
  const {
    id,
    name,
    picture,
    cheifInstructor,
    icon,
    description,
    images,
    deptOverView,
    courseOutline,
    courseOverView,
  } = technology;

  return (
    <main className="container mt-20 sm:mt-24 max-w-5xl lg:mt-32 space-y-14 sm:space-y-20">
      <Image
        src={images[0]}
        alt={name}
        width={800}
        height={250}
        priority
        className="object-cover object-hover absolute w-full top-0 right-0 h-[18rem] md:h-[24rem] brightness-50"
      />
      <section className="grid grid-cols-1 sm:grid-cols-12 pt-20 gap-4 z-10 relative">
        <div className="bg-background/95 border shadow-md sm:col-span-8 p-6 rounded-md">
          <Heading>{name} টেকনোলজি</Heading>
          <p className="leading-relaxed text-foreground/60">{description}</p>
        </div>
        <div className="space-y-4 sm:col-span-4">
          <div className="bg-background/95 shadow-md rounded-md p-6">
            <Heading className="md:text-center">ডিপার্টমেন্ট ওভারভিউ</Heading>
            <ul className="space-y-3">
              {Object.keys(deptOverView).map((key) => (
                <li
                  key={key}
                  className="flex items-center justify-between text-foreground/60">
                  <span>{key}</span>
                  <span className="font-medium">{deptOverView[key]}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background/95 shadow-md rounded-md p-6">
            <Heading className="md:text-center">Course ওভারভিউ</Heading>
            <div className="space-y-3">
              {Object.keys(courseOverView).map((key) => (
                <Link
                  href={courseOverView[key]}
                  key={key}
                  className="flex items-center justify-between text-foreground/60 hover:text-foreground/90 hover:underline underline-offset-2">
                  <span>{key}</span>
                  <FaChevronRight />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <Heading className="md:text-center">কোর্স আউটলাইন</Heading>
        <div className="grid grid-cols-1 gap-4 justify-center sm:grid-cols-2 lg:grid-cols-4">
          {Object.keys(courseOutline).map((key) => (
            <div
              className="p-6 bg-background/95 border rounded-md shadow-md"
              key={key}>
              <h2 className="pb-2 font-medium">{key}</h2>
              <ul className="text-foreground/60 space-y-2 text-sm">
                {courseOutline[key].map((subject: string) => (
                  <li className="flex gap-x-3 items-center" key={subject}>
                    <FaBookReader></FaBookReader>
                    <span>{subject}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
