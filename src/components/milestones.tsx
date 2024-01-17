import CountUp from 'react-countup';
import { PiStudent } from 'react-icons/pi';
import { PiChalkboardTeacher } from 'react-icons/pi';
import { PiBuildings } from 'react-icons/pi';

const milestones = [
  {
    Icon: <PiStudent />,
    title: 'জন শিক্ষার্থী',
    count: 567,
  },
  {
    Icon: <PiChalkboardTeacher />,
    title: 'জন শিক্ষক',
    count: 50,
  },
  {
    Icon: <PiBuildings />,
    title: 'টি ডিপার্টমেন্ট',
    count: 6,
  },
] as const;

const Milestones = () => {
  return (
    <section className="my-10 text-background/90 bg-[url('/slider0.jpg')] bg-center bg-cover">
      <div className="backdrop-brightness-[0.35] space-y-14 py-28">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight text-center">
            আমাদের মাইলফলক সমূহ
          </h2>
          <p className="mx-auto max-w-xl leading-relaxed text-center text-background/60">
            দারিদ্রদ্র্য বিমোচন, কর্মসংস্থানের সুযোগ সৃষ্টি, আত্ম-কর্মসংস্থান,
            বেকারত্ব, ক্ষুধা ও দুর্নীতিমুক্ত সমৃদ্ধ বাংলাদেশ গড়া, উদ্যোক্তা,
            উন্নয়ন ও উৎপাদনশীলতা বৃদ্ধিতে কারিগরি ও বৃত্তিমূলক শিক্ষার ভূমিকা
          </p>
        </div>
        <div className="flex gap-24 justify-center">
          {milestones.map(({ Icon, count, title }, i) => (
            <div className="flex gap-x-5 items-center" key={i}>
              <div className="flex justify-center items-center w-24 text-6xl text-white rounded-full shadow bg-primary aspect-square">
                {Icon}
              </div>
              <div className="space-y-1">
                <CountUp
                  className="text-5xl font-bold tracking-tight"
                  start={0}
                  end={count}
                  duration={3}
                />
                <h4 className="text-lg">{title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
