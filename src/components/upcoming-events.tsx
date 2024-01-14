import Link from 'next/link';
import { FaRegCalendarAlt } from 'react-icons/fa';

export function UpcomingEvents() {
  return (
    <div className="space-y-1 rounded-md sm:border sm:shadow-sm sm:p-4">
      <h2 className="text-lg font-medium tracking-tight">Upcoming Events</h2>
      <div className="divide-y">
        {Array(2)
          .fill('')
          .map((_, i) => (
            <Event key={i} />
          ))}
      </div>
    </div>
  );
}

function Event() {
  return (
    <Link href="/" className="block py-2 space-y-1.5 lg:text-sm group">
      <div className="flex items-center gap-x-2.5 text-foreground/60">
        <FaRegCalendarAlt />
        <span>14 January 2024</span>
      </div>
      <h4 className="group-hover:underline">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </h4>
    </Link>
  );
}
