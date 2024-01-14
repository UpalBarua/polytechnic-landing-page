import React from "react";
import { RiComputerFill } from "react-icons/ri";
import { FcElectronics } from "react-icons/fc";
import { IoHome } from "react-icons/io5";
import { FaTree } from "react-icons/fa";
import { GrVirtualMachine } from "react-icons/gr";
import { FaDharmachakra } from "react-icons/fa";
import { url } from "inspector";

const Technology = () => {
  const allTechnology = [
    {
      id: 1,
      name: "Computer",
      bg: "https://images.unsplash.com/photo-1573165759995-5865a394a1aa?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <RiComputerFill></RiComputerFill>,
      icon_bg: "#ADB6C4",
    },
    {
      id: 2,
      name: "Electronics",
      bg: "https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
      icon: <FcElectronics></FcElectronics>,
    },
    {
      id: 3,
      name: "Civil",
      bg: "https://plus.unsplash.com/premium_photo-1664474927853-900d5ee1fd80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <IoHome></IoHome>,
      icon_bg: "#1E91D6",
    },
    {
      id: 4,
      name: "Environment",
      bg: "https://plus.unsplash.com/premium_photo-1681843215421-bd6f1d1e00dd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaTree></FaTree>,
      icon_bg: "#2E933C",
    },

    {
      id: 5,
      name: "Mechanical",
      bg: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <GrVirtualMachine></GrVirtualMachine>,
      icon_bg: "#F5BB00",
    },

    {
      id: 6,
      name: "Architecture",
      bg: "https://plus.unsplash.com/premium_photo-1664298245598-f0d4f28e47fb?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaDharmachakra></FaDharmachakra>,
      icon_bg: "#99C24D",
    },
  ];

  return (
    <section className="w-full lg:w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 rounded-md">
        {allTechnology?.map((technology) => (
          <div key={technology?.id} className="rounded-md">
            <div
              className="bg-cover bg-center p-24 backdrop-brightness-50 rounded-md"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${technology?.bg})`,
              }}
            >
              {/* <div className="backdrop-filter backdrop-brightness-50 absolute inset-0"></div> */}
              <div className=" text-start">
                <h1
                  className="text-[50px]"
                  style={{ color: technology?.icon_bg }}
                >
                  {technology?.icon}
                </h1>
                <h1 className="text-white text-2xl font-bold">
                  Department of {technology?.name}
                </h1>
                <hr className="pt-2"></hr>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
