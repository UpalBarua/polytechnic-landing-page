import { technologies } from '@/config';
import Link from 'next/link';
import { Heading } from './ui/heading';

export function Technologies() {
  return (
    <section className='bg-[url("/technologies-bg.jpg")] bg-center bg-cover'>
      <div className="space-y-4 backdrop-brightness-[0.25] py-20 container">
        <Heading className="md:text-center text-background/90">
          টেকনোলজি সমূহ
        </Heading>
        <div className="grid grid-cols-1 gap-4 mx-auto max-w-5xl sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <Technology key={technology.id} {...technology} />
          ))}
        </div>
      </div>
    </section>
  );
}

export type TechnologyProps = (typeof technologies)[number];

function Technology({ id, Icon, name, description }: TechnologyProps) {
  return (
    <Link
      href={`/technologies/${id}`}
      className="flex flex-col gap-y-2 justify-center items-center p-8 text-center rounded-md border shadow transition-colors duration-200 bg-background/80 group hover:bg-primary hover:text-background hover:border-primary lg:text-start lg:items-start">
      <Icon className="block mb-4 text-6xl transition-colors duration-200 text-primary group-hover:text-background" />
      <h4 className="text-lg font-medium">{name} টেকনোলজি</h4>
      <p className="leading-relaxed transition-colors duration-200 text-foreground/60 group-hover:text-background">
        {description.slice(0, 80)}...
      </p>
    </Link>
  );
}
