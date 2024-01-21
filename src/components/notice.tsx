import { type TNotice } from '@/types';
import Link from 'next/link';

type NoticeProps = Pick<TNotice, 'id' | 'title' | 'publishedOn'>;

export function Notice({ id, title, publishedOn }: NoticeProps) {
  const [publishedDate, publishedMonth] = publishedOn.split(' ');

  return (
    <Link
      href={`/notices/${id}`}
      className="flex gap-x-2.5 items-center py-3 group">
      <div className="bg-primary rounded-md flex flex-col items-center justify-center text-background p-2.5 space-y-1">
        <span className="text-sm font-bold leading-none">{publishedDate}</span>
        <span className="text-xs leading-none">{publishedMonth}</span>
      </div>
      <h4 className="group-hover:underline">{title}</h4>
    </Link>
  );
}
