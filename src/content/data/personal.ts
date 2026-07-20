export interface TimelineItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  branches?: {
    role: string;
    company: string;
    description: string;
    badge: string;
  }[];
}

export const personalInfo = {
  fullName: "Haris Abdul Majid",
  titles: [
    "Business Analyst",
    "Digital Transformation Specialist",
    "R&D Process Development Engineer"
  ],
  tagline: "Engineering Processes, Empowering Data, Digitalizing Solutions",
  currentPosition: "R&D Dairy Process Development",
  location: "Bogor / Solo, Indonesia",
  summary: [
    "I began my career as a Management Trainee and transitioned into R&D Process Development, focusing on manufacturing process improvement and product development within the FMCG industry.",
    "Throughout my career in R&D, I realized that process optimization extends far beyond the production floor. This motivated me to bridge the gap between physical operations and digital systems, exploring data analysis, workflow automation, dashboard development, and business analysis.",
    "Today, I combine my R&D engineering foundation with data-driven analytics to architect digital solutions. By transforming raw operational data into interactive dashboards and automated workflows, I build practical systems that optimize efficiency and enable better business decisions."
  ],
  philosophy: "I believe technology should simplify work rather than complicate it. The best solutions are not always the most complex—they are the ones that solve real business problems efficiently and sustainably.",
  principles: [
    { title: "Problem Solver", desc: "Approaching every challenge with a solution-oriented mindset." },
    { title: "Analytical Thinker", desc: "Using structured reasoning and data to make informed decisions." },
    { title: "Continuous Improvement", desc: "Always looking for ways to optimize, streamline, and improve workflows." },
    { title: "Business-Oriented", desc: "Prioritizing outcomes that drive real efficiency and financial impact." },
    { title: "Technology-Driven", desc: "Leveraging digital tools to automate manual processes and scale solutions." }
  ]
};

export const careerTimeline: TimelineItem[] = [
  {
    id: "food-tech",
    period: "Background",
    role: "Food Tech Engineer",
    company: "R&D Foundations",
    description: "Gained a strong foundation in adopting data & technology in food manufacture. Solved manufacturing process challenges using structured experiments, root cause analysis (RCA), and continuous improvement methods."
  },
  {
    id: "management-trainee",
    period: "Early Career",
    role: "Management Trainee",
    company: "Great Giant Foods",
    description: "Rotated across key business departments to grasp end-to-end operational flows, supply chain metrics, and corporate process workflows."
  },
  {
    id: "rd-process",
    period: "Core Technical Role",
    role: "R&D Process Development",
    company: "Dairy Division",
    description: "Scaled dairy formulations from lab to commercial lines. Focused on physical engineering metrics, optimizing COGM, and implementing protocols to minimize production waste."
  },
  {
    id: "digital-trans",
    period: "Expansion Technical Skills",
    role: "Systems & Digital Transformation Lead",
    company: "Operations & Technology",
    description: "Began transitioning workflows from physical to digital. Automated manual tracking spreadsheets with customized databases, dynamic entry apps, and live operational dashboards."
  },
  {
    id: "business-analysis",
    period: "Current Specialization",
    role: "",
    company: "",
    description: "",
    branches: [
      {
        role: "Business Analyst & Solutions Architect",
        company: "Digital Solutions Division",
        description: "Designing dynamic software blueprints, dashboard products, and automated process workflows to guide data-driven business decisions.",
        badge: "BA Focus"
      },
      {
        role: "R&D Process Engineer",
        company: "Manufacturing Division",
        description: "Optimizing physical processing lines, monitoring batch COGM, and executing commercial process scale-ups.",
        badge: "R&D Focus"
      }
    ]
  }
];
