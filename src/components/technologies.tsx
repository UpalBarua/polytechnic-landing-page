import { technologies } from '@/config';
import Link from 'next/link';
import { Heading } from './ui/heading';

export function Technologies() {
  return (
    <div className="pt-14 space-y-4 lg:pt-16">
      <Heading className="md:text-center">টেকনোলজি সমূহ</Heading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <Technology key={technology.name} {...technology} />
        ))}
      </div>
    </div>
  );
}

export type TechnologyProps = (typeof technologies)[number];

function Technology({ id, Icon, name, description }: TechnologyProps) {
  return (
    <Link
      href={`/technologies/${id}`}
      className="flex flex-col gap-y-2 justify-center items-center p-6 text-center rounded-md border shadow transition-colors duration-200 bg-background/80 group hover:bg-primary hover:text-background hover:border-primary lg:text-start lg:items-start">
      <Icon className="block mb-4 text-6xl transition-colors duration-200 text-primary group-hover:text-background" />
      <h4 className="text-lg font-medium">{name} টেকনোলজি</h4>
      <p className="leading-relaxed transition-colors duration-200 text-foreground/60 group-hover:text-background">
        {description.slice(0, 80)}...
      </p>
    </Link>
  );
}
