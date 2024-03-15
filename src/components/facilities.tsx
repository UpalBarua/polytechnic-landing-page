import { facilities } from "@/config";
import Image from "next/image";
import { Heading } from "./ui/heading";

export function Facilities() {
  return (
    <section className="container max-w-6xl">
      <Heading className="px-2 md:text-center">
        আমারা যেসব সুবিধা প্রধান করে থাকি
      </Heading>
      <div className="grid grid-cols-1 gap-4 py-2 md:grid-cols-12">
        <div className="col-span-full grid grid-cols-1 gap-4 transition-transform duration-700 min-[500px]:grid-cols-2 md:col-span-5 md:grid-cols-1">
          {facilities.map((facility) => (
            <Facility key={facility.id} {...facility} />
          ))}
        </div>
        <div className="relative col-span-7 hidden transition-transform duration-700 md:block">
          <Image
            src="/images/slider0.jpg"
            alt=""
            className="rounded-md object-cover object-center"
            fill
            sizes="100%"
            priority
          />
        </div>
      </div>
    </section>
  );
}

type FacilityProps = (typeof facilities)[number];

export function Facility({ Icon, name, content }: FacilityProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-md border bg-background/60 p-6 text-center shadow-md md:flex-row md:text-start">
      <div className="flex aspect-square w-20 items-center justify-center rounded-full bg-primary text-4xl text-white md:w-28">
        <Icon />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-foreground/60">{content}</p>
      </div>
    </div>
  );
}
