import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import contactRoutes from './routes/contactRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/divya_portfolio';

// Middlewares
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection with seamless fallback
let isDbConnected = false;
mongoose
  .connect(MONGO_URI, {
    serverSelectionTimeoutMS: 2000
  })
  .then(() => {
    isDbConnected = true;
    console.log('✔ MongoDB connected successfully');
  })
  .catch((err) => {
    console.warn('ℹ MongoDB connection not active (using resilient local fallback engine):', err.message);
  });

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);

// Health & Developer Profile metadata endpoint
app.get('/api/profile', (req, res) => {
  res.json({
    success: true,
    developer: {
      name: 'Divya Jain',
      role: 'Full-Stack Developer & AI Systems Engineer',
      phone: '+91 8591149616',
      email: 'divyjain2805@gmail.com',
      location: 'Pune, India',
      education: {
        institution: 'MIT ADT University',
        degree: 'Bachelor of Technology, Computer Science & Engineering',
        timeline: '2023 – Present',
        location: 'Pune, India',
        cgpa: '7.96'
      },
      links: {
        linkedin: 'https://linkedin.com/in/divya-jain-3b98a028a',
        github: 'https://github.com/divyjain2805',
        leetcode: 'https://leetcode.com/divyjain2805',
        twitter: 'https://twitter.com/divyjain2805'
      },
      achievements: [
        'Solved 400+ DSA problems on LeetCode and GeeksforGeeks',
        'Achieved a LeetCode rating of 1400+ & earned both 100 Days and 50 Days of Code badges'
      ],
      certifications: [
        'Neural Networks and Deep Learning – Coursera',
        'Responsible & Safe AI Systems – NPTEL'
      ],
      stats: {
        dsaSolved: '400+',
        leetcodeRating: '1400+',
        cgpa: '7.96',
        publicRepos: 10,
        featuredProjects: 8,
        experienceFocus: ['MERN Stack', 'RAG Pipelines & Pinecone', 'LangGraph & AI Agents', 'Redis Caching']
      }
    },
    system: {
      status: 'operational',
      database: isDbConnected ? 'MongoDB (Connected)' : 'Local Resilient Fallback (Active)',
      uptime: process.uptime()
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    dbConnected: mongoose.connection.readyState === 1
  });
});

// Serve compiled React frontend in production / unified mode
const frontendDist = path.join(__dirname, '../frontend/dist');
if (fs.existsSync(frontendDist)) {
  app.use(express.static(frontendDist));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(frontendDist, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 Portfolio Server running on http://localhost:${PORT}`);
});
