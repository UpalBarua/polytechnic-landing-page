import { buttonVariants } from "@/components/ui/button";
import { TNotice } from "@/types";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { Notice } from "./notice";

type RecentNoticesProps = {
  notices: Pick<TNotice, "id" | "title" | "publishedOn">[];
};

export function RecentNotices({ notices }: RecentNoticesProps) {
  return (
    <div className="flex min-h-[25rem] flex-col rounded-md border bg-background/60 shadow-md transition-transform duration-700 md:max-w-full lg:h-full">
      <div className="rounded-tl-md rounded-tr-md bg-primary px-5 py-3 text-background">
        <h2 className="mx-auto text-2xl font-medium tracking-tight">
          সাম্প্রতিক নোটিশ
        </h2>
      </div>
      <div className="flex-1 divide-y px-4 py-2">
        {notices.length ? (
          notices.map((notice) => <Notice key={notice.id} {...notice} />)
        ) : (
          <p className="py-40 text-center text-xl text-foreground/60">
            কোন সাম্প্রতিক নোটিশ নেই!
          </p>
        )}
      </div>
      <Link
        href="/notices"
        className={buttonVariants({
          variant: "link",
          className: "!m-4 !text-base",
        })}
      >
        <span>সকল নোটিশ দেখুন</span>
        <FaChevronRight className="text-xs" />
      </Link>
    </div>
  );
}
