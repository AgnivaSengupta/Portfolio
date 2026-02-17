import Image from "next/image";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

// const skills = [
//   "JavaScript", "TypeScript", "React", "Next.js",
//   "Node.js", "Tailwind", "Express", "PostgreSQL", "MongoDB",
//   "Mongoose", "Prisma", "Git", "GitHub", "Postman",
//   "Docker", "Redis", "Golang",
// ];

const skills = [
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "Express", slug: "express" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Mongoose", slug: "mongoose" },
  { name: "Prisma", slug: "prisma" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "Postman", slug: "postman" },
  { name: "Docker", slug: "docker" },
  { name: "Redis", slug: "redis" },
  { name: "Golang", slug: "go" },
];

const Skills = () => (
  <section className="py-16 px-6 max-w-2xl mx-auto">
    <FadeIn>
      <SectionHeading>Skills #</SectionHeading>
    </FadeIn>
    <FadeIn delay={0.1}>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <div
            key={skill.slug}
            className="flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-md border border-dashed border-border text-foreground/80 hover:border-foreground/40 transition-colors group"
          >
            <img 
              src={`https://cdn.simpleicons.org/${skill.slug}`} 
              alt={skill.name}
              className="h-4 w-4 opacity-80 group-hover:opacity-100" 
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </FadeIn>
  </section>
);

export default Skills;
