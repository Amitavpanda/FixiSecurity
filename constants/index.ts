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
        description: "Identify and mitigate vulnerabilities in web applications and services.",
        details: {
          description: "A thorough evaluation of web applications to uncover vulnerabilities such as SQL injection, XSS, CSRF, and misconfigurations.",
          methodology: [
            "Reconnaissance: Gather information about the application and its environment.",
            "Vulnerability Scanning: Use automated tools to identify common vulnerabilities.",
            "Manual Testing: Perform in-depth manual testing to uncover complex vulnerabilities.",
            "Exploitation: Safely exploit vulnerabilities to assess their impact.",
            "Reporting: Provide a detailed report with findings and remediation steps."
          ]
        },
        benefits: [
          "Early detection of security flaws",
          "Improved application resilience",
          "Compliance with industry standards"
        ],
        features: [
          "Dynamic Application Security Testing (DAST)",
          "Static Application Security Testing (SAST)",
          "Configuration Review"
        ],
        image: WebApplicationSecurityAssesment
      },
      {
        id: "mobile-app-security",
        title: "Mobile Application Security Assessment",
        description: "Ensure the security of mobile applications against modern threats.",
        details: {
          description: "Evaluate mobile applications for vulnerabilities such as insecure data storage, weak authentication, and improper platform usage.",
          methodology: [
            "Static Analysis: Analyze the application code for vulnerabilities.",
            "Dynamic Analysis: Test the application in a runtime environment.",
            "Reverse Engineering: Decompile and analyze the app for security flaws.",
            "Network Traffic Analysis: Inspect data transmission for leaks or weaknesses."
          ]
        },
        benefits: [
          "Protect sensitive user data",
          "Mitigate mobile-specific threats",
          "Ensure compliance with mobile security standards"
        ],
        features: [
          "Mobile App Penetration Testing",
          "API Security Testing",
          "Runtime Analysis"
        ],
        image: MobileApplicationSecurityAssesment
      },
      {
        id: "api-security",
        title: "API Security Assessment",
        description: "Secure APIs against unauthorized access and data breaches.",
        details: {
          description: "Assess APIs for vulnerabilities such as broken authentication, excessive data exposure, and improper rate limiting.",
          methodology: [
            "Endpoint Discovery: Identify all API endpoints and their functionalities.",
            "Authentication Testing: Test for weak or broken authentication mechanisms.",
            "Input Validation: Check for improper input handling and injection vulnerabilities.",
            "Rate Limiting: Assess the API's ability to handle abuse or overuse.",
            "Reporting: Provide actionable recommendations for securing APIs."
          ]
        },
        benefits: [
          "Secure API endpoints",
          "Protect sensitive data",
          "Ensure seamless integration security"
        ],
        features: [
          "API Penetration Testing",
          "Authentication Testing",
          "Data Validation"
        ],
        image: ApiSecurityAssesment
      },
      {
        id: "source-code-review",
        title: "Secure Source Code Review",
        description: "Identify vulnerabilities in application source code.",
        details: {
          description: "Analyze source code to uncover security flaws, logic errors, and coding best practice violations.",
          methodology: [
            "Automated Scanning: Use tools to identify common vulnerabilities.",
            "Manual Review: Perform a detailed manual analysis of critical code sections.",
            "Security Recommendations: Provide guidance on secure coding practices."
          ]
        },
        benefits: [
          "Early detection of vulnerabilities",
          "Improved code quality",
          "Adherence to secure coding standards"
        ],
        features: [
          "Static Analysis",
          "Manual Code Review",
          "Security Recommendations"
        ],
        image: SecureSourceCodeReview
      },
      {
        id: "network-vapt",
        title: "Network Infrastructure VAPT",
        description: "Assess and secure network infrastructure against vulnerabilities.",
        details: {
          description: "Evaluate network devices, configurations, and protocols for security weaknesses.",
          methodology: [
            "Network Scanning: Identify active devices and open ports.",
            "Vulnerability Assessment: Detect known vulnerabilities in network components.",
            "Penetration Testing: Simulate attacks to evaluate network defenses.",
            "Configuration Review: Assess firewall and router configurations."
          ]
        },
        benefits: [
          "Strengthened network security",
          "Reduced risk of breaches",
          "Compliance with security standards"
        ],
        features: [
          "Network Scanning",
          "Vulnerability Assessment",
          "Penetration Testing"
        ],
        image: NetworkInfrastructureVAPT
      },
      {
        id: "cloud-security",
        title: "Cloud Security Assessment",
        description: "Secure cloud environments against misconfigurations and threats.",
        details: {
          description: "Evaluate cloud infrastructure for security gaps, misconfigurations, and compliance issues.",
          methodology: [
            "Configuration Review: Assess cloud service configurations for security best practices.",
            "Access Control Testing: Verify proper implementation of identity and access management.",
            "Data Protection: Ensure encryption and secure storage of sensitive data.",
            "Threat Simulation: Simulate attacks to test cloud defenses."
          ]
        },
        benefits: [
          "Enhanced cloud security posture",
          "Reduced risk of data breaches",
          "Compliance with cloud security standards"
        ],
        features: [
          "Cloud Configuration Review",
          "Security Controls Assessment",
          "Best Practices Review"
        ],
        image: CloudSecurityAssesment
      },
      {
        id: "firewall-security",
        title: "Firewall Security Assessment",
        description: "Optimize firewall configurations for maximum security.",
        details: {
          description: "Analyze firewall rules and configurations to ensure effective protection against threats.",
          methodology: [
            "Rule Review: Evaluate firewall rules for unnecessary or overly permissive entries.",
            "Configuration Assessment: Check for misconfigurations and best practices.",
            "Testing: Simulate attacks to validate firewall effectiveness."
          ]
        },
        benefits: [
          "Improved firewall performance",
          "Reduced attack surface",
          "Compliance with security policies"
        ],
        features: [
          "Rule Review",
          "Configuration Assessment",
          "Security Testing"
        ],
        image: FirewallSecurityAssesment
      },
      {
        id: "thick-client-security",
        title: "Thick Client Security Assessment",
        description: "Assess the security of desktop and thick client applications.",
        details: {
          description: "Evaluate thick client applications for vulnerabilities such as insecure storage, weak authentication, and improper communication protocols.",
          methodology: [
            "Binary Analysis: Analyze the application binary for vulnerabilities.",
            "Protocol Testing: Test communication protocols for weaknesses.",
            "Runtime Assessment: Monitor application behavior during execution."
          ]
        },
        benefits: [
          "Improved application security",
          "Protection against client-side attacks",
          "Compliance with security standards"
        ],
        features: [
          "Binary Analysis",
          "Protocol Testing",
          "Runtime Assessment"
        ],
        image: WebApplicationSecurityAssesment
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
          description: "Comprehensive advisory services for obtaining and maintaining ISO certifications, ensuring compliance with international standards.",
          methodology: [
            "Gap Analysis: Identify areas that need improvement to meet ISO standards.",
            "Documentation Support: Assist in creating and maintaining required documentation.",
            "Audit Preparation: Prepare the organization for internal and external audits.",
            "Training: Provide training to staff on ISO requirements and best practices."
          ]
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
        image: WebApplicationSecurityAssesment
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
          description: "Detailed evaluation of security architecture and configurations to identify weaknesses and recommend improvements.",
          methodology: [
            "Architecture Assessment: Analyze the current security architecture for gaps.",
            "Configuration Review: Evaluate configurations of critical systems and devices.",
            "Best Practices: Recommend improvements based on industry standards and best practices."
          ]
        },
        benefits: [
          "Architectural improvement",
          "Risk reduction",
          "Security optimization"
        ],
        features: [
          "Architecture Assessment",
          "Configuration Review",
          "Best Practices"
        ],
        image: WebApplicationSecurityAssesment
      },
      {
        id: "threat-modeling",
        title: "Threat Modelling",
        description: "Systematic approach to identifying security threats",
        details: {
          description: "Comprehensive threat modeling and risk assessment services to identify and mitigate potential threats.",
          methodology: [
            "Threat Identification: Identify potential threats to the system.",
            "Risk Assessment: Evaluate the likelihood and impact of identified threats.",
            "Mitigation Planning: Develop strategies to mitigate or eliminate risks."
          ]
        },
        benefits: [
          "Threat identification",
          "Risk prioritization",
          "Security planning"
        ],
        features: [
          "Threat Analysis",
          "Risk Assessment",
          "Mitigation Planning"
        ],
        image: ApiSecurityAssesment
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
          description: "Continuous security testing and vulnerability management services to ensure ongoing protection.",
          methodology: [
            "Regular Testing: Conduct periodic vulnerability assessments and penetration tests.",
            "Vulnerability Management: Track and remediate identified vulnerabilities.",
            "Security Reporting: Provide detailed reports with findings and recommendations."
          ]
        },
        benefits: [
          "Ongoing security assessment",
          "Regular testing",
          "Continuous improvement"
        ],
        features: [
          "Regular Testing",
          "Vulnerability Management",
          "Security Reporting"
        ],
        image: NetworkInfrastructureVAPT
      },
      {
        id: "managed-compliance",
        title: "Managed Compliance Services",
        description: "Continuous compliance management and monitoring",
        details: {
          description: "Comprehensive compliance management and monitoring services to ensure adherence to regulatory requirements.",
          methodology: [
            "Compliance Monitoring: Continuously monitor compliance with relevant standards.",
            "Audit Support: Assist in preparing for and conducting compliance audits.",
            "Documentation Management: Maintain and update compliance-related documentation."
          ]
        },
        benefits: [
          "Compliance maintenance",
          "Regular audits",
          "Risk management"
        ],
        features: [
          "Compliance Monitoring",
          "Audit Support",
          "Documentation Management"
        ],
        image: SecureSourceCodeReview
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
          description: "Comprehensive training in advanced web penetration testing techniques, focusing on real-world scenarios.",
          methodology: [
            "Hands-on Training: Provide practical experience with penetration testing tools and techniques.",
            "Advanced Techniques: Teach advanced methods for identifying and exploiting vulnerabilities.",
            "Real Applications: Use real-world applications for training exercises."
          ]
        },
        benefits: [
          "Practical skills",
          "Real-world scenarios",
          "Expert guidance"
        ],
        features: [
          "Hands-on Training",
          "Advanced Techniques",
          "Real Applications"
        ],
        image: RedTeamAssesment
      },
      {
        id: "mobile-testing",
        title: "Mobile Application Testing",
        description: "Mobile application security testing training",
        details: {
          description: "Specialized training in mobile application security testing, covering current threats and mitigation strategies.",
          methodology: [
            "Mobile Security: Teach security principles specific to mobile applications.",
            "Testing Methods: Provide training on various mobile application testing methods.",
            "Tool Usage: Demonstrate the use of tools for mobile security testing."
          ]
        },
        benefits: [
          "Mobile security expertise",
          "Practical experience",
          "Current threats"
        ],
        features: [
          "Mobile Security",
          "Testing Methods",
          "Tool Usage"
        ],
        image: FirewallSecurityAssesment
      },
      {
        id: "bug-hunting",
        title: "Corporate Training",
        description: "Training tailored for corporate security needs",
        details: {
          description: "Comprehensive corporate training in security practices and methodologies, customized to organizational needs.",
          methodology: [
            "Custom Modules: Develop training modules tailored to the organization.",
            "Interactive Sessions: Conduct interactive sessions to engage participants.",
            "Real-world Scenarios: Use real-world scenarios to enhance learning."
          ]
        },
        benefits: [
          "Tailored content",
          "Industry relevance",
          "Expert trainers"
        ],
        features: [
          "Custom Modules",
          "Interactive Sessions",
          "Real-world Scenarios"
        ],
        image: NetworkInfrastructureVAPT
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
        description: "Simulate real-world attacks to test organizational defenses.",
        details: {
          description: "Comprehensive assessment of an organization's security posture by simulating real-world attack scenarios.",
          methodology: [
            "Reconnaissance: Gather intelligence on the target organization.",
            "Exploitation: Attempt to exploit identified vulnerabilities.",
            "Lateral Movement: Simulate an attacker moving within the network.",
            "Data Exfiltration: Test the ability to extract sensitive data.",
            "Reporting: Provide a detailed report with findings and recommendations."
          ]
        },
        benefits: [
          "Identify security gaps",
          "Improve incident response",
          "Enhance overall security posture"
        ],
        features: [
          "Real-world Attack Simulation",
          "Comprehensive Reporting",
          "Actionable Recommendations"
        ],
        image: RedTeamAssesment
      },
      {
        id: "ad-assessment",
        title: "Active Directory Assessment",
        description: "Evaluate the security of Active Directory environments.",
        details: {
          description: "Assess the security of Active Directory configurations and identify potential vulnerabilities.",
          methodology: [
            "Configuration Review: Analyze Active Directory settings and policies.",
            "Privilege Escalation Testing: Test for potential privilege escalation paths.",
            "Access Control Assessment: Evaluate the effectiveness of access controls.",
            "Reporting: Provide recommendations to secure Active Directory environments."
          ]
        },
        benefits: [
          "Strengthen Active Directory security",
          "Prevent privilege escalation",
          "Ensure compliance with best practices"
        ],
        features: [
          "Configuration Review",
          "Privilege Escalation Testing",
          "Access Control Assessment"
        ],
        image: FirewallSecurityAssesment
      }
    ]
  },
  
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
      value: "6+",
      label: "Years of Experience"
    },
    {
      id: "clients",
      value: "50+",
      label: "Satisfied Clients"
    },
    {
      id: "certifications",
      value: "15+",
      label: "Industry Certifications"
    },
    {
      id: "experts",
      value: "15+",
      label: "Security Experts"
    }
  ],
  team: [
    {
      id: "business-development",
      name: "Satyam Raj",
      role: "Business Development Team",
      description: "Driving business growth and client relationships."
    },
    {
      id: "developer",
      name: "Amitav Panda",
      role: "Developer",
      description: "Expert in software development and system design."
    },
    {
      id: "technical-team",
      name: "Harsh Kumar, Samprit Das, Vivek Gupta, Akash More, Jay Kumar Pandey",
      role: "Technical Team",
      description: "Specialized in cybersecurity, threat analysis, and technical solutions."
    }
  ]
};