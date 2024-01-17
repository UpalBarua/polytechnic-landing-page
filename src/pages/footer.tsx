import ReactMap from "@/components/reactMap";
import Image from "next/image";
import React from "react";
import { HiPhoneIncoming } from "react-icons/hi";
import { MdAttachEmail } from "react-icons/md";
import { SiFacebook } from "react-icons/si";

const Footer = () => {
  return (
    <section className="mt-14">
      <div className="flex gap-24">
        <div>
          <h1 className="text-2xl font-bold">সামশুন নাহার হারুন </h1>
          <h1 className="text-2xl font-bold">পলিটেকনিক ইনস্টিটিউট</h1>
          <hr className="mt-6"></hr>
          <h1 className="pt-4 text-[20px] font-semibold">
            Muradpur,Chittagong
          </h1>

          <div className="flex gap-2 pt-2 text-[20px] font-semibold  items-center">
            <HiPhoneIncoming></HiPhoneIncoming>
            <h1>01918236789</h1>
          </div>
          <div className="flex gap-2 pt-2 text-[20px] font-semibold  items-center">
            <MdAttachEmail></MdAttachEmail>
            <h1>samsur55@gmail.com</h1>
          </div>
          <div className="flex gap-2 pt-2 text-[20px] font-semibold  items-center">
            <SiFacebook></SiFacebook>
            <h1>Samsur Nahar Harun</h1>
          </div>
        </div>
        <div>
          <ReactMap></ReactMap>
        </div>
      </div>
    </section>
  );
};

export default Footer;
