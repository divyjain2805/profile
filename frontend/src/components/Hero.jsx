import React from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Code2, 
  CheckCircle2,
  Mail,
  GraduationCap,
  Award
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, TwitterIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(99,102,241,0.22),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Subtle Dot Grid */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                B.Tech CSE @ MIT ADT (CGPA 7.96)
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-mono text-cyan-400">Full-Stack & GenAI</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Engineering{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-300">
                MERN Stacks, RAG Pipelines
              </span>{' '}
              & Autonomous AI Agents.
            </h1>

            {/* Subheadline & Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Hi, I'm <strong className="text-white font-semibold">{personalInfo.name}</strong> — a Full-Stack & AI Systems Developer in Pune, India. 
              I build production-grade web applications with <span className="text-indigo-400 font-medium">React, Node.js, Express & MongoDB</span>, 
              engineer high-precision <span className="text-cyan-300 font-medium">RAG pipelines (Pinecone + Gemini)</span>, and model autonomous workflows 
              with <span className="text-purple-300 font-medium">security</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/70 hover:border-slate-600 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400 pt-6 border-t border-slate-800/80 w-full">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500">
                Direct Links:
              </span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-indigo-400" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <LeetcodeIcon className="w-4 h-4 text-amber-400" />
                <span>LeetCode (1400+)</span>
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
              >
                <TwitterIcon className="w-4 h-4 text-sky-400" />
                <span>Twitter / X</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal & Tech Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg">
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/30 via-cyan-500/20 to-purple-500/30 blur-xl opacity-75"></div>
              
              {/* Code Terminal Window */}
              <div className="relative rounded-2xl border border-slate-800 bg-slate-950/90 backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="text-xs font-mono text-slate-400 ml-2">divya_jain.json</span>
                  </div>
                  <span className="text-[11px] font-mono text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/50">
                    MIT ADT CSE
                  </span>
                </div>

                {/* Terminal Body */}
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto space-y-1.5">
                  <div className="text-slate-500">// Divya Jain • Developer Spec</div>
                  <div>
                    <span className="text-indigo-400">const</span>{' '}
                    <span className="text-cyan-300">candidate</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">"{personalInfo.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">university:</span>{' '}
                    <span className="text-emerald-300">"MIT ADT University, Pune"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">cgpa:</span>{' '}
                    <span className="text-amber-300">7.96</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">primaryLanguages:</span> [
                    <span className="text-amber-300">"C++"</span>,{' '}
                    <span className="text-amber-300">"JavaScript"</span>,{' '}
                    <span className="text-amber-300">"TypeScript"</span>,{' '}
                    <span className="text-amber-300">"Python"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">fullStack:</span> [
                    <span className="text-cyan-300">"React"</span>,{' '}
                    <span className="text-cyan-300">"Node.js"</span>,{' '}
                    <span className="text-cyan-300">"Express"</span>,{' '}
                    <span className="text-cyan-300">"MongoDB"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">aiAndRAG:</span> [
                    <span className="text-purple-300">"orchestration"</span>,{' '}
                    <span className="text-purple-300">"automation"</span>,{' '}
                    <span className="text-purple-300">"LangChain"</span>,{' '}
                    <span className="text-purple-300">"LangGraph"</span>,{' '}
                    <span className="text-purple-300">"Pinecone"</span>,{' '}
                    <span className="text-purple-300">"Gemini/Groq"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">database:</span>{' '}
                    <span className="text-rose-300">"VectorDb,MongoDb,Redis"</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">dsaSolved:</span>{' '}
                    <span className="text-amber-300">"400+ problems"</span>,
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Footer Micro-Bar */}
                <div className="px-5 py-3 bg-slate-900/50 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Stack</span>
                  </div>
                  <span className="font-mono text-cyan-400">initial info</span>
                </div>
              </div>

              {/* Floating Quick Stats Card */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-md">
                  <div className="text-xl font-extrabold text-white font-mono">400+</div>
                  <div className="text-xs text-slate-400">DSA Solved (LeetCode & GFG)</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-md">
                  <div className="text-xl font-extrabold text-white font-mono">7.96</div>
                  <div className="text-xs text-slate-400">CGPA • B.Tech CSE</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
