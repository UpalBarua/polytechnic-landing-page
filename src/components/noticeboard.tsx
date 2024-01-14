import Link from 'next/link';
import { FaRegClock } from 'react-icons/fa';

export function Noticeboard() {
  return (
    <div className="mx-auto space-y-2 max-w-sm rounded-md sm:border sm:shadow-sm sm:max-w-full sm:p-6">
      <h2 className="text-2xl font-medium tracking-tight">Noticeboard</h2>
      <div className="divide-y">
        {Array(5)
          .fill('')
          .map((_, i) => (
            <Notice key={i} />
          ))}
      </div>
    </div>
  );
}

function Notice() {
  return (
    <Link href="/" className="block py-3 space-y-1.5 group">
      <h4 className="group-hover:underline">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ut
        consequatur asperiores, fugit ipsum commodi.
      </h4>
      <div className="flex items-center gap-x-2.5 text-sm text-foreground/60">
        <FaRegClock />
        <span>Published on 14 January 2024</span>
      </div>
    </Link>
  );
}
