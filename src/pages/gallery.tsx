import { Picture } from "@/components/picture";
import { Heading } from "@/components/ui/heading";
import { getAllPictures } from "@/lib/services";
import { TPicture } from "@/types";
import "react-photo-view/dist/react-photo-view.css";

export const getStaticProps = async () => {
  try {
    const pictures = await getAllPictures();

    return {
      props: {
        pictures: pictures,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

type GalleryProps = {
  pictures: TPicture[];
};

export default function Gallery({ pictures }: GalleryProps) {
  return (
    <section className="container mt-20 max-w-5xl sm:mt-24 lg:mt-32">
      <Heading className="md:text-center">আমাদের স্মৃতিচারণ মুহূর্ত</Heading>
      <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 md:grid-cols-4">
        {pictures.map((picture) => (
          <Picture key={picture.id} {...picture} />
        ))}
      </div>
    </section>
  );
}
