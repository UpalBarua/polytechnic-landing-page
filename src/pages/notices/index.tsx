import { Notice } from "@/components/notice";
import { getAllNotices } from "@/lib/services";
import { type TNotice } from "@/types";
import { Heading } from "@/components/ui/heading";

export const getStaticProps = async () => {
  try {
    const notices = await getAllNotices();

    return {
      props: {
        notices: notices,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        notices: {},
      },
    };
  }
};

export default function Notices({ notices }: { notices: TNotice[] }) {
  return (
    <main className="container max-w-2xl pb-20 pt-24 sm:pt-32 lg:pt-40">
      <Heading className="md:text-center">নোটিশবোর্ড</Heading>
      <div className="min-h-[20rem] divide-y rounded-md border bg-background/60 px-4 py-2 shadow-md md:px-6 md:py-6">
        {notices.map((notice) => (
          <Notice key={notice.id} {...notice} />
        ))}
      </div>
    </main>
  );
}
