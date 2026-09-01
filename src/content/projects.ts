export type ProjectVisualKey =
  | "vision"
  | "analytics"
  | "agent"
  | "datalake"
  | "nlp"
  | "bi";

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  visual: ProjectVisualKey;
  pipeline?: string[];
  // Add a live/repo URL here once available.
  link?: string;
};

export const projects: Project[] = [
  {
    id: "deepfake-detection",
    index: "01",
    title: "Deepfake Detection System",
    category: "AI / Computer Vision",
    description:
      "Image and video classification system to detect manipulated, falsified content.",
    tech: ["Python", "TensorFlow", "Keras", "Deep Learning", "CNN", "Computer Vision"],
    visual: "vision",
  },
  {
    id: "churn-prediction",
    index: "02",
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    description:
      "Predictive model to anticipate customer churn, built on a full data preprocessing and modeling pipeline.",
    tech: ["Python", "Pandas", "Scikit-learn", "CatBoost", "XGBoost"],
    visual: "analytics",
  },
  {
    id: "tech-watch-agent",
    index: "03",
    title: "AI Agent — Automated Tech Watch",
    category: "AI Agents",
    description:
      "Intelligent agent that automates technology watch end-to-end, from collection to classification.",
    tech: ["Python", "Django", "SQLite", "HTML", "Tailwind CSS"],
    visual: "agent",
    pipeline: ["Collection", "Filtering", "Classification", "Tech Watch"],
  },
  {
    id: "weather-data-lake",
    index: "04",
    title: "Weather Data Lake Architecture",
    category: "Data Engineering",
    description: "Data Lake architecture designed for weather data.",
    tech: ["Hadoop", "Spark", "Python"],
    visual: "datalake",
  },
  {
    id: "review-sentiment",
    index: "05",
    title: "Customer Review Sentiment Analysis",
    category: "NLP",
    description:
      "Classification of customer reviews into Positive, Negative and Neutral sentiment.",
    tech: ["Python", "NLP", "Scikit-learn"],
    visual: "nlp",
  },
  {
    id: "bi-dashboards",
    index: "06",
    title: "Business Intelligence Dashboards",
    category: "Business Intelligence",
    description:
      "Decision-making dashboards for sales analysis, commercial performance tracking, KPI visualization and decision support.",
    tech: ["Power BI", "Excel"],
    visual: "bi",
  },
];
