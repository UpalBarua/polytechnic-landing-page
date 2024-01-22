import { technologies } from "@/config";
import { MdOutlineTopic } from "react-icons/md";
import Image from "next/image";

export function getStaticPaths() {
  const paths = technologies.map(({ id }) => ({
    params: {
      technologyId: id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export function getStaticProps({
  params,
}: {
  params: { technologyId: string };
}) {
  const technology = technologies.find(({ id }) => id === params.technologyId);

  return {
    props: {
      technology: { ...technology, Icon: "" },
    },
  };
}

export default function Technology({ technology }) {
  const { id, name, picture, cheifInstructor, icon, description, images } =
    technology;

  return (
    <section className="container pt-56 pb-32">
      <div className="flex flex-col gap-14 ml-4 lg:ml-12 lg:flex-row">
        <div className="flex-1 ">
          <div className="flex gap-4 pb-8 text-3xl font-bold ">
            <MdOutlineTopic></MdOutlineTopic>
            <h1 className="text-primary">{name} টেকনোলজি</h1>
          </div>
          <hr></hr>
          <p className="text-[18px]  tracking-wide">{description}</p>
        </div>

        <div className="flex-1">
          <Image
            src={images[0]}
            height={550}
            width={550}
            alt=""
            className="rounded-md"
          ></Image>

          <div className="flex gap-4 pt-4">
            <Image
              src={images[1]}
              height={270}
              width={265}
              alt=""
              className="rounded-md"
            ></Image>
            <Image
              src={images[2]}
              height={270}
              width={265}
              alt=""
              className="rounded-md"
            ></Image>
          </div>
        </div>
      </div>
      <div>
        <div className="pt-10 pl-4 lg:pl-14 ">
          <div>
            <Image
              alt=""
              height={150}
              width={150}
              src={cheifInstructor?.picture}
              className="object-cover object-center rounded-full "
            />
            <h1 className="pt-4 text-[24px] font-bold">
              ডিপার্টমেন্ট প্রধান : {cheifInstructor?.name}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
