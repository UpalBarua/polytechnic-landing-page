import { buttonVariants } from '@/components/ui/button';
import { TNotice } from '@/types';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import { Notice } from './notice';
import { Heading } from './ui/heading';
import { Separator } from './ui/separator';

type RecentNoticesProps = {
  notices: Pick<TNotice, 'id' | 'title' | 'publishedOn'>[];
};

export function RecentNotices({ notices }: RecentNoticesProps) {
  return (
    <div className="p-4 mx-auto mt-14 space-y-2 max-w-lg md:max-w-full rounded-md md:bg-background/80 md:border md:shadow md:p-6 md:mt-0">
      <Heading className="pb-0 md:pb-0">সাম্প্রতিক নোটিশ</Heading>
      <Separator className="hidden md:block" />
      <div className="pb-2 divide-y">
        {notices.map((notice) => (
          <Notice key={notice.id} {...notice} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link
          href="/notices"
          className={buttonVariants({
            variant: 'link',
            size: 'sm',
            className: '!text-base',
          })}>
          <span>সকল নোটিশ</span>
          <FaChevronRight className="text-xs" />
        </Link>
      </div>
    </div>
  );
}
