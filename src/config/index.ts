import { AiOutlinePicture } from "react-icons/ai";
import { FaCaravan, FaPencilRuler, FaTshirt } from "react-icons/fa";
import { GrMultimedia } from "react-icons/gr";
import {
  MdComputer,
  MdDirectionsCar,
  MdFlashOn,
  MdLocationCity,
  MdOutlineSettings,
} from "react-icons/md";
import {
  PiBell,
  PiBuildings,
  PiChalkboardTeacher,
  PiHouse,
  PiStudent,
  PiUser,
} from "react-icons/pi";
import { RiBuilding4Fill } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { TbBuildingBroadcastTower } from "react-icons/tb";
import { FaMoneyBillWave } from "react-icons/fa";

export const mainNavLinks = [
  {
    route: "/",
    label: "হোম",
    target: "_self",
    subRoutes: [],
  },
  {
    route: "/curriculum",
    label: "পাঠ্যক্রম",
    target: "_self",
    subRoutes: [
      {
        route:
          "https://bteb.gov.bd/site/page/6723ed9b-94d5-41a9-80cf-54a3594a171e",
        label: "কোর্স অবকাঠামো",
        target: "_blank",
      },
      {
        route: "https://drive.google.com/",
        label: "রুটিন",
        target: "_blank",
      },
      {
        route:
          "https://bteb.gov.bd/site/page/6723ed9b-94d5-41a9-80cf-54a3594a171e",
        label: "সিলেবাস",
        target: "_blank",
      },
      { route: "/teachers", label: "শিক্ষক মন্ডলী", target: "_self" },
      { route: "/grading-system", label: "গ্রেডিং সিস্টেম", target: "_self" },
    ],
  },
  {
    route: "/admission-process",
    label: "ভর্তি প্রক্রিয়া",
    target: "_self",
    subRoutes: [
      // {
      //   route: "",
      //   label: "সার্কুলার",
      //   target: "_blank",
      // },
      {
        route:
          "https://bteb.gov.bd/site/page/e4b1b646-53b4-46f1-ab39-21c909937b7c/%E0%A6%AD%E0%A6%B0%E0%A7%8D%E0%A6%A4%E0%A6%BF%E0%A6%B0-%E0%A6%A8%E0%A7%80%E0%A6%A4%E0%A6%BF%E0%A6%AE%E0%A6%BE%E0%A6%B2%E0%A6%BE",
        label: "ভর্তির নীতিমালা",
        target: "_blank",
      },
      {
        route:
          "http://app1.btebadmission.gov.bd:7080/BTEB_WEB/application/applicantRegistration.action",
        label: "অনলাইন এপ্লাই",
        target: "_blank",
      },
      // {
      //   route: "/tuition-fees-and-others",
      //   label: "টিউশন ফি ও অন্যান্য",
      //   target: "_self",
      // },
      // {
      //   route: "/scholarships",
      //   label: "স্কলারশিপ",
      //   target: "_self",
      // },
    ],
  },
  {
    route: "/technologies",
    label: "টেকনোলজি সমূহ",
    target: "_self",
    subRoutes: [
      {
        route: "/technologies/electrical",
        label: "ইলেকট্রিক্যাল টেকনোলজি",
        target: "_self",
      },
      {
        route: "/technologies/mechanical",
        label: " মেকানিক্যাল টেকনোলজি",
        target: "_self",
      },
      {
        route: "/technologies/computer",
        label: "   কম্পিউটার টেকনোলজি",
        target: "_self",
      },
      {
        route: "/technologies/automobile",
        label: " অটোমোবাইল টেকনোলজি ",
        target: "_self",
      },
      {
        route: "/technologies/civil",
        label: " সিভিল টেকনোলজি ",
        target: "_self",
      },
      {
        route: "/technologies/textile",
        label: "টেক্সটাইল টেকনোলজি ",
        target: "_self",
      },
    ],
  },
  {
    route: "/benefits",
    label: "সুবিধা",
    subRoutes: [],
    target: "_self",
  },
  {
    route: "/gallery",
    label: "গ্যালারি",
    subRoutes: [],
    target: "_self",
  },
  {
    route: "/our-world",
    label: "আমাদের ভূবন",
    target: "_self",
    subRoutes: [
      { route: "/about-us", label: "আমাদের সম্পর্কে", target: "_self" },
      { route: "/chairman", label: "চেয়ারম্যানের বাণী", target: "_self" },
      { route: "/principal", label: "অধ্যক্ষের কথা", target: "_self" },
      {
        route: "/administrative-committee",
        label: "প্রশাসনিক কমিটি",
        target: "_self",
      },
      {
        route: "/goals",
        label: "আমাদের লক্ষ্য",
        target: "_self",
      },
      // {
      //   route: "/projects",
      //   label: " প্রজেক্ট সমূহ",
      //   target: "_self",
      // },
    ],
  },
  {
    route: "https://bdjobs.com",
    label: "প্লেসমেন্ট সেল",
    subRoutes: [],
    target: "_blank",
  },
  {
    route: "/contact",
    label: "যোগাযোগ",
    subRoutes: [],
    target: "_self",
  },
] as const;

export type NavLink = (typeof mainNavLinks)[number];

export const adminNavLinks = [
  {
    Icon: PiHouse,
    href: "/",
    label: "Home",
  },
  {
    Icon: PiBell,
    href: "/admin/noticeboard",
    label: "Notices",
  },
  {
    Icon: PiChalkboardTeacher,
    href: "/admin/teachers",
    label: "Teachers",
  },
  {
    Icon: AiOutlinePicture,
    href: "/admin/pictures",
    label: "Pictures",
  },
] as const;

