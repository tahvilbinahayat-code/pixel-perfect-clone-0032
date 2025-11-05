const ShareSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-glass-bg/40 backdrop-blur-md rounded-3xl border border-border/30 p-12 md:p-16 text-center space-y-8 animate-slide-up">
          <div className="w-16 h-1 bg-gradient-coral mx-auto rounded-full"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold">
            A New <span className="text-[hsl(var(--gradient-coral-start))]">Way</span> to <span className="text-[hsl(var(--gradient-purple-start))]">Share</span>
          </h2>
          
          <p className="text-lg md:text-xl">
            ReChord lets you <strong className="font-semibold text-[hsl(var(--gradient-coral-start))]">record your voice</strong> and{" "}
            <strong className="font-semibold text-[hsl(var(--gradient-purple-start))]">pin it</strong> to a real-world location.
          </p>

          <div className="w-2 h-2 bg-[hsl(var(--gradient-coral-start))] rounded-full mx-auto"></div>

          <p className="text-lg md:text-xl font-semibold">
            No timelines. No filters. No expiration.
          </p>

          <p className="text-muted-foreground text-lg italic">
            Just moments — <span className="text-[hsl(var(--gradient-coral-start))]">personal</span>, <span className="text-[hsl(var(--gradient-purple-start))]">permanent</span>, <em>and</em> placed in the world for others to discover.
          </p>

          <div className="w-16 h-1 bg-gradient-purple mx-auto rounded-full"></div>

          <p className="text-xl md:text-2xl font-bold">
            Share <span className="text-[hsl(var(--gradient-coral-start))]">presence</span>, <span className="text-[hsl(var(--gradient-purple-start))]">not just</span> content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShareSection;
