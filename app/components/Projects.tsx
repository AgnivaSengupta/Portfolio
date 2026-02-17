"use client"

import { useState } from "react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { Github } from "lucide";

const projects = [
  {
    title: "Distributed Analytics Engine",
    description:
      "A high-throughput engine for data ingestion and analytics, leveraging concurrency patterns and intelligent caching layers.",
    tech: ["Go", "Redis", "PostgreSQL", "Docker"],
  },
  {
    title: "traq",
    description:
      "A minimalist job application tracker to bring order to the chaos of hunting.",
    tech: ["Next.js", "Better Auth", "MongoDB"],
  },
  {
    title: "PaperTrails",
    description:
      "A community blogging platform for sharing thoughts and technical deep dives.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "AI Trip Planner",
    description:
      "An intelligent travel assistant utilizing the Gemini API to solve planning fatigue.",
    tech: ["React Native", "Gemini API"],
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleProject = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="projects" className="py-10 px-6 max-w-2xl mx-auto">
      <FadeIn>
        <SectionHeading>The Build Journey</SectionHeading>
      </FadeIn>
      
      <div className="space-y-4 mt-4">
        {projects.map((project, i) => {
          const isOpen = activeIndex === i;
          const isLast = i === projects.length - 1;

          return (
            <FadeIn key={project.title} delay={i * 0.08}>
              <div className="group relative">
                {/* Vertical Timeline Line - hidden on the very last item if you prefer, or adjusted height */}
                {!isLast && (
                  <div className="absolute left-[11px] top-8 bottom-[-32px] w-[1px] bg-neutral-300 dark:bg-neutral-800"></div>
                )}

                <div className="flex gap-4">
                  {/* Number Bubble */}
                  <div className="relative flex-shrink-0 flex items-center justify-center h-6 w-6 mt-0.5">
                    <span className="font-mono text-[12px] text-neutral-400 dark:text-neutral-500 select-none transition-all duration-300 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 relative z-10 bg-white dark:bg-[#0B0D0E] px-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 group-hover:bg-neutral-600 dark:group-hover:bg-neutral-400 transition-colors duration-300"></div>
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 pb-2">
                    {/* Header / Click Trigger */}
                    <div 
                      className="flex items-center justify-between mb-1 cursor-pointer select-none"
                      onClick={() => toggleProject(i)}
                    >
                      <h2 className="text-[14px] md:text-[14px] font-ibm_sans font-semibold text-black dark:text-zinc-400 tracking-tight transition-colors duration-300">
                        {project.title}
                      </h2>
                      
                      <button className={`text-base text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </div>

                    <p className="text-sm font-ibm_sans text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">{ project.description }</p>
                    
                    <div 
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span 
                              key={t} 
                              className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 rounded-xs"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-2 py-2">
                          {/*<Github className/>*/}
                          {/*<Github />*/}
                          <img src="https://cdn.simpleicons.org/github" className="h-4 w-4" />
                          <p className="text-sm font-ibm_sans text-zinc-500 underline cursor-pointer">Code</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;