import { facilities } from "@/config";
import Image from "next/image";
import { Heading } from "./ui/heading";

export function Facilities() {
  return (
    <section className="container max-w-5xl pt-14 lg:pt-20">
      <Heading className="md:text-center">
        আমারা যেসব সুবিধা প্রধান করে থাকি
      </Heading>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="space-y-3" data-aos="fade-right" data-duration="20">
          {facilities.map((facility) => (
            <Facility key={facility.id} {...facility} />
          ))}
        </div>
        <div
          className="relative hidden md:block"
          data-aos="fade-left"
          data-duration="10"
        >
          <Image
            src="/slider0.jpg"
            alt=""
            className="rounded-md object-cover object-center"
            fill
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
      <div className="space-y-1">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-foreground/60">{content}</p>
      </div>
    </div>
  );
}
