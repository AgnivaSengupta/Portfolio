import AboutMe from "./components/AboutMe";
import CurrentExplorations from "./components/CurrentExplorations";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import GithubContr from "./components/GithubContr";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ThemeToggle from "./components/ThemeToggle";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background">
      <ThemeToggle />
      <Hero />
      <Skills />
      <Experience/>
      <GithubContr/>
      <Projects />
      <CurrentExplorations />
      <AboutMe />
      <GetInTouch />
      <Footer />
    </div>
  );
}
