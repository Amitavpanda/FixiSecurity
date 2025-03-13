import ApiSecurityAssesment from "../assets/ApiSecurityAssesment.jpeg";
import { StaticImageData } from 'next/image';
import CloudSecurityAssesment from "../assets/CloudSecurityAssesment.jpeg";
import FirewallSecurityAssesment from "../assets/FirewallSecurityAssessment.jpeg";
import MobileApplicationSecurityAssesment from "../assets/MobileApplicationSecurityAssessment.jpeg";
import NetworkInfrastructureVAPT from "../assets/NetworkInfrastructureVAPT.jpeg";
import RedTeamAssesment from "../assets/RedTeamAssessment.jpeg";
import SecureSourceCodeReview from "../assets/SecureSourceCodeReview.jpeg";
import WebApplicationSecurityAssesment from "../assets/WebApplicationAndServicesSecurityAssessment.jpeg";

export const NavbarOptions = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Training", id: "training" },
  { label: "About Us", id: "about" },
  { label: "Contact Us", id: "contact" },
]



// export interface ServiceSubCategory {
//     id: string;
//     title: string;
//     description: string;
//     details: string;
//     benefits: string[];
//     features: string[];
//     image: StaticImageData
//   }

// export interface ServiceCategory {
//   id: string;
//   title: string;
//   description: string;
//   icon: string;
//   subCategories: ServiceSubCategory[];
// }

