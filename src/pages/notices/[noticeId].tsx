import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { getCurrentDateTimestamp } from '@/lib/get-current-date-timestamp';
import { getAllNotices, getNoticeById } from '@/lib/services';
import { TNotice } from '@/types';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

export const getStaticPaths = async () => {
  try {
    const notices = await getAllNotices();

    const paths = notices.map(({ id }) => ({
      params: {
        noticeId: id,
      },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.log(error);

    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps = async ({ params: { noticeId } }) => {
  try {
    const notice = await getNoticeById(noticeId);

    return {
      props: notice,
    };
  } catch (error) {
    console.log(error);

    return {
      props: {},
    };
  }
};

export default function NoticeDetails({
  description,
  pdfLink,
  publishedOn,
  title,
}: TNotice) {
  return (
    <main className="container grid grid-cols-12 pt-32 max-w-7xl md:gap-4">
      <section className="col-span-8 space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <span className="text-foreground/60">
          Published on {getCurrentDateTimestamp(publishedOn)}
        </span>
        <Separator />
        <p className="leading-relaxed text-foreground/80">
          {description.length ? description : null}
        </p>
        <div className="flex justify-center items-center">
          <Document file={pdfLink} className="max-w-max">
            <Page pageNumber={1} renderTextLayer={false} />
          </Document>
        </div>
        {/* <a href={pdfLink} className={buttonVariants()} download>
          download
        </a> */}
      </section>
      <section className="col-span-4">{/* <RecentNotices /> */}</section>
    </main>
  );
}
