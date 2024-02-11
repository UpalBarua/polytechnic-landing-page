import { Heading } from "@/components/ui/heading";
import { technologies } from "@/config";
import Image from "next/image";
import Link from "next/link";
import { FaBookReader, FaChevronRight } from "react-icons/fa";

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

export default function Technology({ technology }: TechnologyProps) {
  const {
    name,
    description,
    images,
    deptOverView,
    courseOutline,
    courseOverView,
  } = technology;

  return (
    <main className="container mt-20 max-w-5xl space-y-14 sm:mt-24 sm:space-y-20 lg:mt-52">
      <Image
        src={images[0]}
        alt={name}
        width={800}
        height={250}
        priority
        className="object-hover absolute right-0 top-0 h-[18rem] w-full object-cover brightness-50 md:h-[24rem]"
      />
      <section className="relative z-10 grid grid-cols-1 gap-4 pt-20 sm:grid-cols-12">
        <div className="rounded-md border bg-background/95 p-6 shadow-md sm:col-span-8">
          <Heading>{name} টেকনোলজি</Heading>
          <p className="leading-relaxed text-foreground/60">{description}</p>
        </div>
        <div className="space-y-4 sm:col-span-4">
          <div className="rounded-md bg-background/95 p-6 shadow-md">
            <Heading className="md:text-center">ডিপার্টমেন্ট ওভারভিউ</Heading>
            <ul className="space-y-3">
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
          <div className="rounded-md bg-background/95 p-6 shadow-md">
            <Heading className="md:text-center">Course ওভারভিউ</Heading>
            <div className="space-y-3">
              {Object.keys(courseOverView).map((key) => (
                <Link
                  href={courseOverView[key as keyof typeof courseOverView]}
                  key={key}
                  className="flex items-center justify-between text-foreground/60 underline-offset-2 hover:text-foreground/90 hover:underline"
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
    </main>
  );
}
