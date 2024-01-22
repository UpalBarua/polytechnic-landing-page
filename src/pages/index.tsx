import { ChairmansMessage } from '@/components/chairmans-message';
import { LatestUpdate } from '@/components/latest-update';
import { Milestones } from '@/components/milestones';
import { PrincipalsMessage } from '@/components/principals-message';
import { RecentNotices } from '@/components/recent-notices';
import { Slider } from '@/components/slider';
import { Technologies } from '@/components/technologies';
import { getAllNotices } from '@/lib/services';
import { TNotice } from '@/types';

export const getStaticProps = async () => {
  try {
    const notices = (await getAllNotices()).slice(0, 5);

    return {
      props: {
        notices: notices,
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

export default function HomePage({ notices }: HomePageProps) {
  return (
    <main>
      <section className="container grid grid-cols-1 pt-16 max-w-7xl lg:pt-28 md:grid-cols-12 md:gap-4">
        <div className="col-span-full md:col-span-8">
          <Slider />
          <LatestUpdate />
          <Technologies />
        </div>
        <div className="col-span-full space-y-6 md:space-y-4 md:col-span-4">
          <RecentNotices notices={notices} />
          <ChairmansMessage />
          <PrincipalsMessage />
        </div>
      </section>
      <Milestones />
      {/* <Gallery />
      <Benefit />
      <Footer /> */}
    </main>
  );
}
