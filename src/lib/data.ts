export const PERSONAL = {
  name: "Arpit Sutariya",
  firstName: "Arpit",
  lastName: "Sutariya",
  title: "Data Scientist & ML Engineer",
  email: "arpitsutariya13@gmail.com",
  phone: "+1 (408)-385-4081",
  location: "Los Angeles, California",
  linkedin: "https://www.linkedin.com/in/arpitsutariya/",
  github: "https://github.com/",
  tagline:
    "Turning raw data into decisions. I build predictive models, AI agents, and analytics systems that bridge complex engineering with real-world impact.",
};

export const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "R", "SQL", "PL/SQL", "C/C++", "JavaScript", "Bash"],
  },
  {
    category: "ML & Deep Learning",
    items: [
      "scikit-learn",
      "PyTorch",
      "TensorFlow",
      "XGBoost",
      "CNN",
      "RNN / LSTM",
      "Transformers",
    ],
  },
  {
    category: "Statistical Methods",
    items: [
      "Regression",
      "Classification",
      "Clustering",
      "A/B Testing",
      "Time Series",
      "Bayesian Methods",
      "Experimental Design",
    ],
  },
  {
    category: "LLMs & AI Agents",
    items: [
      "LangChain",
      "LangGraph",
      "GPT-4",
      "RAG",
      "LoRA / QLoRA",
      "PEFT",
      "Prompt Engineering",
    ],
  },
  {
    category: "Data & Visualization",
    items: ["Pandas", "NumPy", "SciPy", "Plotly", "Tableau", "Power BI", "Seaborn"],
  },
  {
    category: "Infrastructure",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "AWS (EC2, S3)",
      "CI/CD",
      "REST APIs",
      "Streamlit",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Data Scientist Intern",
    company: "RelTime Pvt. Ltd",
    location: "Mumbai, India",
    period: "May 2024 — Aug 2024",
    bullets: [
      "Analyzed 2M+ daily transaction records using Python and SQL; performed EDA, hypothesis testing, and feature engineering to identify key revenue drivers informing pricing strategy changes.",
      "Built predictive models (Logistic Regression, Random Forest, XGBoost) to forecast customer behavior; validated with cross-validation and communicated via Tableau/Power BI dashboards.",
      "Developed a data quality framework with Great Expectations for anomaly detection, catching 95% of issues pre-production and reducing data prep time by 40%.",
    ],
  },
  {
    role: "Data Science & ML Intern",
    company: "Vidyavardhini's College of Engineering & Technology",
    location: "Mumbai, India",
    period: "Jan 2023 — May 2023",
    bullets: [
      "Curated datasets from 15+ web sources using BeautifulSoup, Scrapy & Selenium; designed MongoDB schemas and ETL workflows, boosting data collection efficiency by 37%.",
      "Developed an NLP text classification model using TF-IDF and ensemble methods (Logistic Regression, Random Forest, XGBoost), achieving 82% accuracy and 0.79 F1-score.",
      "Built a Flask REST API with Redis caching for model serving, reducing inference latency by 35%.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Codeflow",
    subtitle: "Real Time Collaborative Code Editor",
    description:
      "Real-time collaborative code editor with conflict resolution using Operational Transformation (OT). Features delta-based change tracking, multi-user concurrent edits, and owner-controlled accept/reject workflows. Includes dual-mode support for live preview (HTML, CSS, JS) and multi-language code execution (C++, Java, Python, JS).",
    tech: ["Python", "Flask", "JavaScript", "Socket.io", "Redux", "React"],
    link: "https://github.com/arpit-sutariya/codeflow",
    metrics: [
      { value: "30%", label: "Better persistence" },
      { value: "OT", label: "Conflict resolution" },
    ],
  },
  {
    title: "ChatMyDB",
    subtitle: "Natural Language Data Exploration",
    description:
      "NL-to-SQL/NoSQL system using GPT-4 with schema-aware prompting. Enables non-technical users to run complex aggregations, joins, and time-series queries without writing SQL — reducing manual query effort by 70%. Query validation pipeline achieves 92% first-pass accuracy.",
    tech: ["Python", "GPT-4", "PostgreSQL", "MongoDB", "Streamlit", "Plotly"],
    link: "#", // Replace with your actual GitHub link
    metrics: [
      { value: "70%", label: "Less manual effort" },
      { value: "92%", label: "Query accuracy" },
    ],
  },
  {
    title: "OpsBrainLLM",
    subtitle: "AI-Powered Manufacturing Analytics",
    description:
      "Multi-agent analytics system built with LangGraph that performs end-to-end manufacturing data analysis: automated SQL querying, regression analysis, K-Means clustering, ANOVA, and correlation analysis on factory sensor data with auto-generated visualizations.",
    tech: ["LangChain", "LangGraph", "OpenAI", "PostgreSQL", "Streamlit", "Plotly"],
    link: "#", // Replace with your actual GitHub link
    metrics: [
      { value: "6", label: "Analysis types" },
      { value: "E2E", label: "Automation" },
    ],
  },
  {
    title: "GymAI",
    subtitle: "Fitness Analytics Platform",
    description:
      "Computer vision pipeline using MediaPipe Pose to track joint angles across 6 exercises in real time. Signal processing and angle interpolation count reps with high precision, with aggregate analytics displayed on a React dashboard.",
    tech: ["Python", "Flask", "React", "MediaPipe", "PostgreSQL"],
    link: "#", // Replace with your actual GitHub link
    metrics: [
      { value: "6", label: "Exercises tracked" },
      { value: "RT", label: "Real-time" },
    ],
  },
];

export const EDUCATION = [
  {
    school: "University of Southern California",
    degree: "M.S. in Applied Data Science",
    gpa: "GPA: 3.7/4",
    period: "Jan 2025 — Dec 2026",
    location: "Los Angeles, CA",
    coursework:
      "Machine Learning, Data Mining, Database Systems, Research Methods & Statistical Analysis",
  },
  {
    school: "University of Mumbai",
    degree: "B.Tech in Computer Science & Engineering (Data Science)",
    gpa: "GPA: 8.84/10",
    period: "Sep 2020 — May 2024",
    location: "Mumbai, India",
    coursework:
      "Data Structures & Algorithms, Probability & Statistics, Cloud Computing, Operating Systems",
  },
];

export const NAV_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
