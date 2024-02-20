import { technologies } from "@/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { InView } from "react-intersection-observer";
import { Heading } from "./ui/heading";

export function Technologies() {
  return (
    <InView>
      {({ ref, inView }) => (
        <section
          ref={ref}
          className={cn(
            'bg-[url("/technologies-bg.jpg")] bg-cover bg-center transition-opacity duration-700',
            inView ? "opacity-1" : "opacity-0",
          )}
        >
          <div className="space-y-4 py-16 backdrop-brightness-[0.25] md:py-24">
            <Heading className="text-background/90 md:text-center">
              টেকনোলজি সমূহ
            </Heading>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-2 min-[500px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 lg:px-0">
              {technologies.map((technology) => (
                <Technology key={technology.id} {...technology} />
              ))}
            </div>
          </div>
        </section>
      )}
    </InView>
  );
}

export type TechnologyProps = (typeof technologies)[number];

function Technology({ id, Icon, name, description }: TechnologyProps) {
  return (
    <Link
      href={`/technologies/${id}`}
      className="group flex flex-col items-center justify-center gap-y-2 rounded-md border bg-background/80 p-8 text-center shadow transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-background lg:items-start lg:text-start"
    >
      <Icon className="mb-4 block text-7xl text-primary transition-colors duration-200 group-hover:text-background" />
      <h4 className="text-lg font-medium">{name} টেকনোলজি</h4>
      <p className="leading-relaxed text-foreground/60 transition-colors duration-200 group-hover:text-background">
        {description.slice(0, 90)}...
      </p>
    </Link>
  );
}
