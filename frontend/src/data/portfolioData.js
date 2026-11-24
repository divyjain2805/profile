export const personalInfo = {
  name: "Divya Jain",
  role: "Full-Stack Developer & AI Systems Engineer",
  tagline: "Architecting Scalable Full-Stack Systems, RAG Pipelines & Autonomous AI Agents",
  bio: "B.Tech Computer Science student at MIT ADT University (CGPA 7.96) building scalable MERN applications, production RAG pipelines, and autonomous AI agents with LangGraph. 400+ DSA problems solved across LeetCode & GeeksforGeeks.",
  phone: "+91 8591149616",
  email: "divyjain2805@gmail.com",
  location: "Pune, India",
  availability: "Available for Full-Time Roles & High-Impact Software Engineering Opportunities",
  socials: {
    github: "https://github.com/divyjain2805",
    linkedin: "https://linkedin.com/in/divya-jain-3b98a028a",
    leetcode: "https://leetcode.com/divyjain2805",
    twitter: "https://twitter.com/divyjain2805",
    email: "mailto:divyjain2805@gmail.com",
    phone: "tel:+918591149616"
  },
  education: {
    institution: "MIT ADT University",
    degree: "Bachelor of Technology, Computer Science & Engineering",
    timeline: "2023 – Present",
    location: "Pune, India",
    cgpa: "7.96"
  },
  stats: [
    { label: "DSA Problems Solved", value: "400+" },
    { label: "LeetCode Rating", value: "1400+ (100 & 50 Days Badges)" },
    { label: "B.Tech CSE (MIT ADT)", value: "CGPA: 7.96" },
    { label: "Core Stack", value: "MERN • GenAI • RAG" }
  ]
};

export const skillsData = {
  languages: ["C++", "JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
  backendAndDatabases: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT",
    "MongoDB",
    "Mongoose",
    "Zod",
    "Redis",
    "Pinecone"
  ],
  frontend: ["React.js", "Vite", "Three.js", "Tailwind CSS", "Bootstrap"],
  aiAndGenAI: [
    "LangChain",
    "LangGraph",
    "LangSmith",
    "RAG",
    "Vector Embeddings",
    "Semantic Search",
    "Prompt Engineering"
  ],
  toolsAndPlatforms: [
    "Docker",
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "Cloudinary",
    "Vercel",
    "Render"
  ],
  coreCS: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Operating Systems",
    "Computer Networks"
  ]
};

export const certificationsData = [
  {
    title: "Neural Networks and Deep Learning",
    issuer: "Coursera",
    link: "https://www.coursera.org/",
    highlight: "Deep learning fundamentals, backpropagation, vectorization, and multi-layer neural networks."
  },
  {
    title: "Responsible & Safe AI Systems",
    issuer: "NPTEL",
    link: "https://nptel.ac.in/",
    highlight: "AI safety, ethics, fairness, interpretability, and robust deployment practices."
  }
];

export const achievementsData = [
  {
    title: "400+ DSA Problems Solved",
    description: "Solved 400+ Data Structures and Algorithms problems across LeetCode and GeeksforGeeks, developing strong analytical and optimization skills.",
    badge: "Problem Solving"
  },
  {
    title: "LeetCode Rating 1400+",
    description: "Earned both the prestigious 100 Days of Code and 50 Days of Code badges on LeetCode with consistent competitive programming practice.",
    badge: "Competitive Coding"
  }
];

