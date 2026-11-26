export const PERSONAL = {
  name: "Arpit Sutariya",
  firstName: "Arpit",
  lastName: "Sutariya",
  title: "Data & ML Engineer",
  email: "arpitsutariya13@gmail.com",
  phone: "+1 (408) 385-4081",
  location: "Los Angeles, California",
  linkedin: "https://www.linkedin.com/in/arpit-sutariya-6194a5223",
  github: "https://github.com/arpit-sutariya",
  status: "Software Engineering Intern @ Amazon Music · Summer 2026",
  tagline:
    "I build data pipelines, retrieval systems, and AI agents that are safe to trust: from PySpark jobs on EMR and Airflow-orchestrated warehouses to LLM agents with human approval, evals, and failure testing built in.",
};

export const HIGHLIGHTS = [
  { value: "416K", label: "LLM-generated training pairs shipped at Amazon" },
  { value: "3×", label: "Faster BigQuery workloads (2.5s → 0.8s)" },
  { value: "95%", label: "Data issues caught before production" },
  { value: "102/102", label: "Data-access attacks refused by my SQL agent" },
];

export const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "SQL", "PL/SQL", "HiveQL", "SparkSQL", "Scala", "Java", "Bash", "JavaScript", "C/C++"],
  },
  {
    category: "Big Data & Distributed",
    items: ["Apache Spark", "PySpark", "Hadoop", "Hive", "EMR", "Kafka", "Databricks"],
  },
  {
    category: "AWS",
    items: ["Redshift", "S3", "Glue", "EMR", "Kinesis", "Firehose", "Lambda", "Athena", "IAM", "CloudWatch", "SageMaker", "Bedrock"],
  },
  {
    category: "Warehousing & Modeling",
    items: ["Snowflake", "Redshift", "BigQuery", "PostgreSQL", "MySQL", "Star / Snowflake Schema", "Dimensional Modeling", "SCD", "Normalization"],
  },
  {
    category: "Orchestration & ETL",
    items: ["Apache Airflow", "dbt", "AWS Step Functions", "Git", "GitHub Actions", "CI/CD", "Docker", "Kubernetes"],
  },
  {
    category: "GenAI & Analytics",
    items: ["LangChain", "LangGraph", "LLMs", "RAG", "Claude API", "FAISS", "OpenSearch", "PyTorch", "scikit-learn", "Tableau", "Power BI"],
  },
];

export type Experience = {
  role: string;
  company: string;
  team?: string;
  location: string;
  period: string;
  latest?: boolean;
  bullets: string[];
  tags: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Engineering Intern",
    company: "Amazon",
    team: "Amazon Music",
    location: "San Francisco, CA",
    period: "May 2026 — Aug 2026",
    latest: true,
    bullets: [
      "Mined millions of search log records in PySpark on AWS EMR to isolate low-fulfillment queries and their canonical query-to-entity associations, producing a clean dataset the team could use for training and retrieval evaluation.",
      "Built an LLM-powered training data pipeline with Claude (Sonnet) on AWS Bedrock, using schema validation and an LLM-as-judge quality step to produce 416K training pairs with lineage that made failures easy to trace back.",
      "Ran benchmarking with Cohere embeddings and FAISS candidate recall, then fine-tuned the OpenSearch neural sparse encoder on the generated pairs, beating the character-level baseline and shaping the team's final retrieval strategy.",
    ],
    tags: ["PySpark", "AWS EMR", "Bedrock", "Claude", "FAISS", "OpenSearch", "Cohere"],
  },
  {
    role: "Graduate Research Assistant, Data Engineering & Analytics",
    company: "University of Southern California",
    team: "Viterbi School of Engineering",
    location: "Los Angeles, CA",
    period: "Aug 2025 — Apr 2026",
    bullets: [
      "Tuned Google BigQuery workloads through table partitioning, clustering, and execution-plan refinement, cutting query latency from 2.5s to 0.8s on 10M-record datasets and bringing down recurring compute costs.",
      "Built Python and SQL ETL pipelines that process 50K documents end to end, with monitoring, retries, and data quality checks in place, and automated recurring research jobs that cut manual runtime by 40%.",
      "Designed an agentic data workflow with LangGraph to orchestrate multi-step ingestion, transformation, and validation across LLM calls, laying the groundwork for AI-assisted analytics and cutting manual review time by 50%.",
    ],
    tags: ["BigQuery", "Python", "SQL", "ETL", "LangGraph"],
  },
  {
    role: "Data Scientist Intern",
    company: "RelTime Pvt. Ltd",
    location: "Mumbai, India",
    period: "May 2024 — Aug 2024",
    bullets: [
      "Worked with 2M daily records to surface business insights, writing SQL and Python for feature engineering, EDA, and statistical hypothesis testing, and building scikit-learn models to back the findings.",
      "Caught 95% of data issues before production by putting together an automated data quality framework with Great Expectations, layered with anomaly detection and schema-drift monitoring.",
      "Cut data-prep time by 40% by tuning SQL queries and ETL pipelines and shipping Tableau and Power BI dashboards on top of a star-schema data model the business team could actually navigate.",
    ],
    tags: ["SQL", "Python", "scikit-learn", "Great Expectations", "Tableau", "Power BI"],
  },
  {
    role: "Web Developer Intern",
    company: "Vidyavardhini's College of Engineering & Technology",
    location: "Mumbai, India",
    period: "Jan 2023 — May 2023",
    bullets: [
      "Built a full-stack web application using React and Flask, extracting and displaying data from user-provided sources, with Tailwind CSS for a responsive UI and JWT authentication for secure access.",
      "Reduced API latency by 35% and supported 500+ concurrent users through Redis caching and optimized RESTful API design with request validation.",
      "Developed a text classification feature using scikit-learn with TF-IDF vectorization, achieving 82% accuracy and exposing predictions via REST endpoints.",
    ],
    tags: ["React", "Flask", "Redis", "REST", "scikit-learn"],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link?: string;
  metrics: { value: string; label: string }[];
};

