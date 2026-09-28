import { Program, Notice, EventItem, NewsItem, FacultyMember, Testimonial, GalleryItem, AlumniProfile } from '../types';

export const UNIVERSITY_INFO = {
  name: {
    en: 'BGIFT Institute of Science & Technology (BIST)',
    bn: 'বিজিআইএফটি ইনস্টিটিউট অব সায়েন্স অ্যান্ড টেকনোলজি (বিআইএসটি)',
  },
  shortName: 'BIST Gazipur',
  tagline: {
    en: 'Engineer Your Future in Textile, Tech & Business',
    bn: 'টেক্সটাইল, প্রযুক্তি ও ব্যবসায় নিজের ভবিষ্যৎ গড়ুন',
  },
  codes: {
    nu: {
      name: 'National University College Code',
      bnName: 'জাতীয় বিশ্ববিদ্যালয় কলেজ কোড',
      code: '5526',
      badge: 'NU Affiliated #5526',
    },
    bteb: {
      name: 'BTEB College Code',
      bnName: 'কারিগরি শিক্ষা বোর্ড কলেজ কোড',
      code: '53098',
      badge: 'BTEB Recognized #53098',
    },
    nsda: {
      name: 'NSDA Accreditation Code',
      bnName: 'এনএসডিএ স্বীকৃতি কোড',
      code: 'STP-GAZ-000020',
      badge: 'NSDA Certified #STP-GAZ-000020',
    },
  },
  contact: {
    address: {
      en: 'Unishe Tower, Mymensingh Road, Chandona Chowrasta, Gazipur-1702, Bangladesh',
      bn: 'উনিশে টাওয়ার, ময়মনসিংহ রোড, চান্দনা চৌরাস্তা, গাজীপুর-১৭০২, বাংলাদেশ',
    },
    admissionPhone: '01913-555111',
    officePhone: '01908-909090',
    whatsapp: '+8801913555111',
    email: 'principal@bist.edu.bd',
    officeHours: {
      en: 'Saturday – Thursday: 8:30 AM – 5:30 PM (Friday Closed)',
      bn: 'শনিবার – বৃহস্পতিবার: সকাল ৮:৩০ – বিকাল ৫:৩০ (শুক্রবার বন্ধ)',
    },
    erpUrl: 'https://erp.bist.edu.bd',
    jobPortalUrl: 'https://jobs.bist.edu.bd',
  },
  foundingYear: 2007, // Flagged for client review (2007 vs 2008 in old materials)
  stats: {
    students: 5400,
    programs: 18,
    facultyCount: 88,
    labsCount: 16,
    placementRate: 94,
    scholarshipsAwarded: 1200,
  },
};

