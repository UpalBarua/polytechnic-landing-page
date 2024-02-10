import { buttonVariants } from "@/components/ui/button";
import { TNotice } from "@/types";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { Notice } from "./notice";
import { Heading } from "./ui/heading";
import { Separator } from "./ui/separator";

type RecentNoticesProps = {
  notices: Pick<TNotice, "id" | "title" | "publishedOn">[];
};

export function RecentNotices({ notices }: RecentNoticesProps) {
  return (
    <div
      className="mx-auto mt-8 h-full max-w-lg space-y-2 rounded-md p-4 md:mt-0 md:max-w-full
       md:border md:bg-background/60 md:p-6 md:shadow"
    >
      <Heading className="pb-0 md:pb-0">সাম্প্রতিক নোটিশ</Heading>
      <Separator className="hidden md:block" />
      <div className="divide-y pb-2">
        {notices.map((notice) => (
          <Notice key={notice.id} {...notice} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          href="/notices"
          className={buttonVariants({
            variant: "link",
            size: "sm",
            className: "!text-base",
          })}
        >
          <span>সকল নোটিশ</span>
          <FaChevronRight className="text-xs" />
        </Link>
      </div>
    </div>
  );
}
