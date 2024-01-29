import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { RiHomeOfficeFill } from 'react-icons/ri';
import { FaBlenderPhone } from 'react-icons/fa';
import { GoStopwatch } from 'react-icons/go';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { MdMarkEmailUnread } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Libraries,
} from '@react-google-maps/api';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

const libraries: Libraries = ['places'];

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Contact = () => {
  return (
    <section className="mt-44 ml-4 lg:ml-12">
      <h1 className="text-center font-bold text-2xl pb-8">
        আমাদের সাথে যোগাযোগ
      </h1>
      <div className="flex flex-col lg:flex-row gap-14">
        <div className="flex-1">
          <div>
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}></Marker>
            </MapContainer>
          </div>
        </div>
        <div className="flex-1 ">
          <div className="pb-6">
            <h1 className="text-2xl flex gap-2 font-bold pb-2">
              <RiHomeOfficeFill></RiHomeOfficeFill>
              হেড অফিস [Main Campus, Chattogram]
            </h1>
            <p>সালেহ ভিলা(৩য় তলা), বাড়ী: ১৪,</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="shadow shadow-orange-200 p-4 w-full lg:w-56">
              <h1 className="font-semibold flex gap-2 items-center">
                <FaBlenderPhone></FaBlenderPhone>
                ফোন নাম্বার
              </h1>
              <p>+৮৮০১৭৩০৭০০৯২০</p>
              <p>+৮৮০১৭৩০৭০০৯২০</p>
            </div>
            <div className="shadow shadow-orange-200 p-4 w-full lg:w-56">
              <h1 className="font-semibold flex gap-2 items-center">
                <GoStopwatch></GoStopwatch>
                অফিস ভিজিটের সময়
              </h1>
              <p>শনিবার – শুক্রবার</p>
              <p>সকাল ৯ টা থেকে রাত ৮ টা</p>
            </div>
            <div className="shadow shadow-orange-200 p-4 w-full lg:w-56">
              <h1 className="font-semibold flex gap-2 items-center">
                <BsFillPersonLinesFill></BsFillPersonLinesFill>
                অনলাইন মাধ্যম
              </h1>
              <p className="flex gap-2 items-center">
                <FaFacebook> </FaFacebook>ফেসবুক
              </p>
              <p className="flex gap-2 items-center">
                <FaWhatsapp></FaWhatsapp>হোয়াটস্যাপ
              </p>
            </div>
            <div className="shadow shadow-orange-200 p-4 w-full lg:w-56">
              <h1 className="font-semibold  flex gap-2 items-center">
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

      <div className="w-full lg:w-[500px]   p-4 mx-auto">
        <h1 className="pt-14 text-primary  text-3xl text-center pb-8 font-bold">
          Our Contract from{" "}
        </h1>
        <div>
          <form className="grid gap-10 p-8 border">
            <input
              className="p-2 transition-all border-2 border-gray-500 rounded-sm outline-none bg-orange-50 "
              type="text"
              placeholder=" Name"
              name="user_name"
            ></input>

            <input
              className="p-2  transition-all border-2 border-gray-500 outline-none bg-orange-50 focus:border-accent-400"
              type="text"
              placeholder=" Email"
              name="user_email"
            ></input>
            <textarea
              name="message"
              className="border-2 border-gray-500 outline-none focus:border-accent-400 transition-all p-2 resize-none overflow-hidden min-h-[8rem]"
              type="text"
              placeholder=" Message"
            ></textarea>

            <button className="bg-primary font-bold text-white px-2 py-4">
              Send Message
            </button>

            {/* 
            <button className="rounded-none btn bg-accent-400 text-dark-500 hover:text-accent-400">
              Send Message
            </button> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
