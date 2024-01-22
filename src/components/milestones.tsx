import CountUp from 'react-countup';
import { milestones } from '@/config';
import { Heading } from './ui/heading';

type MilestoneProps = (typeof milestones)[number];

export function Milestones() {
  return (
    <section className="text-background/90 bg-[url('/slider0.jpg')] bg-center bg-cover mt-14 lg:mt-16">
      <div className="px-4 backdrop-brightness-[0.25] flex flex-col items-start sm:items-center justify-center container py-16 md:py-20">
        <div className="pb-8 lg:pb-10">
          <Heading className="text-start sm:text-center md:text-center">
            আমাদের মাইলফলক সমূহ
          </Heading>
          <p className="max-w-lg leading-relaxed sm:mx-auto sm:text-center text-background/60">
            দারিদ্রদ্র্য বিমোচন, কর্মসংস্থানের সুযোগ সৃষ্টি, আত্ম-কর্মসংস্থান,
            বেকারত্ব, ক্ষুধা ও দুর্নীতিমুক্ত সমৃদ্ধ বাংলাদেশ গড়া, উদ্যোক্তা,
            উন্নয়ন ও উৎপাদনশীলতা বৃদ্ধিতে কারিগরি ও বৃত্তিমূলক শিক্ষার ভূমিকা
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {milestones.map((milestone) => (
            <Milestone key={milestone.title} {...milestone} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Milestone({ Icon, count, title }: MilestoneProps) {
  return (
    <li className="flex gap-4 items-start sm:items-center">
      <div className="flex justify-center items-center w-14 rounded-full shadow sm:w-16 bg-primary aspect-square">
        <Icon className="text-4xl" />
      </div>
      <div className="space-y-0">
        <CountUp
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          start={0}
          end={count}
          duration={3}
        />
        <h4 className="text text-background/60">{title}</h4>
      </div>
    </li>
  );
}
