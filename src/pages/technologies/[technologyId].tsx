import { technologies } from "@/config";
import { MdOutlineTopic } from "react-icons/md";
import Image from "next/image";
import { FaAngellist } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";

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

const outliens = {
  "Semester-1": [
    "Bangla - 1",
    "English - 1",
    "Mathematics - 1",
    "Physics - 1",
    "Engineering Drawing",
    "Basic Electricity",
    "Basic Workshop practice",
  ],
  "Semester-2": [
    "Bangla - 1",
    "English - 1",
    "Mathematics - 1",
    "Physics - 1",
    "Engineering Drawing",
    "Basic Electricity",
    "Basic Workshop practice",
  ],
  "Semester-3": [
    "Bangla - 1",
    "English - 1",
    "Mathematics - 1",
    "Physics - 1",
    "Engineering Drawing",
    "Basic Electricity",
    "Basic Workshop practice",
  ],
  "Semester-4": [
    "Bangla - 1",
    "English - 1",
    "Mathematics - 1",
    "Physics - 1",
    "Engineering Drawing",
    "Basic Electricity",
    "Basic Workshop practice",
  ],
  "Semester-5": [
    "Bangla - 1",
    "English - 1",
    "Mathematics - 1",
    "Physics - 1",
    "Engineering Drawing",
    "Basic Electricity",
    "Basic Workshop practice",
  ],
  "Semester-6": [
    "Bangla - 1",
    "English - 1",
    "Mathematics - 1",
    "Physics - 1",
    "Engineering Drawing",
    "Basic Electricity",
    "Basic Workshop practice",
  ],
  "Semester-7": [
    "Bangla - 1",
    "English - 1",
    "Mathematics - 1",
    "Physics - 1",
    "Engineering Drawing",
    "Basic Electricity",
    "Basic Workshop practice",
  ],
  "Semester-8": [
    "Bangla - 1",
    "English - 1",
    "Mathematics - 1",
    "Physics - 1",
    "Engineering Drawing",
    "Basic Electricity",
    "Basic Workshop practice",
  ],
};

export default function Technology({ technology }) {
  const { id, name, picture, cheifInstructor, icon, description, images } =
    technology;

  return (
    <section className="mx-auto mt-24 max-w-7xl">
      <div
        style={{
          backgroundImage: `url(${images[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "300px",
        }}
      ></div>
      {/* details div */}
      <div className="flex flex-col gap-24 ml-6 lg:ml-28 lg:flex-row">
        <div className="flex-1 mt-14">
          <h1 className="pb-3 text-4xl font-bold text-primary">
            {name} টেকনোলজি
          </h1>
          <p className="text-[18px]  tracking-wide">{description}</p>
          {/* <Image
            alt=""
            height={150}
            width={150}
            src={cheifInstructor?.picture}
            className="object-cover object-center rounded-full"
          />
          <h1 className="pt-4 text-[24px] font-bold">
            ডিপার্টমেন্ট প্রধান : {cheifInstructor?.name}
          </h1> */}
        </div>
        <div className="flex-1 mt-14">
          <div className="bg-primary text-white rounded-md max-w-[320px] p-6">
            <h1 className="text-2xl font-bold text-center">
              ডিপার্টমেন্ট ওভারভিউ
            </h1>
            <hr className="border-t-2 border-black-500"></hr>
            <div className="flex justify-between gap-10 text-[20px] font-semibold pt-4">
              <h1> টোটাল স্টুডেন্ট, </h1>
              <h1>183</h1>
            </div>
            <div className="flex justify-between text-[20px] font-semibold pt-4">
              <h1> টোটাল টিচার,</h1>
              <h1>6</h1>
            </div>
            <div className="flex justify-between text-[20px] font-semibold pt-4">
              <h1> প্রাক্তন ছাত্র-ছাত্রী</h1>
              <h1>200</h1>
            </div>
            <div className="flex  justify-between gap-10 text-[20px] font-semibold pt-4">
              <h1>জব প্লেসমেন্ট</h1>
              <h1>50</h1>
            </div>
            <div className="flex justify-between gap-10 text-[20px] font-semibold pt-4">
              <h1>মোট শিক্ষার্থী</h1>
              <h1>800</h1>
            </div>
          </div>

          <div className="mt-4">
            <div className="bg-primary text-white rounded-md max-w-[320px] p-6">
              <h1 className="text-2xl text-white font-bold text-center">
                কোর্স ওভারভিউ
              </h1>
              <hr className="border-t-2 border-black-500"></hr>
              <div className="flex  justify-between text-[20px] font-semibold pt-4">
                <h1>টোটাল সেমিস্টার</h1>
                <h1>Eight</h1>
              </div>
              <div className="flex justify-between text-[20px] font-semibold pt-4">
                <h1>কোর্স অব কাঠামো</h1>
                <h1>ক্লিক</h1>
              </div>
              <div className="flex justify-between text-[20px] font-semibold pt-4">
                <h1> সিলেবাস</h1>
                <h1>ক্লিক</h1>
              </div>
              <div className="flex  justify-between text-[20px] font-semibold pt-4">
                <h1>টিউশন ফি রুটিন </h1>
                <h1>ক্লিক</h1>
              </div>
              <div className="flex  justify-between text-[20px] font-semibold pt-4">
                <h1> রুটিন </h1>
                <h1>ক্লিক</h1>
              </div>
              <div className="flex  justify-between text-[20px] font-semibold pt-4">
                <h1>নোটিশ</h1>
                <h1>ক্লিক</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* course outline */}

      <section className="pt-8 container">
        <h1 className="pb-8 text-2xl font-bold text-center text-orange-400">
          কোর্স আউটলাইন
        </h1>

        <div className="grid grid-cols-1 gap-4 justify-center lg:grid-cols-4">
          {Object.keys(outliens).map((outline) => (
            <div className="p-4 bg-orange-50" key={outline}>
              <h2 className="pb-1 font-bold">{outline}</h2>
              {outliens[outline].map((val) => (
                <div className="flex gap-2 items-center" key={val?.id}>
                  <FaBookReader></FaBookReader>
                  <p>{val}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      {/* tuition fee section */}
    </section>
  );
}
