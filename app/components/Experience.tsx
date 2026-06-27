import Image from "next/image";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const Experience = () => (
  <section className="py-10 px-6 max-w-2xl mx-auto">
    <FadeIn>
      <SectionHeading>Experience</SectionHeading>
    </FadeIn>
    <FadeIn delay={0.1} className="-mt-3">
      <div className="flex flex-col gap-2.5">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 font-serif items-center">          
            <span className="tracking-wider text-xl">Backend Engineer Intern</span>
  
            <div className="flex items-center gap-1">
              <span className="font-bold text-zinc-400 text-2xl">@</span>
              <div className="flex gap-1 relative">
                <Image
                  src="TailorTalk_logo.svg"
                  width={100}
                  height={100}
                  alt="TailorTalk.ai"
                />
                <span className="absolute left-8 top-0.5">TailorTalk</span>
              </div>
            </div>
          </div>

          <p className="text-base font-serif tracking-wider">May 2026 - Present</p>
        </div>
      </div>
    </FadeIn>

    <FadeIn>
      <p className="text-sm font-ibm_sans text-muted-foreground leading-relaxed mt-3">
        Built AI agent capabilities including natural-language Google Drive
        retrieval, autonomous PayPal payment link generation, and
        permission-aware integrations while improving platform observability
        through enhanced Slack-based monitoring.
      </p>
    </FadeIn>
  </section>
);

export default Experience;
