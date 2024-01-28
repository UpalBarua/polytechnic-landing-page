import Image from 'next/image';
import React from 'react';
import { GrMultimedia } from 'react-icons/gr';
import { TbBuildingBroadcastTower } from 'react-icons/tb';
import { RiBuilding4Fill } from 'react-icons/ri';
import { SiGoogleclassroom } from 'react-icons/si';
import { FaCaravan } from 'react-icons/fa';
import { FaPencilRuler } from 'react-icons/fa';

const Benefit = () => {
  const allBenefits = [
    {
      id: 1,
      name: 'মাল্টিমিডিয়া সুবিধা',
      icons: <GrMultimedia></GrMultimedia>,
      content:
        'ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ',
    },
    {
      id: 5,
      name: 'ইন্টারনেট সুবিধা ',
      icons: <TbBuildingBroadcastTower></TbBuildingBroadcastTower>,
      content:
        'ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ',
    },
    {
      id: 2,
      name: 'শেখ রাসেল ডিজিটাল ল্যাব',
      icons: <RiBuilding4Fill></RiBuilding4Fill>,
      content:
        'ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ',
    },
    {
      id: 3,
      name: 'স্পোকেন ইংলিশ ক্লাস',
      icons: <SiGoogleclassroom></SiGoogleclassroom>,
      content:
        'ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ',
    },
    {
      id: 4,
      name: 'যাতায়াত সুবিধা',
      icons: <FaCaravan></FaCaravan>,
      content:
        'ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ',
    },
    {
      id: 6,
      name: 'হাতে কলমে শিক্ষা',
      icons: <FaPencilRuler></FaPencilRuler>,
      content:
        'ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ',
    },
  ];
  return (
    <section className="w-full lg:w-[1200px]  mb-14 mt-48 mx-auto">
      <h1 className="pb-6 text-2xl font-bold text-center">
        আমাদের সুবিধা সমূহ
      </h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {allBenefits?.map((benefit) => (
          <div key={benefit?.id}>
            <div className="p-10 rounded-md shadow bg-background/50 lg:p-12">
              <div className="flex justify-center pb-4">
                <h1 className="text-5xl">{benefit?.icons}</h1>
              </div>
              <h1 className="text-[20px] text-primary font-bold pb-2 text-center">
                {benefit?.name}
              </h1>
              <p className="text-center text-gray-600">{benefit?.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefit;
