import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-8 h-8 bg-gradient-coral rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="text-xl font-bold">ReChord</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('platform')} className="hover:text-muted-foreground transition-colors">
              Platform
            </button>
            <button onClick={() => scrollToSection('story')} className="hover:text-muted-foreground transition-colors">
              Story
            </button>
            <button onClick={() => scrollToSection('team')} className="hover:text-muted-foreground transition-colors">
              Team
            </button>
          </div>

          <Button onClick={() => scrollToSection('waitlist')} className="bg-gradient-coral border-0 hover:opacity-90 transition-opacity">
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
