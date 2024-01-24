import { ChairmansMessage } from '@/components/chairmans-message';
import { Facilities } from '@/components/facilities';
import Footer from '@/components/footer';
import { LatestUpdate } from '@/components/latest-update';
import { Milestones } from '@/components/milestones';
import { PrincipalsMessage } from '@/components/principals-message';
import { RecentNotices } from '@/components/recent-notices';
import { RecentPictures } from '@/components/recent-pictures';
import { Slider } from '@/components/slider';
import { Technologies } from '@/components/technologies';
import { getAllNotices, getAllPictures } from '@/lib/services';
import { TNotice } from '@/types';

export const getStaticProps = async () => {
  try {
    const notices = (await getAllNotices()).slice(0, 4);
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
      <section className="container grid grid-cols-1 pt-16 max-w-7xl lg:pt-28 md:grid-cols-12 md:gap-3 pb-6">
        <div className="col-span-full md:col-span-8 space-y-2 flex flex-col">
          <Slider />
          <LatestUpdate />
        </div>
        <div className="col-span-full space-y-6 md:space-y-4 md:col-span-4">
          <RecentNotices notices={notices} />
        </div>
      </section>
      <section className="py-12 space-y-16 md:space-y-28 md:py-24 bg-background/80">
        <ChairmansMessage />
        <PrincipalsMessage />
      </section>
      <Technologies />
      <Facilities />
      <Milestones />

      <RecentPictures pictures={pictures} />
      {/* <Footer /> */}
    </main>
  );
}
