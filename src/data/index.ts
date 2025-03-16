
import { CaseStudy, Region, RegionInfo, Service, Technology, TeamMember } from "../types";

export const regions: RegionInfo[] = [
  {
    id: "saudi-arabia",
    name: "Saudi Arabia",
    flag: "🇸🇦",
    description: "Our Middle East headquarters delivering innovative software solutions with a focus on digital transformation for government and enterprise clients.",
    address: "King Fahd Road, Riyadh 12341, Saudi Arabia",
    phone: "+966 11 234 5678",
    email: "info-sa@salttech.com"
  },
  {
    id: "pakistan",
    name: "Pakistan",
    flag: "🇵🇰",
    description: "Our development center of excellence providing world-class software development services with specialized expertise in mobile and web applications.",
    address: "Blue Area, Islamabad 44000, Pakistan",
    phone: "+92 51 234 5678",
    email: "info-pk@salttech.com"
  },
  {
    id: "usa",
    name: "USA",
    flag: "🇺🇸",
    description: "Our North American headquarters providing cutting-edge software solutions for enterprises and startups across the United States.",
    address: "8911 N Capital of Texas Hwy Suite 4200, Austin, TX 78759",
    phone: "+1 (844) 766-2754",
    email: "info-us@salttech.com"
  },
  {
    id: "europe",
    name: "Europe",
    flag: "🇪🇺",
    description: "Our European office delivering bespoke software solutions for clients across the EU with focus on enterprise software and digital transformation.",
    address: "Königsallee 60F, 40212 Düsseldorf, Germany",
    phone: "+49 211 987 6543",
    email: "info-eu@salttech.com"
  }
];

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Create responsive, user-friendly websites that drive results.",
    icon: "Globe",
    details: "Our web development team builds high-performance websites optimized for speed, SEO, and conversion. Using the latest technologies like React, Angular, and Vue.js, we create responsive interfaces that look great on all devices."
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile solutions for iOS and Android.",
    icon: "Smartphone",
    details: "From concept to launch, we design and develop feature-rich mobile applications that deliver exceptional user experiences. Our mobile development expertise includes iOS, Android, React Native, and Flutter solutions."
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Bespoke software solutions tailored to your business needs.",
    icon: "Code",
    details: "We develop custom software solutions that align perfectly with your business requirements. Our team specializes in enterprise applications, workflow automation, and legacy system modernization to help you achieve your business goals."
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that enhance user experience.",
    icon: "Palette",
    details: "Our UI/UX designers create beautiful, intuitive interfaces that enhance user experience and drive engagement. We focus on user-centered design principles to ensure your digital products are easy to use and visually appealing."
  },
  {
    id: "qa-testing",
    title: "Quality Assurance & Testing",
    description: "Comprehensive testing to ensure software reliability.",
    icon: "CheckCircle",
    details: "Our QA team ensures your software meets the highest quality standards before release. We provide comprehensive testing services including functional testing, performance testing, security testing, and automated testing."
  },
  {
    id: "devops",
    title: "DevOps Services",
    description: "Optimize your software development and deployment processes.",
    icon: "Repeat",
    details: "Our DevOps services help you optimize your software development and deployment processes. We implement CI/CD pipelines, containerization, and infrastructure automation to improve efficiency and reduce time to market."
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "financial-app",
    title: "Financial Services Mobile App",
    client: "GCC Banking Leader",
    description: "Developed a secure mobile banking application with biometric authentication.",
    image: "/public/lovable-uploads/af23effb-69e6-4875-9c9f-fc78dc0418eb.png",
    region: "saudi-arabia",
    challenge: "The client needed a secure, user-friendly mobile banking application that complied with strict financial regulations.",
    solution: "We developed a comprehensive mobile application with advanced security features, real-time transaction processing, and intuitive user interface.",
    results: ["40% increase in mobile banking users", "98% positive feedback from customers", "35% reduction in branch visits"]
  },
  {
    id: "healthcare-portal",
    title: "Healthcare Management System",
    client: "National Healthcare Provider",
    description: "Built an integrated healthcare management system for patient records and appointments.",
    image: "/public/lovable-uploads/b59091c0-3569-4259-80da-ae59d6ceeee5.png",
    region: "pakistan",
    challenge: "The client needed to modernize their legacy healthcare management system to improve efficiency and patient care.",
    solution: "We developed a comprehensive system for managing patient records, appointments, billing, and inventory with role-based access control.",
    results: ["50% reduction in administrative workload", "28% improvement in appointment scheduling efficiency", "99.9% system uptime"]
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform Redesign",
    client: "Major Retail Chain",
    description: "Redesigned and rebuilt an e-commerce platform to improve conversion rates.",
    image: "/public/lovable-uploads/bd4a76d6-1823-4f00-b7d2-071f42d25425.png",
    region: "usa",
    challenge: "The client's existing e-commerce platform had poor performance and low conversion rates.",
    solution: "We redesigned the user interface and rebuilt the platform with a focus on performance, mobile responsiveness, and seamless checkout.",
    results: ["67% improvement in page load time", "43% increase in conversion rate", "52% increase in average order value"]
  },
  {
    id: "logistics-application",
    title: "Logistics Management Application",
    client: "European Transport Company",
    description: "Developed a real-time logistics tracking and management system.",
    image: "/public/lovable-uploads/5bab4adf-cc66-44f6-bdc4-ed958227e14f.png",
    region: "europe",
    challenge: "The client needed a modern logistics management system to track shipments, manage fleet, and optimize routes.",
    solution: "We built a comprehensive logistics management platform with GPS tracking, route optimization, and real-time analytics.",
    results: ["30% reduction in fuel costs", "25% improvement in delivery time", "42% increase in operational efficiency"]
  }
];

export const technologies: Technology[] = [
  {
    id: "react",
    name: "React",
    description: "A JavaScript library for building user interfaces with component-based architecture.",
    icon: "Atom"
  },
  {
    id: "node",
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.",
    icon: "Server"
  },
  {
    id: "typescript",
    name: "TypeScript",
    description: "A strongly typed programming language that builds on JavaScript.",
    icon: "FileCode"
  },
  {
    id: "aws",
    name: "AWS",
    description: "Cloud computing platform offering reliable, scalable infrastructure services.",
    icon: "Cloud"
  },
  {
    id: "react-native",
    name: "React Native",
    description: "Framework for building native mobile applications using React.",
    icon: "Smartphone"
  },
  {
    id: "flutter",
    name: "Flutter",
    description: "Google's UI toolkit for building natively compiled applications.",
    icon: "Smartphone"
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: "ahmed-ali",
    name: "Ahmed Ali",
    position: "Senior Software Architect",
    image: "/public/lovable-uploads/e07c3082-c357-4bc0-b530-d96b05bdfcd8.png",
    region: "saudi-arabia"
  },
  {
    id: "fatima-khan",
    name: "Fatima Khan",
    position: "Lead UI/UX Designer",
    image: "/public/lovable-uploads/5b5e1330-e7ab-4c0e-b3af-4825f4d03e05.png",
    region: "pakistan"
  },
  {
    id: "michael-johnson",
    name: "Michael Johnson",
    position: "CTO",
    image: "/public/lovable-uploads/d09dac15-4f8d-40c4-88e6-193b7377e222.png",
    region: "usa"
  },
  {
    id: "sophie-mueller",
    name: "Sophie Mueller",
    position: "DevOps Engineer",
    image: "/public/lovable-uploads/143820e1-a5d4-4464-b7b6-a90752b91377.png",
    region: "europe"
  }
];
