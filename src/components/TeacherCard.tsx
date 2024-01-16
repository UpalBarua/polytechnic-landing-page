import Image from "next/image";
import React from "react";

const TeacherCard = ({ teacher }) => {
  const { name, id, image, number, position } = teacher;
  return (
    <div className=" shadow-md shadow-blue-400 pb-6 ">
      <Image
        className="rounded-md"
        src={image}
        height={400}
        width={400}
        alt=""
      ></Image>
      <div className="text-center pt-2">
        <h1 className="font-bold text-[24px]">{name}</h1>
        <h1 className="font-semi-bold text-[16px]">{position}</h1>
        <h1 className="font-semi-bold text-[16px]">{number}</h1>
      </div>
    </div>
  );
};

export default TeacherCard;