export const services = [
  {
    id: "penetration-testing",
    title: "Penetration Testing and Application Security",
    description: "Comprehensive security testing and assessment services",
    icon: "shield",
    subCategories: [
      {
        id: "web-app-security",
        title: "Web Application and Services Security Assessment",
        description: "In-depth security assessment of web applications and services",
        details: {
          description: "Our web application security assessment service provides comprehensive testing to identify vulnerabilities in your web applications.",
          methodology: [] // methodology is empty since not provided
        },
        benefits: [
          "Early detection of security vulnerabilities",
          "Compliance with security standards",
          "Protection against cyber threats"
        ],
        features: [
          "Dynamic Application Security Testing",
          "Static Code Analysis",
          "Security Configuration Review"
        ],
        image: WebApplicationSecurityAssesment // Update this path as necessary
      },
      {
        id: "mobile-app-security",
        title: "Mobile Application Security Assessment",
        description: "Comprehensive security testing for mobile applications",
        details: {
          description: "Thorough assessment of mobile application security vulnerabilities and risks.",
          methodology: [] // methodology is empty since not provided
        },
        benefits: [
          "Identify mobile-specific security risks",
          "Protect sensitive user data",
          "Ensure compliance with mobile security standards"
        ],
        features: [
          "Mobile App Penetration Testing",
          "API Security Testing",
          "Runtime Analysis"
        ],
        image: MobileApplicationSecurityAssesment // Update this path as necessary
      },
      {
        id: "api-security",
        title: "API Security Assessment",
        description: "Testing and security assessment of APIs",
        details: {
          description: "Comprehensive security assessment of desktop and client-server applications.",
          methodology: [
            "Collaboration and Scope Definition: We begin with a collaborative session with your development team to understand the API's workflow, functionality, and intended use cases. This discussion helps us define the scope of the penetration test and identify key areas of focus.",
            "Endpoint Discovery: We utilize fuzzing techniques to discover all available API endpoints, ensuring complete coverage of the API surface.",
            "Scope Confirmation: A formal scope document is created and reviewed with your organization to confirm the boundaries of the penetration test before proceeding. This ensures alignment and avoids any misunderstandings.",
            "Automated Scanning: We leverage a suite of automated security scanners to identify common vulnerabilities and quickly assess the API's baseline security posture."
          ]
        },
        benefits: ["Secure API endpoints", "Data protection", "Integration security"],
        features: ["API Penetration Testing", "Authentication Testing", "Data Validation"],
        image: ApiSecurityAssesment // Update this path as necessary
      },
      {
        id: "source-code-review",
        title: "Secure Source Code Review",
        description: "Manual and automated source code security analysis",
        details: {
          description: "In-depth review of application source code to identify security vulnerabilities.",
          methodology: [] // methodology is empty since not provided
        },
        benefits: ["Early vulnerability detection", "Code quality improvement", "Security best practices"],
        features: ["Static Analysis", "Manual Code Review", "Security Recommendations"],
        image: SecureSourceCodeReview // Update this path as necessary
      },
      {
        id: "network-vapt",
        title: "Network Infrastructure VAPT",
        description: "Network vulnerability assessment and penetration testing",
        details: {
          description: "Comprehensive network security testing and vulnerability assessment.",
          methodology: [] // methodology is empty since not provided
        },
        benefits: ["Network security hardening", "Risk mitigation", "Compliance"],
        features: ["Network Scanning", "Vulnerability Assessment", "Penetration Testing"],
        image: NetworkInfrastructureVAPT // Update this path as necessary
      },
      {
        id: "cloud-security",
        title: "Cloud Security Assessment",
        description: "Security assessment of cloud infrastructure and services",
        details: {
          description: "Thorough evaluation of cloud security posture and configurations.",
          methodology: [] // methodology is empty since not provided
        },
        benefits: ["Cloud security optimization", "Risk identification", "Compliance assurance"],
        features: ["Cloud Configuration Review", "Security Controls Assessment", "Best Practices Review"],
        image: CloudSecurityAssesment // Update this path as necessary
      },
      
      {
        id: "firewall-security",
        title: "Firewall Security Assessment",
        description: "Assessment of firewall configurations and security",
        details: {
          description: "Detailed analysis of firewall rules, configurations, and security effectiveness.",
          methodology: [] // methodology is empty since not provided
        },
        benefits: ["Optimized security rules", "Enhanced protection", "Best practices implementation"],
        features: ["Rule Review", "Configuration Assessment", "Security Testing"],
        image: FirewallSecurityAssesment // Update this path as necessary
      },
      {
        id: "thick-client-security",
        title: "Thick Client Security Assessment",
        description: "Security testing of desktop and thick client applications",
        details: {
          description: "The increasing reliance on APIs in web and mobile applications has exposed organizations to a wider range of security risks.  Integrating APIs without proper security measures can leave systems vulnerable to both known and unknown exploits, especially if the API's functionality and endpoints are not adequately protected.  Detecting and patching API vulnerabilities can be a time-consuming process, leaving systems exposed during this critical window.  A robust API security assessment is crucial to address these vulnerabilities and protect sensitive data. Our comprehensive API security assessment services are designed to address your organization's specific security concerns. We prioritize rapid identification of high-risk vulnerabilities, enabling swift action to mitigate potential threats.  Our approach combines advanced automated tools with in-depth manual analysis, ensuring thorough coverage and minimizing the time required to detect and remediate vulnerabilities.  This blended approach allows us to efficiently uncover both common and more subtle security flaws, providing a comprehensive understanding of your API's security posture.  We work with you to prioritize remediation efforts based on risk, ensuring that the most critical vulnerabilities are addressed first.  Our goal is to help you secure your APIs and protect your systems from evolving threats.",
          methodology: [
            
          ]
        },
        benefits: ["Application security", "Data protection", "Compliance assurance"],
        features: ["Binary Analysis", "Protocol Testing", "Runtime Assessment"],
        image: WebApplicationSecurityAssesment // Update this path as necessary
      }
    ]
  },
  {
    id: "grc-advisory",
    title: "GRC/Risk Advisory",
    description: "Governance, Risk, and Compliance advisory services",
    icon: "clipboard-check",
    subCategories: [
      {
        id: "iso-certification",
        title: "ISO Certification Advisory",
        description: "Expert guidance for ISO certification process",
        details: {
          description: "Comprehensive advisory services for obtaining and maintaining ISO certifications.",
          methodology: [] // methodology is empty since not provided
        },
        benefits: [
          "Streamlined certification process",
          "Expert guidance and support",
          "Continuous compliance monitoring"
        ],
        features: [
          "Gap Analysis",
          "Documentation Support",
          "Audit Preparation"
        ],
        image: WebApplicationSecurityAssesment // Update this path as necessary
      }
    ]
  },
  {
    id: "architecture-review",
    title: "Architecture Review and Assessment",
    description: "Comprehensive security architecture evaluation services",
    icon: "file-check",
    subCategories: [
      {
        id: "security-architecture",
        title: "Security Architecture and Configuration Reviews",
        description: "Review and assessment of security architecture",
        details: {
          description: "Detailed evaluation of security architecture and configurations.",
          methodology: [] // methodology is empty since not provided
        },
        benefits: ["Architectural improvement", "Risk reduction", "Security optimization"],
        features: ["Architecture Assessment", "Configuration Review", "Best Practices"],
        image: WebApplicationSecurityAssesment // Update this path as necessary
      },
      {
        id: "threat-modeling",
        title: "Threat Modelling",
        description: "Systematic approach to identifying security threats",
        details: {
          description: "Comprehensive threat modeling and risk assessment services.",
          methodology: [] // methodology is empty since not provided
        },
        benefits: ["Threat identification", "Risk prioritization", "Security planning"],
        features: ["Threat Analysis", "Risk Assessment", "Mitigation Planning"],
        image: ApiSecurityAssesment // Update this path as necessary
      }
    ]
  },
  {
    id: "managed-security",
    title: "Managed Security Services",
    description: "Ongoing security management and monitoring services",
    icon: "settings",
    subCategories: [
      {
        id: "managed-vapt",
        title: "VAPT",
        description: "Managed vulnerability assessment and penetration testing",
        details: {
          description: "Continuous security testing and vulnerability management services.",
          methodology: [] // methodology is empty since not provided
        },
        benefits: ["Ongoing security assessment", "Regular testing", "Continuous improvement"],
        features: ["Regular Testing", "Vulnerability Management", "Security Reporting"],
        image: NetworkInfrastructureVAPT // Update this path as necessary
      },
      {
        id: "managed-compliance",
        title: "Managed Compliance Services",
        description: "Continuous compliance management and monitoring",
        details: {
          description: "Comprehensive compliance management and monitoring services.",
          methodology: [] // methodology is empty since not provided
        },
        benefits: ["Compliance maintenance", "Regular audits", "Risk management"],
        features: ["Compliance Monitoring", "Audit Support", "Documentation Management"],
        image: SecureSourceCodeReview // Update this path as necessary
      }
    ]
  },
  {
    id: "security-training",
    title: "Security Training",
    description: "Specialized security training and education services",
    icon: "graduation",
    subCategories: [
      {
        id: "web-pentesting",
        title: "Extreme Web Penetration Testing",
        description: "Advanced web penetration testing training",
        details: {
          description: "Comprehensive training in advanced web penetration testing techniques.",
          methodology: [] // methodology is empty since not provided
        },
        benefits: ["Practical skills", "Real-world scenarios", "Expert guidance"],
        features: ["Hands-on Training", "Advanced Techniques", "Real Applications"],
        image: RedTeamAssesment // Update this path as necessary
      },
      {
        id: "mobile-testing",
        title: "Mobile Application Testing",
        description: "Mobile application security testing training",
        details: {
          description: "Specialized training in mobile application security testing.",
          methodology: [] // methodology is empty since not provided
        },
        benefits: ["Mobile security expertise", "Practical experience", "Current threats"],
        features: ["Mobile Security", "Testing Methods", "Tool Usage"],
        image: FirewallSecurityAssesment // Update this path as necessary
      },
      {
        id: "bug-hunting",
        title: "Bug Hunting",
        description: "Training in vulnerability discovery and bug hunting",
        details: {
          description: "Comprehensive training in bug hunting and vulnerability research.",
          methodology: [] // methodology is empty since not provided
        },
        benefits: ["Research skills", "Vulnerability discovery", "Security expertise"],
        features: ["Research Methods", "Tool Usage", "Reporting Skills"],
        image: NetworkInfrastructureVAPT // Update this path as necessary
      }
    ]
  },

  {
    id: "red-team",
    title: "Red Team Assessment",
    description: "Advanced security assessment simulating real attacks",
    icon: "graduation",
    subCategories: [
      {
        id: "red-team-activity",
        title: "Red Team Activity",
        description: "Advanced web penetration testing training",
        details: {
          description: "Comprehensive training in advanced web penetration testing techniques.",
          methodology: [] // methodology is empty since not provided
        },
        benefits: ["Practical skills", "Real-world scenarios", "Expert guidance"],
        features: ["Hands-on Training", "Advanced Techniques", "Real Applications"],
        image: RedTeamAssesment // Update this path as necessary
      },
      {
        id: "ad-assessment",
        title: "AD Assessment",
        description: "Mobile application security testing training",
        details: {
          description: "Specialized training in mobile application security testing.",
          methodology: [] // methodology is empty since not provided
        },
        benefits: ["Mobile security expertise", "Practical experience", "Current threats"],
        features: ["Mobile Security", "Testing Methods", "Tool Usage"],
        image: FirewallSecurityAssesment // Update this path as necessary
      },
      {
        id: "bug-hunting",
        title: "Bug Hunting",
        description: "Training in vulnerability discovery and bug hunting",
        details: {
          description: "Comprehensive training in bug hunting and vulnerability research.",
          methodology: [] // methodology is empty since not provided
        },
        benefits: ["Research skills", "Vulnerability discovery", "Security expertise"],
        features: ["Research Methods", "Tool Usage", "Reporting Skills"],
        image: NetworkInfrastructureVAPT // Update this path as necessary
      }
    ]
  }
];

