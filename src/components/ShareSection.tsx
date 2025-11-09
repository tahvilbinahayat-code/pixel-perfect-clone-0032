import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ShareSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <div className={`bg-glass-bg/40 backdrop-blur-md rounded-3xl border border-border/30 p-12 md:p-16 text-center space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] mx-auto rounded-full"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold">
            A New <span className="bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] bg-clip-text text-transparent">Way</span> to <span className="bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] bg-clip-text text-transparent">Share</span>
          </h2>
          
          <p className="text-lg md:text-xl">
            ReChord lets you <strong className="font-semibold bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] bg-clip-text text-transparent">record your voice</strong> and{" "}
            <strong className="font-semibold bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] bg-clip-text text-transparent">pin it</strong> to a real-world location.
          </p>

          <div className="w-2 h-2 bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] rounded-full mx-auto"></div>

          <p className="text-lg md:text-xl font-semibold">
            No timelines. No filters. No expiration.
          </p>

          <p className="text-muted-foreground text-lg italic">
            Just moments — <span className="bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] bg-clip-text text-transparent">personal</span>, <span className="bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] bg-clip-text text-transparent">permanent</span>, <em>and</em> placed in the world for others to discover.
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] mx-auto rounded-full"></div>

          <p className="text-xl md:text-2xl font-bold">
            Share <span className="bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] bg-clip-text text-transparent">presence</span>, <span className="bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] bg-clip-text text-transparent">not just</span> content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShareSection;
