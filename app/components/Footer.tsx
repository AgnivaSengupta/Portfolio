import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="py-12 px-6 max-w-2xl mx-auto border-t border-border">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <p className="font-mono text-xs text-muted-foreground">
        Built by Agniva · agniva.dev
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: Github, href: "https://github.com/AgnivaSengupta", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/agniva-sengupta11", label: "LinkedIn" },
          { icon: Twitter, href: "https://x.com/zenyashi_", label: "X" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={label}
          >
            <Icon size={14} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
