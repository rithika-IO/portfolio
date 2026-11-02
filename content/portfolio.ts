export interface NavLink {
  href: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  items: readonly string[];
}

export interface Project {
  title: string;
  year: string;
  desc: string;
  points: readonly string[];
  tags: readonly string[];
  github: string;
}

export interface EducationItem {
  title: string;
  place: string;
  date: string;
  desc: string;
}

export interface Achievement {
  title: string;
  place: string;
  status: string;
  desc: string;
}

export interface SocialLink {
  label: string;
  contactLabel?: string;
  href: string;
  external?: boolean;
}

export const NAV_LINKS: readonly NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
] as const;

export const SOCIALS: readonly SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/rithikamandiv-ux",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rithika-mandiv",
    external: true,
  },
  {
    label: "Email",
    contactLabel: "Email Me",
    href: "mailto:rithikamandiv@gmail.com",
    external: false,
  },
] as const;

export const SKILLS: readonly SkillCategory[] = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Vite", "TanStack Query", "React Router", "GSAP", "shadcn/ui", "Leaflet"] },
  { title: "Backend & Frameworks", items: ["Node.js", "Express", "PHP", ".NET", "ASP.NET Core", "Spring Boot", "Entity Framework Core", "Hibernate", "Prisma", "BullMQ", "FastAPI"] },
  { title: "Programming Languages", items: ["Java", "Python", "TypeScript", "C#", "Go"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "Redis"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Figma", "Maven", "Vercel", "Docker", "GitHub Actions", "ESLint", "Semgrep", "Railway", "Rider", "Ruff", "golangci-lint", "SonarQube Cloud"] },
  { title: "Testing", items: ["JUnit", "Mockito", "xUnit", "Testcontainers", "pytest", "Vitest"] },
  { title: "Data & Machine Learning", items: ["Pandas", "NumPy", "Scikit-learn", "FastF1"] },
] as const;

export const PROJECTS: readonly Project[] = [
  {
    title: "CodeGuardian AI",
    year: "2026",
    desc: "A GitHub-integrated static code analysis platform that connects repositories, runs ESLint and Semgrep through an asynchronous BullMQ pipeline, and provides AI-assisted explanations for individual findings.",
    points: [
      "Built a modular monolith with a separate BullMQ analysis worker so long-running repository scans never block HTTP requests.",
      "Integrated GitHub OAuth with AES-256-GCM encrypted token storage and Redis-backed server-side sessions.",
      "Normalized ESLint and Semgrep output into a common finding representation, stored in PostgreSQL via Prisma.",
      "Deliberately separated deterministic finding detection from AI explanation, using an AI provider only to explain findings that already exist.",
    ],
    tags: ["React", "TypeScript", "Express", "PostgreSQL", "Redis", "BullMQ", "Semgrep"],
    github: "https://github.com/rithikamandiv-ux/codeguardian-ai",
  },
  {
    title: "Cyber Log Analyzer",
    year: "2026",
    desc: "A production-style cybersecurity log analysis platform with a React frontend, Node.js backend, and PostgreSQL database for uploading, parsing, and investigating security logs.",
    points: [
      "Implemented JWT-based authentication for secure user sessions.",
      "Built a file upload pipeline that parses raw log files and stores structured entries in PostgreSQL.",
      "Designed a dashboard surfacing security alerts, threat summaries, and log statistics in real time.",
      "Exposed a RESTful API for log ingestion, querying, and alert management.",
    ],
    tags: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "REST API"],
    github: "https://github.com/rithikamandiv-ux/cyber-log-analyzer",
  },
  {
    title: "BudgetWise",
    year: "2026",
    desc: "A full-stack personal finance management application with AI-powered budget forecasting, built using React, Node.js, PostgreSQL, and a Python FastAPI forecasting service.",
    points: [
      "Built a React and TypeScript frontend for managing income, expenses, budgets, and financial categories.",
      "Developed a Node.js and Express API layer for handling finance-related CRUD operations.",
      "Used PostgreSQL for structured financial data storage.",
      "Integrated a Python FastAPI microservice for budget forecasting and overspending prediction.",
    ],
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Python", "FastAPI"],
    github: "https://github.com/rithikamandiv-ux/budgetwise",
  },
  {
    title: "F1 Winner Prediction System",
    year: "2026",
    desc: "A Python machine-learning pipeline that predicts Formula 1 race winners using historical data collected via FastF1 across multiple seasons.",
    points: [
      "Automated multi-season dataset generation using the FastF1 API for historical race data collection.",
      "Engineered features from lap times, driver standings, and circuit characteristics using Pandas.",
      "Trained and evaluated classification models with Scikit-learn, optimising for prediction accuracy.",
      "Built an end-to-end prediction pipeline covering data ingestion, preprocessing, and inference.",
    ],
    tags: ["Python", "FastF1", "Pandas", "Scikit-learn", "Machine Learning"],
    github: "https://github.com/rithikamandiv-ux/F1-winner-prediction",
  },
  {
    title: "CareNexus",
    year: "2026",
    desc: "A healthcare operations and insurance management system that manages patients, doctors, appointments, medical records, insurance policies and claims. It uses a client-server architecture with a JavaFX desktop frontend, a Spring Boot REST API and a PostgreSQL database.",
    points: [
      "Built a layered Spring Boot backend (controller → service → repository) exposing a REST API consumed by the JavaFX frontend.",
      "Modeled six relational domains in PostgreSQL with Flyway-managed schema migrations and enforced referential integrity.",
      "Implemented full appointment and insurance-claim lifecycles with strict validation and structured API error handling.",
      "Covered the backend with 83 automated tests using JUnit 5, Mockito, and MockMvc, run automatically via GitHub Actions CI.",
    ],
    tags: ["Java", "JavaFX", "Spring Boot", "PostgreSQL", "REST API"],
    github: "https://github.com/rithikamandiv-ux/CareNexus",
  },
  {
    title: "JobEngine",
    year: "2026",
    desc: "A distributed background job processing engine with a database-backed queue, built with a .NET worker service, an ASP.NET Core minimal API, and a React dashboard.",
    points: [
      "Implemented atomic job claiming across concurrent workers using PostgreSQL's FOR UPDATE SKIP LOCKED, verified by an integration test.",
      "Built exponential backoff with full jitter, dead-lettering, and stale claim recovery for workers that crash mid-job.",
      "Designed a generic handler-registration system so new job types require no changes to the engine itself.",
      "Covered the system with 73 automated tests, including integration tests run against real PostgreSQL via Testcontainers.",
    ],
    tags: ["C#", ".NET", "PostgreSQL", "React", "TypeScript"],
    github: "https://github.com/rithikamandiv-ux/JobEngine",
  },
  {
    title: "Aircraft Tracker",
    year: "2026",
    desc: "A real-time aircraft tracking app for South Asian airspace: a Python and FastAPI backend polls the OpenSky Network and pushes live positions over WebSockets to a React and TypeScript map.",
    points: [
      "Built an on-demand poller that only queries OpenSky while viewers are connected, with a 60-second grace period, keeping usage within a 4,000-credit daily API budget.",
      "Broadcast a single upstream fetch to every connected client over WebSockets, with Origin validation on the socket endpoint and automatic reconnection with exponential back-off in the UI.",
      "Handled upstream failures deliberately: OAuth2 token caching with one bounded retry on 401, rate-limit pauses on 429, and stale-snapshot resends so the interface shows a delayed state instead of a blank map.",
      "Tested without touching the network using an httpx mock transport and an application factory, with Ruff, ESLint, pytest, Vitest and SonarQube Cloud enforced in GitHub Actions CI.",
    ],
    tags: ["Python", "FastAPI", "React", "TypeScript", "WebSockets"],
    github: "https://github.com/rithikamandiv-ux/aircraft-tracker",
  },
  {
    title: "stackrun",
    year: "2026",
    desc: "A command-line tool written in Go that runs every service a project needs from one config file, merges their output into one stream, and shuts them all down cleanly.",
    points: [
      "Implemented graceful shutdown that sends SIGTERM to each service's process group, waits for a configurable timeout, then escalates to SIGKILL so no child processes are left running.",
      "Built automatic restarts with exponential backoff from 1 second up to 30 seconds, a five-attempt limit, and a healthy-run reset so a crashing service cannot loop forever.",
      "Added strict YAML config validation that rejects unknown fields and reports every mistake at once, with aligned, colour-coded log prefixes per service.",
      "Shipped as a single binary with prebuilt macOS and Linux releases, tested with Go's race detector, and linted with golangci-lint in CI on Linux and macOS.",
    ],
    tags: ["Go", "CLI", "Concurrency", "Process Management", "GitHub Actions"],
    github: "https://github.com/rithikamandiv-ux/stackrun",
  },
  {
    title: "Expense Recorder",
    year: "2026",
    desc: "A full-stack web application for managing personal expenses with server-side rendering and real-time dynamic updates.",
    points: [
      "Built RESTful CRUD endpoints with Express and SQLite for persistent storage.",
      "Implemented AJAX-powered dynamic updates without full page reloads.",
      "Rendered views server-side using EJS templates for fast initial loads.",
    ],
    tags: ["Node.js", "Express", "SQLite", "EJS", "jQuery"],
    github: "https://github.com/rithikamandiv-ux/expenseRecorder",
  },
  {
    title: "Portfolio Website",
    year: "2026",
    desc: "This portfolio is a modern, animated single-page application with an interactive canvas name reveal, a shuffle subtitle animation, responsive navigation and a project showcase.",
    points: [
      "Built with Next.js and TypeScript for a performant, type-safe application structure.",
      "Implemented an animated hero with interactive canvas name reveal and shuffle subtitle.",
      "Used Framer Motion for scroll-triggered reveal animations across sections.",
      "Deployed to Vercel with responsive layouts optimised for desktop, tablet, and mobile.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "https://github.com/rithikamandiv-ux/portfolio",
  },
] as const;

export const EDUCATION: readonly EducationItem[] = [
  {
    title: "BEng (Hons) Software Engineering",
    place: "Informatics Institute of Technology (IIT), University of Westminster",
    date: "2025 – Present",
    desc: "Currently studying Software Engineering with a focus on programming, web development, databases, and software design principles.",
  },
  {
    title: "Foundation Certificate in Higher Education",
    place: "Informatics Institute of Technology (IIT)",
    date: "Completed 2025",
    desc: "Completed foundation studies with Merit, covering computing fundamentals and introduction to programming.",
  },
  {
    title: "GCE Ordinary Level (O/L)",
    place: "Mahinda Rajapakse College",
    date: "2024",
    desc: "Completed Ordinary Level education before progressing into higher education in software engineering.",
  },
] as const;

export const ACHIEVEMENTS: readonly Achievement[] = [
  {
    title: "Professional Certificate in Web Development",
    place: "Informatics Institute of Technology (IIT)",
    status: "Distinction",
    desc: "Achieved Distinction while learning core web development concepts including HTML, CSS, and JavaScript.",
  },
  {
    title: "Professional Certificate in Python Programming",
    place: "Informatics Institute of Technology (IIT)",
    status: "Completed",
    desc: "Gained a strong foundation in Python including logic building, functions, and problem-solving.",
  },
  {
    title: "Professional Certificate in Machine Learning",
    place: "Informatics Institute of Technology (IIT)",
    status: "Completed",
    desc: "Gained a strong foundation in machine learning including regression, classification, clustering, neural networks, and MLOps fundamentals.",
  },
] as const;

