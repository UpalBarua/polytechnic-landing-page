import ReactMap from "@/components/reactMap";
import Image from "next/image";
import React from "react";
import { HiPhoneIncoming } from "react-icons/hi";
import { MdAttachEmail } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import { FaSchool } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="pt-4 pb-2 mt-14 mb-8 bg-orange-200 ">
      <div className="flex gap-14 pl-4 lg:pl-14">
        <div className="flex-1 pb-8 pl-14">
          <div className="flex gap-4 items-center">
            <FaSchool className="text-2xl font-bold "> </FaSchool>
            <h1 className="text-2xl font-bold ">
              সামশুন নাহার হারুন <br></br>পলিটেকনিক ইনস্টিটিউট{" "}
            </h1>
          </div>
          <hr className="mt-6 "></hr>
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
        <div className="relative w-full lg:w-[700px] p ">
          <Image
            src="https://images.unsplash.com/photo-1486976862325-fbac7b41739b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="object-cover object-center pr-2 rounded-md lg:pr-6 "
            fill
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Footer;