export const projectsData = [
  {
    id: "restaurant-agent",
    title: "L'Étoile Royale • Autonomous Restaurant Agent",
    subtitle: "Enterprise LangGraph, HITL & MongoDB State Machine",
    description: "Enterprise restaurant workflow automation modeled as a cyclic state machine utilizing LangGraph. Features atomic inventory validation, Human-in-the-Loop kitchen cook verification with 8-second countdown fallbacks, and 24-hour pantry replenishment.",
    category: "AI Agents & Full Stack",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    tags: ["LangGraph", "LangChain", "MongoDB", "FastAPI", "Docker", "Groq LLaMA 3.3", "Gemini 1.5"],
    highlights: [
      "LangGraph cyclic state machine with state checkpointing and interrupt()",
      "8-second Human-in-the-Loop kitchen verification with empirical probability fallback",
      "Dual 5-star Michelin luxury portals (Customer Dining Room & Chef Console)",
      "Automated 24h background pantry replenishment daemon in MongoDB"
    ],
    github: "https://github.com/divyjain2805/restaurant-agent",
    demo: "https://restaurant-automation-agent.onrender.com",
    featured: true
  },
  {
    id: "codewise",
    title: "CodeWise – Coding Practice & Interview Prep Platform",
    subtitle: "Full-Stack IDE Platform with Monaco & Redis Caching",
    description: "A comprehensive developer practice platform with Monaco editor, multi-language compiler integration, Redis query caching, and an AI debugging assistant powered by Gemini.",
    category: "MERN & Web Apps",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Redis", "Cloudinary", "Gemini API", "JDoodle API"],
    highlights: [
      "Built a coding practice platform with a Monaco editor, problem library, progress tracking, and admin panel",
      "Ran concurrent code submissions in 4 languages through the JDoodle Compiler API",
      "Reduced database load and improved response times by caching repeated queries with Redis",
      "Added a Gemini assistant for hints, debugging help, and logic explanations",
      "Tested with test cases during development to check usability and performance"
    ],
    github: "https://github.com/divyjain2805/CodeWise",
    demo: "https://code-wise-tawny.vercel.app",
    featured: true
  },
  {
    id: "notesmaking-ai",
    title: "NotesMaking AI – Prompt-Based Notes App",
    subtitle: "Conversational Note-Taking with Zod & Groq",
    description: "An AI-powered note-taking platform that automatically creates, finds, updates, and deletes notes from conversational natural language prompts without manual forms.",
    category: "MERN & Web Apps",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80",
    tags: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "Mongoose", "Zod", "MongoDB", "Groq API"],
    highlights: [
      "Built an AI notes app that creates notes from a prompt, without forms or manual note-making",
      "Used Groq to find, update, and delete notes from conversational, plain-English requests",
      "Kept users' notes private with email/password accounts and MongoDB storage",
      "Built a responsive React interface and an Express/Mongoose API with strict Zod validation"
    ],
    github: "https://github.com/divyjain2805/NotesMakingAI",
    demo: "https://notes-making-ai.vercel.app",
    featured: true
  },
  {
    id: "pagewise",
    title: "Pagewise – PDF Question-Answering App",
    subtitle: "ETL RAG Pipeline with Pinecone & Groq",
    description: "A production-grade PDF question-answering application that delivers document-grounded answers to plain-English questions via an ETL-style RAG pipeline with Gemini embeddings and Pinecone vector search.",
    category: "AI Agents & Full Stack",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1200&q=80",
    tags: ["Node.js", "Express.js", "Pinecone", "Gemini Embeddings", "Groq API", "Vercel", "Render"],
    highlights: [
      "Built a PDF question-answering app that returns document-grounded answers to plain-English questions",
      "Engineered an ETL-style RAG pipeline: extract and chunk PDF text, generate Gemini embeddings, store in Pinecone, and answer with Groq",
      "Protected uploads with tokens, CORS allow-listing, rate limits, and a 20 MB cap; deployed on Render and Vercel"
    ],
    github: "https://github.com/divyjain2805/pagewise",
    demo: "https://pagewise-frontend.vercel.app",
    featured: true
  },
  {
    id: "moviematch",
    title: "MovieMatch – Semantic Movie Discovery",
    subtitle: "Vector Similarity Search Engine",
    description: "A semantic film recommendation platform that ranks movie suggestions based on plain-English semantic embedding similarity.",
    category: "MERN & Web Apps",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    tags: ["React.js", "Vite", "Node.js", "Express.js", "OpenRouter Embeddings", "Render"],
    highlights: [
      "Built plain-English movie search ranked by embedding similarity",
      "Deployed the frontend and API in one Render web service with a health-check endpoint",
      "Fast response times with vectorized cosine similarity matching"
    ],
    github: "https://github.com/divyjain2805/moviematch",
    demo: null,
    featured: true
  },
  {
    id: "research-report-agent",
    title: "Autonomous Research Agent & Report Writer",
    subtitle: "Iterative Deep Research & Synthesis Engine",
    description: "High-performance autonomous research and technical writing system combining LangChain and LangGraph to iteratively Plan ➔ Search ➔ Summarize ➔ Critique ➔ Rewrite.",
    category: "AI Agents & Full Stack",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "LangGraph", "LangChain", "Tavily Web Search", "Pydantic", "Multi-Model LLM"],
    highlights: [
      "Autonomous critique-and-refinement loop with quantitative scoring",
      "Multi-model factory supporting OpenAI, Groq, Gemini, Grok, and local Ollama",
      "Deep web document crawling and chunked recursive synthesis",
      "Rich terminal visualizer for step-by-step observability"
    ],
    github: "https://github.com/divyjain2805",
    demo: null,
    featured: false
  },
  {
    id: "taskflow",
    title: "TaskFlow – Agile Workflow Dashboard",
    subtitle: "Modern Kanban & Priority Management",
    description: "Responsive project and task management dashboard designed for daily sprint planning and status tracking.",
    category: "Frontend & UI",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1200&q=80",
    tags: ["React.js", "JavaScript", "Vercel", "Tailwind CSS", "Kanban"],
    highlights: [
      "Clean kanban board with dynamic status pipelines",
      "Persistent state updates and keyboard accessibility",
      "Deployed on Vercel"
    ],
    github: "https://github.com/divyjain2805/taskflow",
    demo: "https://taskflow-gules-alpha.vercel.app",
    featured: false
  },
  {
    id: "strike",
    title: "STRIKE – Modern Frontend Showcase",
    subtitle: "Pure CSS Modern Web Experience",
    description: "A showcase of pure modern CSS architecture, fluid responsive grids, and micro-interactions delivering 60 FPS performance without JavaScript.",
    category: "Frontend & UI",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: ["HTML5", "Modern CSS", "CSS Grid", "Keyframe Animations"],
    highlights: [
      "100% JavaScript-free responsive design and interactive animations",
      "Lighthouse 100/100 performance and accessibility scores"
    ],
    github: "https://github.com/divyjain2805/STRIKE",
    demo: null,
    featured: false
  }
];

