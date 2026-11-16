
import mannedImage from "./assets/images/manned.jpeg";
import serviceExImage from "./assets/images/serviceEx.jpeg";
import serviceTwoImage from "./assets/images/Servicetwo.jpeg";
import serviceOneImage from "./assets/images/Serviveone.jpeg";

export const services = [
  {
    number: "01",
    title: "Drone Surveillance and Intelligence",
    short: "Aerial monitoring and intelligence for security and emergency response.",
    description:
      "Aerial monitoring, intelligence, surveillance and reconnaissance (ISR), and rapid aerial assessment for security and emergency response.",
    icon: "shield",
    image: mannedImage,
    features: [
      "Security personnel and supervision",
      "Access control and visitor management",
      "Site-specific operating procedures",
      "Incident reporting and escalation"
    ]
  },
  {
    number: "02",
    title: "Geospatial Intelligence and GIS",
    short: "Geospatial analysis and mapping for informed planning and decision-making.",
    description:
      "Crime hotspot mapping, terrain analysis, route assessment, land-use mapping, and interactive geospatial intelligence solutions.",
    icon: "camera",
    image: serviceExImage,
    features: [
      "CCTV and video monitoring",
      "Access control systems",
      "Intrusion detection",
      "System planning and maintenance"
    ]
  },
  {
    number: "03",
    title: "Security Analytics and Data Fusion",
    short: "Integrated intelligence that supports threat assessment and early warning.",
    description:
      "Integration of drone imagery, open-source intelligence, historical incident data, and geospatial information to support threat assessment and early warning.",
    icon: "target",
    image: serviceOneImage,
    features: [
      "Security risk assessments",
      "Business continuity planning",
      "Travel and site risk reviews",
      "Policy and procedure development"
    ]
  },
  {
    number: "04",
    title: "Critical Infrastructure Monitoring",
    short: "Drone-enabled monitoring and inspection of essential infrastructure.",
    description:
      "Drone-enabled inspection and monitoring of oil and gas pipelines, power lines, telecommunications infrastructure, and transport corridors.",
    icon: "car",
    image: serviceTwoImage,
    features: [
      "Journey risk planning",
      "Movement coordination",
      "Route and destination reviews",
      "Executive movement support"
    ]
  },
  {
    number: "05",
    title: "Border and Corridor Surveillance Support",
    short: "Geospatial mapping and situational awareness for vulnerable corridors.",
    description:
      "Geospatial mapping and situational awareness solutions that support border management and the monitoring of vulnerable corridors.",
    icon: "users",
    image: serviceExImage,
    features: [
      "Front-of-house support",
      "Visitor experience",
      "Workplace operations",
      "Service quality reviews"
    ]
  },
  {
    number: "06",
    title: "Disaster Response and Emergency Mapping",
    short: "Aerial intelligence and mapping for disaster management and humanitarian response.",
    description:
      "Aerial damage assessment, flood mapping, search-and-rescue support, evacuation planning, and humanitarian response mapping.",
    icon: "graduation",
    image: mannedImage,
    features: [
      "Security awareness",
      "Emergency response basics",
      "Customer-facing team training",
      "Scenario-based learning"
    ]
  },
  {
    number: "07",
    title: "Land-Use Mapping and Conflict Prevention",
    short: "Geospatial intelligence for land-use planning and conflict prevention.",
    description:
      "Geospatial analysis of farmland, grazing routes, land-use pressures, and potential conflict hotspots to support planning and prevention.",
    icon: "target",
    image: serviceOneImage,
    features: [
      "Farmland and grazing route mapping",
      "Land-use pressure analysis",
      "Conflict hotspot identification",
      "Geospatial planning and prevention"
    ]
  }
];

export const industries = [
  { title: "Corporate & Commercial", text: "Security that supports people, assets and day-to-day business continuity.", icon: "building" },
  { title: "Residential Communities", text: "A considered approach to access, safety and peace of mind at home.", icon: "home" },
  { title: "Retail & Hospitality", text: "Welcoming environments with practical safeguards behind the scenes.", icon: "store" },
  { title: "Infrastructure & Industry", text: "Risk-aware support for complex sites, operations and facilities.", icon: "factory" },
];

export const insights = [
  {
    category: "INSIGHT",
    date: "June 12, 2026",
    title: "Building a security culture that people actually use",
    image: serviceExImage,
    read: "4 min read"
  },
  {
    category: "GUIDE",
    date: "May 28, 2026",
    title: "Five questions to ask before reviewing your site security",
    image: mannedImage,
    read: "6 min read"
  },
  {
    category: "PERSPECTIVE",
    date: "May 03, 2026",
    title: "Why risk planning starts with understanding people",
    image: serviceOneImage,
    read: "5 min read"
  },
];
