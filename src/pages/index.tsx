import { Slider } from "@/components/slider";
import { ChairmansMessage } from "@/components/chairmans-message";
import { Departments } from "@/components/departments";
import { LatestUpdate } from "@/components/latest-update";
import { Noticeboard } from "@/components/noticeboard";
import { UpcomingEvents } from "@/components/upcoming-events";
import CountingMember from "@/components/CountingMember";

function HomePage() {
  return (
    <main className="grid grid-cols-12 gap-8 md:gap-2">
      <section className="col-span-full space-y-2 md:col-span-8">
        <Slider />
        <LatestUpdate />
        <Departments />
        <CountingMember></CountingMember>
      </section>
      <section className="col-span-full space-y-8 lg:space-y-2 md:col-span-4">
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-2">
          <UpcomingEvents />
        </div> */}
        <Noticeboard />
        <ChairmansMessage />
      </section>
    </main>
  );
}

export default HomePage;
