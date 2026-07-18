export interface Project {
  id: string;
  title: string;
  category: string;
  role: string[];
  problem: string;
  challenge?: string; // Optional field if not provided in docs
  solution: string;
  impacts: string[];
  techStack: string[];
  softSkills?: string[];
  demoUrl?: string;
  githubUrl?: string;
  images?: string[];
  status?: string;
}

export const projects: Project[] = [
  {
    id: "sample-request-system",
    title: "Sample Request System",
    category: "Business Process Automation",
    role: ["Business Analyst", "Solution Architect", "Full Stack Developer"],
    problem: "Sample request approvals were managed manually using emails and spreadsheets, resulting in poor visibility, inconsistent approval flows, and long processing times.",
    challenge: "Coordination between multiple cross-functional departments (R&D, QA, Production, Sales) required sequential validations with strict compliance rules, making manual tracking highly error-prone.",
    solution: "Designed and developed an end-to-end digital workflow using Microsoft Power Platform, including Power Apps for custom entry, Power Automate for routing, SharePoint as a secure data source, and Teams notifications.",
    impacts: [
      "Standardized approval workflows across all divisions.",
      "Improved process transparency and audit trails.",
      "Reduced manual administrative follow-up work.",
      "Enabled real-time request status tracking for stakeholders."
    ],
    techStack: ["React", "Next.js", "SharePoint Integration"],
    softSkills: ["Requirements Gathering", "Stakeholder Management", "Cross-Functional Collaboration"],
    images: [
      "/images/projects/sample-tracing/1-cover.png",
      "/images/projects/sample-tracing/2-dasboard.png",
      "/images/projects/sample-tracing/3-create.png",
      "/images/projects/sample-tracing/4-details&assign.png",
      "/images/projects/sample-tracing/5-export.png",
      "/images/projects/sample-tracing/6-sync.png"
    ]
  },
  {
    id: "approval-workflow-system",
    title: "Approval Workflow System",
    category: "Workflow Automation",
    role: ["Business Analyst", "Power Platform Developer"],
    problem: "Internal administrative approval processes required multiple manual follow-ups, lacked tracking visibility, and suffered from bottlenecks.",
    challenge: "Handling complex multi-level approval hierarchies with conditional path routing based on document category and cost limits.",
    solution: "Implemented a multi-stage automated approval workflow integrated with SharePoint storage and instant Microsoft Teams approval cards.",
    impacts: [
      "Accelerated approval cycles.",
      "Established strict accountability with time-stamped logs.",
      "Improved workflow status tracking visibility for managers."
    ],
    techStack: ["Power Apps", "Power Automate", "SharePoint", "Microsoft Forms", "Microsoft Teams", "Power Platform"],
    softSkills: ["Process Optimization", "Workflow Design", "Change Management"],
    images: [
      "/images/projects/approval-workflow/1-dashboard.png",
      "/images/projects/approval-workflow/2-flows.png",
      "/images/projects/approval-workflow/3-database.png",
      "/images/projects/approval-workflow/4-notification.png"
    ]
  },
  {
    id: "operational-excellence-dashboard",
    title: "Operational Excellence Dashboard",
    category: "Business Intelligence",
    role: ["Business Analyst", "Dashboard Developer", "Data Analyst"],
    problem: "Operational performance reporting relied on manual Excel reports compiled from multiple systems, delaying critical management decision-making.",
    challenge: "Consolidating raw daily production datasets, QA reports, and waste logs into a single coherent data model updated in real-time.",
    solution: "Designed an interactive dashboard to monitor operational KPIs, visualize weekly trends, and automatically highlight process deviations.",
    impacts: [
      "Delivered significantly faster weekly/monthly reporting.",
      "Improved KPI visibility across leadership teams.",
      "Enabled proactive operational monitoring and quicker root cause analysis."
    ],
    techStack: ["Power BI", "Excel", "Data Visualization"],
    softSkills: ["Analytical Thinking", "KPI Monitoring", "Executive Reporting"],
    images: [
      "/images/projects/opex-dashboard/1-Dashboard.png",
      "/images/projects/opex-dashboard/2-BudgetAlert.png",
      "/images/projects/opex-dashboard/3-DataIngestion.png",
      "/images/projects/opex-dashboard/4-Mapping.png",
      "/images/projects/opex-dashboard/5-TransactionList.png"
    ]
  },
  {
    id: "pos-for-small-businesses",
    title: "POS for Small Businesses",
    category: "Business Intelligence & Web App",
    role: ["Full Stack Developer", "Data Architect", "UI/UX Designer"],
    problem: "Small businesses struggle to consolidate daily sales records, real-time stock levels, and staff shift metrics, preventing them from identifying high-margin trends and managing inventory efficiently.",
    challenge: "Gathering and cleaning multi-branch transaction datasets to feed live performance dashboards without introducing significant operational overhead or database bottlenecks.",
    solution: "Developed a web-based POS Analytics System that aggregates sales, inventory tracker logs, and employee performance KPIs into interactive, real-time dashboards.",
    impacts: [
      "Integrated sales, inventory, and shift logs into a unified, mobile-friendly dashboard.",
      "Automated operational report generation, reducing administrative efforts by 80%.",
      "Enabled real-time stock alert thresholds, preventing critical inventory stockouts.",
      "Provided actionable product performance insights, boosting profitable category sales."
    ],
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Chart.js"],
    softSkills: ["System Architecture", "Product Management", "Problem Solving"],
    images: [
      "/images/projects/pos/1-cover.png",
      "/images/projects/pos/2-dashboard.png",
      "/images/projects/pos/3-createorder.png",
      "/images/projects/pos/3-order.png",
      "/images/projects/pos/4-performance.png",
      "/images/projects/pos/5-management.png",
      "/images/projects/pos/7-export.png"
    ]
  },
  {
    id: "household-cashflow-management",
    title: "Household Cashflow Management",
    category: "Personal Finance Automation",
    role: ["Full Stack Developer", "UI/UX Designer"],
    problem: "Tracking daily multi-category household expenses, budget thresholds, and savings rates manually is time-consuming, highly error-prone, and fails to yield actionable visual insights for long-term planning.",
    challenge: "Creating a responsive, lightweight, and visual dashboard that handles daily transaction entries, updates balances dynamically, and generates clean monthly reports without relying on heavy external database setups.",
    solution: "Developed a comprehensive personal finance dashboard with real-time balance calculations, dynamic category breakdowns, interactive monthly summary reports, and customizable budget settings.",
    impacts: [
      "Reduced time spent on daily expense logging by 60% with responsive form presets.",
      "Provided 100% transparency into spending habits through interactive breakdown charts.",
      "Identified and curbed category-based overspending by up to 15% via dynamic budget alerts.",
      "Built clean monthly closing reports to easily forecast long-term household savings."
    ],
    techStack: ["Next.js", "Tailwind CSS", "JavaScript", "GSAP"],
    softSkills: ["UI/UX Prototyping", "Personal Finance Planning", "Self-Directed Learning"],
    images: [
      "/images/projects/household-cashflow/1-cover.png",
      "/images/projects/household-cashflow/2-dashboard.png",
      "/images/projects/household-cashflow/3-details.png",
      "/images/projects/household-cashflow/4-record.png",
      "/images/projects/household-cashflow/5-balance.png",
      "/images/projects/household-cashflow/6-setting.png",
      "/images/projects/household-cashflow/7-closing.png"
    ]
  },
  {
    id: "trial-management-system",
    title: "Trial Management System",
    category: "R&D Digital Transformation",
    status: "ON GOING",
    role: ["Business Analyst", "Full Stack Developer"],
    problem: "R&D pilot trial scheduling, data logging, and scale-up tracking were managed via scattered documents and lacked a unified data repository.",
    challenge: "Capturing highly variable process parameters from laboratory trials through to commercial manufacturing runs without complicating the R&D workflow.",
    solution: "Designed a unified database schema on SharePoint, integrated with custom input apps and automated process alerts for experimental parameter boundaries.",
    impacts: [
      "Enabled structured historical trial searchability.",
      "Reduced trial scheduling conflicts.",
      "Standardized data handoff to manufacturing teams."
    ],
    techStack: ["Next.js"],
    softSkills: ["Project Scheduling", "R&D Process Improvement", "Agile Planning"]
  },
  {
    id: "neighborhood-internet-network",
    title: "Neighborhood Internet Network",
    category: "Networking",
    role: ["Network Administrator"],
    problem: "Lack of affordable, reliable, and high-speed broadband options for local residential households.",
    challenge: "Providing stable network speeds, fair bandwidth distribution, and high availability on a limited hardware budget.",
    solution: "Designed and maintained a custom MikroTik-based routing network featuring site-to-site VPNs, dynamic queue load balancing, and redundant backup internet gateways.",
    impacts: [
      "Supplied stable internet service to over 30 households.",
      "Drastically minimized network downtime.",
      "Improved network availability and automated failovers."
    ],
    techStack: ["MikroTik", "VPN", "Load Balancing", "Networking (LAN/WAN)"],
    softSkills: ["Infrastructure Design", "Resource Allocation", "Technical Support"]
  }
];
