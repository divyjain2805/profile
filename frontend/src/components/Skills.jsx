import React from 'react';
import { 
  Code2, 
  Server, 
  Workflow, 
  Database, 
  Sparkles, 
  Terminal, 
  Layers, 
  Cpu, 
  Cloud 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      badge: 'Core Programming',
      icon: Terminal,
      skills: skillsData.languages,
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Backend & Databases',
      badge: 'APIs, Caching & Vector DBs',
      icon: Server,
      skills: skillsData.backendAndDatabases,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Frontend Engineering',
      badge: 'Modern UI & 3D Web',
      icon: Code2,
      skills: skillsData.frontend,
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      title: 'AI / Gen AI & RAG',
      badge: 'LLMs, State Graphs & Vectors',
      icon: Workflow,
      skills: skillsData.aiAndGenAI,
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Tools & Platforms',
      badge: 'DevOps, Cloud & Tooling',
      icon: Cloud,
      skills: skillsData.toolsAndPlatforms,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Core Computer Science',
      badge: 'Foundations & Architecture',
      icon: Cpu,
      skills: skillsData.coreCS,
      color: 'from-rose-500 to-red-600',
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills & Technologies
          </h2>
          <p className="mt-3 text-base text-slate-400">
            A comprehensive breakdown of the programming languages, backend frameworks, 
            Generative AI tools, and core computer science foundations from my engineering background.
          </p>
        </div>

        {/* 6 Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800/90 p-6 hover:border-slate-700 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cat.color} p-[1px]`}>
                      <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{cat.title}</h3>
                      <span className="text-[11px] font-mono text-indigo-400">{cat.badge}</span>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 hover:text-white hover:border-indigo-500/40 transition-colors font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
