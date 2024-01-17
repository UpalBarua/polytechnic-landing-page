import { FaDharmachakra, FaTree } from "react-icons/fa";
import { FcElectronics } from "react-icons/fc";
import { GrVirtualMachine } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { RiComputerFill } from "react-icons/ri";

const departments = [
  {
    id: 1,
    name: "কম্পিউটার",
    bg: "https://images.unsplash.com/photo-1573165759995-5865a394a1aa?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <RiComputerFill></RiComputerFill>,
    icon_bg: "#ADB6C4",
  },
  {
    id: 2,
    name: " ইলেকট্রনিক্স",
    bg: "https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
    icon: <FcElectronics></FcElectronics>,
  },
  {
    id: 3,
    name: " সিভিল",
    bg: "https://plus.unsplash.com/premium_photo-1664474927853-900d5ee1fd80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <IoHome></IoHome>,
    icon_bg: "#1E91D6",
  },
  {
    id: 4,
    name: "এনভারমেন্ট",
    bg: "https://plus.unsplash.com/premium_photo-1681843215421-bd6f1d1e00dd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <FaTree></FaTree>,
    icon_bg: "#2E933C",
  },

  {
    id: 5,
    name: "মেকানিক্যাল",
    bg: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <GrVirtualMachine></GrVirtualMachine>,
    icon_bg: "#F5BB00",
  },

  {
    id: 6,
    name: "আর্কিটেকচার",
    bg: "https://plus.unsplash.com/premium_photo-1664298245598-f0d4f28e47fb?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <FaDharmachakra></FaDharmachakra>,
    icon_bg: "#99C24D",
  },
];

export const Departments = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-medium tracking-tight">Departments</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {departments.map(({ name, id, icon, bg }) => (
          <div key={id} className="border rounded-md shadow-sm p-5 space-y-2">
            <span className="text-3xl">{icon}</span>
            <h4 className="font-medium">{name}</h4>
            <p className="text-sm text-foreground/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              qui!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
