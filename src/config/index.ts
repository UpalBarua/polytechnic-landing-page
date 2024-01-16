export type NavLink = {
  route: string;
  label: string;
  subRoutes?: {
    route: string;
    label: string;
  }[];
};

export const navLinks: NavLink[] = [
  {
    route: '/curriculum',
    label: 'পাঠ্যক্রম',
    subRoutes: [
      { route: '/teachers-list', label: 'টিচার লিস্ট' },
      { route: '/course-structure', label: 'কোর্স অবকাঠামো' },
      { route: '/grading-system', label: 'গ্রেডিং সিস্টেম' },
    ],
  },
  {
    route: '/admission-process',
    label: 'ভর্তি প্রক্রিয়া',
    subRoutes: [
      { route: '/admission-eligibility', label: 'ভর্তির যোগ্যতা' },
      { route: '/admission-policies', label: 'ভর্তির নীতিমালা' },
      { route: '/application-process', label: 'আবেদন প্রক্রিয়া' },
      { route: '/tuition-fees-and-others', label: 'টিউশন ফি ও অন্যান্য' },
    ],
  },
  {
    route: '/administrative-activities',
    label: 'প্রশাসনিক কার্যক্রম',
    subRoutes: [
      { route: '/administrative-committee', label: 'প্রশাসনিক কমিটি' },
    ],
  },
  {
    route: '/technologies',
    label: 'টেকনোলজি সমূহ',
    subRoutes: [
      { route: '/admission-eligibility', label: 'ভর্তির যোগ্যতা' },
      { route: '/admission-policies', label: 'ভর্তির নীতিমালা' },
      { route: '/application-process', label: 'আবেদন প্রক্রিয়া' },
      { route: '/tuition-fees-and-others', label: 'টিউশন ফি ও অন্যান্য' },
    ],
  },
  {
    route: '/conveniences',
    label: 'সুবিধা',
  },
  {
    route: '/',
    label: 'গ্যালারি',
    subRoutes: [
      { route: '/admission-eligibility', label: 'ভর্তির যোগ্যতা' },
      { route: '/admission-policies', label: 'ভর্তির নীতিমালা' },
      { route: '/application-process', label: 'আবেদন প্রক্রিয়া' },
      { route: '/tuition-fees-and-others', label: 'টিউশন ফি ও অন্যান্য' },
    ],
  },
  {
    route: '/our-world',
    label: 'আমাদের ভবন',
    subRoutes: [
      { route: '/admission-eligibility', label: 'ভর্তির যোগ্যতা' },
      { route: '/admission-policies', label: 'ভর্তির নীতিমালা' },
      { route: '/application-process', label: 'আবেদন প্রক্রিয়া' },
      { route: '/tuition-fees-and-others', label: 'টিউশন ফি ও অন্যান্য' },
    ],
  },
  {
    route: '/contact-us',
    label: 'যোগাযোগ',
    subRoutes: [
      { route: '/admission-eligibility', label: 'ভর্তির যোগ্যতা' },
      { route: '/admission-policies', label: 'ভর্তির নীতিমালা' },
      { route: '/application-process', label: 'আবেদন প্রক্রিয়া' },
      { route: '/tuition-fees-and-others', label: 'টিউশন ফি ও অন্যান্য' },
    ],
  },
];

export const chairmansMessage = {
  picture: '/chairman.jpeg',
  name: 'মোঃ রেজাউল করিম চৌধুরী',
  position: 'মেয়র, চট্টগ্রাম সিটি কর্পোরেশন',
  message:
    'অংশ অংশভাক আঁইশ ইঁচড়েপাকা ঈক্ষণ ঈদৃক অংশভাগী জওয়ান অংশাঙ্কিত ইউক্যালিপটাস অংশাবতার হালহদিশ পিতৃতর্পণ টকানো ঈক্ষিত জগজ্জন তকতনামা আঁকুবাঁকু পঁইছা জগঝপ্প পঁহুছা দ্রাবিড়ী আঁকুড়ি ঈদৃক জগদম্বা টঙ্ক অংশিন্‌ জগদ্গৌরী আঁচা তকরার তিলপিটালি গজ-দাঁত অংশু ঈপ্সনীয় পইতা শংকরাভরণ হংসগমন পকড় অংশুধর ঈপ্সু ঈর্ষী জগদ্ধাত্রী আঁজনাই তক্তি শংসনপত্র হংসারূঢ়া দংশল তক্ষক অংশুমান ইকেবানা জগদ্বন্ধু ঈশিত্ব ইক্ষ্বাকু আঁজি অংসকুট টঙ্কক তক্ষণাস্ত্র পকোড়া দংষ্ট্রা শকটিকা হকচকা বঁইচি শকল বংশাঙ্কুর তক্ষণী আঁটকুড় ঈশ্বরদ্বেষী টঙ্কার পক্ববিম্বাধরোষ্ঠী শকারবকার হট্টবিলাসিনী বংশাবতংস ইঙ্গবঙ্গ পক্ষচ্ছেদ দংষ্ট্রাল হঠযোগ অষ্টনাগ পক্ষপাতিতা টনটনানি ঈশ্বরাজ্ঞা বউল,অংশ অংশভাক আঁইশ ইঁচড়েপাকা ঈক্ষণ ঈদৃক অংশভাগী জওয়ান অংশাঙ্কিত ইউক্যালিপটাস অংশাবতার হালহদিশ পিতৃতর্পণ টকানো ঈক্ষিত জগজ্জন তকতনামা আঁকুবাঁকু পঁইছা জগঝপ্প পঁহুছা দ্রাবিড়ী আঁকুড়ি ঈদৃক জগদম্বা টঙ্ক অংশিন্‌ জগদ্গৌরী আঁচা তকরার তিলপিটালি গজ-দাঁত অংশু ঈপ্সনীয় পইতা শংকরাভরণ হংসগমন পকড় অংশুধর ঈপ্সু ঈর্ষী জগদ্ধাত্রী আঁজনাই তক্তি শংসনপত্র হংসারূঢ়া দংশল তক্ষক অংশুমান ইকেবানা জগদ্বন্ধু ঈশিত্ব ইক্ষ্বাকু আঁজি অংসকুট টঙ্কক তক্ষণাস্ত্র পকোড়া দংষ্ট্রা শকটিকা হকচকা বঁইচি শকল বংশাঙ্কুর তক্ষণী আঁটকুড় ঈশ্বরদ্বেষী টঙ্কার পক্ববিম্বাধরোষ্ঠী শকারবকার হট্টবিলাসিনী বংশাবতংস ইঙ্গবঙ্গ পক্ষচ্ছেদ দংষ্ট্রাল হঠযোগ অষ্টনাগ পক্ষপাতিতা টনটনানি ঈশ্বরাজ্ঞা বউ',
} as const;
