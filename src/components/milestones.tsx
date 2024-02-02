import CountUp from "react-countup";
import { milestones } from "@/config";
import { Heading } from "./ui/heading";

type MilestoneProps = (typeof milestones)[number];

export function Milestones() {
  return (
    <section
      className="mt-14 bg-[url('/slider0.jpg')] bg-cover bg-center text-background/90 lg:mt-16"
      data-aos="zoom-up"
      data-duration="10"
    >
      <div className="container flex flex-col items-start justify-center px-4 py-16 backdrop-brightness-[0.25] sm:items-center md:py-28">
        <div className="pb-8 lg:pb-10">
          <Heading className="text-start sm:text-center md:text-center md:text-3xl">
            আমাদের মাইলফলক সমূহ
          </Heading>
          <p className="max-w-lg leading-relaxed text-background/60 sm:mx-auto sm:text-center">
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
    <li className="flex items-start gap-4 sm:items-center">
      <div className="flex aspect-square w-14 items-center justify-center rounded-full bg-primary shadow sm:w-16">
        <Icon className="text-4xl" />
      </div>
      <div className="space-y-0">
        <CountUp
          className="text-3xl font-medium tracking-tight sm:text-4xl"
          start={0}
          end={count}
          duration={3}
        />
        <h4 className="text text-background/60">{title}</h4>
      </div>
    </li>
  );
}