export const chairmansMessage = {
  picture: "/images/chairman.jpeg",
  name: "এম. রেজাউল করিম চৌধুরী (বীর মুক্তিযোদ্ধা)",
  position: "প্রতিষ্ঠাতা ও চেয়ারম্যান",
  institute: "সামশুন নাহার হারুন পলিটেকনিক ইনিস্টিটিউট।",
  message:
    'দারিদ্রদ্র্য বিমোচন, কর্মসংস্থানের সুযোগ সৃষ্টি, আত্ম-কর্মসংস্থান, বেকারত্ব, ক্ষুধা ও দুর্নীতিমুক্ত সমৃদ্ধ বাংলাদেশ গড়া, উদ্যোক্তা, উন্নয়ন ও উৎপাদনশীলতা বৃদ্ধিতে কারিগরি ও বৃত্তিমূলক শিক্ষার ভূমিকা অপরিসীম। কারিগরি শিক্ষা জাতির অর্থনৈতিক মেরুদন্ড, জাতির অধিকার। বঙ্গবন্ধু শেখ মুজিবুর রহমান সোনার বাংলা বলতে পরিপূর্ণ বাংলাদেশকে বুঝিয়েছেন। এখন তারই সুযোগ্য কন্যা সেই অসমাপ্ত সোনার বাংলার সত্যিকারের রূপ "ডিজিটাল বাংলাদেশ" গড়তে কাজ করছেন নিরন্তর। বাংলাদেশকে মধ্যম আয়ের দেশে উন্নীত করার জন্য কারিগরি ও বৃত্তিমূলক শিক্ষার সম্প্রসারণ অপরিহার্য। এক সময়ে বাংলাদেশের সমপর্যায়ে থাকা মালয়েশিয়া, দক্ষিণ কোরিয়া, সিংগাপুর, হংকং, ভিয়েতনাম, জাপান, চীন, ভারতসহ আরো অনেক দেশ আজ কারিগরি ও বৃত্তিমূলক শিক্ষাকে গুরুত্ব দিয়ে ব্যাপকভাবে উন্নতি সাধন করেই সাফল্যের দ্বারপ্রান্তে পৌঁছাতে সক্ষম হয়েছে। দক্ষিণ কোরিয়ার মোট শ্রমশক্তির ৯৬ ভাগই কারিগরি শিক্ষায় প্রশিক্ষিত, জার্মানিতে ৮০ ভাগ, ইউরোপে এই হার ৬০ শতাংশের বেশি আর শিল্পোন্নত দেশে ৬০- ৮০ ভাগ। বিপরীতে আমাদের দেশে বর্তমান সরকারের যুগোপযোগী শিক্ষানীতি, বৃত্তিমূলক ও কারিগরি শিক্ষার প্রসার ও উন্নয়নে নানামুখী পরিকল্পনা বাস্তবায়নের ফলে এই হার ০৬ ভাগে উন্নীত হয়েছে।  জাতীয় দারিদ্র্য বিমোচন কৌশলপত্রে ২০২০ সালের মধ্যে মোট শিক্ষার্থীর শতকরা ২০ ভাগ ও ২০৩০ সালের মধ্যে শতকরা ৩০ ভাগ কারিগরি ও বৃত্তিমূলক শিক্ষায় অর্ন্তভূক্ত করার লক্ষ্যমাত্রা সরকারের পক্ষে নির্ধারণ করা হয়েছে। গত ১৫ এপ্রিল ২০১৭ইং শনিবার চট্টগ্রাম ক্লাব মিলনায়তনে এক অনুষ্ঠানে মাননীয় শিক্ষামন্ত্রী ২০২০ সালের মধ্যে মোট শিক্ষার্থীর ৬৫ শতাংশকে কারিগরি ও বৃত্তিমূলক শিক্ষায় অর্ন্তভূক্ত করার পরিকল্পনার কথা জানান। এই পরিকল্পনা বাস্তবায়ন হলে বাংলাদেশে শিল্প, শিক্ষা, চিকিৎসা, সাহিত্য, সাংস্কৃতিক, তথ্য-প্রযুক্তি, অর্থনৈতিক ও কর্মসংস্থানে বৈপ্লবিক পরিবর্তন ঘটবে। সরকারের রাজস্ব আয় ১৩০ গুন বৃদ্ধি পাবে! মানুষের বার্ষিক মাথাপিছু আয় ৭০-৮০ হাজার ডলারে উন্নতি ঘটবে! জাতিয় প্রবৃদ্ধি ১২-১৪তে উঠানামা করবে! সরকারের এই পরিকল্পনা বাস্তবায়ন করতে হলে কারিগরি শিক্ষা ক্ষেত্রে ১৯৭১ সালের মুক্তিযুদ্ধের ন্যায় একটি বিপ্লব ঘটাতে হবে। দেশের প্রতিটি বিভাগে বর্তমান কারিগরি শিক্ষা বোর্ড, ঢাকা এর অনুরূপ একটি করে কারিগরি শিক্ষা বোর্ড স্থাপন করে শহর, নগর, পৌরসভা ও ইউনিয়ন পর্যায়ে কারিগরি স্কুল ও কলেজ প্রতিষ্ঠা করে কারিগরি শিক্ষাকে মানুষের দোরগোড়ায় পৌঁছিয়ে দিতে হবে। বেসরকারি কারিগরি শিক্ষা প্রতিষ্ঠানে সরকারী আর্থিক সহায়তা ও মান নিয়ন্ত্রণ জোরদার করতে হবে। দেশে প্রয়োজনের তুলনায় কারিগরি শিক্ষা প্রতিষ্ঠান খুবই নগন্য। তথাপি দুঃখজনক হলেও সত্য যে, ব্যবসায়িক মনোবৃত্তির কারণে বেসরকারি পর্যায়ে অধিকাংশ কারিগরি শিক্ষা প্রতিষ্ঠানগুলোর শিক্ষার মান নিম্নমানের। বিপরীতে ছাত্র/ছাত্রীদের কাছ থেকে হাতিয়ে নিচ্ছে লক্ষ-লক্ষ টাকা। কিন্তু শিক্ষা কোন পণ্য নয় তাই শিক্ষা নিয়ে ব্যবসা নয়। এরই পরিপ্রেক্ষিতে চট্টগ্রামের গরীব, মধ্যবিত্ত ও মেধাবী ছাত্র/ছাত্রীদেরকে কম খরচে কারিগরি শিক্ষায় প্রশিক্ষিত করে দক্ষ ও যোগ্য জনশক্তি তৈরীর মাধ্যমে সমৃদ্ধ ডিজিটাল বাংলাদেশ গড়ার প্রত্যয় নিয়ে চট্টগ্রামের প্রাণকেন্দ্র, প্রাচীন ও ঐতিহ্যবাহী বহরদার হাট এলাকায় নিজস্ব জায়গায় আমার পরম শ্রদ্ধেয় মা ও বাবার নামে প্রতিষ্ঠিত হয়েছে, সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট"। আমার পূর্ব পুরুষেরাও অতীতে অত্র এলাকায় বিভিন্ন শিক্ষা প্রতিষ্ঠান ও শিক্ষার সম্প্রসারণের জন্য জায়গা-জমি দান করেছেন। তাই ঐতিহ্যবাহী বহরদার বাড়ির সন্তান হিসেবে উত্তরাধিকার সূত্রে প্রাপ্ত এবং আমার অর্জিত অর্থ ও সম্পদ আমি ভবিষ্যত ডিজিটাল বাংলাদেশ গড়ার কারিগরদের উদ্দেশে ব্যয় করতে চাই। আবারও বলছি, অন্যদের মত ব্যবসা নয়, গুনগত মানসম্পন্ন কারিগরি শিক্ষায় প্রশিক্ষিত জনশক্তি তৈরী করাই আমার উদ্দেশ্য। কারিগরি শিক্ষায় নিয়োজিত সকল ব্যক্তি ও প্রতিষ্ঠানকে ধন্যবাদ জানাচ্ছি। আমার প্রিয় চট্টগ্রামবাসীকে শুভেচ্ছা ও স্বাগতম। বিশেষ করে সেই সব অভিভাবক ও ছাত্র/ছাত্রী যারা একবিংশ শতাব্দীর চ্যালেঞ্জ মোকাবেলায় কারিগরি শিক্ষায় প্রশিক্ষিত হয়ে সুখী-সমৃদ্ধ ডিজিটাল বাংলাদেশ গড়তে চায়। এই স্বপ্ন পূরণে একজন মুক্তিযোদ্ধা, রাজনীতিবিদ ও সচেতন নাগরিক হিসেবে আমি সর্বদা সচেষ্ট।  ',
  last_message: "জয়বাংলা বাংলাদেশ চিরজীবী হোক।",
} as const;