export const PROGRAMS: Program[] = [
  {
    id: 'cse',
    code: 'CSE-NU-5526',
    title: {
      en: 'B.Sc. (Hons.) in Computer Science & Engineering',
      bn: 'বি.এসসি (অনার্স) ইন কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (সিএসই)',
    },
    shortTitle: 'CSE',
    degree: 'B.Sc. (Hons.)',
    level: 'undergraduate',
    duration: { en: '4 Years (8 Semesters)', bn: '৪ বছর (৮ সেমিস্টার)' },
    credits: 148,
    affiliation: 'National University',
    seats: 80,
    totalFee: 260000,
    semesterFee: 32500,
    eligibility: {
      en: 'HSC or Equivalent / Diploma in Engineering from Science background with minimum GPA 2.50 in both SSC & HSC.',
      bn: 'বিজ্ঞান বিভাগে এসএসসি ও এইচএসসি অথবা পলিটেকনিক ডিপ্লোমা সম্পন্ন এবং উভয় পরীক্ষায় ন্যূনতম জিপিএ ২.৫০।',
    },
    overview: {
      en: 'A comprehensive curriculum combining theoretical foundations with hands-on software development, Artificial Intelligence, Machine Learning, Cloud Architecture, Cyber Security, and IoT systems.',
      bn: 'সফটওয়্যার ডেভেলপমেন্ট, কৃত্রিম বুদ্ধিমত্তা, ক্লাউড আর্কিটেকচার, সাইবার সিকিউরিটি ও আইওটি প্রযুক্তিতে ব্যবহারিক দক্ষতা অর্জনের জাতীয় বিশ্ববিদ্যালয় অধিভুক্ত পূর্ণাঙ্গ কোর্স।',
    },
    careerProspects: [
      { en: 'Full-Stack Software Engineer', bn: 'ফুল-স্ট্যাক সফটওয়্যার ইঞ্জিনিয়ার' },
      { en: 'AI & Data Analyst', bn: 'এআই ও ডেটা অ্যানালিস্ট' },
      { en: 'DevOps & Cloud Architect', bn: 'ডেভঅপ্স ও ক্লাউড আর্কিটেক্ট' },
      { en: 'Cyber Security Specialist', bn: 'সাইবার সিকিউরিটি বিশেষজ্ঞ' },
      { en: 'Industrial Automation Engineer', bn: 'ইন্ডাস্ট্রিয়াল অটোমেশন ইঞ্জিনিয়ার' },
    ],
    labs: ['Advanced Software Lab', 'Artificial Intelligence & Robotics Rig', 'Cisco Network Engineering Lab', 'Microprocessor & IoT Lab'],
    curriculum: [
      {
        semester: 1,
        title: { en: '1st Semester - Fundamentals', bn: '১ম সেমিস্টার - মৌলিক জ্ঞান' },
        courses: ['Structured Programming with C', 'Discrete Mathematics', 'Physics I (Electricity & Magnetism)', 'Differential & Integral Calculus', 'English for Engineers'],
      },
      {
        semester: 2,
        title: { en: '2nd Semester - Data Structures', bn: '২য় সেমিস্টার - ডেটা স্ট্রাকচার' },
        courses: ['Object-Oriented Programming (Java/C++)', 'Data Structures & Algorithms I', 'Digital Logic Design', 'Linear Algebra & Matrices', 'Engineering Economics'],
      },
      {
        semester: 3,
        title: { en: '3rd Semester - Advanced Algorithms', bn: '৩য় সেমিস্টার - অ্যাডভান্সড অ্যালগরিদম' },
        courses: ['Algorithms Design & Analysis', 'Database Management Systems (RDBMS & NoSQL)', 'Computer Architecture', 'Numerical Methods', 'Technical Writing'],
      },
      {
        semester: 4,
        title: { en: '4th Semester - Systems & Web', bn: '৪র্থ সেমিস্টার - সিস্টেমস ও ওয়েব' },
        courses: ['Operating Systems & UNIX', 'Web Engineering & Modern Frameworks', 'Microprocessors & Microcontrollers', 'Software Engineering Principles', 'Statistics & Probability'],
      },
      {
        semester: 5,
        title: { en: '5th Semester - Networks & Security', bn: '৫ম সেমিস্টার - নেটওয়ার্ক ও নিরাপত্তা' },
        courses: ['Computer Networks & Protocols', 'Theory of Computation', 'Cyber Security & Cryptography', 'Mobile Application Development', 'Management Information Systems'],
      },
      {
        semester: 6,
        title: { en: '6th Semester - AI & Cloud', bn: '৬ষ্ঠ সেমিস্টার - এআই ও ক্লাউড' },
        courses: ['Artificial Intelligence & Expert Systems', 'Compiler Design', 'Cloud Computing & DevOps', 'Internet of Things (IoT) Systems', 'Software Project I'],
      },
      {
        semester: 7,
        title: { en: '7th Semester - Deep Tech & Specialization', bn: '৭ম সেমিস্টার - মেশিন লার্নিং ও স্পেশালাইজেশন' },
        courses: ['Machine Learning & Pattern Recognition', 'Big Data Analytics', 'Computer Graphics & Image Processing', 'Elective Course I', 'Capstone Project Phase I'],
      },
      {
        semester: 8,
        title: { en: '8th Semester - Industrial Internship & Defense', bn: '৮ম সেমিস্টার - ইন্ডাস্ট্রিয়াল ইন্টার্নশিপ ও থিসিস' },
        courses: ['Industrial Internship (3 Months)', 'Senior Design Thesis Defense', 'Professional Ethics & IT Law', 'Tech Entrepreneurship'],
      },
    ],
    featuredImage: '/src/assets/images/lab_computer_ai_1790590266123.jpg',
  },
  {
    id: 'tst',
    code: 'TST-NU-5526',
    title: {
      en: 'B.Sc. (Hons.) in Textile Science & Technology',
      bn: 'বি.এসসি (অনার্স) ইন টেক্সটাইল সায়েন্স অ্যান্ড টেকনোলজি (টিএসটি)',
    },
    shortTitle: 'TST',
    degree: 'B.Sc. (Hons.)',
    level: 'undergraduate',
    duration: { en: '4 Years (8 Semesters)', bn: '৪ বছর (৮ সেমিস্টার)' },
    credits: 152,
    affiliation: 'National University',
    seats: 80,
    totalFee: 280000,
    semesterFee: 35000,
    eligibility: {
      en: 'HSC / Equivalent (Science) or Diploma in Textile / Engineering with minimum GPA 2.50 in both SSC & HSC.',
      bn: 'এইচএসসি (বিজ্ঞান) বা টেক্সটাইল/ইঞ্জিনিয়ারিং ডিপ্লোমা পাস এবং উভয় স্তরে ন্যূনতম জিপিএ ২.৫০।',
    },
    overview: {
      en: 'Designed to produce future-ready textile engineers capable of leading Bangladesh’s multi-billion dollar export industry through smart manufacturing, sustainable dyeing, automated yarn spinning, and technical textiles.',
      bn: 'স্মার্ট টেক্সটাইল উৎপাদন, পরিবেশবান্ধব ডাইং, স্বয়ংক্রিয় স্পিনিং ও টেকনিক্যাল টেক্সটাইলে আন্তর্জাতিক মানের প্রকৌশলী গড়ে তোলার লক্ষ্যে প্রণীত কোর্স।',
    },
    careerProspects: [
      { en: 'Textile Production & Quality Manager', bn: 'টেক্সটাইল প্রোডাকশন ও কোয়ালিটি ম্যানেজার' },
      { en: 'Wet Processing / Dyeing Technologist', bn: 'ওয়েট প্রসেসিং ও ডাইং টেকনোলজিস্ট' },
      { en: 'Textile Testing & Lab Specialist', bn: 'টেক্সটাইল টেস্টিং ও ল্যাব বিশেষজ্ঞ' },
      { en: 'Technical Merchandiser', bn: 'টেকনিক্যাল মার্চেন্ডাইজার' },
      { en: 'R&D Sustainable Fabric Engineer', bn: 'সাসটেইনেবল ফ্যাব্রিক আরঅ্যান্ডডি ইঞ্জিনিয়ার' },
    ],
    labs: ['Textile Testing & Quality Control Lab', 'Yarn & Spinning Technology Lab', 'Fabric Manufacturing Machinery Floor', 'Wet Processing & Dyeing Chemistry Lab'],
    curriculum: [
      {
        semester: 1,
        title: { en: '1st Semester - Textile Foundation', bn: '১ম সেমিস্টার - টেক্সটাইল ভিত্তি' },
        courses: ['Introduction to Textile Engineering', 'Physics for Textiles', 'Inorganic & Organic Chemistry', 'Engineering Mathematics I', 'Communicative English'],
      },
      {
        semester: 2,
        title: { en: '2nd Semester - Fiber to Yarn', bn: '২য় সেমিস্টার - ফাইবার ও সুতা' },
        courses: ['Natural & Synthetic Fibers', 'Yarn Manufacturing Principles I', 'Textile Chemistry Lab', 'Engineering Mechanics', 'Computer Fundamentals'],
      },
      {
        semester: 3,
        title: { en: '3rd Semester - Fabric Technology', bn: '৩য় সেমিস্টার - ফ্যাব্রিক টেকনোলজি' },
        courses: ['Fabric Manufacturing Technology I (Weaving)', 'Yarn Manufacturing Technology II', 'Applied Statistics', 'Electrical Technology & Electronics', 'Textile Testing & Quality Control I'],
      },
      {
        semester: 4,
        title: { en: '4th Semester - Wet Processing & Knitting', bn: '৪র্থ সেমিস্টার - ডাইং ও নিটিং' },
        courses: ['Wet Processing Technology I (Pre-treatment)', 'Fabric Manufacturing Technology II (Knitting)', 'Textile Machinery Maintenance', 'Environmental Management in Textiles', 'Production Planning & Control'],
      },
      {
        semester: 5,
        title: { en: '5th Semester - Advanced Dyeing & Printing', bn: '৫ম সেমিস্টার - কালারেশন ও ফিনিশিং' },
        courses: ['Dyeing Technology (Cotton, Synthetic, Blends)', 'Textile Printing & Finishing Methods', 'Automation in Textile Machinery', 'Garment Manufacturing Fundamentals', 'Industrial Safety & Compliance'],
      },
      {
        semester: 6,
        title: { en: '6th Semester - Smart & Technical Textiles', bn: '৬ষ্ঠ সেমিস্টার - স্মার্ট টেক্সটাইল' },
        courses: ['Smart & Functional Technical Textiles', 'Advanced Textile Testing & Instrumental Analysis', 'Textile Supply Chain & Merchandising', 'Operations Research in Manufacturing', 'Comprehensive Project I'],
      },
      {
        semester: 7,
        title: { en: '7th Semester - Industrial Systems', bn: '৭ম সেমিস্টার - শিল্প ব্যবস্থাপনা' },
        courses: ['Lean Manufacturing in Garments & Textiles', 'Costing, Sourcing & Quality Audit', 'Sustainable Production & ETP Systems', 'Elective Specialization', 'Senior Capstone Thesis'],
      },
      {
        semester: 8,
        title: { en: '8th Semester - Industrial Attachment', bn: '৮ম সেমিস্টার - শিল্প কারখানায় ইন্টার্নশিপ' },
        courses: ['Full-Time Factory Internship (12 Weeks)', 'Industrial Project Report & Viva', 'Professional Engineering Practice'],
      },
    ],
    featuredImage: '/src/assets/images/lab_textile_tech_1790590250651.jpg',
  },
  {
    id: 'amt',
    code: 'AMT-NU-5526',
    title: {
      en: 'B.Sc. (Hons.) in Apparel Manufacture & Technology',
      bn: 'বি.এসসি (অনার্স) ইন অ্যাপারেল ম্যানুফ্যাকচার অ্যান্ড টেকনোলজি (এএমটি)',
    },
    shortTitle: 'AMT',
    degree: 'B.Sc. (Hons.)',
    level: 'undergraduate',
    duration: { en: '4 Years (8 Semesters)', bn: '৪ বছর (৮ সেমিস্টার)' },
    credits: 148,
    affiliation: 'National University',
    seats: 70,
    totalFee: 250000,
    semesterFee: 31250,
    eligibility: {
      en: 'HSC or Equivalent (Any discipline) with minimum GPA 2.50. Diploma holders in Garments/Textile can also apply.',
      bn: 'যেকোনো বিভাগ থেকে এইচএসসি বা সমমান পরীক্ষায় ন্যূনতম জিপিএ ২.৫০ অথবা সংশ্লিষ্ট ডিপ্লোমা।',
    },
    overview: {
      en: 'Focuses on cutting-edge apparel industrial engineering, automated cutting and sewing technologies, garment washing, quality assurance protocols, lean line balancing, and international merchandising.',
      bn: 'গার্মেন্টস ইন্ডাস্ট্রিয়াল ইঞ্জিনিয়ারিং, অটোমেটেড কাটিং-স্যুইং প্রযুক্তি, ওয়াশিং, কোয়ালিটি ম্যানেজমেন্ট ও গ্লোবাল মার্চেন্ডাইজিংয়ে দক্ষ নেতৃত্ব তৈরির প্রোগ্রাম।',
    },
    careerProspects: [
      { en: 'Apparel Merchandiser / Buying House Head', bn: 'অ্যাপারেল মার্চেন্ডাইজার / বায়িং হাউস এক্সিকিউটিভ' },
      { en: 'Garment Production Manager (PM)', bn: 'গার্মেন্টস প্রোডাকশন ম্যানেজার (পিএম)' },
      { en: 'Industrial Engineer (IE Executive)', bn: 'ইন্ডাস্ট্রিয়াল ইঞ্জিনিয়ারিং (আইই এক্সিকিউটিভ)' },
      { en: 'Quality Assurance & Compliance Auditor', bn: 'কোয়ালিটি অ্যাসিওরেন্স ও কমপ্লায়েন্স অডিটর' },
      { en: 'Washing & Finishing Specialist', bn: 'ওয়াশিং ও ফিনিশিং বিশেষজ্ঞ' },
    ],
    labs: ['Industrial Garment Machinery Floor', 'Pattern Engineering & CAD Lab', 'Garment Washing & Color Fastness Lab', 'Textile Testing Suite'],
    curriculum: [
      {
        semester: 1,
        title: { en: '1st Semester - Fundamentals of Apparel', bn: '১ম সেমিস্টার - পোশাক বিজ্ঞানের ভিত্তি' },
        courses: ['Introduction to Clothing Technology', 'Textile Raw Materials & Fibers', 'Basic Mathematics', 'Chemistry for Garments', 'English Communication'],
      },
      {
        semester: 2,
        title: { en: '2nd Semester - Pattern Making & Cutting', bn: '২য় সেমিস্টার - প্যাটার্ন মেকিং ও কাটিং' },
        courses: ['Pattern Construction I (Manual & Flat Pattern)', 'Fabric Science & Analysis', 'Sewing Technology I', 'Applied Physics', 'Computer Applications in Garments'],
      },
      {
        semester: 3,
        title: { en: '3rd Semester - Advanced Sewing & Machinery', bn: '৩য় সেমিস্টার - সেলাই ও যন্ত্রপাতি' },
        courses: ['Sewing Technology II (Special Machinery)', 'Pattern Construction II (Grading & Draping)', 'Spreading & Cutting Room Management', 'Textile Testing & Quality Evaluation', 'Industrial Management Principles'],
      },
      {
        semester: 4,
        title: { en: '4th Semester - Apparel CAD & IE', bn: '৪র্থ সেমিস্টার - অ্যাপারেল ক্যাড ও আইই' },
        courses: ['Computer-Aided Pattern Design (CAD/CAM)', 'Industrial Engineering & Work Study (IE)', 'Garment Trims, Accessories & Packaging', 'Apparel Production Planning & Control', 'Environmental Compliance'],
      },
      {
        semester: 5,
        title: { en: '5th Semester - Merchandising & Costing', bn: '৫ম সেমিস্টার - মার্চেন্ডাইজিং ও কস্টিং' },
        courses: ['Apparel Merchandising & Sourcing', 'Garment Costing & Consumption Calculation', 'Washing & Dyeing of Garments', 'Quality Assurance & AQL Standards', 'International Trade & Export Procedures'],
      },
      {
        semester: 6,
        title: { en: '6th Semester - Supply Chain & Lean', bn: '৬ষ্ঠ সেমিস্টার - সাপ্লাই চেইন ও লিন' },
        courses: ['Supply Chain Logistics in RMG Sector', 'Lean Manufacturing & Six Sigma in Garments', 'RMG Social Compliance & Labor Law', 'Apparel Marketing & Brand Strategy', 'Technical Project I'],
      },
      {
        semester: 7,
        title: { en: '7th Semester - Smart Factory & Automation', bn: '৭ম সেমিস্টার - অটোমেশন ও অডিট' },
        courses: ['Smart Garment Automation & Industry 4.0', 'Buying House Operations Management', 'Sustainable Fast Fashion', 'Senior Capstone Project', 'Elective Subject'],
      },
      {
        semester: 8,
        title: { en: '8th Semester - Industrial Internship', bn: '৮ম সেমিস্টার - শিল্প কারখানায় ইন্টার্নশিপ' },
        courses: ['Factory Industrial Internship (12 Weeks)', 'Merchandising & Production Defense', 'Comprehensive RMG Viva Voce'],
      },
    ],
    featuredImage: '/src/assets/images/fashion_design_studio_1790590283292.jpg',
  },
  {
    id: 'fdt',
    code: 'FDT-NU-5526',
    title: {
      en: 'B.Sc. (Hons.) in Fashion Design & Technology',
      bn: 'বি.এসসি (অনার্স) ইন ফ্যাশন ডিজাইন অ্যান্ড টেকনোলজি (এফডিটি)',
    },
    shortTitle: 'FDT',
    degree: 'B.Sc. (Hons.)',
    level: 'undergraduate',
    duration: { en: '4 Years (8 Semesters)', bn: '৪ বছর (৮ সেমিস্টার)' },
    credits: 148,
    affiliation: 'National University',
    seats: 60,
    totalFee: 260000,
    semesterFee: 32500,
    eligibility: {
      en: 'HSC or Equivalent from Science, Arts, or Commerce with minimum GPA 2.50. Creative aptitude appreciated.',
      bn: 'যেকোনো গ্রুপ থেকে এইচএসসি বা সমমান পরীক্ষায় ন্যূনতম জিপিএ ২.৫০। সৃজনশীলতায় আগ্রহী প্রার্থীরা অগ্রাধিকারযোগ্য।',
    },
    overview: {
      en: 'Fuses artistic creativity, runway aesthetics, and technological expertise in digital fashion illustration, trend forecasting, couture construction, surface ornamentation, and global fashion branding.',
      bn: 'ফ্যাশন ইলাস্ট্রেশন, ট্রেন্ড ফোরকাস্টিং, কোটিউর কনস্ট্রাকশন, টেক্সটাইল অলংকরণ ও আন্তর্জাতিক ফ্যাশন ব্র্যান্ডিংয়ের মাধ্যমে আধুনিক ফ্যাশন ডিজাইনার গড়ার উচ্চতর কোর্স।',
    },
    careerProspects: [
      { en: 'Chief Fashion Designer / Stylist', bn: 'প্রধান ফ্যাশন ডিজাইনার / স্টাইলিস্ট' },
      { en: 'Digital Apparel Illustrator & CAD Designer', bn: 'ডিজিটাল ফ্যাশন ইলাস্ট্রেটর ও ক্যাড ডিজাইনার' },
      { en: 'Trend Forecaster & Creative Director', bn: 'ট্রেন্ড ফোরকাস্টার ও ক্রিয়েটিভ ডিরেক্টর' },
      { en: 'Fashion Merchandiser & Buyer', bn: 'ফ্যাশন মার্চেন্ডাইজার ও বায়ার' },
      { en: 'Independent Brand Founder / Entrepreneur', bn: 'ফ্যাশন উদ্যোক্তা ও নিজস্ব ব্র্যান্ড প্রতিষ্ঠাতা' },
    ],
    labs: ['Fashion Illustration & Studio Workshop', 'Pattern Engineering & Draping Lab', 'Surface Ornamentation & Batik/Screen Lab', 'Digital 3D Fashion CAD Suite'],
    curriculum: [
      {
        semester: 1,
        title: { en: '1st Semester - Design Foundations', bn: '১ম সেমিস্টার - ডিজাইনের ভিত্তি' },
        courses: ['Elements & Principles of Fashion Design', 'Figure Drawing & Fashion Illustration I', 'Color Theory & Composition', 'Introduction to Textiles', 'Communicative English'],
      },
      {
        semester: 2,
        title: { en: '2nd Semester - Anatomy & Draping', bn: '২য় সেমিস্টার - অ্যানাটমি ও ড্রেপিং' },
        courses: ['Fashion Figure Anatomy & Styling II', 'Basic Pattern Making & Draping Techniques', 'History of World & Bengali Costumes', 'Fabric Manipulation & Surface Design', 'Computer Graphics for Fashion (Photoshop/Illustrator)'],
      },
      {
        semester: 3,
        title: { en: '3rd Semester - Advanced Pattern & CAD', bn: '৩য় সেমিস্টার - অ্যাডভান্সড ক্যাড ও পোশাক' },
        courses: ['Advanced Pattern Drafting & Grading', 'Apparel Construction I (Womenswear)', 'Computer-Aided Fashion Design (CAD)', 'Textile Printing, Dyeing & Embroidery', 'Trend Forecasting & Moodboards'],
      },
      {
        semester: 4,
        title: { en: '4th Semester - Menswear & Childrenswear', bn: '৪র্থ সেমিস্টার - মেন্সওয়্যার ও স্পেশাল পোশাক' },
        courses: ['Apparel Construction II (Menswear & Kids)', 'Traditional Textiles & Heritage Crafts', 'Knitwear Design & Technology', 'Fashion Marketing & Retail Management', 'Photography & Visual Merchandising'],
      },
      {
        semester: 5,
        title: { en: '5th Semester - Haute Couture & Evening Wear', bn: '৫ম সেমিস্টার - কোটিউর ও ইভিনিং ওয়্যার' },
        courses: ['Haute Couture & Bridal Wear Design', 'Digital 3D Garment Simulation (CLO 3D)', 'Fashion Brand Management & Identity', 'Garment Costing & Export Operations', 'Sustainable & Circular Fashion'],
      },
      {
        semester: 6,
        title: { en: '6th Semester - Runway Collection & Staging', bn: '৬ষ্ঠ সেমিস্টার - রানওয়ে কালেকশন' },
        courses: ['Runway Collection Design & Curation', 'Costume Design for Film & Performing Arts', 'Fashion PR, Media & Influencer Marketing', 'Design Portfolio Development', 'Pre-Graduation Design Thesis'],
      },
      {
        semester: 7,
        title: { en: '7th Semester - Graduation Collection Creation', bn: '৭ম সেমিস্টার - গ্র্যাজুয়েশন কালেকশন' },
        courses: ['Graduation Fashion Collection Construction (6 Ensembles)', 'Fashion Entrepreneurship & Business Launch', 'Intellectual Property & Copyright in Fashion', 'Elective Studio Specialization'],
      },
      {
        semester: 8,
        title: { en: '8th Semester - Fashion Show & Industry Attachment', bn: '৮ম সেমিস্টার - ফ্যাশন শো ও ইন্টার্নশিপ' },
        courses: ['Annual BIST Runway Gala Fashion Show', 'Fashion House / Buying House Internship (12 Weeks)', 'Comprehensive Portfolio Defense'],
      },
    ],
    featuredImage: '/src/assets/images/fashion_design_studio_1790590283292.jpg',
  },
  {
    id: 'bba',
    code: 'BBA-NU-5526',
    title: {
      en: 'Bachelor of Business Administration (Professional BBA)',
      bn: 'ব্যাচেলর অব বিজনেস অ্যাডমিনিস্ট্রেশন (প্রফেশনাল বিবিএ)',
    },
    shortTitle: 'BBA',
    degree: 'BBA (Professional)',
    level: 'undergraduate',
    duration: { en: '4 Years (8 Semesters)', bn: '৪ বছর (৮ সেমিস্টার)' },
    credits: 126,
    affiliation: 'National University',
    seats: 90,
    totalFee: 220000,
    semesterFee: 27500,
    eligibility: {
      en: 'HSC or Equivalent from Business Studies, Science, or Humanities with minimum GPA 2.50 in both exams.',
      bn: 'ব্যবসায় শিক্ষা, বিজ্ঞান অথবা মানবিক বিভাগ থেকে এসএসসি ও এইচএসসিতে ন্যূনতম জিপিএ ২.৫০।',
    },
    overview: {
      en: 'Equips graduates with contemporary managerial, analytical, and leadership acumen across Finance, Marketing, Human Resource Management, and RMG Supply Chain Management.',
      bn: 'ফাইন্যান্স, মার্কেটিং, হিউম্যান রিসোর্স ও আরএমজি সাপ্লাই চেইন ম্যানেজমেন্টে নেতৃত্ব ও সিদ্ধান্ত গ্রহণে সক্ষম করপোরেট লিডার গড়ার যুগোপযোগী প্রফেশনাল ডিগ্রি।',
    },
    careerProspects: [
      { en: 'Corporate Branch & Operations Manager', bn: 'করপোরেট ব্রাঞ্চ ও অপারেশনস ম্যানেজার' },
      { en: 'Financial Analyst / Banking Executive', bn: 'আর্থিক বিশ্লেষক ও ব্যাংকিং অফিসার' },
      { en: 'Digital Marketing & Growth Strategist', bn: 'ডিজিটাল মার্কেটিং ও গ্রোথ স্ট্র্যাটেজিস্ট' },
      { en: 'HR & Talent Acquisition Lead', bn: 'এইচআর ও ট্যালেন্ট অ্যাকুইজিশন প্রধান' },
      { en: 'Supply Chain & Procurement Officer', bn: 'সাপ্লাই চেইন ও প্রকিউরমেন্ট অফিসার' },
    ],
    labs: ['Business Analytics & Statistical Lab', 'Digital Marketing Simulator', 'Language & Presentation Studio'],
    curriculum: [
      {
        semester: 1,
        title: { en: '1st Semester - Business Foundations', bn: '১ম সেমিস্টার - ব্যবসায়িক জ্ঞান' },
        courses: ['Introduction to Business', 'Financial Accounting I', 'Business Mathematics', 'Microeconomics', 'Business Communication in English'],
      },
      {
        semester: 2,
        title: { en: '2nd Semester - Management & Macroeconomics', bn: '২য় সেমিস্টার - ব্যবস্থাপনা ও সামষ্টিক অর্থনীতি' },
        courses: ['Principles of Management', 'Financial Accounting II', 'Macroeconomics', 'Business Statistics I', 'Computer Applications in Business'],
      },
      {
        semester: 3,
        title: { en: '3rd Semester - Marketing & Finance Basics', bn: '৩য় সেমিস্টার - বিপণন ও অর্থায়ন' },
        courses: ['Principles of Marketing', 'Business Statistics II', 'Managerial Accounting', 'Business Law & Corporate Governance', 'Organizational Behavior'],
      },
      {
        semester: 4,
        title: { en: '4th Semester - Financial Management', bn: '৪র্থ সেমিস্টার - ফাইন্যান্সিয়াল ম্যানেজমেন্ট' },
        courses: ['Financial Management', 'Marketing Management', 'Human Resource Management', 'Business Ethics & CSR', 'Operations Management'],
      },
      {
        semester: 5,
        title: { en: '5th Semester - Research & E-Commerce', bn: '৫ম সেমিস্টার - গবেষণা ও ই-কমার্স' },
        courses: ['Business Research Methods', 'Management Information Systems (MIS)', 'E-Commerce & Digital Business', 'Corporate Finance', 'International Business'],
      },
      {
        semester: 6,
        title: { en: '6th Semester - Strategic Leadership', bn: '৬ষ্ঠ সেমিস্টার - স্ট্র্যাটেজিক লিডারশিপ' },
        courses: ['Strategic Management', 'Entrepreneurship Development', 'Supply Chain Management', 'Major Elective Course I', 'Major Elective Course II'],
      },
      {
        semester: 7,
        title: { en: '7th Semester - Major Specialization', bn: '৭ম সেমিস্টার - স্পেশালাইজেশন' },
        courses: ['Major Elective Course III', 'Major Elective Course IV', 'Taxation & Auditing Practice', 'Project Management', 'Pre-Internship Seminar'],
      },
      {
        semester: 8,
        title: { en: '8th Semester - Corporate Internship', bn: '৮ম সেমিস্টার - করপোরেট ইন্টার্নশিপ' },
        courses: ['Corporate Organization Internship (12 Weeks)', 'Research Monograph & Defense', 'Comprehensive Viva Voce'],
      },
    ],
    featuredImage: '/src/assets/images/hero_bist_campus_1790590235440.jpg',
  },
];

