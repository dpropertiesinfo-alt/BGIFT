export type Language = 'en' | 'bn';
export type ThemeMode = 'dark' | 'light';

export type PageId =
  | 'home'
  | 'about'
  | 'departments'
  | 'department-detail'
  | 'programs'
  | 'admissions'
  | 'apply-online'
  | 'result'
  | 'notices'
  | 'faculty'
  | 'officers'
  | 'gallery'
  | 'alumni'
  | 'events'
  | 'news'
  | 'scholarships'
  | 'fees'
  | 'calculator'
  | 'facilities'
  | 'projects'
  | 'faq'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'admin';

export interface LocalizedString {
  en: string;
  bn: string;
}

export interface Program {
  id: string;
  code: string;
  title: LocalizedString;
  shortTitle: string;
  degree: string;
  level: 'undergraduate' | 'diploma-textile' | 'diploma-engineering' | 'hsc-bm' | 'ssc-vocational';
  duration: LocalizedString;
  credits: number;
  affiliation: 'National University' | 'BTEB' | 'NSDA';
  seats: number;
  totalFee: number;
  semesterFee: number;
  eligibility: LocalizedString;
  overview: LocalizedString;
  careerProspects: LocalizedString[];
  labs: string[];
  curriculum: {
    semester: number;
    title: LocalizedString;
    courses: string[];
  }[];
  featuredImage: string;
}

export interface Notice {
  id: string;
  title: LocalizedString;
  date: string;
  category: 'all' | 'examinations' | 'admissions' | 'academic' | 'holidays';
  fileType: 'pdf' | 'doc' | 'image';
  fileSize: string;
  isNew?: boolean;
  isPinned?: boolean;
  content: LocalizedString;
  downloadUrl?: string;
}

export interface EventItem {
  id: string;
  title: LocalizedString;
  date: string;
  time: string;
  venue: LocalizedString;
  category: string;
  status: 'upcoming' | 'past';
  description: LocalizedString;
  image: string;
}

export interface NewsItem {
  id: string;
  title: LocalizedString;
  date: string;
  category: string;
  summary: LocalizedString;
  content: LocalizedString;
  image: string;
  author: string;
}

export interface FacultyMember {
  id: string;
  name: LocalizedString;
  designation: LocalizedString;
  department: string;
  qualifications: string;
  specialization: string;
  email: string;
  phone: string;
  image: string;
  experienceYears: number;
}

export interface AdministrativeOfficer {
  id: string;
  name: LocalizedString;
  designation: LocalizedString;
  office: LocalizedString;
  qualifications: string;
  responsibilities: LocalizedString;
  email: string;
  phone: string;
  image: string;
  roomNo?: string;
  order: number;
}

export interface Testimonial {
  id: string;
  name: LocalizedString;
  role: LocalizedString;
  company: string;
  program: string;
  batch: string;
  quote: LocalizedString;
  image: string;
  linkedin?: string;
}

export interface GalleryItem {
  id: string;
  title: LocalizedString;
  category: 'campus' | 'labs' | 'events' | 'textile' | 'sports';
  image: string;
  date: string;
}

export interface AlumniProfile {
  id: string;
  name: string;
  batch: string;
  program: string;
  position: string;
  company: string;
  location: string;
  image: string;
}

export interface ApplicationFormData {
  id?: string;
  fullName: string;
  banglaName?: string;
  email: string;
  phone: string;
  fatherName: string;
  motherName: string;
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  presentAddress: string;
  permanentAddress: string;
  sscBoard: string;
  sscRoll: string;
  sscReg: string;
  sscYear: string;
  sscGpa: string;
  hscBoard: string;
  hscRoll: string;
  hscReg: string;
  hscYear: string;
  hscGpa: string;
  programChoice: string;
  shift: string;
  quota: string;
  submissionDate: string;
  referenceNumber: string;
  status: 'pending' | 'verified' | 'admitted';
}
