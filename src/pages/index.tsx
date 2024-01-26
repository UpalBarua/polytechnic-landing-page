import { ChairmansMessage } from '@/components/chairmans-message';
import { Facilities } from '@/components/facilities';
import { LatestUpdate } from '@/components/latest-update';
import { Milestones } from '@/components/milestones';
import { PrincipalsMessage } from '@/components/principals-message';
import { RecentNotices } from '@/components/recent-notices';
import { Slider } from '@/components/slider';
import { Technologies } from '@/components/technologies';
import { getAllPictures, getLatestNotices } from '@/lib/services';
import { TNotice } from '@/types';

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
      },
    };
  }
};

type HomePageProps = {
  notices: TNotice[];
};

export default function HomePage({ notices, pictures }: HomePageProps) {
  return (
    <main>
      <section className="container grid grid-cols-1 pt-16 pb-6 max-w-7xl lg:pt-28 md:grid-cols-12 md:gap-3">
        <div className="flex flex-col col-span-full space-y-2 md:col-span-8">
          <Slider />
          <LatestUpdate />
        </div>
        <div className="col-span-full space-y-6 md:space-y-4 md:col-span-4">
          <RecentNotices notices={notices} />
        </div>
      </section>
      {/* className="py-12 space-y-16 md:space-y-28 md:py-24 bg-background/80" */}
      <section className="flex flex-col items-start justify-center gap-14 py-14 md:py-24 bg-background/80 px-6 md:px-10 lg:flex-row">
        <ChairmansMessage />
        <PrincipalsMessage />
      </section>
      <Technologies />
      <Facilities />
      <Milestones />
      {/* <Testimonials /> */}
      {/* <RecentPictures pictures={pictures} /> */}
    </main>
  );
}
