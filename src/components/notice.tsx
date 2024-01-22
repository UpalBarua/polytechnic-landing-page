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
      className="flex gap-x-2.5 items-start py-3 group">
      <div className="flex flex-col items-center justify-center bg-primary rounded text-background px-2 py-1">
        <span className="font-medium text-sm">{publishedDate}</span>
        <span className="lowercase text-xs">{publishedMonth}</span>
      </div>
      <h4 className="leading-relaxed text-foreground/60 group-hover:underline">
        {title}
      </h4>
    </Link>
  );
}