const GH = "https://github.com/arpit-sutariya";

/** Featured: AI agents with human approval, evals, and failure testing. */
export const AGENT_PROJECTS: Project[] = [
  {
    title: "Incident Copilot",
    subtitle: "On-call agent that investigates, proposes, and verifies",
    description:
      "When an alert fires, the copilot investigates logs, metrics, deploy history, and dependencies across a simulated 3-service shop with real broken code paths, then proposes one allowlisted fix. A person approves it, and recovery is verified on 40+ real requests. Ships with a web console, an MCP server for Claude Desktop, and an end-to-end eval with decoy deploys.",
    tech: ["Python", "Claude", "MCP", "FastAPI", "SQLite"],
    link: `${GH}/incident-copilot`,
    metrics: [
      { value: "20/24", label: "Incidents fixed" },
      { value: "4/4", label: "Wrong fixes caught" },
      { value: "0", label: "Unapproved actions" },
    ],
  },
  {
    title: "Scoped SQL Agent",
    subtitle: "Plain-English analytics with database-enforced permissions",
    description:
      "Reconciles messy ERP, CRM, and support-API data into a warehouse, logging all 203 conflicts it finds. Each user's session is a private in-memory database holding only the rows and columns they may see, so no prompt can leak another region's numbers. Exposed as an MCP server for Claude Desktop and a CLI agent.",
    tech: ["Python", "Claude", "MCP", "SQLite", "FastAPI"],
    link: `${GH}/scoped-sql-agent`,
    metrics: [
      { value: "102/102", label: "Attacks refused" },
      { value: "0", label: "Values leaked" },
      { value: "203", label: "Conflicts logged" },
    ],
  },
  {
    title: "Event Prep Agent",
    subtitle: "Crash-safe calendar and email planning agent",
    description:
      "Turns one sentence into an approved prep plan (prep blocks, rehearsal, reminder email) and keeps watching the calendar for conflicts. LangGraph state is checkpointed to SQLite so plans survive a crash at any step; idempotent bookings and an outbox state machine prevent duplicates. Stress-tested with a randomized failure simulator.",
    tech: ["Python", "LangGraph", "Claude", "FastAPI", "fastembed"],
    link: `${GH}/event-prep-agent`,
    metrics: [
      { value: "300", label: "Chaos runs" },
      { value: "292", label: "Crashes survived" },
      { value: "0", label: "Duplicate emails" },
    ],
  },
  {
    title: "Invoice Agent",
    subtitle: "Accounts-payable automation with an audit trail",
    description:
      "Reads supplier invoice PDFs, checks them against purchase orders in an ERP, auto-approves clean ones, and routes the rest to a reviewer with the reason identified. The LLM only extracts fields; every decision is deterministic code, logged, and reversible. Evaluated on 120 labelled invoices, including a flaky-ERP run.",
    tech: ["Python", "FastAPI", "React", "Claude", "SQLAlchemy", "pdfplumber"],
    link: `${GH}/invoice-agent`,
    metrics: [
      { value: "100/100", label: "Correct outcomes" },
      { value: "0", label: "False approvals" },
    ],
  },
  {
    title: "Store Assistant",
    subtitle: "Shopping and support agent for an online store",
    description:
      "Answers policy, order-tracking, and returns questions with verified citations, and hands off to a human when it should. Hybrid search (keywords + embeddings) with enforced filters for price, metal, and size, plus search-by-photo with CLIP. The model can only prepare a return; the customer's click confirms it.",
    tech: ["Python", "Claude", "FastAPI", "fastembed", "CLIP", "SSE"],
    link: `${GH}/store-agent`,
    metrics: [
      { value: "40/40", label: "Relevant result first" },
      { value: "0%", label: "Constraint violations" },
    ],
  },
  {
    title: "Home Repair Check",
    subtitle: "Photo-based home repair triage",
    description:
      "Snap a photo and describe the problem to get the likely issue, urgency, who to call, sourced cost ranges, a quote check, and real local pros. Safety rules run before any AI, and prices come from a knowledge file, never the model. Includes a live eval page with a confusion matrix and calibration diagram.",
    tech: ["Python", "FastAPI", "fastembed", "Claude", "OpenStreetMap"],
    link: `${GH}/home-repair-check`,
    metrics: [
      { value: "81%", label: "Photo accuracy" },
      { value: "92%", label: "Text accuracy" },
      { value: "138", label: "Tests" },
    ],
  },
];

