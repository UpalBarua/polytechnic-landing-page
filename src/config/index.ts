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
