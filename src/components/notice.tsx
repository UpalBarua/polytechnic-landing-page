import { getCurrentDateTimestamp } from '@/lib/get-current-date-timestamp';
import { type TNotice } from '@/types';
import Link from 'next/link';

type NoticeProps = Pick<TNotice, 'id' | 'title' | 'publishedOn'>;

export function Notice({ id, title, publishedOn }: NoticeProps) {
  const [publishedDate, publishedMonth] =
    getCurrentDateTimestamp(publishedOn).split(' ');

  return (
    <Link
      href={`/notices/${id}`}
      className="flex gap-x-3 items-start py-3 group">
      <div className="flex flex-col justify-center items-center py-1 px-2 rounded bg-primary text-background">
        <span className="text-sm font-medium">{publishedDate}</span>
        <span className="text-xs lowercase">{publishedMonth}</span>
      </div>
      <h4 className="leading-relaxed text-foreground/60 group-hover:underline group-hover:text-foreground/80 transition-colors underline-offset-2">
        {title}
      </h4>
    </Link>
  );
}