export const DIPLOMA_TEXTILE_PROGRAMS = [
  {
    name: { en: 'Fabric Manufacturing Technology', bn: 'ফ্যাব্রিক ম্যানুফ্যাকচারিং টেকনোলজি' },
    duration: '4 Years',
    code: 'BTEB-53098-FMT',
    affiliation: 'BTEB',
    description: {
      en: 'Master weaving, circular knitting, warp preparation, and modern automated loom operations.',
      bn: 'উইভিং, নিটিং, ওয়ার্প প্রস্তুতি এবং আধুনিক টেক্সটাইল লুম পরিচালনার ব্যবহারিক শিক্ষা।',
    },
  },
  {
    name: { en: 'Apparel Manufacturing Technology', bn: 'অ্যাপারেল ম্যানুফ্যাকচারিং টেকনোলজি' },
    duration: '4 Years',
    code: 'BTEB-53098-AMT',
    affiliation: 'BTEB',
    description: {
      en: 'Complete garment construction, industrial sewing, pattern grading, and quality audit methods.',
      bn: 'গার্মেন্টস কাটিং, সুইং, প্যাটার্ন গ্রেডিং এবং রপ্তানিমুখী কোয়ালিটি নিয়ন্ত্রণ পদ্ধতি।',
    },
  },
  {
    name: { en: 'Wet Processing Technology', bn: 'ওয়েট প্রসেসিং টেকনোলজি' },
    duration: '4 Years',
    code: 'BTEB-53098-WPT',
    affiliation: 'BTEB',
    description: {
      en: 'Textile scouring, bleaching, synthetic & reactive dyeing, printing techniques, and ETP effluent management.',
      bn: 'ব্লিচিং, ডাইং, প্রিন্টিং রসায়ন, ফিনিশিং ও শিল্প বর্জ্য শোধনাগার (ইটিপি) ব্যবস্থাপনা।',
    },
  },
  {
    name: { en: 'Yarn Processing Technology', bn: 'ইয়ার্ন প্রসেসিং টেকনোলজি' },
    duration: '4 Years',
    code: 'BTEB-53098-YPT',
    affiliation: 'BTEB',
    description: {
      en: 'Cotton blending, blowroom operations, carding, drawing, roving, ring spinning, and rotor yarn manufacturing.',
      bn: 'তুলা বাছাই, ব্লো-রুম, কার্ডিং, ড্রয়িং, রিং ও রোটর স্পিনিংয়ের বিস্তারিত প্রযুক্তি।',
    },
  },
];

