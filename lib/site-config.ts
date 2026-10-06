// ============================================================
// SITE CONFIGURATION — Edit this file to update all content
// ============================================================

export const siteConfig = {
  name: "Shiv Krishna Engineers",
  shortName: "SKE",
  tagline: "Engineering that keeps industry running.",
  description:
    "Supply, erection, commissioning and maintenance for pharmaceuticals, chemicals, petrochemicals, power and cement plants.",
  url: "https://www.shivkrishnaengineers.com",
  email: "shivkrishnaengineers@gmail.com",
  // TODO: Confirm proprietor mobile number (9508084532 or 9408084532)
  phone: "9408084532",
  mobile: "8887239361",
  whatsapp: "919408084532", // For wa.me link (country code + number, no +)
  address: {
    line1: "397, Siddhnath Nagar, Link Road",
    city: "Bharuch",
    state: "Gujarat",
    pincode: "392001",
    full: "397, Siddhnath Nagar, Link Road, Bharuch, Gujarat – 392001",
  },
  proprietor: "Kavindra Bahadur Singh",
  // GSTIN: Display only if client approves. Leave empty string to hide.
  gstin: "",
  // Google Maps embed URL for Bharuch address
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.3!2d73.0!3d21.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQyJzAwLjAiTiA3M8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1",
  mapsDirectionsUrl:
    "https://www.google.com/maps/search/Siddhnath+Nagar+Link+Road+Bharuch+Gujarat",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Quality & Safety", href: "/quality-safety" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 190, suffix: "+", label: "Skilled Workforce" },
  { value: 4, suffix: "", label: "Specialized Divisions" },
  { value: 9, suffix: "", label: "Core Services" },
  { value: 6, suffix: "+", label: "Years' Plant Experience" },
];

export const divisions = [
  {
    id: "mechanical-project",
    title: "Mechanical Project Division",
    description:
      "Full project lifecycle from drawing to commissioning — erection, structural work, piping and equipment installation.",
    href: "/services",
    icon: "Cog",
  },
  {
    id: "mechanical-maintenance",
    title: "Mechanical Maintenance Division",
    description:
      "Preventive, predictive and breakdown maintenance for process and utility equipment across all plant types.",
    href: "/services",
    icon: "Wrench",
  },
  {
    id: "designing-consulting",
    title: "Mechanical Designing & Consulting Division",
    description:
      "Engineering drawings, design support, technical consultancy and site engineering solutions.",
    href: "/services",
    icon: "PenTool",
  },
  {
    id: "painting-insulation",
    title: "Painting, Insulation & Roof Sheeting Division",
    description:
      "Industrial painting, thermal insulation, cladding and roof sheeting for plants and structures.",
    href: "/services",
    icon: "Layers",
  },
];

export const services = [
  {
    id: "project-management",
    title: "Project Management",
    slug: "project-management",
    description:
      "End-to-end project planning, scheduling, manpower and material coordination, and site execution control to deliver on time and within budget.",
    bullets: [
      "Detailed project scheduling and milestone tracking",
      "Manpower planning and resource allocation",
      "Material coordination and procurement support",
      "Site execution control and progress reporting",
    ],
    icon: "ClipboardList",
  },
  {
    id: "erection-commissioning",
    title: "Erection & Commissioning",
    slug: "erection-commissioning",
    description:
      "Structural, piping and equipment erection with precision alignment, functional testing and full plant commissioning.",
    bullets: [
      "Structural steel and equipment erection",
      "Mechanical and process piping installation",
      "Precision alignment and levelling",
      "Functional testing and commissioning support",
    ],
    icon: "Building2",
  },
  {
    id: "maintenance-services",
    title: "Maintenance Services",
    slug: "maintenance-services",
    description:
      "Scheduled preventive maintenance and rapid breakdown maintenance for process and utility equipment, minimising production downtime.",
    bullets: [
      "Preventive maintenance schedules",
      "Breakdown and corrective maintenance",
      "Process and utility equipment servicing",
      "Maintenance record-keeping and reporting",
    ],
    icon: "Wrench",
  },
  {
    id: "energy-cost-saving",
    title: "Energy & Cost Saving Solutions",
    slug: "energy-cost-saving",
    description:
      "Identifying and implementing efficiency improvements in plant systems to reduce energy consumption and operating costs.",
    bullets: [
      "Energy audit support and analysis",
      "Process efficiency improvement recommendations",
      "Implementation of cost-reduction measures",
      "Ongoing monitoring and reporting",
    ],
    icon: "Zap",
  },
  {
    id: "predictive-maintenance",
    title: "Predictive Maintenance Solutions",
    slug: "predictive-maintenance",
    description:
      "Condition-based monitoring techniques to detect potential failures early and schedule maintenance before unplanned downtime occurs.",
    bullets: [
      "Vibration analysis and condition monitoring",
      "Thermography and oil analysis support",
      "Failure analysis and root cause investigation",
      "Maintenance planning based on equipment condition",
    ],
    icon: "Activity",
  },
  {
    id: "engineering-supports",
    title: "Engineering Supports",
    slug: "engineering-supports",
    description:
      "Technical engineering support including drawings, design assistance, consultancy and resident site engineering.",
    bullets: [
      "Engineering drawings and as-built documentation",
      "Design review and technical consultancy",
      "Site engineering and field problem-solving",
      "Specification and BOQ preparation",
    ],
    icon: "PenTool",
  },
  {
    id: "manpower-supply",
    title: "Manpower Supply",
    slug: "manpower-supply",
    description:
      "Supply of skilled industrial manpower — fitters, welders, riggers, fabricators and supervisors for projects and maintenance.",
    bullets: [
      "Certified welders and fitters",
      "Riggers and crane operators",
      "Fabricators and gas cutters",
      "Site supervisors and foremen",
    ],
    icon: "Users",
  },
  {
    id: "material-supply",
    title: "Material Supply",
    slug: "material-supply",
    description:
      "Procurement and supply of mechanical materials for projects and maintenance work.",
    bullets: [
      "Structural steel and pipes",
      "Fittings, flanges and fasteners",
      "Tools, tackles and consumables",
      "Material quality checks before supply",
    ],
    icon: "Package",
  },
  {
    id: "on-call-shutdown",
    title: "On-Call & Shutdown Services",
    slug: "on-call-shutdown",
    description:
      "Rapid-response teams for plant emergencies and planned shutdown maintenance — mobilised quickly, executed safely.",
    bullets: [
      "Emergency breakdown response teams",
      "Planned annual and periodic shutdowns",
      "Turnaround project coordination",
      "Post-shutdown inspection and reporting",
    ],
    icon: "AlarmClock",
  },
];

