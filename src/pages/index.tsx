import * as React from "react";
import Head from "next/head";
import { ChairmansMessage } from "@/components/chairmans-message";
import { Facilities } from "@/components/facilities";
import { LatestUpdate } from "@/components/latest-update";
import { Milestones } from "@/components/milestones";

import { PrincipalsMessage } from "@/components/principals-message";
import { RecentNotices } from "@/components/recent-notices";
import { RecentPictures } from "@/components/recent-pictures";
import { Slider } from "@/components/slider";
import { Technologies } from "@/components/technologies";
import { Testimonials } from "@/components/testimonials";
import { getAllPictures, getLatestNotices } from "@/lib/services";
import { TNotice, TPicture } from "@/types";

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
      <main className="relative z-10 space-y-16 md:space-y-24 lg:space-y-28">
        <section className="container grid max-w-7xl grid-cols-1 gap-y-4 pt-[4.25rem] md:pt-20 lg:grid-cols-12 lg:gap-x-4 lg:pt-32">
          <div className="col-span-full flex flex-col space-y-2.5 lg:col-span-8">
            <Slider />
            <LatestUpdate latestUpdate={notices[0]?.title} />
          </div>
          <div className="col-span-full space-y-6 md:col-span-4 lg:space-y-4">
            <RecentNotices notices={notices} />
          </div>
        </section>
        <section className="container grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2">
          <ChairmansMessage />
          <PrincipalsMessage />
        </section>
        <Technologies />
        <Facilities />
        <Milestones />
        <Testimonials />
        <RecentPictures pictures={pictures} />
      </main>
      <div className="fixed inset-0 z-0 h-full w-full bg-[url('/bg-gradient.png')] bg-cover bg-center opacity-40" />
    </React.Fragment>
  );
}