export const DIPLOMA_ENGINEERING_PROGRAMS = [
  { name: { en: 'Computer Technology', bn: 'কম্পিউটার টেকনোলজি' }, duration: '4 Years', code: 'BTEB-53098-CT' },
  { name: { en: 'Electrical Technology', bn: 'ইলেকট্রিক্যাল টেকনোলজি' }, duration: '4 Years', code: 'BTEB-53098-ET' },
  { name: { en: 'Electronics Technology', bn: 'ইলেকট্রনিক্স টেকনোলজি' }, duration: '4 Years', code: 'BTEB-53098-ENT' },
  { name: { en: 'Civil Technology', bn: 'সিভিল টেকনোলজি' }, duration: '4 Years', code: 'BTEB-53098-CV' },
  { name: { en: 'Mechanical Technology', bn: 'মেকানিক্যাল টেকনোলজি' }, duration: '4 Years', code: 'BTEB-53098-ME' },
  { name: { en: 'Marine Technology', bn: 'মেরিন টেকনোলজি' }, duration: '4 Years', code: 'BTEB-53098-MR' },
  { name: { en: 'Garment Design & Pattern Making', bn: 'গার্মেন্ট ডিজাইন অ্যান্ড প্যাটার্ন মেকিং' }, duration: '4 Years', code: 'BTEB-53098-GDPM' },
  { name: { en: 'Automobile Technology', bn: 'অটোমোবাইল টেকনোলজি' }, duration: '4 Years', code: 'BTEB-53098-AT' },
  { name: { en: 'Refrigeration & Air Conditioning (RAC)', bn: 'রেফ্রিজারেশন অ্যান্ড এয়ার কন্ডিশনিং (আরএসি)' }, duration: '4 Years', code: 'BTEB-53098-RAC' },
  { name: { en: 'Architecture & Interior Design', bn: 'আর্কিটেকচার অ্যান্ড ইন্টেরিয়র ডিজাইন' }, duration: '4 Years', code: 'BTEB-53098-AID' },
];

