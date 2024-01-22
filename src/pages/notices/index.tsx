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
    <main className="max-w-3xl container pt-36">
      <h2 className="text-2xl font-bold tracking-tight">নোটিশবোর্ড</h2>
      <div className="divide-y pb-2">
        {notices.map((notice) => (
          <Notice key={notice.id} {...notice} />
        ))}
      </div>
    </main>
  );
}
