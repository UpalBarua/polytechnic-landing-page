import { Heading } from "@/components/ui/heading";
import { facilities } from "@/config";

export default function benefits() {
  return (
    <section className="container mt-24 max-w-5xl pb-20 sm:mt-32 lg:mt-40">
      <Heading className="!text-center">আমাদের সুবিধা সমূহ</Heading>
      <div className="grid grid-cols-1 gap-4 min-[500px]:grid-cols-2 lg:grid-cols-3">
        {facilities.map(({ id, name, content, Icon }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center gap-y-2 rounded-md
            border bg-background/60 p-8 text-center shadow-md md:p-10"
          >
            <Icon className="mb-4 text-4xl text-primary" />
            <h3 className="text-xl font-medium tracking-tight">{name}</h3>
            <p className="leading-relaxed text-foreground/60">{content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
