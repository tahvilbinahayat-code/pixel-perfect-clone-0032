import { Button } from "@/components/ui/button";
import { ChevronDown, Mic } from "lucide-react";
import heroWaves from "@/assets/hero-waves.png";

const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blurred wave background image with purple overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{ backgroundImage: `url(${heroWaves})` }}
      />
      
      {/* Vibrant gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/70 to-accent/15"></div>

      {/* Animated floating record icon */}
      <div className="absolute top-1/4 right-1/4 animate-float">
        <div className="relative">
          <Mic className="w-16 h-16 text-[hsl(var(--record-icon))] drop-shadow-2xl" strokeWidth={1.5} />
          <div className="absolute inset-0 bg-[hsl(var(--record-icon))]/30 rounded-full blur-2xl animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Voice{" "}
            <span className="bg-gradient-bright-blue bg-clip-text text-transparent drop-shadow-lg">
              Memories
            </span>{" "}
            That Last
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-lg md:text-xl flex-wrap">
            <span>Say it.</span>
            <span className="w-2 h-2 bg-gradient-coral rounded-full shadow-lg"></span>
            <span>Pin it.</span>
            <span className="w-2 h-2 bg-gradient-coral rounded-full shadow-lg"></span>
            <span>It stays.</span>
          </div>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            A map filled with moments — voices placed, not posted.
          </p>

          <div className="pt-8 flex flex-col items-center gap-6">
            <ChevronDown className="w-6 h-6 animate-bounce text-foreground/60" />
            <Button 
              onClick={scrollToWaitlist}
              size="lg"
              className="bg-[hsl(var(--cta))] hover:bg-[hsl(var(--cta-hover))] border-0 text-foreground transition-all text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-xl"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
