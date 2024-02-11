import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { Logo } from "./ui/logo";

export function Footer() {
  return (
    <footer className="relative z-20 mt-24 divide-y bg-background/60 px-8">
      <div className="container mx-auto flex flex-col justify-between space-y-8 py-10 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full dark:bg-violet-400">
              <Logo className="" />
            </div>
            <span className="self-center text-2xl font-semibold">
              সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 text-sm sm:grid-cols-4 lg:w-2/3">
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
            <h3 className="tracki text-[20px] uppercase dark:text-gray-50">
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
            <h3 className="text-[20px] uppercase dark:text-gray-50">
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
            <div className="text-[20px] uppercase dark:text-gray-50">
              সোশ্যাল মিডিয়া
            </div>
            <div className="flex justify-start space-x-3">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center p-1"
              >
                <FaFacebook className="text-[24px] text-[#316FF6]" />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                className="flex items-center p-1"
              >
                <BsWhatsapp className="text-[24px] text-[#2eb361]" />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className="flex items-center p-1"
              >
                <MdAttachEmail className="text-[24px] text-[#c23535]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-center text-sm dark:text-gray-400">
        @wellup It studio.com
      </div>
    </footer>
  );
}
