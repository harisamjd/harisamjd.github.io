export interface SubCertificate {
  title: string;
  url: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  url: string;
  type: "Certification" | "Training";
  logoKey: string;
  credentialUrl?: string;
  subCertificates?: SubCertificate[];
}

export const certificates: Certificate[] = [
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google (via Coursera)",
    issueDate: "2024",
    url: "/docs/1.0 Data Analytics Main.pdf",
    type: "Certification",
    logoKey: "google-coursera",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/R3TT2G7UYXVJ",
    subCertificates: [
      {
        title: "1. Foundations: Data, Data, Everywhere",
        url: "/docs/1.1 Data Analytics Foundation.pdf"
      },
      {
        title: "2. Ask Questions to Make Data-Driven Decisions",
        url: "/docs/1.2. Data Analytics - Analyze Data to Answer Question.pdf"
      },
      {
        title: "3. Prepare Data for Exploration",
        url: "/docs/1.4. Data Analytics - Prepare Data for Exploration.pdf"
      },
      {
        title: "4. Process Data from Dirty to Clean",
        url: "/docs/1.5. Data Analytics - Process Data form Dirty to Clean.pdf"
      },
      {
        title: "5. Analyze Data to Answer Questions",
        url: "/docs/1.2. Data Analytics - Analyze Data to Answer Question.pdf"
      },
      {
        title: "6. Share Data Through the Art of Visualization",
        url: "/docs/1.3. Data Analytics - Share Data Through Art of Visualization.pdf"
      },
      {
        title: "7. Data Analysis with R Programming",
        url: "/docs/1.7. Data Analytics - Data Analysis with R Programming.pdf"
      },
      {
        title: "8. Google Data Analytics Capstone: Complete a Case Study",
        url: "/docs/1.6. Data Analytics - Case Study.pdf"
      }
    ]
  },
  {
    id: "google-business-intelligence",
    title: "Google Business Intelligence Professional Certificate",
    issuer: "Google (via Coursera)",
    issueDate: "2023",
    url: "/docs/2.0. Business Inteliigence - Main.pdf",
    type: "Certification",
    logoKey: "google-coursera",
    credentialUrl: "https://www.credly.com/badges/d7a809b5-e1d7-4a19-afc3-6ee794b6d4a0/linked_in_profile",
    subCertificates: [
      {
        title: "1. Foundations of Business Intelligence",
        url: "/docs/2.1 Foundations of Business Intelligence.pdf"
      },
      {
        title: "2. The Path to Insights: Data Models and Pipelines",
        url: "/docs/2.2 The Path to Insights- Data Models and Pipelines.pdf"
      },
      {
        title: "3. Decisions, Decisions: Dashboards and Reports",
        url: "/docs/2.3 Decisions, Decisions- Dashboards and Reports.pdf"
      }
    ]
  },
  {
    id: "dqlab-python",
    title: "Python (Basic) Certificate",
    issuer: "DQLab",
    issueDate: "2023",
    url: "/docs/3.0 Certification - Basic Python.pdf",
    type: "Certification",
    logoKey: "dqlab"
  },
  {
    id: "shelf-life-determination",
    title: "Sertifikasi Penentuan Shelf Life Produk Pangan",
    issuer: "Anugerah Global Superintending (Saraswanti)",
    issueDate: "2026",
    url: "/docs/4. Certification - Penentuan Shelf Life.pdf",
    type: "Certification",
    logoKey: "ags"
  },
  {
    id: "cawd-ai-web-developer",
    title: "Certified AI Web Developer (CAWD)",
    issuer: "Vibecoding.id",
    issueDate: "2026",
    url: "/docs/6. Certification - CAWD.pdf",
    type: "Certification",
    logoKey: "vibecoding",
    credentialUrl: "https://credsverse.com/credentials/8a427175-0a97-4b96-9e26-a4ca616a791a"
  },
  {
    id: "camd-ai-mobile-developer",
    title: "Certified AI Mobile Developer (CAMD)",
    issuer: "Vibecoding.id",
    issueDate: "2026",
    url: "/docs/5. Certification - CAMD.pdf",
    type: "Certification",
    logoKey: "vibecoding",
    credentialUrl: "https://credsverse.com/credentials/8a427175-0a97-4b96-9e26-a4ca616a791a"
  },
  {
    id: "supervisory-leadership",
    title: "Supervisory Leadership Training",
    issuer: "PQM",
    issueDate: "2022",
    url: "/docs/9. Training - Supervisory Leadership.pdf",
    type: "Training",
    logoKey: "pqm"
  },
  {
    id: "lean-six-sigma-course",
    title: "Lean & Six Sigma Course",
    issuer: "BSI (British Standard Institution)",
    issueDate: "2022",
    url: "/docs/8. Training - Lean & Six Sigma Course.pdf",
    type: "Training",
    logoKey: "bsi"
  },
  {
    id: "smart-presentation-skill",
    title: "Smart Presentation Skill",
    issuer: "Presenta",
    issueDate: "2022",
    url: "/docs/10. Training - Smart Presentation Skill.pdf",
    type: "Training",
    logoKey: "presenta"
  }
];
