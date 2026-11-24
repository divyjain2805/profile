# ⚡ Divya Jain • Developer Portfolio (MERN Stack)

[![React](https://img.shields.io/badge/React-19.3-61DAFB.svg?logo=react&logoColor=black)](https://react.dev/)
[![Express.js](https://img.shields.io/badge/Express-4.21-white.svg?logo=express&logoColor=black)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248.svg?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A modern, responsive, and production-ready personal portfolio website built with the **MERN stack** (MongoDB, Express.js, React, Node.js) and styled with **Tailwind CSS**.

Featuring real projects fetched from GitHub and local autonomous AI agent architectures, interactive category filters, project detail modals, an interactive code terminal, and a contact form connected to an Express & MongoDB API with resilient fallback persistence.

---

## 👨‍💻 About Divya Jain

- **Role:** Full-Stack Developer & AI Systems Engineer
- **Phone / WhatsApp:** [+91 8591149616](tel:+918591149616)
- **Email:** [divyjain2805@gmail.com](mailto:divyjain2805@gmail.com)
- **LinkedIn:** [linkedin.com/in/divya-jain-3b98a028a](https://linkedin.com/in/divya-jain-3b98a028a)
- **GitHub:** [github.com/divyjain2805](https://github.com/divyjain2805)
- **LeetCode:** [leetcode.com/divyjain2805](https://leetcode.com/divyjain2805) (300+ Problems Solved)

---

## 🌟 Architecture & Features

### 1. 🖥️ Interactive React Frontend (`/frontend`)
- **Vite + React 19 + Tailwind CSS**: Lightning-fast compilation and sleek modern dark theme.
- **Sticky Glassmorphism Navbar**: Brand signature, active section highlighting, mobile drawer menu, and availability indicator.
- **Hero Section**: Headline, value proposition, quick social action strips, and an interactive code terminal card (`divya_stack.json`).
- **About Section**: Deep dive into MERN architecture, LangGraph multi-agent workflows, and algorithmic foundations.
- **Projects Showcase**: Interactive filtering by categories (*All*, *AI Agents & Full Stack*, *MERN & Web Apps*, *Frontend & UI*) with live demo and GitHub repository links, plus technical highlight inspection modals.
- **Skills Matrix**: Categorized competencies across Frontend, Backend & APIs, AI Systems, and Databases/DevOps/DSA.
- **Experience Timeline**: Milestones highlighting agentic orchestration, full-stack shipping, and problem-solving.
- **Interactive Contact Section**: Name, email, subject, and message form with real-time feedback and direct communication badges.

### 2. ⚡ Express.js & MongoDB Backend (`/backend`)
- **`POST /api/contact`**: Validates input and saves contact inquiries to MongoDB via Mongoose. If MongoDB is not active locally, inquiries are automatically persisted to a resilient local JSON ledger (`backend/data/messages.json`) so no communication is ever lost!
- **`GET /api/projects`**: Dynamic REST API providing project metadata and category filtering.
- **`GET /api/profile`**: Developer metadata, live operational uptime, and system status.
- **Unified Hosting**: The Express server automatically serves the compiled production React frontend from `frontend/dist`.

---

## 📁 Project Structure

```
profile/
├── backend/
│   ├── data/
│   │   ├── projectsData.js    # Curated portfolio projects & GitHub links
│   │   └── messages.json      # Resilient fallback messages ledger
│   ├── models/
│   │   └── Contact.js         # Mongoose schema for inquiries
│   ├── routes/
│   │   ├── contactRoutes.js   # Contact form submission & retrieval
│   │   └── projectRoutes.js   # Dynamic projects REST API
│   ├── .env                   # Environment variables (PORT, MONGO_URI)
│   ├── .env.example
│   ├── package.json
│   └── server.js              # Express REST server & static frontend mounting
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx      # Sticky navbar with mobile drawer
│   │   │   ├── Hero.jsx        # Headline, CTA buttons & interactive terminal
│   │   │   ├── About.jsx       # Narrative, pillars & core metrics
│   │   │   ├── Projects.jsx    # Filterable project cards & modal
│   │   │   ├── Skills.jsx      # Technical skills matrix
│   │   │   ├── Experience.jsx  # Engineering milestones timeline
│   │   │   ├── Contact.jsx     # Contact form & direct channels
│   │   │   ├── Footer.jsx      # Copyright & social links
│   │   │   └── SocialIcons.jsx # Clean SVG brand icons
│   │   ├── data/
│   │   │   └── portfolioData.js# Structured portfolio content
│   │   ├── App.jsx             # Root React component
│   │   ├── index.css           # Tailwind CSS v4 styling & glass effects
│   │   └── main.jsx
│   ├── dist/                   # Production-ready build
│   ├── index.html
│   ├── vite.config.js          # Vite configuration with API proxy
│   └── package.json
├── package.json                # Root orchestration scripts
└── README.md
```

---

## 🚀 Quick Start Guide

### Option 1: Run Full Unified Stack (Recommended)

1. Open a terminal in the `profile` directory:
   ```bash
   cd profile
   ```

2. Start the unified server (serves both API & Frontend on port 5000):
   ```bash
   npm start
   ```

3. Open your browser:
   👉 **[http://localhost:5000](http://localhost:5000)**

---

### Option 2: Run in Development Mode (Hot Reloading)

1. **Start the Express Backend:**
   ```bash
   cd profile/backend
   npm run dev
   # Server runs on http://localhost:5000
   ```

2. **Start the Vite React Frontend (in a separate terminal):**
   ```bash
   cd profile/frontend
   npm run dev
   # Vite dev server runs on http://localhost:5173 with auto-proxy to port 5000
   ```

3. Open your browser:
   👉 **[http://localhost:5173](http://localhost:5173)**

---

## Deploy on Render

This repository includes a Render Blueprint in `render.yaml`. In Render, create a new Blueprint from this GitHub repository and set `MONGO_URI` to a MongoDB Atlas connection string when prompted. The contact form uses MongoDB for durable storage; the local JSON fallback is not persistent across Render deployments.

Render builds the frontend and runs the Express server, which serves both the site and API. The service health check is available at `/api/health`.

---

## 📡 REST API Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/profile` | Developer information, GitHub stats, and server status |
| `GET` | `/api/projects` | Fetch all featured projects with optional `?category=` filter |
| `GET` | `/api/projects/:id` | Fetch details for a specific project |
| `POST` | `/api/contact` | Submit a message from the portfolio contact form |
| `GET` | `/api/health` | Service uptime and MongoDB connectivity check |
