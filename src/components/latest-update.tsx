import Marquee from "react-fast-marquee";

type LatestUpdateProps = {
  latestUpdate: string;
};

export function LatestUpdate({ latestUpdate }: LatestUpdateProps) {
  return latestUpdate?.length ? (
    <div className="transition-transform duration-700">
      <Marquee className="rounded bg-primary py-1.5 text-lg text-background/90 shadow-md">
        {latestUpdate.length ? latestUpdate : "কোন সাম্প্রতিক নোটিশ নেই"}
      </Marquee>
    </div>
  ) : null;
}
