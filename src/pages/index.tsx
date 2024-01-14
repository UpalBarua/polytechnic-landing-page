import Hero from '@/components/Hero';
import { ChairmansMessage } from '@/components/chairmans-message';
import { Departments } from '@/components/departments';
import { LatestUpdate } from '@/components/latest-update';
import { Noticeboard } from '@/components/noticeboard';
import { UpcomingEvents } from '@/components/upcoming-events';

function HomePage() {
  return (
    <main className="grid grid-cols-12 gap-8 md:gap-2">
      <section className="col-span-full md:col-span-7">
        <Hero />
        <Departments />
      </section>
      <section className="col-span-full space-y-8 lg:space-y-2 md:col-span-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-2">
          <LatestUpdate />
          <UpcomingEvents />
        </div>
        <ChairmansMessage />
        <Noticeboard />
      </section>
    </main>
  );
}

export default HomePage;
