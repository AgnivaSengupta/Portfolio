import FadeIn from "./FadeIn"
import SectionHeading from "./SectionHeading"

const topics = [
  {
    name: "Federated Learning",
    description: "Researching privacy-preserving architectures for cardiovascular disease prediction. Focusing on FedAvg algorithms and decentralized model training."
  },
  {
    name: "Golang & Distributed Systems",
    description: "Moving beyond basic syntax to understand concurrency patterns, microservices architecture, and high-throughput data processing."
  }
]

const CurrentExplorations = () => {
  return (
    <section id="current-exporations" className="py-10 px-6 max-w-2xl mx-auto">
      <FadeIn>
        <SectionHeading>Current Explorations</SectionHeading>
      </FadeIn>
      
      <div className="space-y-2">
        {topics.map((topic, i) => {
          return (
            <FadeIn key={topic.name} delay={i*0.08}>
              <div className="group relative">
                <div className="flex gap-4">
                  <div className="relative flex-shrink-0 flex items-center justify-center h-6 w-6 mt-0.5">
                    <span className="font-mono text-[12px] text-accent-foreground select-none transition-all duration-300 group-hover:text-muted-foreground relative z-10 bg-secondary px-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/*<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 group-hover:bg-neutral-600 dark:group-hover:bg-neutral-400 transition-colors duration-300"></div>*/}
                  </div>

                  <div className="flex-1 pb-2">
                    <div 
                      className="flex items-center justify-between mb-1 cursor-pointer select-none">
                      <h2 className="text-[14px] md:text-[16px] font-semibold text-accent-foreground/80 tracking-tight transition-colors duration-300">
                        {topic.name}
                      </h2>
                    </div>

                    <p className="text-sm  text-muted-foreground leading-relaxed mb-3">{ topic.description }</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          )
        })}
      </div>
      
    </section>
  )
}

export default CurrentExplorations;