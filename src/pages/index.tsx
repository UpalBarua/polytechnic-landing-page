import { ChairmansMessage } from "@/components/chairmans-message";
import { Technologies } from "@/components/technologies";
import { LatestUpdate } from "@/components/latest-update";
import { Milestones } from "@/components/milestones";
import { Noticeboard } from "@/components/noticeboard";
import { Slider } from "@/components/slider";
import Gallery from "@/components/gallery";
import Benefit from "@/components/benefits";
import Footer from "@/components/footer";

function HomePage() {
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
          <Noticeboard />
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
