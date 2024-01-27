import { Notice } from '@/components/notice';
import { getAllNotices } from '@/lib/services';
import { type TNotice } from '@/types';
import { Heading } from '@/components/ui/heading';

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
    <main className="container pt-20 max-w-2xl md:pt-32">
      <Heading className="md:text-center">নোটিশবোর্ড</Heading>
      <div className="pb-2 divide-y">
        {notices.map((notice) => (
          <Notice key={notice.id} {...notice} />
        ))}
      </div>
    </main>
  );
}
