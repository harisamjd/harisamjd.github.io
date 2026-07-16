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
  tagline: "Transforming Business Challenges into Practical Digital Solutions.",
  currentPosition: "R&D Dairy Process Development",
  location: "Indonesia",
  summary: [
    "I began my career in Food Technology, focusing on manufacturing process improvement and product development within the FMCG industry.",
    "Throughout my career, I became increasingly interested in solving operational problems beyond the production floor. This led me to explore workflow automation, business analysis, dashboard development, and digital transformation initiatives.",
    "Today, I combine engineering thinking with analytical problem-solving to build practical solutions that improve operational efficiency, support better decision-making, and create measurable business value."
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