export const principleMessage = {
  picture: "/images/principle.jpg",
  name: "শৈবাল কুমার বড়ুয়া",
  position: "অধ্যক্ষ",
  institute: "বি.এসসি-ইন- টেক্সটাইল ইঞ্জিনিয়ারিং (BUTex) ",
  more_institue: "এম এন্ড টি, পিকিং ইউনিভার্সিটি (চায়না)।",
  message:
    "লাখো শ���ীদের রক্তে ভেজা স্বাধীন এদেশ, বাংলাদেশ। পৃথিবীর মানচিত্রে ছোট্ট একটি দেশ, হাজারো ঐতিহ্যে ���েরা প্রাকৃতিক সৌন্দর্যেভরা। নাতিশীতোষ্ণ জলবায়ু, সম্পদ সীমিত। বিশ্বের সর্বাধিক ঘনবসতিপূর্ণ এদেশ। ৪০% মানুষ দারিদ্র্য সীমার নীচে বসবাস কর����� এবং প্রায় ৪৫% লোক বেকার। নির্মম বেকারত্বের অভিশাপে ভূগছে এদেশের মানুষ, এদেশের যুব সমাজ। বেকার সে ���িজের কাছে অপরাধী, সে পরিবারের দুঃখ, পরিবারের কান্না, দেশের বোঝা। বেকার জীবনের গ্ল���নি বড় বেদনাদায়ক, বড় দূর্বিসহ। ফলে বাড়ছে অস্থিরতা, সংঘটিত হচ্ছে নানা অপরাধ। দিন দিন মানুষ অসহায় হয়ে পড়ছে। উন্নত দেশ যেমন জাপানে বেকারত্বের হার ৫% , যুক্তরাজ্যে ৭%, যুক্তরাষ্ট্রে ৯% আর বাংলাদেশে বেকারত্বের হার প্রায় ৪৫%। সরকারি চাকুরী সীমিত। ইচ্ছা থাকা সত্ত্বেও, শিক্ষা থাকা সত্ত্বেও, শিক্ষিত যুব সমাজ খুঁজে পাচ্ছেনা কাজ। ফলে জীবনে নেমে এসেছে হতাশা ও ক্ষোভ। জাতির এ ক্রান্তিলগ্নে ও সংকট মুহুর্তে পথহারা ছাত্র সমাজের উজ্জ্বল ভবিষ্যৎ রচনার লক্ষ্যে তথা ভবিষ্যতে কর্মসংস্থান তৈরীর লক্ষ্যে যে প্রতিষ্ঠানটি হাল ধরেছে সেটি হল আর্ন্তজাতিক মান, প্রযুক্তিগত জ্ঞান ও দক্ষতা সম্পন্ন একটি অনন্য প্রতিষ্ঠান সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট চট্টগ্রাম। সর্বাগ্রে একটি কথা স্মরন রাখার মত যে, কখনোই কারিগরি স্বল্প ধারনা নিয়ে দক্ষতা ছাড়া কাজ খুঁজে পাওয়া যায় না। কর্মসংস্থানের ব্যবস্থা। হয়না, বেকার সমস্যা দূরীভূত হবেনা। এজন্য অবশ্যই আপনাকে কারিগরি জ্ঞানে, হাতে-কলমে পূর্ণ দক্ষতা অর্জন করতে হবে। সামণ্ডন নাহার হারুন পলিটেকনিক ইনস্টিটিউট, চট্টগ্রাম হাতে কলমে আপনার সন্তানকে সুদক্ষ করে গড়ে তোলে। সুতরাং নিঃসন্দেহে বলা চলে এ প্রতিষ্ঠানটি আপনার সন্তানের জন্য আধার ঘরের প্রদীপ, বটবৃক্ষের ছায়ার মত। আর দেরী নয়, আর কোন হতাশা নয়, আপনার সন্তানকে সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট, চট্টগ্রাম-এ ভর্তি করিয়ে বেকারত্বের অভিশাপ থেকে মুক্তি দিন। দেশ গড়ার সুযোগ দিন। ",
  last_message: "জয়বাংলা বাংলাদেশ চিরজীবী হোক।",
} as const;

