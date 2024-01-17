import { principleMessage } from "@/config";
import Image from "next/image";

const Principle = () => {
  return (
    <main className="container space-y-4 max-w-3xl pb-28">
      <Image
        className="object-cover object-center rounded-full border aspect-square"
        src={principleMessage.picture}
        alt="chairman"
        height={150}
        width={150}
        quality={90}
      />
      <div>
        <h3 className="text-2xl font-bold">{principleMessage.name}</h3>
        <span className="text-lg font-medium">{principleMessage.position}</span>
      </div>
      <span>{principleMessage?.institute}</span>
      <span>{principleMessage?.more_institue}</span>

      <p className="leading-relaxed text-foreground/80">
        {principleMessage.message}
      </p>
      <p className="pt-2">{principleMessage?.last_message}</p>
    </main>
  );
};

export default Principle;
