import express from 'express';
import { projectsData } from '../data/projectsData.js';

const router = express.Router();

// GET /api/projects - Return all projects or filter by category
router.get('/', (req, res) => {
  const { category, featured } = req.query;
  let results = [...projectsData];

  if (category && category !== 'All') {
    results = results.filter(
      p => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (featured === 'true') {
    results = results.filter(p => p.featured);
  }

  res.json({
    success: true,
    count: results.length,
    categories: ['All', 'AI Agents & Full Stack', 'MERN & Web Apps', 'Frontend & UI'],
    data: results
  });
});

// GET /api/projects/:id - Return single project detail
router.get('/:id', (req, res) => {
  const project = projectsData.find(p => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({
      success: false,
      message: 'Project not found'
    });
  }
  res.json({
    success: true,
    data: project
  });
});

export default router;
