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
          description: "Web application security evaluation combines industry-standard information security practices with tools explicitly designed to test websites, web-based services, and web applications. Web application security assessments can be carried out manually or automatically and carried out throughout the software development lifecycle (SDLC). It will typically include security measures, security audits, periodic inspections, secure coding practices, secure firewalls, vulnerability scanning, and the implementation of protocols that ensure safe operation.",
          methodology: [
            "Our team will conduct a functional analysis of the application, user functions, business logic, and application structure. When code analysis is used, the entire application's codebase is evaluated. This procedure assists our security experts in identifying possible attack vectors used by hackers.",
            "The following stage of an application security test is to build an application's threat profile. Our threat models are developed following your business's requirements for application security. This results in tailored security testing that goes beyond standard web application penetration testing.",
            "The web application security assessment plan details the research strategy used to conduct security checks. The test plan would cover possible exploit methods that could jeopardise user rights, business logic, or transactions or reveal sensitive data.",
            "HackersEra Security Consultants conducts the application security test plan during this time. Unlike software testing, however, the performance of a security test is not always as predefined, and therefore the plan must be updated continuously as the situation develops.HackersEra Security experts pivot the strategy to simulate actual hackers by using their extensive expertise. This potentially results in the discovery of additional vulnerabilities that may result in findings of critical bugs.",
            "Once the assessment is complete, a detailed written report outlinin`g each observed and or exploited vulnerabilities, along with the root cause analysis and categorisation along with mitigation and confirmatory re-test certificate if the need arrives."
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
          description: "Over the last few years, mobile technology has accelerated its growth and seen a massive increase in user base. Mobile applications store and process a wide variety of sensitive data, from credit card information to intellectual property to medical records. Malicious attackers easily target this sensitive information. According to research, there are nearly 20 million active vulnerabilities on mobile devices! Due to the blurring of the lines between secure and exposed data. Mobile Application Security Testing evaluates an application's security and a large pool of mobile application threat vectors to identify inherent vulnerabilities and ensure the application's secure state while in use.",
          methodology: [
            "Our team compiles data on the application's architecture, use cases, business logic, and other pertinent details about the mobile application.",
            "Create an application's threat profile by enumerating all potential risks and associated threats. This enables testers to create custom test plans to simulate attacks, allowing for assessing actual risks rather than generic vulnerabilities.",
            "Back-ends, such as web servers and APIs, provide the application's intended functionality. Our testing team creates a simulated attack on the web services and APIs of the mobile application..",
            "Attacking the network layer entails probing communication channels, capturing network traffic, and evaluating transport layer protection.",
            "What really makes us stand apart is our excellent and round the clock support, making sure our clients never have to witness hurdles in the business."
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
          description: "Secure Source Code reviews are an effective way to identify difficult or impossible bugs during black box or grey box testing. Our security architects and specialist developers conduct a thorough code analysis using a detailed checklist of common implementation and architecture errors. The source code review identifies the vulnerable assertion line of code and the corrupted variable that introduces the vulnerability. This demonstrates how an event spreads from its source to its conclusion. This provides application developers with a comprehensive view of each vulnerability, allowing them to assess the severity of the issue quickly.",
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
          description: "Secure Source Code reviews are an effective way to identify difficult or impossible bugs during black box or grey box testing. Our security architects and specialist developers conduct a thorough code analysis using a detailed checklist of common implementation and architecture errors. The source code review identifies the vulnerable assertion line of code and the corrupted variable that introduces the vulnerability. This demonstrates how an event spreads from its source to its conclusion. This provides application developers with a comprehensive view of each vulnerability, allowing them to assess the severity of the issue quickly.",
          methodology: [
            "Our DevSecOps team conducts an in-depth analysis of the coding involved, the threat environment, and which codings should be prioritised for analysis. The team can identify any missing strings or extraneous coding in the code by inspecting it.",
            "Automated tools are used to assess each and every coding sequence and its associated output, comparing them to the required output.",
            "Manual analyses entail inspecting the application code line by line for logical errors, insecure cryptography implementations,insecure system configurations, and other platform-specific issues.",
            "Once the assessment is complete, a detailed written report outlining each observed and or exploited vulnerabilities, along with the root cause analysis and categorisation along with mitigation and confirmatory re-test certificate if the need arrives.",
            "What really makes us stand apart is our excellent and round the clock support, making sure our clients never have to witness hurdles in the business."
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
          description: "The IT facilities of a company are pillared over the network components they use. To help the company, this consists of a variety of network and security equipment. It's just as important to plan where each unit will go to configure it safely. The bugs are exploited as much for their design flaws as they are for their misconfiguration. Daily enforcement, configuration, and security reviews of the network assist the company in maintaining a current view of the network and IT infrastructure. Modern-day attacks are also looking for non-traditional entry points, such as wireless and VoIP infrastructure. Securing these aspects is just as crucial as securing a company's application.",
          methodology: [
            "This stage includes essential aspects such as gathering the requirement and arranging meetings related to it while gathering information.",
            "This phase consists of gathering information associated with the target network infrastructure. The activities performed in this phase are Passive & Active Reconnaissance.",
            "Once the required information is gathered, the detailed scope is outlined for assessment.",
            "It consists of profiling the target network infrastructure and assessing the target network infrastructure to identify vulnerabilities present using tools and manual techniques.",
            "It involves actual steps involved in exploiting discovered vulnerabilities. During this, the stakeholders are intimately involved in allowing or disallowing the consultants to perform exploitation steps. The exploitation phase will cover all vulnerabilities outlined to the stakeholders and can be composed of vulnerabilities from external network devices and hosts.",
            "Once the assessment is complete, a detailed written report outlining each observed and or exploited vulnerabilities, along with the root cause analysis and categorisation along with mitigation and confirmatory re-test certificate if the need arrives.",
            "What really makes us stand apart is our excellent and round the clock support, making sure our clients never have to witness hurdles in the business.",

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
          description: "To unlock the full potential of your cloud computing system, it is vital to ascertain the strengths and weakness of the cloud system. This goal can be achieved through Assessing and identifying the weaknesses of a system that is hosted on a cloud provided by various cloud providers is what comprises the Cloud Security Assessment. With the cloud security assessment service, a systematic approach of attack simulations is launched on the system to identify the loopholes within them. Since the cloud contains a lot of sensitive data and other resources that facilitate the system’s functioning, it is essential to boost the security of your cloud infrastructure and assess the different nature of attacks that vary from the conventional methods of data storage.",
          methodology: [
            "Analyze service level agreements with cloud providers. Confirming the test scope, target IP addresses, URLs, APIs, login credentials and privileges, compliance requirements, testing times, points of contact, and engagement rules.",
            "This procedure involves auditing identity and access management controls. These typically include checks of the use of elevated privilege accounts, multi-factor authentication (MFA), password policies, identity and access management (IAM) policies, access keys, and credential usage policies.",
            "Issues with authentication and authorisation are pervasive security flaws. User authentication is a function that the majority of applications incorporate. Although the back end provider handles some authentication and state management logic, authentication is an integral part of most architectures that knowing how it is implemented is critical.",
            "This area is responsible for auditing network-security controls such as ingress and egress rulesets, flow logging, traffic limits, and least access rights.",
            "Each of the major cloud service providers provide web services that log tenant API calls. This data includes several parameters, such as the API source, call details, and request/response elements. This method consists of reviewing an account's API calls, log file validation, at-rest encryption, access checks to ensure that logs are restricted from public view, and access logging, configuration management, and monitoring options.",
            "The monitoring process is a vital activity in charge of alerting appropriate contacts during an incident. This entails relying on logging and associated configuration parameters to ensure the proper metric filters are in place. These reviews include checking for real-time monitoring configuration and setting alarms for any changes to access control lists, security policies/groups, routing tables, and other relevant parameters.",
            "Identifying the target environment's security configuration, logical security vulnerabilities and identifying false positives and verifying risk levels correlated with findings.",
            "Once the assessment is complete, a detailed written report outlining each observed and exploited vulnerabilities, along with the root cause analysis and categorisation along with mitigation and confirmatory re-test certificate if the need arrives.",
            "What really makes us stand apart is our excellent and round the clock support, making sure our clients never have to witness hurdles in the business."
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
          description: "Our security test ensures that the firewall configuration and rules meet the company's business and compliance needs. Every business, regardless of size, uses firewall technology to establish limits of trust and security and access the internet for inter-business communication. Next-generation firewalls provide increasing complexity, and functionality requires you to manage firewalls appropriately. The list of regulations will be thoroughly investigated following the operational assessment and based on the level of trust needed from the security apparatus. A weak/outdated firewall may have made the target systems vulnerable to information disclosure, exploiting the compromise.",
          methodology: [
            "Identification of the target environment, including the network topology, the number and type of firewalls, and the followed standards, must be compatible. The discovery process identifies critical assets within a system that should be protected with the strictest security controls possible.",
            "A thorough examination conducted of existing rules which the client has implemented, define rules justification is noted against the business requirement.",
            "The rules for whitelisting services, IP addresses, and port numbers are reviewed.",
            "Authorization, logging/alerting, firmware patching, and administrative access are all examples of security configurations that need to be examined.",
            "Once the assessment is complete, a detailed written report outlining each observed and or exploited vulnerabilities, along with the root cause analysis and categorisation along with mitigation and confirmatory re-test certificate if the need arrives.",
            "What really makes us stand apart is our excellent and round the clock support, making sure our clients never have to witness hurdles in the business."
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
          description: "Many thick client applications are not thoroughly examined because security testing efforts are frequently focused on web and mobile applications. However, these applications could have serious security flaws like memory corruption, injection, cryptographic flaws, and client-side trust issues. These flaws can lead to complete system compromise and unauthorised access to server-side data on systems where the thick client software is installed. Thick client applications process data on both the client and server sides and use proprietary protocols to communicate. They may also contain a number of client-side components that operate at different levels of trust. Using simple, automated methods to scan for vulnerabilities isn't enough. As a result, each of our thick client tests is tailored specifically for the application.",
          methodology: [
            "Our team will conduct a functional analysis of the application, user functions, business logic, and application structure. Depending upon the architecture, 2-tier or 3-tier next phases are plan accordingly.",
            "We use a proprietary tool to identify common issues in thick client software. Our security consultants use the tool to analyse the thick client's network communication, interprocess communication, and operating system interactions.",
            "Our security consultants assess the configuration of your thick client, looking for both default configuration issues and ways for the application to get around security controls. Additionally, this assessment verifies that your software is taking advantage of the platform's security features.",
            "Remote execution is used in many thick client attacks. When this is the case, we intercept and analyse network traffic in detail, and if necessary, reverse engineer custom protocols. Regardless of the protocol, we use a proprietary tool to intercept and modify traffic. We also write plugins to decrypt and parse packets for deep analysis using custom protocols.",
            "We assess the thick client software itself using various tools, depending on the software and attacks being dealt with. Memory dumps, privilege escalation testing on IPC channels, fuzzing file inputs, and in-depth reverse engineering are just a few of the things that can be done.",
            "Because most thick clients rely on server-side functionality, a successful server-side code exploit can compromise all thick clients and central data stores. During this phase, we evaluate the server software using a variety of manual and automated tools.",
            "Once the assessment is complete, a detailed written report outlining each observed and or exploited vulnerabilities, along with the root cause analysis and categorisation along with mitigation and confirmatory re-test certificate if the need arrives.",
            "What really makes us stand apart is our excellent and round the clock support, making sure our clients never have to witness hurdles in the business."
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
          description: "A Security Arch[itecture Review is an in-depth examination of your organisation's security layers, including those that protect the network, applications, people, and processes. It identifies flaws in your Architecture, Policies, and Controls that could allow an attacker to compromise your critical assets. A thorough examination of the client's existing rules, including details regarding their scope and testing constraints.",
          methodology: [
            "We begin by learning about the organisation’s business objectives and control objectives. We then assess the network's design, key components, protocols, and data flow to and from the network and the core technologies upon which the network depends to achieve its security goals and compare them to applicable standards, laws/regulations, and best practices.",
            "A rigorous analysis of the life cycle of identity management, application control, application provisioning, centralised and decentralised credential storage, authentication, data control, network authentication protocols, and how they fit in the overall identity ecosystem.",
            "Our Security Consultants will be auditing server and application hardening, server and device security, boundary protection, as well as security that service (integrated and distinct from the application) across the infrastructure (server and application) will be audited.",
            "Software Development Lifecycle Assessment, Application Security Architecture Integration, Web Application Firewalls, Encryption, and Secure Communication between Applications, Databases, and Endpoints Application Cryptography Solutions, Application Security Approaches for All System Components and Application Controls Against Existing Threats and Vulnerabilities.",
            "The following aspects of cloud infrastructure are evaluated: identity and access management, network security, data security, application security, cloud security best practices implementation, encryption and key management, denial of service prevention, web application firewalls, third-party component security, API security, logging and auditing, and hardening.",
            "Once the assessment is complete, a detailed written report outlining each observed and exploited vulnerabilities, along with the root cause analysis and categorisation along with mitigation and confirmatory re-test certificate if the need arrives.",
            "What really makes us stand apart is our excellent and round the clock support, making sure our clients never have to witness hurdles in the business."
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
          description: `Threat modelling is the active quest for "hidden unknowns," or new and novel attack behaviours undetectable by existing automated prevention and detection methods. Every year, our ability to counter advanced threats improves, but we still face determined and inventive adversaries whose tactics evolve at a breakneck pace. Traditional security controls make it difficult to protect what you can't see or understand.`,
          methodology: [
            "A proactive threat hunting activity's first step is to define the engagement's scope and hypotheses.",
            "Our Threat Researcher will collaborate with the blue team to define the scope of the investigation, whether it is organization-wide, limited in scope, or focused on a specific threat. Appropriate methodologies and tools will be planned to cover those areas based on the scope and hypotheses.",
            "We will deploy the relevant technologies required to conduct the threat assessment to the scoped environment, configure and tune them during this stage.",
            "After configuring the environment with the required threat hunting resources, we'll conduct the search using various techniques and tactics to look for active compromises.",
            "Once the assessment is complete, a detailed written report outlining each observed and or exploited vulnerabilities, along with the root cause analysis and categorisation along with mitigation and confirmatory re-test certificate if the need arrives.",
            "What really makes us stand apart is our excellent and round the clock support, making sure our clients never have to witness hurdles in the business."
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
          description: "With ever-growing compliance criteria and increasing pressures on in-house compliance teams, the risks associated with failing to meet these requirements have also increased. The regulator and customers need compliance, and investors regard non-compliance as a red flag for new funding commitments. Managed enforcement (also known as compliance outsourcing) is always the best method for resolving a problem. Many financial services firms lack the in-house resources and expertise required to comply with regulatory requirements, whereas larger financial services firms face exorbitant compliance costs to ensure that all necessary tasks are completed.",
          methodology: [
            "You can achieve compliance with ISO 27001/PCI DSS/GDPR/SOC1/SOC2/HIPAA/HITRUST or any other customized framework.",
            "Our Security Consultant will review, verify, and test your business continuity and disaster recovery plans.",
            "Our Security Consultant will assist you in ensuring that the systems remain compliant by performing periodic internal audits.",
            "HackersEra consultants will assist your team. We'll help you resolve any non-conformities or observations raised by external auditors, and we'll work with you to achieve the required certification.",
            "Our Security Consultant will work with your Compliance team, assess your vendors, and ensure that your sensitive data is handled with due care and diligence.",
            "We assist you in achieving/maintaining compliance with a range of standards, including ISO 27001, HIPAA, HITRUST, GDPR, PCI DSS, SOC1 & SOC2.",
            "Our Security Consultants hold training workshops, mock assessments, posters, and screensavers to ensure that your information security efforts spread within your organization."
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
      id: "technical-team-harsh",
      name: "Harsh Kumar",
      role: "Cybersecurity Specialist",
      description: "Expert in penetration testing and vulnerability assessment."
    },
    {
      id: "technical-team-samprit",
      name: "Samprit Das",
      role: "Threat Analyst",
      description: "Specialized in threat intelligence and incident response."
    },
    {
      id: "technical-team-vivek",
      name: "Vivek Gupta",
      role: "Network Security Engineer",
      description: "Focused on securing network infrastructure and configurations."
    },
    {
      id: "technical-team-akash",
      name: "Akash More",
      role: "Cloud Security Expert",
      description: "Specialized in securing cloud environments and configurations."
    },
    {
      id: "technical-team-jay",
      name: "Jay Kumar Pandey",
      role: "Application Security Engineer",
      description: "Focused on securing web and mobile applications."
    }
  ]
};