import { facilities } from '@/config';
import Image from 'next/image';
import { Heading } from './ui/heading';

export function Facilities() {
  return (
    <section className="container pt-14 max-w-5xl lg:pt-20">
      <Heading className="md:text-center">
        আমারা যেসব সুবিধা প্রধান করে থাকি
      </Heading>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <div className="space-y-2">
          {facilities.map((facility) => (
            <Facility key={facility.id} {...facility} />
          ))}
        </div>
        <div className="hidden relative md:block">
          <Image
            src="https://images.unsplash.com/flagged/photo-1574110906643-8311b0ce29d3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="object-cover object-center rounded-md"
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
    <div className="flex flex-col gap-6 justify-center items-center p-6 text-center rounded-md border shadow-md md:text-start md:flex-row bg-background/80">
      <div className="flex justify-center items-center w-20 text-4xl text-white rounded-full md:w-28 aspect-square bg-primary">
        <Icon />
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-foreground/60">{content}</p>
      </div>
    </div>
  );
}
