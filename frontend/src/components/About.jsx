import React from 'react';
import { 
  Layers, 
  Workflow, 
  Sparkles, 
  CheckCircle, 
  Code2, 
  Compass, 
  ShieldCheck,
  GraduationCap,
  Award,
  BookOpen
} from 'lucide-react';
import { personalInfo, certificationsData, achievementsData } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Layers,
      title: 'Full-Stack MERN & Caching',
      description:
        'Building production web applications with React, Node.js, Express, and MongoDB. Experienced with Zod schema validation, JWT auth, and Redis query caching for high performance.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Workflow,
      title: 'RAG Pipelines & Agentic AI',
      description:
        'Architecting document-grounded RAG pipelines with Pinecone vector databases and Gemini embeddings (Pagewise), plus autonomous cyclic state machine workflows with LangGraph and LangChain.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Code2,
      title: 'Algorithmic Problem Solving',
      description:
        'Solved 400+ DSA problems across LeetCode and GeeksforGeeks with a 1400+ rating, earning 100 Days and 50 Days of Code badges. Strong foundations in C++, OOP, OS, and Networks.',
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Background & Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education, Problem Solving & Software Engineering
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Combining rigorous computer science fundamentals from MIT ADT University with hands-on 
            production full-stack and Generative AI systems development.
          </p>
        </div>

        {/* Narrative & Quick Bio Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-5 text-slate-300 leading-relaxed text-base">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-indigo-400" />
              About Me
            </h3>
            <p>
              I am a Computer Science & Engineering undergraduate at <strong className="text-white">MIT ADT University, Pune</strong> (CGPA 7.96). 
              I specialize in developing scalable, secure full-stack software and applying Generative AI to real-world challenges.
            </p>
            <p>
              My portfolio includes building <strong className="text-indigo-400">Pagewise</strong> (an ETL-style RAG pipeline with Pinecone and Gemini embeddings), 
              <strong className="text-cyan-400"> NotesMaking AI</strong> (a conversational prompt-based notes platform with Groq and Zod validation), 
              and <strong className="text-white">CodeWise</strong> (a Monaco-based coding practice platform with concurrent compiler execution and Redis caching).
            </p>
            <p>
              I take pride in solving challenging algorithmic problems: I have solved over <strong className="text-amber-400">400+ DSA problems</strong> on 
              LeetCode and GeeksforGeeks, earned a 1400+ rating, and achieved both the 100 Days and 50 Days of Code badges.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> B.Tech CSE (MIT ADT)
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> 400+ DSA (LeetCode & GFG)
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> RAG & Vector Search
              </div>
            </div>
          </div>

          {/* Education & Achievements Highlight Box */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Education Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 shadow-xl col-span-1 sm:col-span-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">MIT ADT University</h4>
                      <p className="text-xs text-indigo-300 font-medium">B.Tech in Computer Science & Engineering</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                      CGPA: 7.96
                    </span>
                    <div className="text-[11px] text-slate-500 mt-1 font-mono">2023 – Present • Pune, India</div>
                  </div>
                </div>
              </div>

              {/* Certifications Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-lg font-bold text-white">Certifications</div>
                <div className="space-y-2.5 mt-3">
                  {certificationsData.map((cert) => (
                    <div key={cert.title} className="text-xs text-slate-300 border-l-2 border-cyan-500/40 pl-2.5">
                      <div className="font-semibold text-white">{cert.title}</div>
                      <div className="text-cyan-400 text-[11px] font-mono">{cert.issuer}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-lg font-bold text-white">Achievements</div>
                <div className="space-y-2.5 mt-3">
                  {achievementsData.map((ach) => (
                    <div key={ach.title} className="text-xs text-slate-300 border-l-2 border-amber-500/40 pl-2.5">
                      <div className="font-semibold text-white">{ach.title}</div>
                      <div className="text-slate-400 text-[11px]">{ach.description}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative p-7 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} p-[1px] mb-5 shadow-lg shadow-indigo-500/10`}
                >
                  <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
