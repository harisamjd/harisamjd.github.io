export interface ExpertisePillar {
  id: string;
  title: string;
  description: string;
  skills: string[];
  tools: string[];
  realWorldImpact: string;
}

export interface KPIImpact {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const expertisePillars: ExpertisePillar[] = [
  {
    id: "business-analysis",
    title: "Business Analysis",
    description: "Understanding business needs and translating them into practical digital solutions that align stakeholders and technical execution.",
    skills: ["Requirements Gathering", "Process Mapping (BPMN)", "Stakeholder Management", "User Stories"],
    tools: ["Miro", "Jira", "Confluence", "Excel"],
    realWorldImpact: "Standardized workflow requirements for key process optimizations."
  },
  {
    id: "digital-trans",
    title: "Digital Transformation",
    description: "Replacing manual processes with scalable, secure, and sustainable digital workflows that reduce friction and human errors.",
    skills: ["Workflow Automation", "Low-Code Development", "Systems Integration", "Forms & Surveys"],
    tools: ["Power Apps", "Power Automate", "SharePoint", "Teams"],
    realWorldImpact: "Automated core approval systems, reducing administrative cycle times."
  },
  {
    id: "dashboard-analytics",
    title: "Dashboard & Analytics",
    description: "Transforming raw operational data into actionable, easy-to-understand insights that drive strategic decisions.",
    skills: ["Data Modeling", "ETL Processes", "KPI Visualization", "Reporting Automation"],
    tools: ["Power BI", "SQL", "BigQuery", "Excel"],
    realWorldImpact: "Streamlined operational reports, giving management real-time visibility."
  },
  {
    id: "rd-process",
    title: "R&D Process Development",
    description: "Improving manufacturing and product development processes through structured experimentation, optimization, and lean execution.",
    skills: ["Process Scale-Up", "Lean Six Sigma", "Root Cause Analysis (RCA)", "CAPA"],
    tools: ["Trial Protocols", "Statistical Analysis", "COGM Analysis"],
    realWorldImpact: "Significantly minimized production waste and product return rates."
  }
];

export const kpiImpacts: KPIImpact[] = [
  {
    id: "waste-reduction",
    value: 54,
    suffix: "%",
    label: "Production Waste Reduction",
    description: "Minimized process waste and raw milk loss during commercial scale-up trials."
  },
  {
    id: "returns-reduction",
    value: 15, // represents the 25% -> 15% target
    suffix: "%",
    label: "Product Return Rate",
    description: "Successfully reduced return rates (from 25% to 15%) through parameter optimization."
  },
  {
    id: "workflow-automation",
    value: 100,
    suffix: "%",
    label: "Workflow Automation",
    description: "Replaced manual spreadsheet approvals with automated Power Platform pipelines."
  },
  {
    id: "reporting-speed",
    value: 24, // 24/7 or hours saved, let's represent hours saved per month
    suffix: "h",
    label: "Monthly Hours Saved",
    description: "Eliminated manual Excel reporting lag by implementing real-time Power BI dashboards."
  }
];
