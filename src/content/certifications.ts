export type Certification = {
  id: string;
  title: string;
  issuer: string;
  platform?: string;
  date: string;
  verifyUrl?: string;
};

// Order matters — rendered in this order, Oracle first by request.
export const certifications: Certification[] = [
  {
    id: "oracle-ai-foundations",
    title: "Oracle Cloud Infrastructure Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "September 6, 2026",
    verifyUrl: "/Oracle-AI-Foundations-Certificate.pdf",
  },
  {
    id: "epfl-oop-cpp",
    title: "Introduction à la programmation orientée objet (en C++)",
    issuer: "École Polytechnique Fédérale de Lausanne",
    platform: "Coursera",
    date: "April 24, 2025",
    verifyUrl: "https://coursera.org/verify/0XT1USN1SYCU",
  },
  {
    id: "ibm-python-ds-ai",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    platform: "Coursera",
    date: "April 25, 2025",
    verifyUrl: "https://coursera.org/verify/CLMO41OSOIPY",
  },
  {
    id: "jhu-unix-workbench",
    title: "The Unix Workbench",
    issuer: "Johns Hopkins University",
    platform: "Coursera",
    date: "April 24, 2025",
    verifyUrl: "https://coursera.org/verify/VYY5BKVQ34JQ",
  },
  {
    id: "hkust-software-engineering",
    title: "Software Engineering: Software Design and Project Management",
    issuer: "The Hong Kong University of Science and Technology",
    platform: "Coursera",
    date: "April 24, 2025",
    verifyUrl: "https://coursera.org/verify/9FR3IJJKTO4P",
  },
  {
    id: "meta-react-basics",
    title: "React Basics",
    issuer: "Meta",
    platform: "Coursera",
    date: "January 26, 2026",
    verifyUrl: "https://coursera.org/verify/6JLRSV40LGL4",
  },
  {
    id: "meta-react-native",
    title: "React Native",
    issuer: "Meta",
    platform: "Coursera",
    date: "January 25, 2026",
    verifyUrl: "https://coursera.org/verify/MR3HYWHFJVPX",
  },
  {
    id: "umich-js-interactivity",
    title: "Interactivity with JavaScript",
    issuer: "University of Michigan",
    platform: "Coursera",
    date: "April 24, 2025",
    verifyUrl: "https://coursera.org/verify/IPSNS0BJCBQR",
  },
  {
    id: "polytechnique-recherche-documentaire",
    title: "La recherche documentaire",
    issuer: "École Polytechnique",
    platform: "Coursera",
    date: "April 25, 2025",
    verifyUrl: "https://coursera.org/verify/XD5OYBT6SEDW",
  },
];
