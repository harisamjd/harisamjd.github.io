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
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "sample-request-system",
    title: "Sample Request System",
    category: "Business Process Automation",
    role: ["Business Analyst", "Solution Architect", "Power Platform Developer"],
    problem: "Sample request approvals were managed manually using emails and spreadsheets, resulting in poor visibility, inconsistent approval flows, and long processing times.",
    challenge: "Coordination between multiple cross-functional departments (R&D, QA, Production, Sales) required sequential validations with strict compliance rules, making manual tracking highly error-prone.",
    solution: "Designed and developed an end-to-end digital workflow using Microsoft Power Platform, including Power Apps for custom entry, Power Automate for routing, SharePoint as a secure data source, and Teams notifications.",
    impacts: [
      "Standardized approval workflows across all divisions.",
      "Improved process transparency and audit trails.",
      "Reduced manual administrative follow-up work.",
      "Enabled real-time request status tracking for stakeholders."
    ],
    techStack: ["Power Apps", "Power Automate", "SharePoint", "Microsoft Forms", "Microsoft Teams"]
  },
  {
    id: "trial-management-system",
    title: "Trial Management System",
    category: "R&D Digital Transformation",
    role: ["Business Analyst", "System Designer", "Developer"],
    problem: "TODO: R&D pilot trial scheduling, data logging, and scale-up tracking were managed via scattered documents and lacked a unified data repository.",
    challenge: "Capturing highly variable process parameters from laboratory trials through to commercial manufacturing runs without complicating the R&D workflow.",
    solution: "TODO: Designed a unified database schema on SharePoint, integrated with custom input apps and automated process alerts for experimental parameter boundaries.",
    impacts: [
      "TODO: Enabled structured historical trial searchability.",
      "TODO: Reduced trial scheduling conflicts.",
      "TODO: Standardized data handoff to manufacturing teams."
    ],
    techStack: ["Power Platform", "SharePoint", "Power Automate"]
  },
  {
    id: "operational-excellence-dashboard",
    title: "Operational Excellence Dashboard",
    category: "Business Intelligence",
    role: ["Dashboard Developer", "Business Analyst"],
    problem: "Operational performance reporting relied on manual Excel reports compiled from multiple systems, delaying critical management decision-making.",
    challenge: "Consolidating raw daily production datasets, QA reports, and waste logs into a single coherent data model updated in real-time.",
    solution: "Designed an interactive dashboard to monitor operational KPIs, visualize weekly trends, and automatically highlight process deviations.",
    impacts: [
      "Delivered significantly faster weekly/monthly reporting.",
      "Improved KPI visibility across leadership teams.",
      "Enabled proactive operational monitoring and quicker root cause analysis."
    ],
    techStack: ["Power BI", "Excel", "SQL"]
  },
  {
    id: "approval-workflow-system",
    title: "Approval Workflow System",
    category: "Workflow Automation",
    role: ["Business Analyst", "Automation Developer"],
    problem: "Internal administrative approval processes required multiple manual follow-ups, lacked tracking visibility, and suffered from bottlenecks.",
    challenge: "Handling complex multi-level approval hierarchies with conditional path routing based on document category and cost limits.",
    solution: "Implemented a multi-stage automated approval workflow integrated with SharePoint storage and instant Microsoft Teams approval cards.",
    impacts: [
      "Accelerated approval cycles.",
      "Established strict accountability with time-stamped logs.",
      "Improved workflow status tracking visibility for managers."
    ],
    techStack: ["Power Automate", "SharePoint", "Microsoft Teams"]
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
    techStack: ["MikroTik", "VPN", "Load Balancing", "Networking"]
  }
];
