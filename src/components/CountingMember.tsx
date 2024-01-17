import React from "react";
import CountUp from "react-countup";
import Image from "next/image";

const CountingMember = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="mt-8 mb-8 text-white">
      <h1 className="text-center text-[2rem] font-primary mt-14 mb-8 text-secondary-500 font-bold ">
        Our Members{" "}
      </h1>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1 className="font-bold text-4xl text-center text-orange-600 pt-24 pb-14">
            Here Is Our All Members
          </h1>

          <div className="flex gap-6 justify-center">
            <div className="pt-4 pb-4 pl-12 pr-4 shadow shadow-primary-500">
              <h1 className="text-2xl font-bold text-secondary-500">
                শিক্ষার্থী
              </h1>
              <div style={{ fontSize: "70px" }}>
                <CountUp
                  className="text-white"
                  start={0}
                  end={567}
                  duration={4}
                />
              </div>
            </div>
            <div className="pt-4 pb-4 pl-12 pr-4 shadow shadow-primary-500">
              <h1 className="text-2xl font-bold text-secondary-500">শিক্ষক</h1>
              <div style={{ fontSize: "70px" }}>
                <CountUp
                  className="text-white"
                  start={0}
                  end={14}
                  duration={8}
                />
              </div>
            </div>
            <div className="pt-4 pb-4 pl-12 pr-4 shadow shadow-primary-500">
              <h1 className="text-2xl font-bold text-secondary-500">
                ডিপার্টমেন্ট
              </h1>
              <div style={{ fontSize: "70px" }}>
                <CountUp
                  className="text-white"
                  start={0}
                  end={6}
                  duration={8}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-8 lg:flex-row lg:justify-evenly">
          <div className="grid grid-cols-2 pl-4 pr-4 gap-14">
            <div className="pt-4 pb-4 pl-12 pr-4 shadow shadow-primary-500">
              <h1 className="text-2xl font-bold text-secondary-500">Stafe</h1>
              <div style={{ fontSize: "70px" }}>
                <CountUp
                  className="text-green-500"
                  start={0}
                  end={21}
                  duration={8}
                />
              </div>
            </div>
            <div className="pt-4 pb-4 pl-12 pr-4 shadow shadow-primary-500">
              <h1 className="text-2xl font-bold text-secondary-500">Branch</h1>
              <div style={{ fontSize: "70px" }}>
                <CountUp
                  className="text-green-500"
                  start={0}
                  end={3}
                  duration={8}
                />
              </div>
            </div>
            <div className="pt-4 pb-4 pl-12 pr-4 shadow shadow-primary-500 ">
              <h1 className="text-2xl font-bold text-secondary-500">Members</h1>
              <div style={{ fontSize: "70px" }}>
                <CountUp
                  className="text-green-500"
                  start={0}
                  end={12}
                  duration={8}
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CountingMember;
