import { MdAttachEmail } from "react-icons/md";
import { Logo } from "./ui/logo";
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

export function Footer() {
  return (
    <div>
      <footer className="px-8 bg-pink-50  mt-24  divide-y">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                <Logo className="" />
              </div>
              <span className="self-center text-2xl font-semibold">
                সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="trackiv text-[20px]  uppercase dark:text-gray-50">
                অর্গানাইজেশন
              </h3>

              <ul className="space-y-1 text-[16px]">
                <li>
                  <a className="text-[16px]" rel="noopener noreferrer" href="#">
                    আমাদের সম্পর্কে
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    মিশন
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    অধ্যক্ষের কথা
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    যোগাযোগ
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracki uppercase dark:text-gray-50 text-[20px]">
                {" "}
                যোগাযোগ
              </h3>
              <ul className="space-y-1 text-[16px]">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    রুটিন
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    নোটিশ
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    ডিপার্টমেন্ট
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    সার্কুলার
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-50 text-[20px]">
                কমিউনিটি
              </h3>
              <ul className="space-y-1 text-[16px]">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    সুবিধা
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    গ্যালারি
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    শিক্ষকমন্ডলী
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase dark:text-gray-50 text-[20px]">
                সোশ্যাল মিডিয়া
              </div>
              <div className="flex justify-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Facebook"
                  className="flex items-center p-1"
                >
                  <FaFacebook className="text-[#316FF6] text-[24px]" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Twitter"
                  className="flex items-center p-1"
                >
                  <BsWhatsapp className="text-[#2eb361] text-[24px]" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Instagram"
                  className="flex items-center p-1"
                >
                  <MdAttachEmail className="text-[#c23535] text-[24px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-400">
          @wellup It studio.com
        </div>
      </footer>
    </div>
  );
}