export const technologies = [
  {
    id: "electrical",
    name: "ইলেকট্রিক্যাল",
    images: [
      "https://plus.unsplash.com/premium_photo-1683134033173-f43b86168498?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596496181848-3091d4878b24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1580983230712-f7d0f878bcc4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "আধুনিক সভ্যসমাজে বিজ্ঞানের প্রত্যেকটি আবিস্কারের পেছনে রয়েছে ইলেকট্রনিক্সের অবদান। এছাড়া স্বাস্থ্য সংক্রান- বিষয়ে সকল প্রকার রোগ নির্ণয়ের ক্ষেত্রে ইলেকট্রনিক্সের বিকল্প কিছু হতে পারে না। কাজেই এই দ্রুত উন্নয়শীল সমাজে Electronics Engineering একটি গুরুত্বপূর্ণ শাখা হিসেবে অবস্থান করছে। মানুষের দৈনন্দিন জীবন প্রণালী ও বেঁচে থাকার মাধ্যম হিসাবে Electronics প্রতি নিয়তই নিজেকে হাজির করছে নতুন ভাবে। উন্নত জীবন যাপনের জন্য মানুষ প্রতিটি মুহুর্তেই Electronics এর উপর নির্ভর করে চলছে। এক কথায় এই বিশাল পৃথিবীকে হাতের মুঠোয় আনা সম্ভব হয়েছে একমাত্র Electronics এর জন্য। খুব কম পরিসরে একমাত্র ইলেকট্রনিক্সই পারে নিজের কর্মসংস্থান নিজেই সৃষ্টি করতে। যেমন: IPS, UPS, VOLT STABILIZER, TV REMOTE, VCD, DVD, POWER SUPPLY ইত্যাদি ফ্যাক্টরী তৈরী করতে পারে। বাংলাদেশে সরকারী ও বেসরকারী TV Station, Railway Station, BTCL এ সকল প্রতিষ্ঠানে উপ-সহকারী প্রকৌশলী পদে অসংখ্য চাকুরীর সুযোগ রয়েছে।বর্তমানে বাংলাদেশে Mobile Sector এর ব্যাপক অগ্রগতি সাধিত হয়েছে। যার ফলে Electronics এর Diploma Engineer দের নতুন নতুন কাজের সুযোগ সৃষ্টি হয়েছে।বাংলাদেশে বেতার, আবহাওয়া অধিদপ্তর, রাডার ষ্টেশন ইত্যাদি প্রতিষ্ঠানে উপ-সহকারী প্রকৌশলী পদে চাকুরীর সুযোগ রয়েছে।যে কোনও কোর্স সফলভাবে সম্পন্ন করার পরে, শিক্ষার্থীদের জন্য নিয়োগ সহায়তাও সরবরাহ করা হয়। কোর্সগুলি ইলেক্ট্রনিক্স এবং টেলিযোগাযোগ প্রকৌশল বিষয়ে দক্ষতার সুযোগ করে দেয়। এই বিস্তৃত প্রশিক্ষণ কোর্সের সাহায্যে শিক্ষার্থীরা বিভিন্ন প্রকৌশল চাকরিতে দক্ষ হতে পারে বা শিল্পের জন্য তাদের নিজস্ব ব্যবসা শুরু করতে পারে।",
    Icon: MdFlashOn,
    cheifInstructor: {
      name: "হাবিব আহমেদ",
      picture:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    courseFees: "৯,৭০০/-",
    deptOverView: {
      "টোটাল স্টুডেন্ট": 183,
      "টোটাল টিচার": 6,
      "প্রাক্তন ছাত্র-ছাত্রী": 200,
      "জব প্লেসমেন্ট": 50,
      "মোট শিক্ষার্থী": 800,
      "টোটাল সেমিস্টার": 8,
    },
    courseOverView: {
      "কোর্স অবকাঠামো":
        "https://bteb.gov.bd/site/page/6723ed9b-94d5-41a9-80cf-54a3594a171e",
      সিলেবাস: "/",
      "টিউশন ফি": "/",
      রুটিন: "/",
      নোটিশ: "/",
    },
    courseOutline: {
      "Semester 1": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 2": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 3": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 4": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 5": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 6": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 7": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 8": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
    },
  },
  {
    id: "mechanical",
    name: "মেকানিক্যাল ",
    images: [
      "https://plus.unsplash.com/premium_photo-1661964103133-3f66d9a1f517?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661962937643-fa0785592d3d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "বর্তমান সময়ে আধুনিক যন্ত্রপাতির ব্যাপক ব্যবহার আর সকল আধুনিক যন্ত্রপাতি পরিচালনা রক্ষণাবেক্ষণের জন্য প্রয়োজন দক্ষ জনবল। এই দক্ষ জনবল হিসেবে নিজেকে গড়ে তুলতে ডিপ্লোমা ইন মেকানিক্যাল টেকনোলজি হতে পারে আপনার মূল সহায়ক।একটি দেশ উন্নয়নের জন্য যে বিষয়টি জড়িত থাকে তা হচ্ছে দক্ষ প্রকৌশলী মানে কারিগরি শিক্ষা, তাই এই শিক্ষার অন্যতম শিখড় হলো মেকানিক্যাল ইঞ্জিনিয়ারিং, যাকে প্রকৌশলীদের মা বলা হয়। বর্তমানে বাংলাদেশে প্রতিনিয়ত শিল্প ব্যবস্থা গড়ে উঠছে। এই শিল্পকে পরিচলনা করার জন্য মেকানিক্যাল ইঞ্জিনিয়ারের প্রয়োজনীয়তা সবচেয়ে জরুরী। তাই বলা হয় যেখানে মেশিন সেখানে মানুষ তথা মেকানিক্যাল ইঞ্জিনিয়ার।",
    Icon: MdOutlineSettings,
    cheifInstructor: {
      name: "'হাবিব আহমেদ'",
      picture:
        "'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',",
    },
    courseFees: "৯,৮০০/-",
    deptOverView: {
      "টোটাল স্টুডেন্ট": 183,
      "টোটাল টিচার": 6,
      "প্রাক্তন ছাত্র-ছাত্রী": 200,
      "জব প্লেসমেন্ট": 50,
      "মোট শিক্ষার্থী": 800,
      "টোটাল সেমিস্টার": 8,
    },
    courseOverView: {
      "কোর্স অবকাঠামো":
        "https://bteb.gov.bd/site/page/6723ed9b-94d5-41a9-80cf-54a3594a171e",
      সিলেবাস: "/",
      "টিউশন ফি": "/",
      রুটিন: "/",
      নোটিশ: "/",
    },
    courseOutline: {
      "Semester 1": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 2": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 3": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 4": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 5": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 6": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 7": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 8": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
    },
  },
  {
    id: "computer",
    name: "কম্পিউটার",
    description:
      "বিশ্বের প্রতিটা দেশ এখন একটা গ্রামের মতো।বর্তমান বিশ্বকে বলা হয় গ্লোবাল ভিলেজ।তাই বিশ্বায়নের  যুগে কম্পিউটার ইঞ্জিনিয়ারিং হলো বিশ্বজয়ের অন্যতম হাতিয়ার। কম্পিউটার  �������াইন্স একজন শিক্ষা���্থীর সামনে অনেক ধরনের রাস্���া খুলে দেয়।কেউ যদি চাকরি করতে চায়, আমাদের দেশে ও দেশের বাইরে গুগল, সিসকো, ফেসব�������কস������������ বড় বড় প্রতিষ্ঠানে রয়েছে চাকরির সুযোগ, তবে এইসব জায়গায় চাকরির জন্য অবশ্যই  প্রোগ্রামিংয়ে পারদর্শী হতে হবে। চাকরির সুযোগ যেমন আছে আবার কেউ যদি স্বতন্ত্রভাবে কাজ করতে চায়, উদ্যোক্তা হতে চায়,সেক্ষেত্রেতো  বিপুল সম্ভাবনা আছেই।এছাড়া  আছে কম্পিউটার বিজ্ঞানের বিভিন্ন বিষয় নিয়ে গবেষণারও সুযোগ ।  ইঞ্জিনিয়ারিং এর মূল লক্ষ্য হল জাতীয় উন্নয়নে বিজ্ঞানের বাস্তব সম্মত জ্ঞান অর্জন  এবং এর প্রয়োগের মাধ্যমে পেশাদার দক্ষ জনশক্তি গড়ে তোলা। তাই প্রযুক্তি নির্ভর বিশ্বে নিজেকে আত্মনির্ভরশীল ব্যক্তি হিসাবে গড়ে তুলতে হলে কম্পিউটার টেকনোলজি'র গুরুত্ব অপরিসীম।কম্পিউটার টেকনোলজি'ই তৈরী করতে পারে বহুমুখী কর্মসংস্থানের সুযোগ। তাছাড়া  ডিজিটাল বাংলাদেশ গড়ার ক্ষেত্রে দক্ষ কম্পিউটার ইঞ্জিনিয়ার অপরিহার্য। আর এজন্যই মানসম্মত কারিগরি শিক্ষার নির্ভরযোগ্য প্রতিষ্ঠান সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটউট।",
    images: [
      "https://images.unsplash.com/photo-1594182878770-c05ece34b1f2?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1581092795442-d153057d8e0d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    Icon: MdComputer,
    cheifInstructor: {
      name: "হাবিব আহমেদ",
      picture:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    courseFees: "৯,৬০০/-",
    deptOverView: {
      "টোটাল স্টুডেন্ট": 183,
      "টোটাল টিচার": 6,
      "প্রাক্তন ছাত্র-ছাত্রী": 200,
      "জব প্লেসমেন্ট": 50,
      "মোট শিক্ষার্থী": 800,
      "টোটাল সেমিস্টার": 8,
    },
    courseOverView: {
      "কোর্স অবকাঠামো":
        "https://bteb.gov.bd/site/page/6723ed9b-94d5-41a9-80cf-54a3594a171e",
      সিলেবাস: "/",
      "টিউশন ফি": "/",
      রুটিন: "/",
      নোটিশ: "/",
    },
    courseOutline: {
      "Semester 1": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 2": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 3": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 4": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 5": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 6": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 7": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 8": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
    },
  },
  {
    id: "automobile",
    name: "অটোমোবাইল",
    description:
      "আধুনিক সভ্যসমাজে বিজ্ঞানের প্রত্যেকটি আবিস্কারের পেছনে রয়েছে ইলেকট্রনিক্সের অবদান। এছাড়া স্বাস্থ্য সংক্রান- বিষয়ে সকল প্রকার রোগ নির্ণয়ের ক্ষেত্রে ইলেকট্রনিক্সের বিকল্প কিছু হতে পারে না। কাজেই এই দ্রুত উন্নয়শীল সমাজে Electronics Engineering একটি গুরুত্বপূর্ণ শাখা হিসেবে অবস্থান করছে। মানুষের দৈনন্দিন জীবন প্রণালী ও বেঁচে থাকার মাধ্যম হিসাবে Electronics প্রতি নিয়তই নিজেকে হাজির করছে নতুন ভাবে। উন্নত জীবন যাপনের জন্য মানুষ প্রতিটি মুহুর্তেই Electronics এর উপর নির্ভর করে চলছে। এক কথায় এই বিশাল পৃথিবীকে হাতের মুঠোয় আনা সম্ভব হয়েছে একমাত্র Electronics এর জন্য। খুব কম পরিসরে একমাত্র ইলেকট্রনিক্সই পারে নিজের কর্মসংস্থান নিজেই সৃষ্টি করতে। যেমন: IPS, UPS, VOLT STABILIZER, TV REMOTE, VCD, DVD, POWER SUPPLY ইত্যাদি ফ্যাক্টরী তৈরী করতে পারে। বাংলাদেশে সরকারী ও বেসরকারী TV Station, Railway Station, BTCL এ সকল প্রতিষ্ঠানে উপ-সহকারী প্রকৌশলী পদে অসংখ্য চাকুরীর সুযোগ রয়েছে।বর্তমানে বাংলাদেশে Mobile Sector এর ব্যাপক অগ্রগতি সাধিত হয়েছে। যার ফলে Electronics এর Diploma Engineer দের নতুন নতুন কাজের সুযোগ সৃষ্টি হয়েছে।বাংলাদেশে বেতার, আবহাওয়া অধিদপ্তর, রাডার ষ্টেশন ইত্যাদি প্রতিষ্ঠানে উপ-সহকারী প্রকৌশলী পদে চাকুরীর সুযোগ রয়েছে।যে কোনও কোর্স সফলভাবে সম্পন্ন করার পরে, শিক্ষার্থীদের জন্য নিয়োগ সহায়তাও সরবরাহ করা হয়। কোর্সগুলি ইলেক্ট্রনিক্স এবং টেলিযোগাযোগ প্রকৌশল বিষয়ে দক্ষতার সুযোগ করে দেয়। এই বিস্তৃত প্রশিক্ষণ কোর্সের সাহায্যে শিক্ষার্থীরা বিভিন্ন প্রকৌশল চাকরিতে দক্ষ হতে পারে বা শিল্পের জন্য তাদের নিজস্ব ব্যবসা শুরু করতে পারে।",
    Icon: MdDirectionsCar,
    images: [
      "https://plus.unsplash.com/premium_photo-1664300814537-5d461ae59964?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1632733711679-529326f6db12?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    cheifInstructor: {
      name: "হাবিব আহমেদ",
      picture:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    courseFees: "৯,৮০০/-",
    deptOverView: {
      "টোটাল স্টুডেন্ট": 183,
      "টোটাল টিচার": 6,
      "প্রাক্তন ছাত্র-ছাত্রী": 200,
      "জব প্লেসমেন্ট": 50,
      "মোট শিক্ষার্থী": 800,
      "টোটাল সেমিস্টার": 8,
    },
    courseOverView: {
      "কোর্স অবকাঠামো":
        "https://bteb.gov.bd/site/page/6723ed9b-94d5-41a9-80cf-54a3594a171e",
      সিলেবাস: "/",
      "টিউশন ফি": "/",
      রুটিন: "/",
      নোটিশ: "/",
    },
    courseOutline: {
      "Semester 1": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 2": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 3": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 4": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 5": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 6": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 7": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 8": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
    },
  },
  {
    id: "civil",
    name: "সিভিল",
    images: [
      "https://plus.unsplash.com/premium_photo-1682126784671-741bbbc4a531?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1681690579274-7f99f9f230d6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "আধুনিক সভ্যসমাজে বিজ্��ানের প্রত্যেকটি আবিস্কারের পেছনে রয়েছে ইলেকট্রনিক্সের অবদান। এছাড়া স্বাস্থ্য সংক্রান- বিষয়ে সকল প্রকার রোগ নির্ণয়ের ক্ষেত্রে ইলেকট্রনিক্সের বিকল্প কিছু হতে পারে না। কাজেই এই দ্রুত উন্নয়শীল সমাজে Electronics Engineering একটি গুরুত্বপূর্ণ শাখা হিসেবে অবস্থান করছে। মানুষের দৈনন্দিন জীবন প্রণালী ও বেঁচে থাকার মাধ্যম হিসাবে Electronics প্রতি নিয়তই নিজেকে হাজির করছে নতুন ভাবে। উন্নত জীবন যাপনের জন্য মানুষ প্রতিটি মুহুর্তেই Electronics এর উপর নির্ভর করে চলছে। এক কথায় এই বিশাল পৃথিবীকে হাতের মুঠোয় আনা সম্ভব হয়েছে একমাত্র Electronics এর জন্য। খুব কম পরিসরে একমাত��র ইলেকট্রনিক্সই পারে ���িজে�� কর্মসংস্থান নিজেই সৃষ্টি করতে। যেমন: IPS, UPS, VOLT STABILIZER, TV REMOTE, VCD, DVD, POWER SUPPLY ইত্যাদি ফ্যাক্টরী তৈরী করতে পারে। বাংলাদেশে সরকারী ও বেসরকারী TV Station, Railway Station, BTCL এ স��ল প্রতিষ্ঠানে উপ-সহকারী প্রকৌশলী পদে অসংখ্য চাকুরীর সুযো��� রয়ে��ে�� ���র্তমানে বাংলাদেশে Mobile Sector এর ব্যাপক অগ্রগতি সাধিত হয়েছে। যার ফলে Electronics এর Diploma Engineer দের নতুন নতুন কাজের সুযোগ সৃষ্টি হয়েছে। বাংলাদেশে বেতার, আবহাওয়া অধিদপ্তর, রাডার ষ্টেশন ইত্যাদি প্রতিষ্ঠানে উপ-সহকারী প্রকৌশলী পদে চাকুরীর সুযোগ রয়েছে।যে",
    Icon: MdLocationCity,
    cheifInstructor: {
      name: "হাবিব আহমেদ",
      picture:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    courseFees: "৯,৭০০/-",
    deptOverView: {
      "টোটাল স্টুডেন্ট": 183,
      "টোটাল টিচার": 6,
      "প্রাক্তন ছাত্র-ছাত্রী": 200,
      "জব প্লেসমেন্ট": 50,
      "মোট শিক্ষার্থী": 800,
      "টোটাল সেমিস্টার": 8,
    },
    courseOverView: {
      "কোর্স অবকাঠামো":
        "https://bteb.gov.bd/site/page/6723ed9b-94d5-41a9-80cf-54a3594a171e",
      সিলেবাস: "/",
      "টিউশন ফি": "/",
      রুটিন: "/",
      নোটিশ: "/",
    },
    courseOutline: {
      "Semester 1": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 2": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 3": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 4": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 5": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 6": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 7": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 8": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
    },
  },
  {
    id: "textile",
    name: "টেক্সটাইল",
    images: [
      "https://plus.unsplash.com/premium_photo-1682126784671-741bbbc4a531?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1681690579274-7f99f9f230d6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description:
      "টেক্সটাইল শব্দটি সর্বপ্রথম ওভেন/বোনা কাপড়ের ক্ষেত্রে ব্যবহৃত হতো কিন্তু  বর্তমানে টেক্সটাইল শব্দটি একটি বহুল ব্যবহৃত শব্দ যার মধ্যে সকল প্রকার ফাইবার যেমনঃ তুলা, পাট, উল, সিল্ক, হেম্প ইত্যাদি, সকল প্রকার প্রক্রিয়া যেমনঃ উইভিং, নিটিং, ডাইং, ফিনিশিং ইত্যাদি সবগুলোই টেক্সটাইলের মধ্যে অন্তর্ভুক্ত। বর্তমান যুগের টেক্সটাইল ছাড়া বিশ্বকে চিন্তাই করা যায় না। মানুষের বেঁচে থাকার চাহিদাগুলোর মধ্যে একটি গুরুত্বপূর্ণ চাহিদা টেক্সটাইল পূরণ করে। জন্ম থেকে মৃত্যু পর্যন্ত টেক্সটাইল এর ব্যবহার হয়। টেক্সটাইল পণ্যের ব্যবহার দিন দিন বেড়েই চলেছে। মোটকথা টেক্সটাইলের গুরুত্ব অপরিসীম।বর্তমানে বাংলাদেশে জনপ্রিয় শিল্প গুলোর মধ্যে অন্যতম শিল্প হচ্ছে টেক্সটাইল শিল্প। বর্তমান প্রযুক্তির এই যুগে যে কয়টি পেশার সবচেয়ে বেশি চাহিদা রয়েছে তার মধ্যে টেক্সটাইল সেক্টর হল অন্যতম। তাছাড়া বাংলাদেশ ইতিমধ্যেই টেক্সটাইল শিল্পের উন্নতির চরম শিখরে পৌছেঁ গেছে। ফলে এই শিল্পে দক্ষতা সম্পন্ন টেক্সটাইল ইঞ্জিনিয়ারদের চাহিদা ব্যাপক হারে দিন দিন বাড়ছে তাই চট্টগ্রামে বেসরকারি পলিটেকনিক ইনস্টিটিউট এর মধ্যে সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট দিচ্ছে সবচেয়ে সর্বনিম্ন খরচে উন্নত শিক্ষা।",
    Icon: FaTshirt,
    cheifInstructor: {
      name: "হাবিব আহমেদ",
      picture:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    courseFees: "১০,০০০/-",
    deptOverView: {
      "টোটাল স্টুডেন্ট": 183,
      "টোটাল টিচার": 6,
      "প্রাক্তন ছাত্র-ছাত্রী": 200,
      "জব প্লেসমেন্ট": 50,
      "মোট শিক্ষার্থী": 800,
      "টোটাল সেমিস্টার": 8,
    },
    courseOverView: {
      "কোর্স অবকাঠামো":
        "https://bteb.gov.bd/site/page/6723ed9b-94d5-41a9-80cf-54a3594a171e",
      সিলেবাস: "/",
      "টিউশন ফি": "/",
      রুটিন: "/",
      নোটিশ: "/",
    },
    courseOutline: {
      "Semester 1": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 2": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 3": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 4": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 5": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 6": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 7": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
      "Semester 8": [
        "Bangla 1",
        "English 1",
        "Mathematics 1",
        "Physics 1",
        "Engineering Drawing",
        "Basic Electricity",
        "Basic Workshop practice",
      ],
    },
  },
] as const;

export const milestones = [
  {
    Icon: PiUser,
    title: "জন প্রাক্তন শিক্ষার্থী",
    count: 1067,
  },
  {
    Icon: PiStudent,
    title: "জন শিক্ষার্থী",
    count: 567,
  },
  {
    Icon: PiChalkboardTeacher,
    title: "জন শিক্ষক",
    count: 50,
  },
  {
    Icon: PiBuildings,
    title: "টি ডিপার্টমেন্ট",
    count: 6,
  },
] as const;

export const facilities = [
  {
    id: 1,
    name: "মাল্টিমিডিয়া সুবিধা",
    Icon: GrMultimedia,
    content:
      "ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ",
  },
  {
    id: 5,
    name: "ইন্টারনেট সুবিধা ",
    Icon: TbBuildingBroadcastTower,
    content:
      "ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ",
  },
  {
    id: 2,
    name: "শেখ রাসেল ডিজিটাল ল্যাব",
    Icon: RiBuilding4Fill,
    content:
      "ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ",
  },
  {
    id: 3,
    name: "স্পোকেন ইংলিশ ক্লাস",
    Icon: SiGoogleclassroom,
    content:
      "ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ",
  },
  {
    id: 4,
    name: "যাতায়াত সুবিধা",
    Icon: FaCaravan,
    content:
      "ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ",
  },
  {
    id: 6,
    name: "হাতে কলমে শিক্ষা",
    Icon: FaPencilRuler,
    content:
      "ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ",
  },
  {
    id: 7,
    name: "স্কলারশিপ ",
    Icon: FaMoneyBillWave,
    content:
      "ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ",
  },
] as const;

export const gradingSystem = [
  {
    grade: "A+",
    marks: "৮০ থেকে উপর����",
    point: "৪.০০",
  },
  {
    grade: "A",
    marks: "৭৫ থে��ে ৭৯",
    point: "৩.৭৫",
  },
  {
    grade: "A-",
    marks: "৭০ থেকে ��৪",
    point: "৩.৫০",
  },
  {
    grade: "B+",
    marks: "৬৫ থেকে �����৯",
    point: "৩.২৫",
  },
  {
    grade: "B",
    marks: "৬০ থেকে ৬৪",
    point: "৩.০০",
  },
  {
    grade: "B-",
    marks: "৫৫ থেকে ৫৯",
    point: "২.৭৫",
  },
  {
    grade: "C+",
    marks: "৫০ থেকে ৫৪",
    point: "২.৫০",
  },
  {
    grade: "C",
    marks: "৪৫ থেকে ৪৯",
    point: "২.২৫",
  },
  {
    grade: "D",
    marks: "৪০ থেকে 8৯",
    point: "২.০০",
  },
  {
    grade: "F",
    marks: "৪০ এর নীচে",
    point: "০.০০",
  },
] as const;

export const gradePercentage = [
  {
    grade: "১ম পর্ব",
    percentage: "৫%",
  },
  {
    grade: "২য় পর্ব",
    percentage: "১০%",
  },
  {
    grade: "৩য় পর্ব",
    percentage: "১৫%",
  },
  {
    grade: "৪র্থ পর্ব",
    percentage: "২০%",
  },
  {
    grade: "৫ম পর্ব",
    percentage: "২৫%",
  },
  {
    grade: "৬ষ্ঠ পর্ব",
    percentage: "২০%",
  },
  {
    grade: "৭ম পর্ব",
    percentage: "২৫%",
  },
  {
    grade: "৮ম পর্ব",
    percentage: "১৫%",
  },
] as const;

export const testimonials = [
  {
    name: "আশিক মাহমুদ",
    identity: "অভিভাবক",
    image: "/chairman.jpg",
    comment:
      "উচ্চশিক্ষা স্বপ্নে এ প্রতিষ্ঠানের ভূমিকা অপরিসীম।  মনোমধ্যকার ক্��াস সাথে শিক্ষকদের অক্লান্ত পরিশ্রমে একটি দারুণ ফলাফল অর্জন করেছি। ",
  },
  {
    name: "আশিক মাহমুদ",
    identity: "অভিভাবক",
    image: "/chairman.jpg",
    comment:
      "আমার উচ্চশিক্ষা স্বপ্নে এ প্রতিষ্ঠানের ভূমিকা অপরিসীম।  মনোমধ্যকার ক্লাস সাথে শিক্ষকদের অক্লান্ত পরিশ্রমে ��কট�� দা�����ুণ ��লাফ�������� অর্জন করেছি।",
  },
  {
    name: "আশিক মাহমুদ",
    identity: "প্রাক্তন ছাত্র",
    image: "/chairman.jpg",
    comment:
      "আমার উচ্চশিক্ষা স্বপ্নে এ প্রতিষ্ঠানের ভূমিকা অপরিসীম।  মনোমধ্যকার ক্লাস সাথে শিক্ষকদের অক্লান্ত পরিশ্রমে একটি দারুণ ফলাফল অর্জন করেছি।",
  },
  {
    name: "আশিক মাহমুদ",
    identity: "অভিভাবক",
    image: "/chairman.jpg",
    comment:
      "আমার উচ্চশিক্ষা স্বপ্নে এ প্রতিষ্ঠানের ভূমিকা অপরিসীম।  মনোমধ্যকার ক্লাস সাথে শিক��ষকদের অক্লান্ত পরিশ্রমে একটি দারুণ ফলাফল অর্জন করেছি।",
  },
  {
    name: "আশিক মাহমুদ",
    identity: "প্রাক্তন ছাত্র",
    image: "/chairman.jpg",
    comment:
      "আমার উচ্চশিক্ষা স্বপ্নে এ প্রতিষ্ঠানের ভূমিকা অপরিসীম।  মনোমধ্যকার ক্লাস স��থে শিক্ষকদের অক্লান্ত পরিশ্রমে একটি দারুণ ফলাফল অর্জন করেছি।",
  },
  {
    name: "আশিক মাহমুদ",
    identity: "প্রাক্তন ছাত্র",
    image: "/chairman.jpg",
    comment:
      "আমার উচ্চশিক্ষা স্বপ্নে এ প্রতিষ্ঠানের ভূমি���া অপরিসীম।  মনোমধ্যকার ক্লাস সাথে শিক্ষকদের অক্লান্ত পরিশ্রমে একটি দারুণ ফলাফল অর্জন করেছি। ",
  },
] as const;

export const campusInfo = {
  name: "সামশুন নাহার হারুন পলিটেকনিক ইনস্টিটিউট",
  address:
    "৮১১/এ, এইচ. আর কমপ্লেক্স, বহরদার বাড়ি পুকুরের পশ্চ��ম ��ার্শ্বে, শাহ আমা��ত সেতু সংযোগ ��ড়ক, ��হরদা����হ�����, চট্রগ্রাম। ",
  emails: ["ctg.snhpi@gmail.com"],
  contactNumbers: [
    "02-41355985",
    "01885-212097",
    "01885-212098",
    "01885-212132",
  ],
  socialLinks: [
    {
      platform: "Facebook",
      link: "https://www.facebook.com/groups/1012397799873291/user/100063526915397/",
      icon: "/icons/facebook.png",
    },
    {
      platform: "WhatsApp",
      link: "whatsapp.com",
      icon: "/icons/whatsapp.png",
    },
    {
      platform: "Instagram",
      link: "instagram.com",
      icon: "/icons/instagram.png",
    },
  ],
} as const;

export const teachers = {
  "ইলেকট্রিক্যাল টেকনোলজি": [
    {
      id: "IVmotA82Z394VYtlSLnU",
      position: "Instructor",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/snhpi-website.appspot.com/o/Nazmul%20Huda(Instructor).jpeg-3e7e9760-1487-4d8b-bb60-012249dc5f2c?alt=media&token=5ee06a2e-4cf6-4ae0-9c3e-9ef492bb849f",
      name: "Nazmul Huda",
    },
    {
      id: "WsHSZDi7vIotfOuLUkvD",
      position: "Jr. Instructor",
      name: "Engr. Biren Roy",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/snhpi-website.appspot.com/o/Engr.Biren%20Roy(JR%20Ins.).jpeg-3053ac53-f59c-4064-9cf3-cc536c7aa028?alt=media&token=2941d411-23df-42ca-a245-ca4d816e1268",
    },
  ],
  " মেকানিক্যাল টেকনোলজি": [
    {
      id: "0NsZ2adPvZZJTNIMGHxs",
      name: "Engr Shamsuddin",
      position: "Instructor",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/snhpi-website.appspot.com/o/Engr.Shamsuddin(Instuctor).jpg-f15f1612-fabc-47fa-99b8-a051c2291f60?alt=media&token=4d5632ca-4870-4849-9ec9-9e660cb5b8cd",
    },
    {
      id: "mSMGWLfnYvis1g64w1Rz",
      name: "Engr. Hure Zannat Mahinur",
      position: "Instructor",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/snhpi-website.appspot.com/o/Engr.Hure%20Zannat%20Mahinur(Ins).jpg-df0df4ed-20c7-4913-8753-a8939985325f?alt=media&token=c61af980-4e8f-4809-ac39-98698067cf5e",
    },
  ],
  "   কম্পিউটার টেকনোলজি": [
    {
      id: "cioZHpkr7S3lTIE6CCpD",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/snhpi-website.appspot.com/o/Engr.Mamur%20%20Ush%20Shahid(Instructor).jpeg-9c38cf6d-4335-44dd-9949-fd928ef84397?alt=media&token=a34e9d43-8f70-4caf-bc59-f3164f2f206e",
      name: "Engr. Mamur Ush Shahid",
      position: "Instructor",
    },
    {
      id: "RwDJyHIeJWBkeQDYt7ig",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/snhpi-website.appspot.com/o/Eng.Wai%20Mya%20Sing%20Marma(Jr.%20Ins).jpeg-4fceba9c-27fd-4659-837d-e8aac3ff18cb?alt=media&token=9d989128-e675-4b31-b8c1-866f47bfc7f4",
      position: "Jr. Instructor",
      name: "Eng. Wai Mya Sing Marma",
    },
  ],
  "অটোমোবাইল টেকনোলজি": [
    {
      id: "U1HlieygL7yUQ8hjmdJr",
      name: "Engr Mapai Ching Marma",
      position: "Instructor",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/snhpi-website.appspot.com/o/Engr.Mapai_ching_marma(Inst.).JPG-07977688-5826-45ed-a359-b002c450e8d2?alt=media&token=77464418-0b25-4ae4-aee7-b6c6b794f4c9",
    },
    {
      id: "eXEe8PS723akdw2wxfcE",
      name: "Engr. James Das Gupta",
      position: "Instructor",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/snhpi-website.appspot.com/o/Engr.James%20Das%20Gupta(Instructor).jpg-6df53668-abf1-42a3-a9cf-cbf3dbd79cff?alt=media&token=43d736ec-4f45-444f-8bcd-6ad0d5a1f682",
    },
  ],
  " সিভিল টেকনোলজি ": [
    {
      id: "LMtND2vXrzJuqhuQnDo2",
      name: "Engr. Sahedul Islam",
      position: "Instructor",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/snhpi-website.appspot.com/o/Engr.Sahedul%20Islam(Instructor)%20.jpg-89523005-f90c-4ab1-b0d6-08125fd0730e?alt=media&token=a2a94657-ff3d-4f75-bced-1db8851fce66",
    },
    {
      id: "Iq7MSN830kfCqqjkmd2h",
      name: "Engr. Liza Barua",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/snhpi-website.appspot.com/o/Engr.%20Liza%20Barua(Jr.%20Ins.).jpeg-188de8fb-9bb5-4c43-a3d5-0ceb09b04bbc?alt=media&token=ff058189-a26e-4c88-b4ac-d1b782cc8d15",
      position: "Jr. Instructor",
    },
    {
      id: "oGpkV9FZG6uB3wB599vl",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/snhpi-website.appspot.com/o/Engr.MD%20ANISUR%20RAHAMAN(Jr.%20Ins.).jpeg-56ae6f50-60a5-4f77-925d-c59abd23a131?alt=media&token=ccf89803-5f5a-4d6b-bb2c-57a4d35c2510",
      name: "Engr. MD ANISUR RAHAMAN",
      position: "Jr. Instructor",
    },
  ],
  "টেক্সটাইল টেকনোলজি ": [
    {
      id: "ahC7Whntdvc1Tet5yXxR",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/snhpi-website.appspot.com/o/Engr.%20md.%20Alauddin(Instuctor).jpeg-0c3a98b5-4143-4280-a24b-e9e4e6e457a2?alt=media&token=a3146970-3a29-4e90-a03e-6b4771358abe",
      name: "Engr. Md. Alauddin",
      position: "Instructor",
    },
    {
      id: "6hBa99ID3NBJTkDYPCr8",
      name: "Engr. Md. Tarekul Islam (Jr. Ins)",
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/snhpi-website.appspot.com/o/Engr.%20Md.%20Tarekul%20Islam(Jr.%20Ins).jpeg-3cdca191-52c7-4e73-a570-31bca9d4394f?alt=media&token=e4d56f5d-ca52-4e2f-beee-82962c5b9305",
      position: "Jr. Instructor",
    },
  ],
} as const;

export const administrativeCommittee = [
  {
    id: "3klaj2sdehj5WrPZlKQG",
    position: "Principal",
    name: "Shoibal Kumar Barua",
    imgURL: "/images/principle.jpg",
  },
  {
    id: "3JuNyNuNehj5WrPZlKQG",
    position: "Senior Accountant",
    name: "Sirajul Islam",
    imgURL:
      "https://firebasestorage.googleapis.com/v0/b/snhpi-website.appspot.com/o/Sirajul%20Islam.jpg-db35fbf6-53a0-4125-a1a6-1baacff23920?alt=media&token=d5a6db57-26f2-4271-b214-57e537eb9e36",
  },
  {
    id: "pqgPzqj20iZPVim2W3WA",
    position: "Co-ordinator",
    name: "Engr. Mitun Das",
    imgURL:
      "https://firebasestorage.googleapis.com/v0/b/snhpi-website.appspot.com/o/Engr.Mitun%20Das%20(Coordinator).jpg-1b16cb55-4818-4cd4-aeba-9cd5101ffe27?alt=media&token=8c68eb26-8dfd-4e2b-842a-160b6f6fce48",
  },
] as const;
