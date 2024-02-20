import Marquee from "react-fast-marquee";
import { InView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

type LatestUpdateProps = {
  latestUpdate: string;
};

export function LatestUpdate({ latestUpdate }: LatestUpdateProps) {
  return latestUpdate?.length ? (
    <InView>
      {({ inView, ref }) => (
        <div
          className={cn(
            "transition-transform duration-700",
            inView ? "translate-x-0" : "-translate-x-full",
          )}
          ref={ref}
        >
          <Marquee className="rounded bg-primary py-1.5 text-lg text-background/90 shadow-md">
            {latestUpdate.length ? latestUpdate : "কোন সাম্প্রতিক নোটিশ নেই"}
          </Marquee>
        </div>
      )}
    </InView>
  ) : null;
}
