export const profile = {
  name: "Kundan Kumar",
  title: "Data Science & Business Intelligence Developer",
  location: "Detroit, MI, USA",
  tagline:
    "Healthcare analytics + BI engineering + applied ML. Building executive dashboards, robust SQL/ETL pipelines, and ML prototypes that improve outcomes.",
  links: {
    email: "mailto:kundan.kumar864@gmail.com",
    github: "https://github.com/kundankr4",
    linkedin: "https://www.linkedin.com/in/kundankr4/",
    resume: "/K.K_Resume.pdf",
  },
  highlights: [
    { label: "Faster data extraction", value: "35%" },
    { label: "Reduced manual reporting", value: "60%" },
    { label: "Patient feedback improvement", value: "22%" },
    { label: "YOLOv8 accuracy", value: "95%" },
  ],
  aboutBullets: [
    "Healthcare analytics professional focused on patient experience and survey reporting (Press Ganey, CAHPS).",
    "Strong in SQL, Azure DW/ETL, data modeling, and Power BI dashboard development for leadership.",
    "Built ML prototypes and deployed apps (Flask on AWS) for public health / predictive analytics use cases.",
    "Hands-on computer vision + robotics: YOLOv8 fine-tuning and simulation workflows (NVIDIA Isaac Sim).",
  ],
skills: {
  "Data Engineering": [
    "SQL",
    "Advanced T-SQL",
    "ETL / ELT Pipelines",
    "Data Modeling (Star / Snowflake)",
    "Azure Data Warehouse",
    "Azure Synapse",
    "Microsoft Fabric",
    "SQL Server",
    "Data Warehousing",
    "Data Transformation",
    "Data Validation",
    "Dimensional Modeling"
  ],

  "Cloud & Big Data": [
    "AWS",
    "Azure",
    "Amazon S3",
    "Azure Data Factory",
    "Cloud Storage",
    "Distributed Data Processing"
  ],

  "Data & BI": [
    "Power BI",
    "DAX",
    "Tableau",
    "Advanced Excel",
    "Dashboard Development",
    "KPI Reporting",
    "Press Ganey Analytics",
    "Healthcare Analytics"
  ],

  "Machine Learning & AI": [
    "Python",
    "Scikit-learn",
    "XGBoost",
    "TensorFlow / Keras",
    "Computer Vision",
    "YOLOv8",
    "Feature Engineering",
    "Model Evaluation",
    "Transfer Learning"
  ],

  "Programming & Dev Tools": [
    "Python",
    "Git",
    "GitHub",
    "Flask",
    "REST APIs",
    "Jupyter Notebook",
    "Linux",
    "Shell Scripting"
  ],

  "Healthcare Data Systems": [
    "EPIC Clarity",
    "EPIC Caboodle",
    "CMS Reporting",
    "HCAHPS / CAHPS",
    "Patient Experience Analytics"
  ]
},
  experience: [
    {
      company: "Henry Ford Health",
      role: "Analyst – Experience Analytics",
      dates: "Feb 2025 – Present",
      bullets: [
        "Develop and maintain Power BI dashboards for patient experience reporting and executive reviews.",
        "Build SQL extracts and validation pipelines; improve reliability and turnaround time for stakeholders.",
        "Support survey programs and training sessions for leadership and service line users.",
      ],
      tech: ["Power BI", "SQL", "Azure DW", "Excel"],
    },
    {
      company: "Henry Ford Health",
      role: "CX Insights & Analytics Intern/Co-Op",
      dates: "May 2024 – Feb 2025",
      bullets: [
        "Supported patient experience reporting workflows and dashboard enhancements.",
        "Performed data QA and metric checks to ensure accurate reporting for decision-makers.",
      ],
      tech: ["Power BI", "SQL", "Data QA"],
    },
    {
      company: "IndustryX",
      role: "Data Science in Robotics (Practicum)",
      dates: "May 2024 – Jul 2024",
      bullets: [
        "Fine-tuned YOLOv8 for fastener detection; evaluated performance and improved robustness.",
        "Worked with simulation and 3D workflows for automated disassembly and geometry capture.",
      ],
      tech: ["Python", "YOLOv8", "Isaac Sim", "Computer Vision"],
    },
    {
      company: "Eve Healthcare Centers",
      role: "Machine Learning Intern",
      dates: "Jun 2022 – Dec 2022",
      bullets: [
        "Built predictive models and experiments for healthcare-related analytics problems.",
        "Collaborated with stakeholders to translate requirements into measurable outcomes.",
      ],
      tech: ["Python", "ML", "Analytics"],
    },
    {
      company: "5ONE Analytics (India)",
      role: "Data Scientist",
      dates: "Jan 2021 – May 2022",
      bullets: [
        "Developed analytics solutions and dashboards; supported business reporting and insights workflows.",
        "Worked on data preparation and model experimentation for applied analytics use cases.",
      ],
      tech: ["SQL", "Python", "BI"],
    },
  ],
  projects: [
    {
      name: "Chronic Disease Trend Analysis (Flask + AWS)",
      description:
        "Web app to explore chronic disease trends using multiple ML models and interactive visuals.",
      tech: ["Python", "Flask", "AWS", "XGBoost", "Random Forest"],
      link: "https://github.com/kundankr4/US_ChronicDisease_Analysis",
      image: "/projects/chronic-disease.png",
    },
    {
      name: "Indegene Pharmaceutical Analytics (ATC3/ATC4 Market Study)",
      description:
        "Performed therapeutic area (ATC3) and molecule (ATC4) prioritization using Python, Pandas, and weighted scoring; built visual insights for growth, competition, channels, and pricing.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Excel"],
      link: "https://github.com/kundankr4/Indegen_Analytics",
      image: "/projects/IndegeneAnalytics.png",
    },
     {
      name: "Zillow Real Estate Price Prediction (ML Regression)",
      description:
        "Performed therapeutic area (ATC3) and molecule (ATC4) prioritization using Python, Pandas, and weighted scoring; built visual insights for growth, competition, channels, and pricing.",
      tech: ["Python", "NumPy", "Pandas", "Scikit-learn", "XGBoost", "Matplotlib", "Seaborn", "Yellowbrick"],
      link: "https://github.com/kundankr4/REAL-ESTATE-ANALYSIS",
      image: "/projects/Zillow.png",
    },
    {
     name: "Bird Species Image Classification (EfficientNetB3)",
      description:
        "Built an end-to-end bird species image classification pipeline using transfer learning with EfficientNetB3. Implemented data loading, preprocessing, augmentation, training, fine-tuning (unfreezing top layers with lower learning rate), and evaluation. Achieved ~99% test accuracy and visualized confident misclassifications to identify improvement areas.",
      tech: ["Python", "TensorFlow / Keras", "EfficientNetB3", "Transfer Learning", "Fine-Tuning", "Image Augmentation", "Computer Vision", "Matplotlib", "Seaborn",
  ],
      link: "https://github.com/kundankr4/BIRD-IMAGE-CLASSIFICATION-EfficientNetB0-model",
      image: "/projects/birdclassification.png",
    },
  ],
  education: [
    {
      school: "Wayne State University",
      degree: "M.S. Data Science & Business Analytics",
      dates: "Dec 2024",
    },
  ],
  certifications: ["Udemy Certifications (selected)"],
};