export const experienceData = [
  {
    title: "B.Tech in Computer Science & Engineering",
    institution: "MIT ADT University, Pune",
    timeline: "2023 – Present",
    score: "CGPA: 7.96",
    focus: "Core CS, Data Structures, Algorithms, OS, Networks & Web Technologies",
    description: "Undergraduate studies focused on foundational computer science, systems design, object-oriented programming, and distributed systems."
  },
  {
    title: "Full-Stack & Autonomous AI Systems Engineering",
    institution: "Independent Engineering & Open Source",
    timeline: "2023 – Present",
    score: "10+ Projects",
    focus: "MERN Stack, Pinecone RAG, LangGraph, Groq, Redis",
    description: "Architected production applications including Pagewise (ETL RAG pipeline), NotesMaking AI (prompt-driven notes), CodeWise (interview prep with Monaco & Redis caching), and LangGraph multi-agent systems."
  },
  {
    title: "Competitive Programming & Problem Solving",
    institution: "LeetCode & GeeksforGeeks",
    timeline: "Continuous",
    score: "400+ Solved • Rating 1400+",
    focus: "Data Structures, Algorithms, Graphs, Dynamic Programming",
    description: "Solved 400+ algorithmic problems across LeetCode and GeeksforGeeks. Earned 100 Days and 50 Days of Code badges and reached a 1400+ rating on LeetCode."
  }
];