export const NOTICES: Notice[] = [
  {
    id: 'notice-1',
    title: {
      en: 'Mid-term Examination Schedule for B.Sc. in CSE, TST, AMT & FDT (Session 2024-25)',
      bn: 'বি.এসসি ইন সিএসই, টিএসটি, এএমটি ও এফডিটি মিড-টার্ম পরীক্ষা ২০২৪-২৫ এর সময়সূচি',
    },
    date: '24 Sep 2026',
    category: 'examinations',
    fileType: 'pdf',
    fileSize: '420 KB',
    isNew: true,
    isPinned: true,
    content: {
      en: 'The mid-term examination for 1st, 3rd, and 5th semester undergraduate students will commence from 12 October 2026. All students must collect their admit cards from the accounts section by clearing outstanding dues before 05 October.',
      bn: 'সংশ্লিষ্ট সকল শিক্ষার্থীকে জানানো যাচ্ছে যে ১ম, ৩য় ও ৫ম সেমিস্টারের মিড-টার্ম পরীক্ষা আগামী ১২ অক্টোবর ২০২৬ থেকে শুরু হবে। আগামী ৫ অক্টোবরের মধ্যে সকল বকেয়া পরিশোধপূর্বক প্রবেশপত্র সংগ্রহ করার জন্য নির্দেশ দেওয়া হলো।',
    },
  },
  {
    id: 'notice-2',
    title: {
      en: 'National University Admission Open 2025-26: B.Sc. (Honours) & BBA Programs',
      bn: 'জাতীয় বিশ্ববিদ্যালয় ভর্তি বিজ্ঞপ্তি ২০২৫-২৬: বি.এসসি (অনার্স) ও প্রফেশনাল বিবিএ',
    },
    date: '18 Sep 2026',
    category: 'admissions',
    fileType: 'pdf',
    fileSize: '1.2 MB',
    isNew: true,
    isPinned: true,
    content: {
      en: 'Online admissions for National University affiliated 4-year B.Sc. in CSE, TST, AMT, FDT, and Professional BBA are now active. Diploma passed students can directly enroll with credit transfer privileges.',
      bn: 'জাতীয় বিশ্ববিদ্যালয় অধিভুক্ত ৪ বছর মেয়াদি বি.এসসি (সিএসই, টিএসটি, এএমটি, এফডিটি) ও প্রফেশনাল বিবিএ কোর্সে ভর্তি কার্যক্রম শুরু হয়েছে। পলিটেকনিক ডিপ্লোমা উত্তীর্ণ শিক্ষার্থীদের জন্য সরাসরি ভর্তির সুযোগ রয়েছে।',
    },
  },
  {
    id: 'notice-3',
    title: {
      en: '100% Tuition Fee Waiver Examination for 100 Meritorious & Underprivileged Students',
      bn: '১০০ জন মেধাবী ও অসচ্ছল শিক্ষার্থীদের জন্য ১০০% টিউশন ফি মওকুফ বৃত্তি পরীক্ষা',
    },
    date: '12 Sep 2026',
    category: 'admissions',
    fileType: 'pdf',
    fileSize: '580 KB',
    isNew: true,
    content: {
      en: 'BIST Governing Council announces 100 full-tuition scholarships for deserving students based on merit and financial need. Eligible candidates from ethnic minorities and physically challenged backgrounds receive special quota allocations.',
      bn: 'বিআইএসটি গভর্নিং কাউন্সিলের সিদ্ধান্ত মোতাবেক ১০০ জন অসচ্ছল ও মেধাবী শিক্ষার্থীদের সম্পূর্ণ টিউশন ফি মওকুফ বৃত্তি পরীক্ষা অনুষ্ঠিত হবে। ক্ষুদ্র নৃগোষ্ঠী ও বিশেষ চাহিদাসম্পন্ন শিক্ষার্থীদের জন্য অগ্রাধিকার রয়েছে।',
    },
  },
  {
    id: 'notice-4',
    title: {
      en: 'BTEB Diploma in Engineering 2nd, 4th & 6th Semester Semester-Final Result Published',
      bn: 'কারিগরি শিক্ষাবোর্ড ডিপ্লোমা ইন ইঞ্জিনিয়ারিং ২য়, ৪র্থ ও ৬ষ্ঠ পর্বের বোর্ড পরীক্ষার ফলাফল প্রকাশ',
    },
    date: '02 Sep 2026',
    category: 'examinations',
    fileType: 'pdf',
    fileSize: '950 KB',
    isNew: false,
    content: {
      en: 'The Bangladesh Technical Education Board (BTEB) has officially published the results for Diploma semester finals. Students can check their results on the college portal or notice board.',
      bn: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ডের অধীনে অনুষ্ঠিত ডিপ্লোমা পরীক্ষার ফল প্রকাশিত হয়েছে। শিক্ষার্থীরা বিআইএসটি রেজাল্ট সেকশন অথবা নোটিশ বোর্ড থেকে গ্রেডশিট দেখতে পারবে।',
    },
  },
  {
    id: 'notice-5',
    title: {
      en: 'Eid-ul-Adha & Autumn Semester Recess Official Notice',
      bn: 'পবিত্র ঈদুল আজহা ও শরৎকালীন অবকাশকালীন ছুটি সংক্রান্ত বিজ্ঞপ্তি',
    },
    date: '15 Aug 2026',
    category: 'holidays',
    fileType: 'pdf',
    fileSize: '210 KB',
    isNew: false,
    content: {
      en: 'All academic and administrative classes will remain suspended during the festival holidays. The campus admission booth will remain operational on special shifts.',
      bn: 'ছুটিকালীন সময়ে প্রাতিষ্ঠানিক ক্লাস ও প্রশাসনিক কার্যক্রম বন্ধ থাকবে। তবে ভর্তি সংক্রান্ত হটলাইন এবং ভর্তি বুথ বিশেষ শিফটে চালু থাকবে।',
    },
  },
  {
    id: 'notice-6',
    title: {
      en: 'Urgent Notice: Form Fill-Up for 3rd Year 6th Semester Final Examination',
      bn: 'জরুরি বিজ্ঞপ্তি: ৩য় বর্ষ ৬ষ্ঠ সেমিস্টার চূড়ান্ত পরীক্ষার ফরম পূরণ সংক্রান্ত',
    },
    date: '05 Aug 2026',
    category: 'academic',
    fileType: 'pdf',
    fileSize: '340 KB',
    isNew: false,
    content: {
      en: 'Students appearing in the upcoming National University 6th Semester Final exams must submit their registration forms along with required passport-size photos and university fee receipts by 20 August.',
      bn: 'জাতীয় বিশ্ববিদ্যালয় ৬ষ্ঠ সেমিস্টার চূড়ান্ত পরীক্ষায় অংশগ্রহণকারী শিক্ষার্থীদের আগামী ২০ আগস্টের মধ্যে ফরম পূরণ সম্পন্ন করার অনুরোধ করা যাচ্ছে।',
    },
  },
];

