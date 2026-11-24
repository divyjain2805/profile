import React from 'react';
import { Calendar, Sparkles, GraduationCap, Award, Code2, CheckCircle2 } from 'lucide-react';
import { experienceData, certificationsData, achievementsData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education, Milestones & Achievements
          </h2>
          <p className="mt-3 text-base text-slate-400">
            A chronological timeline of academic milestones, system engineering, and competitive coding accomplishments.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-8 space-y-12">
          {experienceData.map((item, idx) => (
            <div key={idx} className="relative pl-8 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-400 group-hover:border-cyan-300 group-hover:scale-125 transition-all shadow-md shadow-indigo-500/40"></div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {item.score && (
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                        {item.score}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700/60">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.timeline}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-cyan-400 mb-2">
                  {item.institution}
                </div>

                <div className="text-xs font-mono text-slate-400 mb-3">
                  <strong className="text-slate-300 font-semibold">Focus:</strong> {item.focus}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
