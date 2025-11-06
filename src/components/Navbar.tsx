import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <img src={logo} alt="ReChord Logo" className="w-10 h-10 rounded-lg transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur-sm"></div>
            </div>
            <span className="text-xl font-bold" style={{ color: '#ebebd3' }}>ReChord</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('platform')} 
              className="relative hover:text-[hsl(var(--gradient-coral-start))] transition-colors after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-coral after:transition-all hover:after:w-full"
            >
              Platform
            </button>
            <button 
              onClick={() => scrollToSection('introduction')} 
              className="relative hover:text-[hsl(var(--gradient-purple-start))] transition-colors after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-purple after:transition-all hover:after:w-full"
            >
              Introduction
            </button>
            <button 
              onClick={() => scrollToSection('story')} 
              className="relative hover:text-[hsl(var(--gradient-coral-start))] transition-colors after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-coral after:transition-all hover:after:w-full"
            >
              Story
            </button>
            <button 
              onClick={() => scrollToSection('team')} 
              className="relative hover:text-[hsl(var(--gradient-purple-start))] transition-colors after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-purple after:transition-all hover:after:w-full"
            >
              Team
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection('waitlist')} 
            className="bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] hover:opacity-90 border-0 text-foreground transition-all hover:scale-105 shadow-lg"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
