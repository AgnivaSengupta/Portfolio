import FadeIn from "./FadeIn";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Hero = () => (
  <section className="pt-24 px-6 max-w-2xl mx-auto text-center">
    <FadeIn>
      <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4 tracking-wide">
        Agniva Sengupta 
      </h1>
    </FadeIn>
    <FadeIn delay={0.1}>
      <p className="font-mono text-xs text-muted-foreground mb-10 tracking-wide">
        /ɔɡ.niː.βɔ/ · noun · IIEST Shibpur '27 
      </p>
    </FadeIn>
    <FadeIn delay={0.2}>
      <p className="text-lg md:text-base leading-relaxed text-muted-foreground mb-6 text-left">
        a{" "}
        <span className="underline underline-accent font-medium text-foreground">
          full-stack engineer
        </span>{" "}
        and an{" "}
        <span className="underline underline-accent font-medium text-foreground">
          open source enthusiast.
        </span>
      </p>
    </FadeIn>
    <FadeIn delay={0.3}>
      <p className="text-lg md:text-base leading-relaxed text-muted-foreground mb-6 text-left">
        a{" "}
        <span className="underline-accent font-medium text-foreground">
          builder
        </span>{" "}
        combining technical depth with creative design. primarily building for
        the web, occasionally diving into distributed systems and japanese
        culture.
      </p>
    </FadeIn>
    <FadeIn delay={0.4}>
      <div className="flex items-center gap-2 mb-3"> 
        <div className="h-2 w-2 rounded-full bg-green-600"></div>
        <p className="text-sm text-muted-foreground">
          status: shipping code + sipping coffee
        </p>
      </div>
    </FadeIn>
    <FadeIn delay={0.5}>
      <div className="flex items-center justify-center gap-5 pt-2">
        {[
          {
            icon: Github,
            href: "https://github.com/AgnivaSengupta",
            label: "GitHub",
          },
          {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/agniva-sengupta11",
            label: "LinkedIn",
          },
          { icon: Twitter, href: "https://x.com/zenyashi_", label: "X" },
          { icon: Mail, href: "mailto:agnivasengupta11@gmail.com", label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
            aria-label={label}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </FadeIn>
  </section>
);

export default Hero;