export const EVENTS: EventItem[] = [
  {
    id: 'event-1',
    title: {
      en: 'BDjobs Mega Campus Career Fair & Tech Placement Summit 2026',
      bn: 'বিডিজবস মেগা ক্যাম্পাস ক্যারিয়ার ফেয়ার ও টেক প্লেসমেন্ট সামিট ২০২৬',
    },
    date: '18 Aug 2026',
    time: '09:30 AM – 05:00 PM',
    venue: {
      en: 'BIST Central Auditorium, Gazipur Campus',
      bn: 'বিআইএসটি কেন্দ্রীয় মিলনায়তন, গাজীপুর ক্যাম্পাস',
    },
    category: 'Career & Industry',
    status: 'upcoming',
    description: {
      en: 'Join 40+ leading tech conglomerates, garment buying houses, and multinational corporations on campus for on-the-spot interviews, resume reviews, and career seminars.',
      bn: 'শীর্ষস্থানীয় ৪০টিরও বেশি সফটওয়্যার কোম্পানি ও আরএমজি গ্রুপের উপস্থিতিতে সরাসরি ইন্টারভিউ, সিভি যাচাই ও ক্যারিয়ার বিষয়ক সেমিনার।',
    },
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'event-2',
    title: {
      en: '17th Founding Anniversary & Annual Academic Prize Giving Ceremony',
      bn: '১৭তম প্রতিষ্ঠাবার্ষিকী ও বার্ষিক শিক্ষা পুরস্কার বিতরণী অনুষ্ঠান',
    },
    date: '28 Jun 2025',
    time: '10:00 AM – 06:00 PM',
    venue: {
      en: 'BIST Green Campus & Auditorium',
      bn: 'বিআইএসটি গ্রিন ক্যাম্পাস ও অডিটোরিয়াম',
    },
    category: 'Celebration',
    status: 'past',
    description: {
      en: 'Commemorating 17 glorious years of technical education excellence with esteemed trustees, academic dignitaries, student cultural shows, and awards for top CGPA holders.',
      bn: 'কারিগরী ও উচ্চশিক্ষায় ১৭ বছরের সাফল্য উদযাপন, গুণীজন সংবর্ধনা, সাংস্কৃতিক অনুষ্ঠান এবং কৃতি শিক্ষার্থীদের পুরস্কার প্রদান।',
    },
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'event-3',
    title: {
      en: 'AMT & FDT 12th Batch Orientation & Creative Runway Showcase',
      bn: 'এএমটি ও এফডিটি ১২তম ব্যাচ ওরিয়েন্টেশন ও ক্রিয়েটিভ ফ্যাশন শো',
    },
    date: '07 Aug 2023',
    time: '11:00 AM – 04:00 PM',
    venue: {
      en: 'Unishe Tower Fashion Studio',
      bn: 'উনিশে টাওয়ার ফ্যাশন স্টুডিও',
    },
    category: 'Orientation',
    status: 'past',
    description: {
      en: 'Welcoming the incoming freshman class of Fashion Design and Apparel Manufacture with senior faculty talks, industrial insights, and apparel collections.',
      bn: 'নবীন শিক্ষার্থীদের বরণ এবং ফ্যাশন ও অ্যাপারেল শিল্পের ভবিষ্যৎ কর্মসংস্থান বিষয়ক দিকনির্দেশনামূলক আলোচনা।',
    },
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
  },
];

