export interface TimelineItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
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
    period: "Early Career",
    role: "Food Technology Researcher",
    company: "Manufacturing Operations",
    description: "Learned to solve complex operational and process challenges using structured experiments, root cause analysis (RCA), and continuous improvement methods."
  },
  {
    id: "management-trainee",
    period: "Transition Phase",
    role: "Management Trainee",
    company: "Great Giant Foods",
    description: "Rotated across departments to understand end-to-end business operations, supply chains, and management workflows."
  },
  {
    id: "rd-process",
    period: "Core Technical Role",
    role: "R&D Process Development",
    company: "Dairy Division",
    description: "Developed dairy products from lab scale to commercial production. Optimized COGM, supported process validation, and analyzed production waste."
  },
  {
    id: "digital-trans",
    period: "Modern Focus",
    role: "Digital Transformation Lead",
    company: "Operations & Tech",
    description: "Identified manual workflow bottlenecks and initiated digital upgrades. Replaced manual spreadsheets with automated data inputs."
  },
  {
    id: "business-analysis",
    period: "Current / Specialization",
    role: "Business Analyst",
    company: "Solutions Architecture",
    description: "Connecting operational requirements with technical blueprints. Developing BI dashboards and Power Platform systems to support decisions."
  }
];
