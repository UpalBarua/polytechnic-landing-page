import { chairmansMessage } from "@/config";
import Image from "next/image";

function Chairman() {
  return (
    <main className="container space-y-4 max-w-3xl pb-28">
      <Image
        className="object-cover object-center shadow rounded-full border aspect-square"
        src={chairmansMessage.picture}
        alt="chairman"
        height={180}
        width={180}
        quality={90}
      />
      <div>
        <h3 className="text-2xl font-bold">{chairmansMessage.name}</h3>
        <span className="text-lg font-medium">{chairmansMessage.position}</span>
      </div>
      <span className="text-lg font-medium">{chairmansMessage.institute}</span>
      <p className="leading-relaxed text-foreground/80">
        {chairmansMessage.message}
      </p>
      <p className="pt-2">{chairmansMessage?.last_message}</p>
    </main>
  );
}

export default Chairman;