export const industries = [
  {
    id: "pharmaceuticals",
    title: "Pharmaceuticals",
    description:
      "Erection, piping and maintenance for GMP-compliant pharmaceutical manufacturing plants, including clean utility systems.",
    image: "/images/industry-pharma.jpg",
    alt: "Pharmaceutical manufacturing plant interior with clean piping",
  },
  {
    id: "chemicals-fertilizers",
    title: "Chemicals & Fertilizer Plants",
    description:
      "Equipment erection, piping systems, shutdown maintenance and safety-focused services for chemical and fertilizer facilities.",
    image: "/images/industry-chemical.jpg",
    alt: "Large chemical plant with towers and pipelines",
  },
  {
    id: "petrochemicals",
    title: "Petrochemicals",
    description:
      "Structural erection, pipeline installation and turnaround services for petrochemical refineries and processing units.",
    image: "/images/industry-petrochem.jpg",
    alt: "Petrochemical refinery with pipelines and processing equipment",
  },
  {
    id: "power-utilities",
    title: "Power & Utilities",
    description:
      "Mechanical installation, maintenance and shutdown services for power generation and utility infrastructure.",
    image: "/images/industry-power.jpg",
    alt: "Power plant turbines and utility equipment",
  },
  {
    id: "cement-plants",
    title: "Cement Plants",
    description:
      "Heavy equipment erection, conveyor systems and maintenance for cement manufacturing operations.",
    image: "/images/industry-cement.jpg",
    alt: "Cement manufacturing plant with industrial equipment",
  },
  {
    id: "power-plants",
    title: "Power Plants",
    description:
      "Boiler erection, turbine maintenance, piping and shutdown support for thermal and gas power plants.",
    image: "/images/industry-powerplant.jpg",
    alt: "Large power plant facility with cooling towers",
  },
];

export const clients = [
  { name: "Expanded Polymer Systems Pvt. Ltd.", logo: null },
  { name: "Kurl-on", logo: null },
  { name: "Suyog Dye Chemie Pvt. Ltd.", logo: null },
  { name: "TechnipFMC", logo: null, badge: "Major Client" },
];

export const whyChooseUs = [
  {
    title: "Technical Competence",
    description:
      "Both founders hold mechanical engineering degrees and have six years of hands-on plant experience.",
    icon: "GraduationCap",
  },
  {
    title: "Operational Excellence",
    description:
      "Four independent divisions, each with its own qualified leader and skilled team.",
    icon: "Award",
  },
  {
    title: "Quality & Safety",
    description:
      "PPE enforcement, ZERO DEVIATION PLAN for high-risk activities, and compliance with all statutory requirements.",
    icon: "ShieldCheck",
  },
  {
    title: "Stable Financial Background",
    description:
      "Financially stable organisation able to mobilise equipment and manpower without delays.",
    icon: "TrendingUp",
  },
];

export const workforce = [
  { role: "Project Manager", count: 1 },
  { role: "Site Coordinators", count: 1 },
  { role: "Site In-charge", count: 3 },
  { role: "Execution Engineers", count: 3 },
  { role: "Supervisors", count: 4 },
  { role: "Foremen", count: 6 },
  { role: "Draughtsmen", count: 2 },
  { role: "Fabricators", count: 12 },
  { role: "Fitters", count: 25 },
  { role: "Welders", count: 30 },
  { role: "Riggers", count: 50 },
  { role: "Gas Cutters", count: 15 },
  { role: "Grinder-men", count: 15 },
  { role: "Helpers", count: 30 },
];

export const equipment = [
  { item: "Chain Pulley Blocks (various capacities)", qty: 15, unit: "nos" },
  { item: "Magnetic Drilling Machines", qty: 3, unit: "nos" },
  { item: "Gas Cutting Sets", qty: 10, unit: "nos" },
  { item: "Grinding Machines (AG-7 / AG-5 / GQ-4)", qty: 20, unit: "nos" },
  { item: "Welding Rectifiers", qty: 15, unit: "nos" },
  { item: "Welding Transformers", qty: 10, unit: "nos" },
  { item: "Argon Welding Sets (TIG)", qty: 18, unit: "nos" },
  { item: "Wire Rope Slings", qty: 25, unit: "nos" },
  { item: "Hydra Crane — 14 Tonne", qty: 1, unit: "no" },
  { item: "Hydra Crane — 12 Tonne", qty: 1, unit: "no" },
  { item: "Utility Vehicle", qty: 1, unit: "no" },
];

export const contactFormServices = services.map((s) => s.title);
