export type ProjectVisualKey =
  | "vision"
  | "analytics"
  | "agent"
  | "datalake"
  | "nlp"
  | "bi"
  | "webapp"
  | "database"
  | "oop"
  | "ecommerce"
  | "coworking"
  | "network";

export const projectCategories = [
  "AI & DATA",
  "SOFTWARE ENGINEERING",
  "WEB DEVELOPMENT",
  "BIG DATA",
  "BUSINESS INTELLIGENCE",
  "NETWORKING",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  id: string;
  title: string;
  categories: ProjectCategory[];
  description: string;
  tech: string[];
  visual: ProjectVisualKey;
  pipeline?: string[];
  status?: string;
  // Add a live/repo URL here once available.
  link?: string;
};

export const projects: Project[] = [
  {
    id: "deepfake-detection",
    title: "Deepfake Detection System",
    categories: ["AI & DATA"],
    description:
      "Image and video classification system to detect manipulated, falsified content.",
    tech: ["Python", "TensorFlow", "Keras", "Deep Learning", "CNN", "Computer Vision"],
    visual: "vision",
  },
  {
    id: "churn-prediction",
    title: "Customer Churn Prediction",
    categories: ["AI & DATA"],
    description:
      "Predictive model to anticipate customer churn, built on a full data preprocessing and modeling pipeline.",
    tech: ["Python", "Pandas", "Scikit-learn", "CatBoost", "XGBoost"],
    visual: "analytics",
  },
  {
    id: "tech-watch-agent",
    title: "AI Agent — Automated Tech Watch",
    categories: ["AI & DATA"],
    description:
      "Intelligent agent that automates technology watch end-to-end, from collection to classification.",
    tech: ["Python", "Django", "SQLite", "HTML", "Tailwind CSS"],
    visual: "agent",
    pipeline: ["Collection", "Filtering", "Classification", "Tech Watch"],
  },
  {
    id: "weather-data-lake",
    title: "Weather Data Lake Architecture",
    categories: ["BIG DATA"],
    description: "Data Lake architecture designed for weather data.",
    tech: ["Hadoop", "Spark", "Python"],
    visual: "datalake",
  },
  {
    id: "review-sentiment",
    title: "Customer Review Sentiment Analysis",
    categories: ["AI & DATA"],
    description:
      "Classification of customer reviews into Positive, Negative and Neutral sentiment.",
    tech: ["Python", "NLP", "Scikit-learn"],
    visual: "nlp",
  },
  {
    id: "bi-dashboards",
    title: "Business Intelligence Dashboards",
    categories: ["BUSINESS INTELLIGENCE"],
    description:
      "Decision-making dashboards for sales analysis, commercial performance tracking, KPI visualization and decision support.",
    tech: ["Power BI", "Excel"],
    visual: "bi",
  },
  {
    id: "task-management",
    title: "Task Management Web Application",
    categories: ["SOFTWARE ENGINEERING", "WEB DEVELOPMENT"],
    description:
      "Design and development of a responsive web interface for managing and tracking tasks.",
    tech: ["React", "TypeScript", "HTML", "CSS"],
    visual: "webapp",
  },
  {
    id: "security-personnel-management",
    title: "Security Personnel Management Application",
    categories: ["SOFTWARE ENGINEERING", "WEB DEVELOPMENT"],
    description: "Creation of a database management system for managing security personnel.",
    tech: ["Laravel", "PHP", "HTML", "CSS"],
    visual: "database",
  },
  {
    id: "railway-station-management",
    title: "Railway Station Management Application",
    categories: ["SOFTWARE ENGINEERING"],
    description:
      "Object-oriented implementation of a railway station management application, covering trains, passengers and tickets, with a reservation and tracking system.",
    tech: ["C++", "Object-Oriented Programming"],
    visual: "oop",
  },
  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    categories: ["WEB DEVELOPMENT"],
    description: "Development of an e-commerce website with product and user management.",
    tech: ["Python", "Django"],
    visual: "ecommerce",
  },
  {
    id: "coworking-management",
    title: "Co-Working Space Management Application",
    categories: ["WEB DEVELOPMENT", "SOFTWARE ENGINEERING"],
    description:
      "Management application for a co-working space, covering space reservations, member management and service management.",
    tech: ["Python", "Django"],
    visual: "coworking",
    status: "In Progress",
  },
  {
    id: "network-simulation",
    title: "Computer Network Simulation",
    categories: ["NETWORKING"],
    description: "Configuration and simulation of a computer network.",
    tech: ["Cisco Packet Tracer"],
    visual: "network",
  },
];
