import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Layers, 
  ChevronRight, 
  Check, 
  X,
  Filter
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData as fallbackProjects } from '../data/portfolioData';

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    'All',
    'AI Agents & Full Stack',
    'MERN & Web Apps',
    'Frontend & UI'
  ];

  // Fetch dynamic projects from Express REST API if available
  useEffect(() => {
    const fetchApiProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        if (res.ok) {
          const json = await res.json();
          if (json.data && json.data.length > 0) {
            setProjects(json.data);
          }
        }
      } catch (err) {
        // Silently use rich local fallback data
      }
    };
    fetchApiProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <section id="projects" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects & Systems
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-xl">
              Real-world systems, autonomous agents, and full-stack web platforms built with 
              production standards and clean code.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800/90 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-indigo-500/50 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Project Image & Badge Overlay */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-950/80 border border-slate-700/80 text-cyan-300 backdrop-blur-md">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/20 border border-amber-500/30 text-amber-300 backdrop-blur-md">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-1 line-clamp-1">
                    {project.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-400 mb-3 line-clamp-1">
                    {project.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-indigo-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/40 text-slate-400 border border-slate-700/40">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 group/btn"
                  >
                    <span>Inspect Details</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 text-indigo-300 hover:text-white transition-colors flex items-center gap-1 text-xs font-medium"
                        title="Open Live Deployment"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="hidden sm:inline">Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl text-left">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-3">
              {selectedProject.category}
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">
              {selectedProject.title}
            </h3>
            <div className="text-sm font-medium text-cyan-400 mb-4">
              {selectedProject.subtitle}
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Key Architectural Highlights */}
            {selectedProject.highlights && (
              <div className="mb-6">
                <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400 mb-3">
                  Key Technical Highlights:
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            <div className="mb-6">
              <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400 mb-2">
                Tech Stack & Libraries:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-slate-800 text-indigo-300 border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Links */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-sm font-semibold shadow-md shadow-indigo-500/20 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live App</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
