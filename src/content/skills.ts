export type SkillCategory = {
  id: string;
  label: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    label: "AI & Machine Learning",
    items: [
      "Scikit-learn",
      "CatBoost",
      "XGBoost",
      "TensorFlow",
      "Keras",
      "Deep Learning",
      "NLP",
      "LLM",
      "RAG",
      "LangChain",
    ],
  },
  {
    id: "data-engineering",
    label: "Data Engineering",
    items: ["Hadoop", "Spark", "Talend", "Airflow"],
  },
  {
    id: "data-analysis",
    label: "Data Analysis & Visualization",
    items: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Tableau"],
  },
  {
    id: "software-engineering",
    label: "Software Engineering",
    items: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "SQL", "PL/SQL", "PHP", "VB.NET"],
  },
  {
    id: "web-development",
    label: "Web Development",
    items: ["React", "TypeScript", "HTML", "CSS", "Django", "Laravel"],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
  },
  {
    id: "tools-devops",
    label: "Tools & DevOps",
    items: ["Git", "GitHub", "Docker", "Jupyter", "VS Code", "Cisco Packet Tracer"],
  },
];