export const NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: {
      en: 'BIST Textile Club Hosts International Sustainable Apparel Summit 2026',
      bn: 'বিআইএসটি টেক্সটাইল ক্লাবের উদ্যোগে আন্তর্জাতিক টেকসই পোশাক সম্মেলন ২০২৬',
    },
    date: '20 Sep 2026',
    category: 'Innovation',
    author: 'Editorial Desk',
    summary: {
      en: 'Over 500 delegates and industry leaders discussed circular fashion, AI-driven zero-waste cutting, and biological water treatment in Gazipur.',
      bn: 'গাজীপুরে সার্কুলার ফ্যাশন, জিরো-ওয়েস্ট কাটিং ও বায়োলজিক্যাল ইটিপি বিষয়ে ৫০০+ বিশেষজ্ঞ ও শিক্ষার্থীর অংশগ্রহণে সম্মেলন অনুষ্ঠিত।',
    },
    content: {
      en: 'The BIST Textile Club successfully organized the 3-day Sustainable Apparel & Smart Textiles Summit at Unishe Tower. Keynote speakers from BGMEA, German development agency GIZ, and university professors emphasized reducing water and energy footprint across Gazipur textile belts.',
      bn: 'বিআইএসটি টেক্সটাইল ক্লাবের আয়োজনে ৩ দিনব্যাপী টেকসই পোশাক সম্মেলন সম্পন্ন হয়েছে। এতে পরিবেশবান্ধব উৎপাদন, জ্বালানি সাশ্রয়ী প্রযুক্তি ও স্মার্ট টেক্সটাইল নিয়ে গঠনমূলক আলোচনা হয়।',
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'news-2',
    title: {
      en: 'BIST Principal Elected President of PIANU (Private Institutes Association of NU) Central Committee',
      bn: 'পিআইএএনইউ কেন্দ্রীয় কমিটির সভাপতি নির্বাচিত হলেন বিআইএসটি-এর অধ্যক্ষ',
    },
    date: '10 Sep 2026',
    category: 'Leadership',
    author: 'Public Relations Office',
    summary: {
      en: 'Engr. Md. Mobarak Hossain has been unanimously elected to steer the Private Institutes Association under National University.',
      bn: 'জাতীয় বিশ্ববিদ্যালয়ের অধিভুক্ত বেসরকারি শিক্ষা প্রতিষ্ঠানগুলোর ঐক্যজোট পিআইএএনইউ-এর সভাপতি নির্বাচিত হয়েছেন প্রকৌশলী মোঃ মোবারক হোসেন।',
    },
    content: {
      en: 'In an extraordinary biennial council held in Dhaka, heads of National University affiliated private technical institutions elected BIST Principal Engr. Md. Mobarak Hossain as President. He pledged to accelerate curriculum modernization, digital accreditation, and student research grants.',
      bn: 'ঢাকার কেন্দ্রীয় সম্মেলনে সর্বসম্মতভাবে বিআইএসটি-এর প্রতিষ্ঠাতা ও অধ্যক্ষ প্রকৌশলী মোঃ মোবারক হোসেনকে সভাপতি নির্বাচিত করা হয়। তিনি পাঠ্যক্রম আধুনিকায়ন ও গবেষণার ওপর গুরুত্বারোপ করেন।',
    },
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'news-3',
    title: {
      en: 'Meritorious Students Felicitated with Chairman Academic Excellence Awards',
      bn: 'কৃতি শিক্ষার্থীদের মাঝে চেয়ারম্যান এক্সেলেন্স অ্যাওয়ার্ড প্রদান',
    },
    date: '28 Aug 2026',
    category: 'Academics',
    author: 'Registrar Office',
    summary: {
      en: 'Students achieving CGPA 3.85 and above were honored with crests, certificates, and tuition cashback.',
      bn: 'জাতীয় বিশ্ববিদ্যালয় ও কারিগরি বোর্ডের পরীক্ষায় অনন্য সাফল্যের জন্য কৃতী শিক্ষার্থীদের সংবর্ধনা ও শিক্ষাবৃত্তি প্রদান।',
    },
    content: {
      en: 'At a gala reception, 45 students from CSE, TST, AMT, FDT, and BBA departments received prestigious Chairman Awards for outstanding scholastic merit and innovative thesis projects.',
      bn: 'বিআইএসটি অডিটোরিয়ামে আয়োজিত জমকালো অনুষ্ঠানে সর্বোচ্চ সিজিপিএ অর্জনকারী শিক্ষার্থীদের ক্রেস্ট ও আর্থিক সহায়তা তুলে দেন ট্রাস্টি বোর্ডের সদস্যবৃন্দ।',
    },
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: { en: 'Md Shohidul Islam', bn: 'মোঃ শহিদুল ইসলাম' },
    role: { en: 'Front-End Developer', bn: 'ফ্রন্ট-এন্ড ডেভেলপার' },
    company: 'Brain Station 23',
    program: 'B.Sc. in CSE',
    batch: '14th Batch (NU)',
    quote: {
      en: 'The rigorous coding labs and supportive mentors at BIST gave me the real-world engineering confidence to build enterprise web applications that millions of users rely on today.',
      bn: 'বিআইএসটি-এর আধুনিক ল্যাব এবং শিক্ষকদের নিবিড় তত্ত্বাবধান আমাকে বিশ্বমানের সফটওয়্যার ইঞ্জিনিয়ার হিসেবে গড়ে উঠতে সবচেয়ে বেশি ভূমিকা রেখেছে।',
    },
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'test-2',
    name: { en: 'Khairul Islam Minhaj', bn: 'খায়রুল ইসলাম মিনহাজ' },
    role: { en: 'IT Executive', bn: 'আইটি এক্সিকিউটিভ' },
    company: 'DBL Group',
    program: 'B.Sc. in CSE',
    batch: '15th Batch (NU)',
    quote: {
      en: 'Studying in Gazipur right in the manufacturing heart of Bangladesh allowed me to understand enterprise network infrastructure before even graduating.',
      bn: 'গাজীপুরের মতো শিল্পকেন্দ্রে অবস্থিত হওয়ায় ক্যাম্পাস থেকেই সরাসরি বড় বড় শিল্পপ্রতিষ্ঠানের নেটওয়ার্ক ও আইটি সিস্টেম শেখার সুযোগ পেয়েছি।',
    },
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'test-3',
    name: { en: 'Azizul Islam', bn: 'আজিজুল ইসলাম' },
    role: { en: 'Software Developer', bn: 'সফটওয়্যার ডেভেলপার' },
    company: 'Enosis Solutions',
    program: 'B.Sc. in CSE',
    batch: '12th Batch (NU)',
    quote: {
      en: 'From data structures to cloud architecture, BIST maintains an academic syllabus that matches Silicon Valley standards. I owe my career trajectory to BIST faculty.',
      bn: 'ডেটা স্ট্রাকচার থেকে ক্লাউড কম্পিউটিং—বিআইএসটি-এর যুগোপযোগী শিক্ষা আমাকে প্রথম থেকেই এগিয়ে রেখেছে।',
    },
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'test-4',
    name: { en: 'Alamgir Hossain', bn: 'আলমগীর হোসেন' },
    role: { en: 'Assistant Teacher (Technical Education)', bn: 'সহকারী শিক্ষক (কারিগরি শিক্ষা)' },
    company: 'Directorate of Technical Education (DTE)',
    program: 'B.Sc. in TST',
    batch: '10th Batch (NU)',
    quote: {
      en: 'The practical textile testing laboratories at BIST are unmatched. The depth of instruction prepared me to educate the next generation of engineers.',
      bn: 'বিআইএসটি-এর টেক্সটাইল ল্যাবরেটরি অত্যন্ত সমৃদ্ধ। এখানকার ব্যবহারিক জ্ঞান আজ আমাকে শিক্ষকতায়ও সর্বোচ্চ সহায়তা করছে।',
    },
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'test-5',
    name: { en: 'Md. Rezone Rahman', bn: 'মোঃ রেজোয়ান রহমান' },
    role: { en: 'Apparel Merchandiser & RPL Graduate', bn: 'অ্যাপারেল মার্চেন্ডাইজার ও আরপিএল সনদপ্রাপ্ত' },
    company: 'Ha-Meem Group',
    program: 'Short Course & RPL Professional',
    batch: '2023 Cohort',
    quote: {
      en: 'The NSDA and SEIP programs at BIST certified my hands-on garment skills, elevating my salary and unlocking executive promotion at Ha-Meem.',
      bn: 'বিআইএসটি-এর এনএসডিএ ও এসইআইপি শর্ট কোর্স এবং আরপিএল সার্টিফিকেশন আমার ক্যারিয়ারে বড় ধরনের টার্নিং পয়েন্ট তৈরি করেছে।',
    },
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
  },
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'fac-1',
    name: { en: 'Engr. Md. Mobarak Hossain', bn: 'প্রকৌশলী মোঃ মোবারক হোসেন' },
    designation: { en: 'Principal & Founder', bn: 'অধ্যক্ষ ও প্রতিষ্ঠাতা' },
    department: 'TST',
    qualifications: 'B.Sc. Engr. (Textile, BUTEX), M.Sc. in Industrial Management, Fellow of IEB',
    specialization: 'Textile Manufacturing, Industrial Engineering, Academic Governance',
    email: 'principal@bist.edu.bd',
    phone: '01913-555111',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80',
    experienceYears: 24,
  },
  {
    id: 'fac-2',
    name: { en: 'Dr. Tanvir Ahmed Chowdhury', bn: 'ড. তানভীর আহমেদ চৌধুরী' },
    designation: { en: 'Head of Department & Associate Professor', bn: 'বিভাগীয় প্রধান ও সহযোগী অধ্যাপক' },
    department: 'CSE',
    qualifications: 'Ph.D. in Computer Science (BUET), M.Sc. in Software Systems',
    specialization: 'Artificial Intelligence, Machine Learning, Distributed Algorithms',
    email: 'tanvir.cse@bist.edu.bd',
    phone: '+8801711002233',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
    experienceYears: 16,
  },
  {
    id: 'fac-3',
    name: { en: 'Sharmin Akter Nipa', bn: 'শারমিন আক্তার নিপা' },
    designation: { en: 'Assistant Professor & Head', bn: 'সহকারী অধ্যাপক ও বিভাগীয় প্রধান' },
    department: 'FDT',
    qualifications: 'B.Sc. & M.Sc. in Fashion Design (SMUCT / NIFT Alumni)',
    specialization: 'Digital 3D Pattern Simulation, Runway Aesthetics, Textile Ornamentation',
    email: 'sharmin.fdt@bist.edu.bd',
    phone: '+8801819998877',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    experienceYears: 11,
  },
  {
    id: 'fac-4',
    name: { en: 'Engr. Rakibul Hasan', bn: 'প্রকৌশলী রাকিবুল হাসান' },
    designation: { en: 'Senior Lecturer', bn: 'সিনিয়র প্রভাষক' },
    department: 'AMT',
    qualifications: 'B.Sc. in Apparel Engineering, Lean Six Sigma Green Belt',
    specialization: 'CAD/CAM Marker Making, Apparel IE, Line Balancing, Garment Washing',
    email: 'rakib.amt@bist.edu.bd',
    phone: '+8801911223344',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
    experienceYears: 9,
  },
  {
    id: 'fac-5',
    name: { en: 'Mohammad Farhad Hossain', bn: 'মোহাম্মদ ফরহাদ হোসেন' },
    designation: { en: 'Assistant Professor & Head', bn: 'সহকারী অধ্যাপক ও বিভাগীয় প্রধান' },
    department: 'BBA',
    qualifications: 'BBA & MBA (Marketing, DU), M.Phil. in Supply Chain Logistics',
    specialization: 'RMG Merchandising Economics, Strategic Management, Corporate Finance',
    email: 'farhad.bba@bist.edu.bd',
    phone: '+8801712556677',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80',
    experienceYears: 14,
  },
  {
    id: 'fac-6',
    name: { en: 'Nazmul Haque Shanto', bn: 'নাজমুল হক শান্ত' },
    designation: { en: 'Lecturer', bn: 'প্রভাষক' },
    department: 'CSE',
    qualifications: 'B.Sc. in CSE (RUET), Certified AWS Solutions Architect',
    specialization: 'Full-Stack Development, Cloud Computing, Cyber Security',
    email: 'nazmul.cse@bist.edu.bd',
    phone: '+8801611334455',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80',
    experienceYears: 6,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: { en: 'Modern Computer Science & AI Research Lab', bn: 'আধুনিক কম্পিউটার সায়েন্স ও এআই রিসার্চ ল্যাব' },
    category: 'labs',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    date: '2026',
  },
  {
    id: 'gal-2',
    title: { en: 'Heavy Textile Testing & Loom Machinery Floor', bn: 'টেক্সটাইল টেস্টিং ও লুম মেশিনারি ফ্লোর' },
    category: 'textile',
    image: 'https://images.unsplash.com/photo-1584441405886-bc91be61e56a?auto=format&fit=crop&w=1000&q=80',
    date: '2026',
  },
  {
    id: 'gal-3',
    title: { en: 'Annual Gala Runway Fashion Showcase', bn: 'বার্ষিক গালা ফ্যাশন রানওয়ে শো' },
    category: 'events',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
    date: '2025',
  },
  {
    id: 'gal-4',
    title: { en: 'Central Library & Digital Research Terminal', bn: 'কেন্দ্রীয় লাইব্রেরি ও ডিজিটাল রিসার্চ টার্মিনাল' },
    category: 'campus',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80',
    date: '2026',
  },
  {
    id: 'gal-5',
    title: { en: 'Garments CAD Pattern Engineering Studio', bn: 'গার্মেন্টস ক্যাড প্যাটার্ন ইঞ্জিনিয়ারিং স্টুডিও' },
    category: 'labs',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80',
    date: '2025',
  },
  {
    id: 'gal-6',
    title: { en: 'Inter-Department Cricket & Sports Tournament', bn: 'আন্তঃবিভাগ ক্রিকেট ও স্পোর্টস টুর্নামেন্ট' },
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1000&q=80',
    date: '2026',
  },
];

