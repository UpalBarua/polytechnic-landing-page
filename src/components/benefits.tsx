import Image from "next/image";
import React from "react";
import { GrMultimedia } from "react-icons/gr";
import { TbBuildingBroadcastTower } from "react-icons/tb";
import { RiBuilding4Fill } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { FaCaravan } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";

const Benefit = () => {
  const allBenefits = [
    {
      id: 1,
      name: "মাল্টিমিডিয়া সুবিধা",
      icons: <GrMultimedia></GrMultimedia>,
      content:
        "ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ",
    },
    {
      id: 5,
      name: "ইন্টারনেট সুবিধা ",
      icons: <TbBuildingBroadcastTower></TbBuildingBroadcastTower>,
      content:
        "ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ",
    },
    {
      id: 2,
      name: "শেখ রাসেল ডিজিটাল ল্যাব",
      icons: <RiBuilding4Fill></RiBuilding4Fill>,
      content:
        "ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ",
    },
    {
      id: 3,
      name: "স্পোকেন ইংলিশ ক্লাস",
      icons: <SiGoogleclassroom></SiGoogleclassroom>,
      content:
        "ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ",
    },
    {
      id: 4,
      name: "যাতায়াত সুবিধা",
      icons: <FaCaravan></FaCaravan>,
      content:
        "ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ",
    },
    {
      id: 6,
      name: "হাতে কলমে শিক্ষা",
      icons: <FaPencilRuler></FaPencilRuler>,
      content:
        "ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ",
    },
  ];
  return (
    // <section className="w-full lg:w-[1200px] mx-auto">
    //   <h1 className="pb-6 text-2xl font-bold text-center">
    //     আমাদের সুবিধা সমূহ
    //   </h1>
    //   <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
    //     {allBenefits?.map((benefit) => (
    //       <div key={benefit?.id} benefit={benefit}>
    //         <div className="shadow  rounded-md bg-background/50 p-10 lg:p-12">
    //           <div className="flex justify-center pb-4">
    //             <h1 className="text-5xl ">{benefit?.icons}</h1>
    //           </div>
    //           <h1 className="text-[20px] text-primary font-bold pb-2 text-center">
    //             {benefit?.name}
    //           </h1>
    //           <p className="text-center text-gray-600 ">{benefit?.content}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <section>
      <div className="flex flex-col gap-8 ml-4 lg:ml-8 lg:flex-row">
        <div className="flex-1">
          <h1 className="font-bold ">কেন আমাদের বেচে নিবেন?</h1>
          <h1 className="pb-8 text-3xl font-bold">
            আমারা কি কি সুবিধা প্রধান করে থাকি।
          </h1>
          <hr></hr>

          <div>
            {allBenefits?.map((benefit) => (
              <div key={benefit?.id} benefit={benefit}>
                <div className="flex gap-3 p-4 mb-3 rounded-md border-orange-400 shadow-md  shadow-orange-300">
                  <div className="p-4 text-4xl bg-orange-500 rounded-full">
                    {benefit?.icons}
                  </div>
                  <div>
                    <h1 className="font-bold">{benefit?.name}</h1>
                    <h1>{benefit?.content}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 mt-14">
          <Image
            src="https://images.unsplash.com/flagged/photo-1574110906643-8311b0ce29d3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            height={600}
            width={500}
            className="rounded-md"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
