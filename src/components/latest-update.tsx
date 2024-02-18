import Marquee from "react-fast-marquee";

type LatestUpdateProps = {
  latestUpdate: string;
};

export function LatestUpdate({ latestUpdate }: LatestUpdateProps) {
  return (
    <Marquee className="hidden rounded bg-primary py-1.5 text-lg text-background/90 shadow lg:block">
      {latestUpdate.length ? latestUpdate : "কোন সাম্প্রতিক নোটিশ নেই"}
    </Marquee>
  );
}
