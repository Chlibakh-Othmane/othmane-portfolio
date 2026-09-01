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
    label: "Data Analysis",
    items: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Tableau"],
  },
  {
    id: "backend",
    label: "Backend / Programming",
    items: ["Python", "SQL", "Java", "C"],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
  },
  {
    id: "devops-tools",
    label: "DevOps / Tools",
    items: ["Git", "GitHub", "Docker", "Jupyter", "VS Code"],
  },
];
