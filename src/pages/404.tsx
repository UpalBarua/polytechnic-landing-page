import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-y-4">
      <h2 className="text-8xl font-medium tracking-tight text-foreground/80">
        404!
      </h2>
      <p className="text-2xl text-foreground/60">Oops! nothing was found</p>
      <Link href="/" className={buttonVariants()}>
        Go Home
      </Link>
    </main>
  );
}

NotFoundPage.getLayout = function getLayout(page: React.ReactElement) {
  return page;
};
