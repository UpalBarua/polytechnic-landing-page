import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { Separator } from "./ui/separator";

export function Noticeboard() {
  return (
    <div className="mx-auto space-y-2 max-w-sm rounded-md bg-background/60 sm:border sm:shadow sm:max-w-full sm:p-6">
      <h2 className="text-2xl font-bold tracking-tight">নোটিশবোর্ড</h2>
      <Separator />
      <div className="pb-2 divide-y">
        {Array(4)
          .fill("")
          .map((_, i) => (
            <Notice key={i} />
          ))}
      </div>
      <Link
        href="/notices"
        className={buttonVariants({
          variant: "default",
        })}
      >
        <span>সকল নোটিশ</span>
        <FaChevronRight className="text-sm" />
      </Link>
    </div>
  );
}

function Notice() {
  return (
    <Link href="/" className="flex gap-x-2.5 items-center py-3 group">
      <div className="bg-primary rounded-md flex flex-col items-center justify-center text-background p-2.5 space-y-1">
        <span className="text-sm font-bold leading-none">14</span>
        <span className="text-xs leading-none">Jan</span>
      </div>
      <h4 className="group-hover:underline">
        অংশ অংশভাক আঁইশ ইঁচড়েপাকা ঈক্ষণ ঈদৃক অংশভাগী জওয়ান অংশাঙ্কিত...
      </h4>
    </Link>
  );
}
