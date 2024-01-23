import { Notice } from '@/components/notice';
import { getAllNotices } from '@/lib/services';
import { type TNotice } from '@/types';

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
    <main className="container pt-36 max-w-3xl">
      <h2 className="text-2xl font-bold tracking-tight">নোটিশবোর্ড</h2>
      <div className="pb-2 divide-y">
        {notices.map((notice) => (
          <Notice key={notice.id} {...notice} />
        ))}
      </div>
    </main>
  );
}
