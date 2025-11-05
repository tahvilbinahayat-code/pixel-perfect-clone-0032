import { Quote } from "lucide-react";

const StorySection = () => {
  return (
    <section id="story" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-sm uppercase tracking-widest text-[hsl(var(--section-label))] mb-4">
            OUR JOURNEY
          </p>
          <h2 className="text-4xl md:text-6xl font-bold">About Us</h2>
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/30 p-10 md:p-14 space-y-6 animate-slide-up relative">
          <Quote className="w-12 h-12 text-muted-foreground/30 absolute top-8 left-8" />
          
          <p className="text-lg leading-relaxed">
            ReChord began unexpectedly — like most meaningful things do. Shayan, Oguzhan, and Aslan were the first to gather around the idea. With Fatih joining to bring the visual layer to ReChord's life, the core team was complete.
          </p>

          <p className="text-lg leading-relaxed">
            We spent more than 1 year building, shaping and eventually reached our MVP. With Elif onboard, a new chapter of growth began — and what started as a spark became something real.
          </p>

          <Quote className="w-12 h-12 text-muted-foreground/30 absolute bottom-8 right-8 rotate-180" />
        </div>

        <div className="text-center mt-12">
          <p className="text-sm uppercase tracking-widest text-[hsl(var(--section-label))]">
            OUR STORY
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
