import { facilities } from '@/config';
import Image from 'next/image';
import { Heading } from './ui/heading';

export function Facilities() {
  return (
    <section className="container pt-14 max-w-5xl lg:pt-20">
      <Heading className="md:text-center">
        আমারা যেসব সুবিধা প্রধান করে থাকি
      </Heading>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="space-y-3">
          {facilities.map((facility) => (
            <Facility key={facility.id} {...facility} />
          ))}
        </div>
        <div className="hidden relative md:block">
          <Image
            src="/slider0.jpg"
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
