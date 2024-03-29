import Head from "next/head";
import Image from "next/image";
import * as React from "react";

export default function AboutUsPage() {
  return (
    <React.Fragment>
      <Head>
        <title>SNHPI - About Us</title>
      </Head>
      <main className="container mt-20 max-w-6xl space-y-4 pb-20 sm:mt-24 lg:mt-56">
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Image
            src="/images/slider1.jpg"
            alt=""
            height={500}
            width={500}
            className="h-full w-full rounded-md object-cover object-center shadow-md"
          ></Image>
          <div className="rounded-md border bg-background/60 p-6 shadow-md md:p-8">
            <h2 className="pb-4 text-2xl font-medium tracking-tight">
              সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট
            </h2>
            <p className="leading-relaxed text-foreground/60">
              আধুনিক সভ্যসমাজে বিজ্ঞানের প্রত্যেকটি আবিস্কারের পেছনে রয়েছে
              ইলেকট্রনিক্সের অবদান। এছাড়া স্বাস্থ্য সংক্রান- বিষয়ে সকল প্রকার
              রোগ নির্ণয়ের ক্ষেত্রে ইলেকট্রনিক্সের বিকল্প কিছু হতে পারে না।
              কাজেই এই দ্রুত উন্নয়শীল সমাজে Electronics Engineering একটি
              গুরুত্বপূর্ণ শাখা হিসেবে অবস্থান করছে। মানুষের দৈনন্দিন জীবন
              প্রণালী ও বেঁচে থাকার মাধ্যম হিসাবে Electronics প্রতি নিয়তই নিজেকে
              হাজির করছে নতুন ভাবে। উন্নত জীবন যাপনের জন্য মানুষ প্রতিটি
              মুহুর্তেই Electronics এর উপর নির্ভর করে চলছে। এক কথায় এই বিশাল
              পৃথিবীকে হাতের মুঠোয় আনা সম্ভব হয়েছে একমাত্র Electronics এর জন্য।
              খুব কম পরিসরে একমাত্র ইলেকট্রনিক্সই পারে নিজের কর্মসংস্থান নিজেই
              সৃষ্টি করতে। বাংলাদেশে সরকারী ও বেসরকারী TV Station, Railway
              Station, BTCL এ সকল প্রতিষ্ঠানে উপ-সহকারী প্রকৌশলী পদে অসংখ্য
              চাকুরীর সুযোগ রয়েছে।বর্তমানে বাংলাদেশে Mobile Sector এর ব্যাপক
              অগ্রগতি সাধিত হয়েছে। যার ফলে Electronics এর Diploma Engineer দের
              নতুন নতুন কাজের সুযোগ সৃষ্টি হয়েছে।বাংলাদেশে বেতার, আবহাওয়া
              অধিদপ্তর, রাডার ষ্টেশন ইত্যাদি প্রতিষ্ঠানে উপ-সহকারী প্রকৌশলী পদে
              চাকুরীর সুযোগ রয়েছে।যে কোনও কোর্স সফলভাবে সম্পন্ন করার পরে
            </p>
          </div>
        </section>
        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-md border bg-background/60 p-6 md:p-8">
            <h3 className="pb-2 text-lg font-medium">আমাদের মিশন</h3>
            <p className="leading-relaxed text-foreground/60">
              উন্নত জীবন যাপনের জন্য মানুষ প্রতিটি মুহুর্তেই Electronics এর উপর
              নির্ভর করে চলছে। এক কথায় এই বিশাল পৃথিবীকে হাতের মুঠোয় আনা সম্ভব
              হয়েছে একমাত্র Electronics এর জন্য। খুব কম পরিসরে একমাত্র
              ইলেকট্রনিক্সই পারে নিজের কর্মসংস্থান নিজেই সৃষ্টি করতে।
            </p>
          </div>
          <div className="rounded-md border bg-background/60 p-6 md:p-8">
            <h3 className="pb-2 text-lg font-medium">আমাদের গোল</h3>
            <p className="leading-relaxed text-foreground/60">
              উন্নত জীবন যাপনের জন্য মানুষ প্রতিটি মুহুর্তেই Electronics এর উপর
              নির্ভর করে চলছে। এক কথায় এই বিশাল পৃথিবীকে হাতের মুঠোয় আনা সম্ভব
              হয়েছে একমাত্র Electronics এর জন্য। খুব কম পরিসরে একমাত্র
              ইলেকট্রনিক্সই পারে নিজের কর্মসংস্থান নিজেই সৃষ্টি করতে।
            </p>
          </div>
          <div className="rounded-md border bg-background/60 p-6 md:p-8">
            <h3 className="pb-2 text-lg font-medium">আমাদের দায়িত্ব</h3>
            <div className="space-y-1 leading-relaxed text-foreground/60">
              <p>
                প্রথমতঃ বিশ্বমানের জ্ঞান এবং দক্ষতার সাথে নিজেদের সজ্জিত করা।
              </p>
              <p>
                দ্বিতীয়তঃ আমাদের শিক্ষার্থীদের খুব আন্তরিক সেবা প্রদান এবং তাদের
                জন্য আন্তর্জাতিক মানের তথ্য ও দক্ষতা প্রদান করা।
              </p>
              <p>
                তৃতীয়তঃ সকল মানবীয় গুণাবলী ও ব্যক্তিত্বের সমন্বয়ে শিক্ষার্থীদের
                ভাল মানুষ হিসেবে তৈরী করা।
              </p>
              <p>
                চতুর্থতঃ নীতি-নৈতিকতা সমুন্নত রাখা এবং আমাদের শিক্ষার্থীদের সেই
                গুণ অর্জন করতে পরিচালিত করা।
              </p>
              <p>
                পঞ্চমতঃ ভবিষ্যতের চ্যালেঞ্জ মোকাবেলায় শিক্ষার্থীদেরকে দক্ষ,
                যোগ্য ও প্রশিক্ষিত জনশক্তি হিসেবে তৈরি করে কর্মসংস্থানের উপযোগী
                করে গড়ে তোলা।
              </p>
            </div>
          </div>
          <div className="rounded-md border bg-background/60 p-6 md:p-8">
            <h3 className="pb-2 text-lg font-medium">
              কেনো আমরা ব্যতিক্রম ও অনন্য
            </h3>
            <div className="grid grid-cols-1 gap-2 leading-relaxed text-foreground/60 md:grid-cols-2">
              <p>1. বৃত্তি ও ফ্রি স্টুডেন্টশীপ</p>
              <p>2. চট্টগ্রামে এই প্রথম বিশেষ সুবিধা</p>
              <p>3. উচ্চ শিক্ষা ও চাকুরী</p>
              <p>4. গাইড টিচারঃ</p>
              <p>5. মাসিক মূল্যায়ন </p>
              <p>6. ইংলিশ স্পীকিং ও পুরস্কারঃ</p>
              <p>7. মিল ভিজিট</p>
              <p>8. জীবন বান্ধব শিক্ষা ব্যবস্থা</p>
              <p>9. ল্যাঙ্গুয়েজ ক্লাব</p>
              <p>10. অভিভাবক সমাবেশ</p>
              <p>11. শৃঙ্খলা ও সুন্দর পরিবেশ</p>
              <p>12. সেমিস্টার ফি-তে বিশেষ ছাড় </p>
              <p>13. প্রাইভেট/কোচিং মুক্ত প্রতিষ্ঠান</p>
              <p>14. দক্ষ ব্যবস্থাপনাঃ</p>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
