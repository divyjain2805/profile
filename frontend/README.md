# ⚛️ Divya Jain Portfolio • Frontend (React + Vite + Tailwind CSS)

Modern, accessible, and responsive user interface for Divya Jain's personal portfolio.

## 🚀 Quick Start (Frontend Development)

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Run Vite dev server with Hot Module Replacement (HMR)
npm run dev
```

The frontend will run on **http://localhost:5173** and automatically proxy API calls (`/api/...`) to the backend server running on `http://localhost:5000`.

## 📦 Production Build

```bash
npm run build
```

The compiled assets are output into `dist/`, which is directly mounted and served by the Express backend.

## 🛠️ Key Components

- **`src/components/Navbar.jsx`**: Glassmorphic sticky header with active section anchors and mobile drawer menu.
- **`src/components/Hero.jsx`**: High-impact introduction, call-to-action buttons, and interactive code terminal.
- **`src/components/About.jsx`**: Narrative background, architectural pillars, and core metrics.
- **`src/components/Projects.jsx`**: Filterable portfolio grid (*All*, *AI Agents & Full Stack*, *MERN & Web Apps*, *Frontend & UI*) with modal details.
- **`src/components/Skills.jsx`**: Categorized technical skills matrix.
- **`src/components/Experience.jsx`**: Engineering timeline.
- **`src/components/Contact.jsx`**: Interactive contact form connected to `POST /api/contact` with status notifications.
- **`src/components/Footer.jsx`**: Footer with back-to-top button and social links.