// About Us Content remains unchanged
export interface AboutUsContent {
  title: string;
  subtitle: string;
  description: string;
  mission: {
    title: string;
    description: string;
  };
  vision: {
    title: string;
    description: string;
  };
  stats: Array<{
    id: string;
    value: string;
    label: string;
  }>;
  team: Array<{
    id: string;
    name: string;
    role: string;
    description: string;
  }>;
}

export const aboutUsContent: AboutUsContent = {
  title: "About Us",
  subtitle: "Leading the Way in Cybersecurity Excellence",
  description: "With over a decade of experience in cybersecurity, we've been at the forefront of protecting businesses and organizations from evolving digital threats. Our team of certified experts combines cutting-edge technology with industry best practices to deliver comprehensive security solutions.",
  mission: {
    title: "Our Mission",
    description: "To empower organizations with robust cybersecurity solutions and knowledge, ensuring their digital assets remain protected in an ever-evolving threat landscape."
  },
  vision: {
    title: "Our Vision",
    description: "To be the global leader in innovative cybersecurity solutions, setting industry standards for excellence and reliability in digital security."
  },
  stats: [
    {
      id: "years",
      value: "10+",
      label: "Years of Experience"
    },
    {
      id: "clients",
      value: "500+",
      label: "Satisfied Clients"
    },
    {
      id: "certifications",
      value: "50+",
      label: "Industry Certifications"
    },
    {
      id: "experts",
      value: "100+",
      label: "Security Experts"
    }
  ],
  team: [
    {
      id: "lead-security",
      name: "John Anderson",
      role: "Lead Security Consultant",
      description: "Expert in penetration testing and security architecture with 15+ years of experience."
    },
    {
      id: "tech-director",
      name: "Sarah Chen",
      role: "Technical Director",
      description: "Specialized in cloud security and compliance with multiple industry certifications."
    },
    {
      id: "research-head",
      name: "Michael Rivera",
      role: "Head of Research",
      description: "Leading our threat research and vulnerability assessment initiatives."
    }
  ]
};