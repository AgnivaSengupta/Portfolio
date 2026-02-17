import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ThemeToggle from "./components/ThemeToggle";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background">
      <ThemeToggle/>
      <Hero />
      <Skills/>
      <Projects/>
    </div>
  );
}
