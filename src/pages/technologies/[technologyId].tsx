import * as React from "react";
import { Heading } from "@/components/ui/heading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { technologies } from "@/config";
import Image from "next/image";
import Link from "next/link";
import { FaBookReader, FaChevronRight } from "react-icons/fa";
import Head from "next/head";

export function getStaticPaths() {
  const paths = technologies.map(({ id }) => ({
    params: {
      technologyId: id,
    },
  }));

  return {
    paths,
    fallback: false,
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
      technology: { ...technology, Icon: "" },
    },
  };
}

type TechnologyProps = {
  technology: (typeof technologies)[number];
};

export default function Technology({
  technology: {
    name,
    description,
    images,
    deptOverView,
    courseOutline,
    courseOverView,
    courseFees,
  },
}: TechnologyProps) {
  return (
    <React.Fragment>
      <Head>
        <title>SNHPI - {name} টেকনোলজি</title>
      </Head>
      <main className="container mt-20 max-w-5xl space-y-14 pb-20 sm:mt-24 sm:space-y-20 lg:mt-52">
        <Image
          src={images[0]}
          alt={name}
          width={800}
          height={250}
          priority
          className="object-hover absolute right-0 top-0 h-[18rem] w-full object-cover brightness-50 md:h-[24rem]"
        />
        <section className="relative z-10 grid grid-cols-1 gap-4 pt-12 sm:grid-cols-12 ">
          <div className="rounded-md border bg-background shadow-md sm:col-span-8">
            <div className="rounded-tl-md rounded-tr-md bg-primary px-6 py-4 text-background">
              <h2 className="mx-auto text-2xl font-medium tracking-tight md:text-3xl">
                {name} টেকনোলজি
              </h2>
            </div>
            <div className="px-6 py-4">
              <p className="leading-relaxed text-foreground/60">
                {description}
              </p>
            </div>
          </div>
          <div className="space-y-4 sm:col-span-4">
            <div className="rounded-md border bg-background shadow-md">
              <div className="rounded-tl-md rounded-tr-md bg-primary px-6 py-4 text-background">
                <h2 className="mx-auto text-2xl font-medium tracking-tight md:text-3xl">
                  ডিপার্টমেন্ট ওভারভিউ
                </h2>
              </div>
              <ul className="space-y-3 px-6 py-4">
                {Object.keys(deptOverView).map((key) => (
                  <li
                    key={key}
                    className="flex items-center justify-between text-foreground/60"
                  >
                    <span>{key}</span>
                    <span className="font-medium">
                      {deptOverView[key as keyof typeof deptOverView]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-md border bg-background shadow-md">
              <div className="rounded-tl-md rounded-tr-md bg-primary px-6 py-4 text-background">
                <h2 className="mx-auto text-2xl font-medium tracking-tight md:text-3xl">
                  কোর্স ওভারভিউ
                </h2>
              </div>
              <div className="space-y-3 px-6 py-4">
                {Object.keys(courseOverView).map((key) => (
                  <Link
                    href={courseOverView[key as keyof typeof courseOverView]}
                    key={key}
                    className="flex items-center justify-between text-foreground/60 
                  underline-offset-2 hover:text-foreground/90 hover:underline"
                  >
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
          <div className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.keys(courseOutline).map((key) => (
              <div
                className="rounded-md border bg-background/95 p-6 shadow-md"
                key={key}
              >
                <h2 className="pb-2 font-medium">{key}</h2>
                <ul className="space-y-2 text-sm text-foreground/60">
                  {courseOutline[key as keyof typeof courseOutline].map(
                    (subject: string) => (
                      <li className="flex items-center gap-x-3" key={subject}>
                        <FaBookReader></FaBookReader>
                        <span>{subject}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section>
          <Heading className="md:text-center">কোর্স ফি</Heading>
          <div className="rounded-md border shadow-md">
            <Table className="rounded-md bg-background/60 text-base text-foreground/60">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-32 p-4 font-medium text-foreground/90">
                    সেমিস্টার ফি
                  </TableHead>
                  <TableHead className="w-32 p-4 font-medium text-foreground/90">
                    ভর্তি ফি
                  </TableHead>
                  <TableHead className="w-32 p-4 font-medium text-foreground/90">
                    মাসিক বেতন
                  </TableHead>
                  <TableHead className="w-32 p-4 font-medium text-foreground/90">
                    উপবৃত্তি
                  </TableHead>
                  <TableHead className="p-4 font-medium text-foreground/90">
                    ভর্তি যোগ্যতা
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="px-4">{courseFees}</TableCell>
                  <TableCell className="px-4">৫,০০০/-</TableCell>
                  <TableCell className="px-4">ফ্রি!</TableCell>
                  <TableCell className="px-4">৪,০০০/-</TableCell>
                  <TableCell className="px-4">
                    নূন্যতম এসএসসি/সমমান, এইচএসসি(বিজ্ঞান) পাস ৩য় পর্বে,
                    এইচএসসি(ভোকেশনাল) ৪র্থ পর্বে ভর্তি হতে পারবে।
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
