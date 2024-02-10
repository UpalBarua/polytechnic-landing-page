import Image from "next/image";
import React, { useCallback, useState } from "react";
import { RiHomeOfficeFill } from "react-icons/ri";
import { FaBlenderPhone } from "react-icons/fa";
import { GoStopwatch } from "react-icons/go";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Libraries,
} from "@react-google-maps/api";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

const libraries: Libraries = ["places"];

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Contact = () => {
  return (
    <section className="ml-4 mt-44 lg:ml-12">
      <h1 className="pb-8 text-center text-4xl font-bold">
        আমাদের সাথে যোগাযোগ
      </h1>
      <div className="flex flex-col gap-14 lg:flex-row">
        {/* <div className="flex-1">
          <div>
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
                <Marker position={[51.505, -0.09]}></Marker>
            </MapContainer>
          </div>
        </div> */}

        <div className="flex-1">
          <h1 className="pb-8 text-center text-2xl font-semibold">
            আমাদের যোগাযোগের ফর্ম
          </h1>
          <form className="grid gap-10 border p-8">
            <div className="flex flex-col gap-2">
              <label> নাম</label>
              <input
                className="rounded-sm border-2 border-gray-500 bg-orange-50 p-2 outline-none transition-all "
                type="text"
                name="user_name"
              ></input>
            </div>

            <div className="flex flex-col gap-2">
              <label>মোবাইল নম্বর</label>
              <input
                className="focus:border-accent-400  rounded-md border-2 border-gray-500 bg-orange-50 p-2 outline-none transition-all"
                type="text"
                name="user_number"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label>ইমেইল</label>
              <input
                className="focus:border-accent-400 rounded-md  border-2 border-gray-500 bg-orange-50 p-2 outline-none transition-all"
                type="text"
                name="user_email"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label>মন্তব্য</label>
              <textarea
                name="message"
                className="focus:border-accent-400 min-h-[8rem] resize-none overflow-hidden rounded-md border-2 border-gray-500 bg-orange-50 p-2 outline-none transition-all"
              ></textarea>
            </div>
            <button className="bg-primary px-2 py-4 font-bold text-white">
              সাবমিট
            </button>
          </form>
        </div>
        <div className="flex-1">
          <div className="pb-6">
            <h1 className="flex gap-2 pb-2 text-2xl font-bold">
              <RiHomeOfficeFill></RiHomeOfficeFill>
              হেড অফিস [Main Campus, Chattogram]
            </h1>
            <p>সালেহ ভিলা(৩য় তলা), বাড়ী: ১৪,</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full p-4 shadow shadow-orange-200 lg:w-56">
              <h1 className="flex items-center gap-2 font-semibold">
                <FaBlenderPhone></FaBlenderPhone>
                ফোন নাম্বার
              </h1>
              <p>+৮৮০১৭৩০৭০০৯২০</p>
              <p>+৮৮০১৭৩০৭০০৯২০</p>
            </div>
            <div className="w-full p-4 shadow shadow-orange-200 lg:w-56">
              <h1 className="flex items-center gap-2 font-semibold">
                <GoStopwatch></GoStopwatch>
                অফিস ভিজিটের সময়
              </h1>
              <p>শনিবার – শুক্রবার</p>
              <p>সকাল ৯ টা থেকে রাত ৮ টা</p>
            </div>
            <div className="w-full p-4 shadow shadow-orange-200 lg:w-56">
              <h1 className="flex items-center gap-2 font-semibold">
                <BsFillPersonLinesFill></BsFillPersonLinesFill>
                অনলাইন মাধ্যম
              </h1>
              <p className="flex items-center gap-2">
                <FaFacebook> </FaFacebook>ফেসবুক
              </p>
              <p className="flex items-center gap-2">
                <FaWhatsapp></FaWhatsapp>হোয়াটস্যাপ
              </p>
            </div>
            <div className="w-full p-4 shadow shadow-orange-200 lg:w-56">
              <h1 className="flex items-center gap-2 font-semibold">
                <MdMarkEmailUnread></MdMarkEmailUnread>
                ই-মেইল
              </h1>
              <p>info.wellupbd@gmail.com</p>
              <p>info@mywellup.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* contract form  */}
    </section>
  );
};

export default Contact;
