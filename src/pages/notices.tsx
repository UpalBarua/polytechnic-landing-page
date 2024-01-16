import Link from 'next/link';
import { FaRegClock } from 'react-icons/fa';
import { buttonVariants } from '@/components/ui/button';
import { FaChevronRight } from 'react-icons/fa';

function Notices() {
  return (
    <main className="max-w-3xl container">
      <h2 className="text-2xl font-bold tracking-tight">নোটিশবোর্ড</h2>
      <div className="divide-y pb-2">
        {Array(4)
          .fill('')
          .map((_, i) => (
            <Notice key={i} />
          ))}
      </div>
    </main>
  );
}

function Notice() {
  return (
    <Link href="/" className="block py-3 space-y-1.5 group">
      <h4 className="group-hover:underline">
        অংশ অংশভাক আঁইশ ইঁচড়েপাকা ঈক্ষণ ঈদৃক অংশভাগী জওয়ান অংশাঙ্কিত
        ইউক্যালিপটাস অংশাবতার হালহদিশ পিতৃতর্পণ টকানো
      </h4>
      <div className="flex items-center gap-x-2.5 text-sm text-foreground/60">
        <FaRegClock className="text-primary" />
        <span>Published on 14 January 2024</span>
      </div>
    </Link>
  );
}

export default Notices;
