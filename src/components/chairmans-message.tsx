import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa';

const chairmansInfo = {
  picture: '/chairman.jpg',
  message:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nulla sed alias laboriosam repellendus sint eius aliquam suscipit ad optio a sequi vero, et tenetur aperiam temporibus odio repudiandae? Fugit aliquid explicabo incidunt, voluptatibus, nemo cupiditate maxime eaque perspiciatis debitis, nulla corporis excepturi autem. Quas nisi quae optio aperiam eos?',
};

export function ChairmansMessage() {
  return (
    <div className="mx-auto space-y-4 max-w-sm rounded-md sm:border sm:shadow-sm sm:max-w-full sm:p-6">
      <Image
        className="object-cover object-center rounded-full border aspect-square"
        src={chairmansInfo.picture}
        alt="chairman"
        height={140}
        width={140}
        quality={90}
      />
      <div className="flex gap-x-6 items-end">
        <h2 className="text-2xl font-medium tracking-tight">
          Message From Chairman
        </h2>
        <FaQuoteRight className="text-4xl text-foreground/20" />
      </div>
      <p className="leading-relaxed text-foreground/80">
        {chairmansInfo.message}
      </p>
    </div>
  );
}
