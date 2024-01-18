import { technologies } from '@/config';
import Link from 'next/link';

export function Technologies() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">টেকনোলজি সমূহ</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
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
      className="border bg-background/60 rounded-md shadow p-6 group hover:bg-primary transition-colors duration-200 hover:text-background hover:border-primary space-y-1">
      <Icon className="text-5xl text-primary transition-colors duration-200 group-hover:text-background mb-2" />
      <h4 className="font-bold">{name} টেকনোলজি</h4>
      <p className="text-sm text-foreground/80 group-hover:text-background transition-colors duration-200">
        {description.slice(0, 80)}...
      </p>
    </Link>
  );
}
