import Benefit from '@/components/benefits';
import { ChairmansMessage } from '@/components/chairmans-message';
import Footer from '@/components/footer';
import Gallery from '@/components/gallery';
import { LatestUpdate } from '@/components/latest-update';
import { Milestones } from '@/components/milestones';
import { RecentNotices } from '@/components/recent-notices';
import { Slider } from '@/components/slider';
import { Technologies } from '@/components/technologies';
import { getAllNotices } from '@/lib/services';
import { TNotice } from '@/types';

export const getStaticProps = async () => {
  try {
    const notices = await getAllNotices();

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

function HomePage({ notices }: { notices: TNotice[] }) {
  return (
    <main>
      <section className="container grid grid-cols-12 gap-8 pt-32 max-w-7xl md:gap-4">
        <div className="col-span-full space-y-4 md:col-span-8">
          <Slider />
          <LatestUpdate />
          <Technologies />
        </div>
        <div className="col-span-full space-y-8 lg:space-y-4 md:col-span-4">
          {/* <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-2">
          <UpcomingEvents />
        </div> */}
          <RecentNotices notices={notices} />
          <ChairmansMessage />
        </div>
      </section>
      <Milestones />
      <Gallery />
      <Benefit />
      <Footer></Footer>
    </main>
  );
}

export default HomePage;
