import { chairmansMessage } from '@/config';
import Image from 'next/image';

function Principal() {
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
      <p className="leading-relaxed text-foreground/80">
        {chairmansMessage.message}
      </p>
    </main>
  );
}

export default Principal;
