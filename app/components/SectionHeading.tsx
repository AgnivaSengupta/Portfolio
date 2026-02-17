import FadeIn from "./FadeIn";

const SectionHeading = ({ children }: { children: string }) => (
  <h2 className="font-serif text-2xl font-medium uppercase tracking-wide text-muted-foreground mb-8">
    {children}
  </h2>
);

export default SectionHeading;
