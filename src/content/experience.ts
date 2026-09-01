export type Experience = {
  id: string;
  index: string;
  role: string;
  org: string;
  dates?: string;
  project?: string;
  summary?: string;
  tracks?: {
    label: string;
    items: string[];
  }[];
  lifecycle?: string[];
};

export const experiences: Experience[] = [
  {
    id: "amane",
    index: "01",
    role: "Full-Stack & AI Engineering Intern",
    org: "Fondation Amane pour la Protection de l'Enfance",
    summary:
      "During my internship at Fondation Amane pour la Protection de l'Enfance, I took part in designing and building a management application to digitalize and streamline the tracking of the full project lifecycle.",
    tracks: [
      {
        label: "Full-Stack Development",
        items: [
          "Application architecture design",
          "User interface development",
          "Database management",
          "Data access layers",
          "Business logic",
          "Project management",
          "Partner management",
          "Budget management",
          "Administrative document management",
          "Submission management",
          "Contract management",
          "Report management",
          "Tracking of the different stages of a project's lifecycle",
        ],
      },
      {
        label: "Artificial Intelligence",
        items: [
          "Integration of intelligent features",
          "Automation of certain tasks",
          "Leveraging available data",
          "Improving decision support",
        ],
      },
    ],
    lifecycle: [
      "Planning",
      "Submission",
      "Partners",
      "Contracts",
      "Budget",
      "Reports",
      "Monitoring",
    ],
  },
  {
    id: "menps",
    index: "02",
    role: "Web Developer",
    org: "Ministère de l'Éducation Nationale, du Préscolaire et du Sport — DSI Rabat",
    project: "Cybersecurity Awareness Web Application",
    summary:
      "Development of a web application for the Ministry's employees, raising awareness on cybersecurity.",
  },
  {
    id: "emsi",
    index: "03",
    role: "Student Ambassador",
    org: "Centre de Carrière EMSI — Rabat",
    dates: "2025 — Present",
  },
];
