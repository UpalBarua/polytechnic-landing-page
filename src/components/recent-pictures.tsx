import { TPicture } from "@/types";
import Link from "next/link";
import "react-photo-view/dist/react-photo-view.css";
import { Picture } from "./picture";
import { buttonVariants } from "./ui/button";
import { Heading } from "./ui/heading";
import { m } from "framer-motion";

type RecentPicturesProps = {
  pictures: TPicture[];
};

export function RecentPictures({ pictures }: RecentPicturesProps) {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75 }}
      className="container max-w-6xl  transition-opacity duration-700"
    >
      <Heading className="md:text-center">আমাদের স্মৃতিচারণ মুহূর্ত</Heading>
      <div className="grid grid-cols-1 gap-2 py-2 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pictures.slice(0, 8).map((picture) => (
          <Picture key={picture.id} {...picture} />
        ))}
      </div>
      <div className="flex items-center justify-center pt-10">
        <Link
          href="/gallery"
          className={buttonVariants({
            variant: "outline",
          })}
        >
          সকল ছবি দেখুন
        </Link>
      </div>
    </m.section>
  );
}
