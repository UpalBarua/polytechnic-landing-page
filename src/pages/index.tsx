import { ChairmansMessage } from '@/components/chairmans-message';
import { LatestInformation } from '@/components/latest-information';
import { Noticeboard } from '@/components/noticeboard';

function HomePage() {
  return (
    <main className="grid grid-cols-12 gap-8 md:gap-4">
      <section className="col-span-full p-5 bg-red-200 md:col-span-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugiat
        accusantium illum recusandae eaque, asperiores et odio fugit earum
        autem.
      </section>
      <section className="col-span-full space-y-4 md:col-span-5">
        <div className="grid grid-cols-2 gap-2.5">
          <LatestInformation />
          <LatestInformation />
        </div>
        <ChairmansMessage />
        <Noticeboard />
      </section>
    </main>
  );
}

export default HomePage;
