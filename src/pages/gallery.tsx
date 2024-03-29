import { Picture } from "@/components/picture";
import { Heading } from "@/components/ui/heading";
import { getAllPictures } from "@/lib/services";
import { TPicture } from "@/types";
import Head from "next/head";
import * as React from "react";
import { FacebookEmbed } from "react-social-media-embed";
import "react-photo-view/dist/react-photo-view.css";

export const getStaticProps = async () => {
  try {
    const pictures = await getAllPictures();

    return {
      props: {
        pictures: pictures,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

type GalleryProps = {
  pictures: TPicture[];
};

export default function Gallery({ pictures }: GalleryProps) {
  return (
    <React.Fragment>
      <Head>SNHPI - Gallery</Head>
      <section className="container mt-24 max-w-6xl pb-20 sm:mt-32 lg:mt-56">
        <Heading className="md:text-center">আমাদের স্মৃতিচারণ মুহূর্ত</Heading>
        <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 md:grid-cols-4">
          {pictures.map((picture) => (
            <Picture key={picture.id} {...picture} />
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}