export const ALUMNI_DIRECTORY: AlumniProfile[] = [
  {
    id: 'alm-1',
    name: 'Md Shohidul Islam',
    batch: '14th Batch (2022)',
    program: 'B.Sc. in CSE',
    position: 'Front-End Developer',
    company: 'Brain Station 23',
    location: 'Dhaka, Bangladesh',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'alm-2',
    name: 'Khairul Islam Minhaj',
    batch: '15th Batch (2023)',
    program: 'B.Sc. in CSE',
    position: 'IT Infrastructure Executive',
    company: 'DBL Group',
    location: 'Gazipur, Bangladesh',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'alm-3',
    name: 'Azizul Islam',
    batch: '12th Batch (2021)',
    program: 'B.Sc. in CSE',
    position: 'Senior Software Engineer',
    company: 'Enosis Solutions',
    location: 'Dhaka, Bangladesh',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'alm-4',
    name: 'Farzana Yesmin',
    batch: '11th Batch (2020)',
    program: 'B.Sc. in FDT',
    position: 'Lead Apparel Designer',
    company: 'Beximco Apparels',
    location: 'Gazipur, Bangladesh',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'alm-5',
    name: 'Md. Tareq Rahman',
    batch: '13th Batch (2022)',
    program: 'B.Sc. in TST',
    position: 'Dyeing Master & QA Lead',
    company: 'Square Textiles Ltd',
    location: 'Mymensingh, Bangladesh',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'alm-6',
    name: 'Nusrat Jahan Bristy',
    batch: '16th Batch (2024)',
    program: 'Professional BBA',
    position: 'Senior Merchandiser',
    company: 'Ananta Apparels Ltd',
    location: 'Dhaka, Bangladesh',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
];

export const PARTNERS_PROJECTS = [
  { name: 'BGMEA-SEIP', category: 'Government & Skills Project', desc: 'Skills for Employment Investment Program' },
  { name: 'BWCCI-SEIP', category: 'Women Entrepreneurs', desc: 'Empowering female technicians in RMG' },
  { name: 'BACI-SEIP', category: 'Construction & Engineering', desc: 'Technical trade training initiatives' },
  { name: 'B-SkillFUL', category: 'Swisscontact Partnership', desc: 'SME worker development in Gazipur' },
  { name: 'Sudokkho', category: 'UK Aid / SDC', desc: 'Certified industrial sewing & maintenance' },
  { name: 'UNDP Bangladesh', category: 'UN Development', desc: 'Youth sustainable livelihood programs' },
  { name: 'Swisscontact', category: 'International NGO', desc: 'Dual-vocational education models' },
  { name: 'National Skills Development Authority', category: 'Prime Minister Office', desc: 'RPL Assessment Centre' },
];

export const FAQS = [
  {
    question: {
      en: 'What are the admission requirements for National University B.Sc. (Hons.) at BIST?',
      bn: 'বিআইএসটি-তে জাতীয় বিশ্ববিদ্যালয় অধিভুক্ত বি.এসসি (অনার্স) ভর্তির যোগ্যতা কী?',
    },
    answer: {
      en: 'Applicants must have passed SSC and HSC (or Diploma in Engineering) with a minimum GPA of 2.50 in both examinations from relevant science or equivalent backgrounds. Candidates can apply online or directly at the campus admission booth.',
      bn: 'আবেদনকারীকে বিজ্ঞান বা সংশ্লিষ্ট বিভাগ থেকে এসএসসি ও এইচএসসি অথবা সমমানের ডিপ্লোমা পরীক্ষায় উভয় ক্ষেত্রে ন্যূনতম জিপিএ ২.৫০ পেয়ে উত্তীর্ণ হতে হবে। অনলাইনে অথবা সরাসরি ক্যাম্পাসে এসে আবেদন করা যাবে।',
    },
    category: 'admissions',
  },
  {
    question: {
      en: 'Can Polytechnic Diploma-in-Engineering holders enroll directly in B.Sc. (Honours)?',
      bn: 'পলিটেকনিক ডিপ্লোমাধারীরা কি সরাসরি বি.এসসি (অনার্স) ইঞ্জিনিয়ারিংয়ে ভর্তি হতে পারবেন?',
    },
    answer: {
      en: 'Yes! Diploma graduates in Computer, Textile, Electrical, Garments, etc. from BTEB can enroll directly into B.Sc. (Hons.) in CSE, TST, AMT, and FDT with special fee waivers and credit equivalency.',
      bn: 'হ্যাঁ! কারিগরি শিক্ষা বোর্ডের অধীনে ৪ বছর মেয়াদি ডিপ্লোমা সম্পন্ন শিক্ষার্থীরা সরাসরি সিএসই, টিএসটি, এএমটি ও এফডিটি কোর্সে বিশেষ ওয়েভার ও ক্রেডিট সমন্বয়ের মাধ্যমে ভর্তি হতে পারবেন।',
    },
    category: 'admissions',
  },
  {
    question: {
      en: 'What scholarship facilities are available at BIST Gazipur?',
      bn: 'বিআইএসটি-তে কী কী স্কলারশিপ বা বৃত্তি সুবিধা রয়েছে?',
    },
    answer: {
      en: 'BIST offers up to 100% tuition fee waiver for 100 students every academic session based on merit and financial need. Additionally, students with GPA 5.00 in SSC and HSC receive special scholarships. Quotas are available for physically challenged students, female candidates, and ethnic minorities.',
      bn: 'প্রতি শিক্ষাবর্ষে ১০০ জন শিক্ষার্থীর জন্য ১০০% সম্পূর্ণ টিউশন ফি মওকুফ বৃত্তি পরীক্ষা অনুষ্ঠিত হয়। এছাড়া এসএসসি ও এইচএসসিতে জিপিএ ৫.০০ প্রাপ্তরা বিশেষ ওয়েভার পান। নারী শিক্ষার্থী, ক্ষুদ্র নৃগোষ্ঠী ও বিশেষ চাহিদাসম্পন্ন শিক্ষার্থীদের জন্য বিশেষ কোটা প্রযোজ্য।',
    },
    category: 'scholarships',
  },
  {
    question: {
      en: 'Is BIST recognized by National University, BTEB, and NSDA?',
      bn: 'বিআইএসটি কি জাতীয় বিশ্ববিদ্যালয়, কারিগরি বোর্ড ও এনএসডিএ অনুমোদিত?',
    },
    answer: {
      en: 'Yes, BIST holds official accreditations: National University College Code: 5526, Bangladesh Technical Education Board (BTEB) Code: 53098, and National Skills Development Authority (NSDA) Registered Training Organization Code: STP-GAZ-000020.',
      bn: 'হ্যাঁ, বিআইএসটি জাতীয় বিশ্ববিদ্যালয়ের কলেজ কোড ৫৫২৬, কারিগরি শিক্ষাবোর্ড কোড ৫৩০৯৮ এবং এনএসডিএ কোড STP-GAZ-000020 এর অধীনে পূর্ণাঙ্গ স্বীকৃতিপ্রাপ্ত।',
    },
    category: 'accreditation',
  },
  {
    question: {
      en: 'Where is the campus located and how can I visit?',
      bn: 'ক্যাম্পাসটি কোথায় অবস্থিত এবং কীভাবে যোগাযোগ করা যাবে?',
    },
    answer: {
      en: 'BIST is located at Unishe Tower, Mymensingh Road, Chandona Chowrasta, Gazipur-1702. For admissions, call 01913-555111, or for general queries call 01908-909090. WhatsApp is also available at +8801913555111.',
      bn: 'ক্যাম্পাসটি গাজীপুরের চান্দনা চৌরাস্তায় ময়মনসিংহ রোডে অবস্থিত উনিশে টাওয়ারে। ভর্তির জন্য সরাসরি ০১9১৩-৫৫৫১১১ নম্বরে এবং অফিসের জন্য ০১৯০৮-৯০৯০৯০ নম্বরে কল করুন।',
    },
    category: 'general',
  },
];
