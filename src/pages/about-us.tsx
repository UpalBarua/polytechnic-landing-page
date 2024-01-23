import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="mt-56 mr-6 ml-6  lg:ml-14">
      <div className="flex flex-col justify-center lg:flex-row ">
        <div className="flex-1">
          <Image
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            height={500}
            width={550}
            className="rounded-md"
          ></Image>
        </div>
        <div className="flex-1">
          <h1 className="pb-3 text-2xl font-bold">
            সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট
          </h1>
          <p>
            আধুনিক সভ্যসমাজে বিজ্ঞানের প্রত্যেকটি আবিস্কারের পেছনে রয়েছে
            ইলেকট্রনিক্সের অবদান। এছাড়া স্বাস্থ্য সংক্রান- বিষয়ে সকল প্রকার রোগ
            নির্ণয়ের ক্ষেত্রে ইলেকট্রনিক্সের বিকল্প কিছু হতে পারে না। কাজেই এই
            দ্রুত উন্নয়শীল সমাজে Electronics Engineering একটি গুরুত্বপূর্ণ শাখা
            হিসেবে অবস্থান করছে। মানুষের দৈনন্দিন জীবন প্রণালী ও বেঁচে থাকার
            মাধ্যম হিসাবে Electronics প্রতি নিয়তই নিজেকে হাজির করছে নতুন ভাবে।
            উন্নত জীবন যাপনের জন্য মানুষ প্রতিটি মুহুর্তেই Electronics এর উপর
            নির্ভর করে চলছে। এক কথায় এই বিশাল পৃথিবীকে হাতের মুঠোয় আনা সম্ভব
            হয়েছে একমাত্র Electronics এর জন্য। খুব কম পরিসরে একমাত্র
            ইলেকট্রনিক্সই পারে নিজের কর্মসংস্থান নিজেই সৃষ্টি করতে। বাংলাদেশে
            সরকারী ও বেসরকারী TV Station, Railway Station, BTCL এ সকল
            প্রতিষ্ঠানে উপ-সহকারী প্রকৌশলী পদে অসংখ্য চাকুরীর সুযোগ
            রয়েছে।বর্তমানে বাংলাদেশে Mobile Sector এর ব্যাপক অগ্রগতি সাধিত
            হয়েছে। যার ফলে Electronics এর Diploma Engineer দের নতুন নতুন কাজের
            সুযোগ সৃষ্টি হয়েছে।বাংলাদেশে বেতার, আবহাওয়া অধিদপ্তর, রাডার ষ্টেশন
            ইত্যাদি প্রতিষ্ঠানে উপ-সহকারী প্রকৌশলী পদে চাকুরীর সুযোগ রয়েছে।যে
            কোনও কোর্স সফলভাবে সম্পন্ন করার পরে
          </p>
        </div>
      </div>
      {/* mission vission */}
      <section className=" w-full lg:w-[1100px] mx-auto mt-14">
        <div className="flex flex-col gap-4 lg:flex-row ">
          <div className="p-6 rounded-md border-2 border-orange-400">
            <h1 className="pb-2 font-bold">আমাদের মিশন</h1>
            <h1>
              উন্নত জীবন যাপনের জন্য মানুষ প্রতিটি মুহুর্তেই Electronics এর উপর
              নির্ভর করে চলছে। এক কথায় এই বিশাল পৃথিবীকে হাতের মুঠোয় আনা সম্ভব
              হয়েছে একমাত্র Electronics এর জন্য। খুব কম পরিসরে একমাত্র
              ইলেকট্রনিক্সই পারে নিজের কর্মসংস্থান নিজেই সৃষ্টি করতে।{" "}
            </h1>
          </div>
          <div className="p-4 rounded-md border-2 border-orange-400">
            <h1 className="pb-2 font-bold">আমাদের গোল</h1>
            <h1>
              উন্নত জীবন যাপনের জন্য মানুষ প্রতিটি মুহুর্তেই Electronics এর উপর
              নির্ভর করে চলছে। এক কথায় এই বিশাল পৃথিবীকে হাতের মুঠোয় আনা সম্ভব
              হয়েছে একমাত্র Electronics এর জন্য। খুব কম পরিসরে একমাত্র
              ইলেকট্রনিক্সই পারে নিজের কর্মসংস্থান নিজেই সৃষ্টি করতে।{" "}
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full mt-14 lg:w-[1100px] mx-auto">
        <h1 className="pb-2 text-2xl font-bold">SNHPI- এর দায়িত্বঃ</h1>
        <h1 className="pb-2 text-[18px]">
          প্রথমত: বিশ্বমানের জ্ঞান এবং দক্ষতার সাথে নিজেদের সজ্জিত করা।
        </h1>
        <h1 className="pb-2 text-[18px]">
          দ্বিতীয়তঃ আমাদের শিক্ষার্থীদের খুব আন্তরিক সেবা প্রদান এবং তাদের জন্য
          আন্তর্জাতিক মানের তথ্য ও দক্ষতা প্রদান করা।
        </h1>
        <h1 className="pb-2 text-[18px]">
          তৃতীয়তঃ সকল মানবীয় গুণাবলী ও ব্যক্তিত্বের সমন্বয়ে শিক্ষার্থীদের ভাল
          মানুষ হিসেবে তৈরী করা।
        </h1>
        <h1 className="pb-2 text-[18px]">
          চতুর্থতঃ নীতি-নৈতিকতা সমুন্নত রাখা এবং আমাদের শিক্ষার্থীদের সেই গুণ
          অর্জন করতে পরিচালিত করা।
        </h1>
        <h1 className="pb-2 text-[18px]">
          পঞ্চমতঃ ভবিষ্যতের চ্যালেঞ্জ মোকাবেলায় শিক্ষার্থীদেরকে দক্ষ, যোগ্য ও
          প্রশিক্ষিত জনশক্তি হিসেবে তৈরি করে কর্মসংস্থানের উপযোগী করে গড়ে তোলা।
        </h1>
      </section>
      <section className="w-full mt-14 lg:w-[1100px] mx-auto">
        <h1 className="pb-4 text-2xl font-bold">
          কেন SNHPI ব্যতিক্রমও অনন্য :
        </h1>
        <div className="flex flex-col gap-24 lg:flex-row">
          <div className="text-[18px] font-semibold">
            <h1>1. বৃত্তি ও ফ্রি স্টুডেন্টশীপ</h1>
            <h1>2.চট্টগ্রামে এই প্রথম বিশেষ সুবিধা</h1>
            <h1>3.উচ্চ শিক্ষা ও চাকুরী</h1>
            <h1>4.গাইড টিচারঃ</h1>
            <h1>5.মাসিক মূল্যায়ন </h1>
            <h1>6.ইংলিশ স্পীকিং ও পুরস্কারঃ</h1>
            <h1>7.মিল ভিজিট</h1>
          </div>
          <div className="text-[18px] font-semibold">
            <h1>8.জীবন বান্ধব শিক্ষা ব্যবস্থা</h1>
            <h1>9.ল্যাঙ্গুয়েজ ক্লাব</h1>
            <h1>10. অভিভাবক সমাবেশ</h1>
            <h1>11.শৃঙ্খলা ও সুন্দর পরিবেশ</h1>
            <h1>12.সেমিস্টার ফি-তে বিশেষ ছাড় </h1>
            <h1>13.প্রাইভেট/কোচিং মুক্ত প্রতিষ্ঠান</h1>
            <h1>14. দক্ষ ব্যবস্থাপনাঃ</h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
