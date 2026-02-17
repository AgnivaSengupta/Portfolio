import FadeIn from "./FadeIn"
import SectionHeading from "./SectionHeading"

const AboutMe = () => {
  return (
    <section id="about-me" className="py-5 px-6 max-w-2xl mx-auto ">
      <FadeIn>
        <SectionHeading>Things About Me</SectionHeading>
      </FadeIn>
      
      <div className="space-y-4 text-base text-muted-foreground">
        <FadeIn>
          <h2 className="text-base">I believe that great software is born from clarity.</h2>
        </FadeIn>
        
        <FadeIn>
          <p>My approach to engineering is shaped by a need for a clean slate—partly mandated by a dust allergy, and partly because a clear environment helps me think through complex problems.</p>
        </FadeIn>
      
        <FadeIn>
          <p>When I'm not researching Federated Learning, you’ll find me analyzing Formula 1 race strategies, curating my Manga reading list, or brewing my daily fuel: Nescafe with a precise scoop of Amul Spray.</p>
        </FadeIn>
      </div>
    </section>
  )
}

export default AboutMe;