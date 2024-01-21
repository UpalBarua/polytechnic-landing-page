import { db } from '@/firebase/firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';
import { FaRegClock } from 'react-icons/fa';

export const getStaticProps = async () => {
  try {
    let notices: unknown[] = [];
    const querySnapshot = await getDocs(collection(db, 'notices'));

    querySnapshot.forEach((doc) => {
      notices.push({ id: doc.id, ...doc.data() });
    });

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

export default function Notices({ notices }) {
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

function Notice({ title, publishedOn }) {
  return (
    <Link href="/" className="block py-3 space-y-1.5 group">
      <h4 className="group-hover:underline">{title}</h4>
      <div className="flex items-center gap-x-2.5 text-sm text-foreground/60">
        <FaRegClock className="text-primary" />
        <span>{publishedOn}</span>
      </div>
    </Link>
  );
}
