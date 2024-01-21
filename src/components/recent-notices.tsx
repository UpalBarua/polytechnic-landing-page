import { buttonVariants } from '@/components/ui/button';
import { TNotice } from '@/types';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import { Notice } from './notice';
import { Separator } from './ui/separator';

type RecentNoticesProps = {
  notices: Pick<TNotice, 'id' | 'title' | 'publishedOn'>[];
};

export function RecentNotices({ notices }: RecentNoticesProps) {
  return (
    <div className="mx-auto space-y-2 max-w-sm rounded-md bg-background/60 sm:border sm:shadow sm:max-w-full sm:p-6">
      <h2 className="text-2xl font-bold tracking-tight">নোটিশবোর্ড</h2>
      <Separator />
      <div className="pb-2 divide-y">
        {notices.map((notice) => (
          <Notice key={notice.id} {...notice} />
        ))}
      </div>
      <Link
        href="/notices"
        className={buttonVariants({
          variant: 'default',
        })}>
        <span>সকল নোটিশ</span>
        <FaChevronRight className="text-sm" />
      </Link>
    </div>
  );
}
