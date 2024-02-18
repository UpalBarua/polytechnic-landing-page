import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { getCurrentDateTimestamp } from "@/lib/get-current-date-timestamp";
import { getAllNotices, getNoticeById } from "@/lib/services";
import { TNotice } from "@/types";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
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
      fallback: false,
    };
  } catch (error) {
    console.log(error);

    return {
      paths: [],
    };
  }
};

export const getStaticProps = async ({
  params: { noticeId },
}: {
  params: { noticeId: string };
}) => {
  try {
    const notice = await getNoticeById(noticeId);

    return {
      props: notice,
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        notice: [],
      },
    };
  }
};

export default function NoticeDetails({
  pdfLink,
  publishedOn,
  title,
  description,
}: TNotice) {
  return (
    <main className="container grid max-w-6xl pb-20 pt-24 sm:pt-32 lg:pt-40">
      <section className="space-y-4 sm:px-4 md:col-span-8 md:px-6">
        <div className="space-y-2">
          <Heading className="text-start sm:pb-0 md:pb-0">{title}</Heading>
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
            <div className="flex items-center gap-x-2 text-foreground/60">
              <FaRegCalendarAlt className="text-lg" />
              <span>Published on {getCurrentDateTimestamp(publishedOn)}</span>
            </div>
            <a href={pdfLink} className={buttonVariants()} download>
              <MdOutlineFileDownload className="text-xl" />
              <span>Download</span>
            </a>
          </div>
          <Separator />
        </div>
        {description?.length ? (
          <p className="leading-relaxed text-foreground/60">{description}</p>
        ) : null}
        <div className="flex max-w-full items-start justify-start overflow-y-scroll sm:items-center sm:justify-center sm:overflow-y-hidden">
          <Document file={pdfLink} className="max-w-max">
            <Page pageNumber={1} renderTextLayer={false} />
          </Document>
        </div>
      </section>
    </main>
  );
}
