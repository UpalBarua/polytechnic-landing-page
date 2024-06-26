import { ChairmansMessage } from "@/components/chairmans-message";
import { Facilities } from "@/components/facilities";
import { PrincipalsMessage } from "@/components/principals-message";
import { RecentNotices } from "@/components/recent-notices";
import { RecentPictures } from "@/components/recent-pictures";
import { Slider } from "@/components/slider";
import { Technologies } from "@/components/technologies";
import { Testimonials } from "@/components/testimonials";
import { getAllPictures, getLatestNotices } from "@/lib/services";
import { cn } from "@/lib/utils";
import { TNotice, TPicture } from "@/types";
import Head from "next/head";
import * as React from "react";
import { m } from "framer-motion";

export const getStaticProps = async () => {
  try {
    const notices = await getLatestNotices();
    const pictures = await getAllPictures();

    return {
      props: {
        notices: notices,
        pictures: pictures,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        notices: {},
        pictures: {},
      },
    };
  }
};

type HomePageProps = {
  notices: TNotice[];
  pictures: TPicture[];
};

export default function HomePage({ notices, pictures }: HomePageProps) {
  return (
    <React.Fragment>
      <Head>
        <title>SNHPI - Home</title>
      </Head>
      <main className="space-y-16 pt-[4.25rem] md:space-y-24 lg:space-y-28 lg:pt-[11rem]">
        <section
          className={cn(
            "container grid max-w-7xl grid-cols-1 gap-y-4 lg:grid-cols-12 lg:gap-x-4",
          )}
        >
          <m.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.125 }}
            className="col-span-full flex flex-col space-y-2.5 lg:col-span-8"
          >
            <Slider />
          </m.div>
          <m.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="col-span-full space-y-6 md:col-span-4 lg:space-y-4"
          >
            <RecentNotices notices={notices} />
          </m.div>
        </section>
        <section
          className={cn(
            "container grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2",
          )}
        >
          <ChairmansMessage />
          <PrincipalsMessage />
        </section>
        <Technologies />
        <Facilities />
        <Testimonials />
        <RecentPictures pictures={pictures} />
        <m.section
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="container max-w-6xl pb-16 md:pb-32"
        >
          <video
            src="/video.mp4"
            controls
            className="w-full rounded-md border shadow-md"
            preload="none"
          ></video>
        </m.section>
      </main>
    </React.Fragment>
  );
}
