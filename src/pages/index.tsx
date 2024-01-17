import { ChairmansMessage } from '@/components/chairmans-message';
import { Departments } from '@/components/departments';
import { LatestUpdate } from '@/components/latest-update';
import { Milestones } from '@/components/milestones';
import { Noticeboard } from '@/components/noticeboard';
import { Slider } from '@/components/slider';

function HomePage() {
  return (
    <main>
      <section className="container grid grid-cols-12 gap-8 pt-32 max-w-7xl md:gap-4">
        <div className="col-span-full space-y-4 md:col-span-8">
          <Slider />
          <LatestUpdate />
          <Departments />
        </div>
        <div className="col-span-full space-y-8 lg:space-y-4 md:col-span-4">
          {/* <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-2">
          <UpcomingEvents />
        </div> */}
          <Noticeboard />
          <ChairmansMessage />
        </div>
      </section>
      <Milestones />
    </main>
  );
}

export default HomePage;
