export const profile = {
  name: "Chamith Mendis",
  title: "Senior Full-Stack Engineer",
  tagline: "Angular · Spring Boot · Java · REST",
  location: "Colombo, Sri Lanka",
  email: "chamithmendis25@gmail.com",
  phone: "+94 777 594 182",
  linkedin: "#", // TODO: replace with actual LinkedIn profile URL
  summary:
    "Full-stack engineer with close to six years building scalable, high-performance web applications across fintech and capital-markets systems-brokerage, trading, and IPO platforms for international financial-services clients. I work across REST API design, reusable UI architecture, event-driven integrations, and enterprise database optimization, and provide hands-on technical direction through code reviews, mentoring, and delivery ownership across the full lifecycle.",
};

export const skills = [
  {
    label: "Frontend",
    items: ["Angular (v14, v17)", "React", "TypeScript", "JavaScript", "HTML/CSS3"],
  },
  {
    label: "Backend",
    items: ["Java 17 / 21", "Spring Boot", "JPA / Hibernate", "REST APIs", "WebSocket"],
  },
  {
    label: "Databases",
    items: ["Oracle", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    label: "Messaging & Caching",
    items: ["JMS", "ActiveMQ", "FIX Protocol", "Infinispan"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Docker", "Git"],
  },
];

export const experience = [
  {
    role: "Senior Software Engineer — Full Stack",
    org: "DirectFN Sri Lanka",
    location: "Colombo · 1 year onsite, Saudi Arabia",
    period: "May 2021 — Present",
    context:
      "Fintech / capital-markets software — brokerage, trading and IPO platforms for international financial-services clients.",
    bullets: [
      "Provided hands-on technical leadership: led feature development, conducted code reviews, and mentored junior and associate engineers.",
      "Designed and delivered enterprise full-stack modules with Angular, Spring Boot and Oracle — REST APIs, reusable UI components, and system integrations for high-volume transactional platforms.",
      "Built and maintained event-driven integrations processing exchange (FIX) messages over JMS on JBoss / WildFly using message-driven beans, supporting high-throughput order and market-data flows.",
      "Owned delivery for assigned modules — led data-migration activities and played an active role in multiple business-critical Go-Live events.",
      "Optimized Oracle performance for large transactional and reporting workloads through partition pruning, execution-plan analysis, indexing, and query redesign.",
      "Delivered onsite production support in Saudi Arabia, working directly with international clients on root-cause analysis, issue resolution, and performance improvements.",
    ],
  },
  {
    role: "Full-Stack Engineer (Intern)",
    org: "Inova IT Systems",
    location: "Colombo",
    period: "Oct 2020 — Apr 2021",
    context: null,
    bullets: [
      "Contributed to full-stack development of ETFB, a web-based application — requirements gathering & analysis, system design, development, integrations, testing, and bug fixing across the full SDLC (Angular, Spring Boot, MySQL, Swagger).",
    ],
  },
  {
    role: "Full-Stack Developer (Part-Time)",
    org: "TESS-TA OCR System & Sri Lanka Foundation",
    location: "Colombo",
    period: "2019 — 2021",
    context: null,
    bullets: [
      "TESS-TA OCR — Implemented client-driven features for a tri-lingual (Sinhala / English / Tamil) OCR platform. Dockerized the application for multi-environment deployment and hosted it on GCP (Spring Boot, React, MySQL, Docker).",
      "Sri Lanka Foundation Virtual Conference Platform — Built a virtual conference platform hosting a live exhibition for thousands of concurrent users, with virtual booths, networking, and live events (React, Express, MongoDB, AWS, Firebase).",
    ],
  },
];

export const projects = [
  {
    name: "IPO Platform",
    org: "DirectFN",
    description:
      "UI and REST API development for a capital-markets IPO subscription platform serving international financial-services clients — enhancements, application integrations, and requirement analysis, alongside mentoring juniors and leading code reviews.",
    stack: ["Angular", "Spring Boot", "Oracle", "REST"],
    tag: "Private client project",
  },
  {
    name: "OMS — Order Management System",
    org: "DirectFN",
    description:
      "Event-driven message-processing service handling exchange (FIX) messages over JMS using message-driven beans on JBoss/WildFly, supporting high-throughput order and market-data transaction flows.",
    stack: ["Java", "JMS", "ActiveMQ", "FIX Protocol", "WildFly"],
    tag: "Private client project",
  },
  {
    name: "ALKB",
    org: "DirectFN",
    description:
      "Ownership of database patching, production fixes, deployments, feature testing, and cross-team collaboration for a business-critical brokerage system.",
    stack: ["Oracle", "Spring Boot"],
    tag: "Private client project",
  },
  {
    name: "TESS-TA OCR",
    org: "Independent / Part-time",
    description:
      "Tri-lingual (Sinhala / English / Tamil) OCR platform. Implemented client-driven features and dockerized the application for multi-environment deployment, hosted on GCP.",
    stack: ["Spring Boot", "React", "MySQL", "Docker", "GCP"],
    tag: "Private client project",
  },
  {
    name: "Sri Lanka Foundation Virtual Conference",
    org: "Independent / Part-time",
    description:
      "Virtual conference platform hosting a live exhibition for thousands of concurrent users — virtual booths, networking, and live events.",
    stack: ["React", "Express", "MongoDB", "AWS", "Firebase"],
    tag: "Private client project",
  },
  {
    name: "ETFB",
    org: "Inova IT Systems",
    description:
      "Full-stack web application built end-to-end during internship — requirements gathering, system design, development, integrations, and testing across the full SDLC.",
    stack: ["Angular", "Spring Boot", "MySQL", "Swagger"],
    tag: "Private client project",
  },
];

export const education = [
  {
    degree: "BSc in Computer Science",
    detail: "GPA 3.53 · Second Class Upper",
    org: "University of Colombo School of Computing",
    period: null,
  },
  {
    degree: "G.C.E. Advanced Level",
    detail: null,
    org: "Royal College, Colombo",
    period: null,
  },
];