/** Data engineering & analytics. */
export const DATA_PROJECTS: Project[] = [
  {
    title: "Streaming Analytics Pipeline",
    subtitle: "Device engagement events, end to end",
    description:
      "Streaming ELT that ingests playback, clickstream, and lifecycle events through Kinesis → Firehose → S3, catalogs them with Glue, and loads a Redshift star schema. Airflow runs incremental loads and SCD Type 2 refreshes; quality checks fire CloudWatch alarms and trigger backfills.",
    tech: ["PySpark", "Kinesis", "Firehose", "Glue", "Redshift", "Airflow"],
    metrics: [
      { value: "SCD2", label: "Dimension history" },
      { value: "Auto", label: "Backfill on failure" },
    ],
  },
  {
    title: "Ad Performance Warehouse",
    subtitle: "ETL & dimensional data modeling",
    description:
      "Dimensional warehouse (impression, click, and conversion facts with conformed dimensions) for multi-touch attribution. dbt incremental models with freshness tests and ~100 data quality assertions, with Spark on EMR processing the daily load.",
    tech: ["Spark on EMR", "dbt", "Redshift", "S3", "Airflow"],
    metrics: [
      { value: "20M", label: "Daily events" },
      { value: "35%", label: "Faster runtime" },
    ],
  },
  {
    title: "ChatMyDB",
    subtitle: "GenAI self-service analytics layer",
    description:
      "Natural-language-to-SQL that routes questions between PostgreSQL and MongoDB using schema introspection and a semantic catalog, with a validation step that checks generated SQL against the live schema and retries on failure.",
    tech: ["Python", "Claude API", "PostgreSQL", "MongoDB", "LangChain"],
    link: `${GH}/chatdb21`,
    metrics: [
      { value: "92%", label: "First-pass accuracy" },
      { value: "SQL+NoSQL", label: "Query routing" },
    ],
  },
  {
    title: "OpsBrainLLM",
    subtitle: "Multi-agent manufacturing analytics",
    description:
      "Five specialized LangGraph agents for NL-to-SQL querying, statistical analysis (regression, clustering, ANOVA), predictive modeling, and auto-generated visualizations on factory sensor data.",
    tech: ["LangGraph", "LangChain", "PostgreSQL", "Streamlit", "Plotly"],
    link: `${GH}/opsbrainLLM`,
    metrics: [
      { value: "5", label: "Agents" },
      { value: "E2E", label: "Automation" },
    ],
  },
];

/** Compact list of earlier work. */
export const MORE_PROJECTS = [
  {
    title: "Code Review Bot",
    description: "Serverless GitHub Actions bot that reviews PR diffs with Claude & GPT-4o.",
    tech: "Python · GitHub Actions",
    link: `${GH}/code-review-bot`,
  },
  {
    title: "Codeflow",
    description: "Real-time collaborative code editor with Operational Transformation and multi-language execution.",
    tech: "React · Flask · Socket.io",
    link: `${GH}/codeflow`,
  },
  {
    title: "GymAI",
    description: "Real-time pose estimation and rep counting across 6 exercises with a React dashboard.",
    tech: "MediaPipe · Flask · React",
    link: `${GH}/GymAI-Intelligent-Gym-Trainer`,
  },
  {
    title: "Autopilot",
    description: "Perception and path planning: YOLOv7 detection, MiDaS depth, bird's-eye view, and A* routing.",
    tech: "Python · YOLOv7 · MiDaS",
    link: `${GH}/autopilot`,
  },
];

export const EDUCATION = [
  {
    school: "University of Southern California",
    degree: "M.S. in Applied Data Science",
    gpa: "GPA 3.7 / 4",
    period: "Jan 2025 — Dec 2026",
    location: "Los Angeles, CA",
    coursework: [
      "Database Systems",
      "Foundations of Data Management",
      "Foundations of Data Mining",
      "Machine Learning",
    ],
  },
  {
    school: "University of Mumbai",
    degree: "B.Tech in Computer Science & Engineering (Data Science)",
    gpa: "GPA 8.84 / 10",
    period: "Sep 2020 — May 2024",
    location: "Mumbai, India",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Object Oriented Software Engineering",
    ],
  },
];

export const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
