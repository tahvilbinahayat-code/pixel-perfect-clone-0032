import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-wave">
      {/* Animated background waves */}
      <div className="absolute inset-0 bg-gradient-blue opacity-90"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Voice{" "}
            <span className="bg-gradient-coral bg-clip-text text-transparent">
              Memories
            </span>{" "}
            That Last
          </h1>
          
          <div className="flex items-center justify-center gap-8 text-lg md:text-2xl flex-wrap">
            <span>Say it.</span>
            <span className="w-2 h-2 bg-gradient-coral rounded-full"></span>
            <span>Pin it.</span>
            <span className="w-2 h-2 bg-gradient-coral rounded-full"></span>
            <span>It stays.</span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A map filled with moments — voices placed, not posted.
          </p>

          <div className="pt-8 flex flex-col items-center gap-4">
            <ChevronDown className="w-6 h-6 animate-bounce text-muted-foreground" />
            <Button 
              onClick={scrollToWaitlist}
              size="lg"
              className="bg-gradient-coral border-0 hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-full"
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
