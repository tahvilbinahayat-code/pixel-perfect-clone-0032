import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Apple, Smartphone } from "lucide-react";
import { toast } from "sonner";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    // Here you would normally send to backend
    toast.success("Thanks for joining! We'll be in touch soon.");
    setEmail("");
  };

  return (
    <section id="waitlist" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8 animate-slide-up">
        <h2 className="text-4xl md:text-6xl font-bold">
          Join the{" "}
          <span className="bg-gradient-coral bg-clip-text text-transparent drop-shadow-lg">
            Waiting List
          </span>
        </h2>
        
        <p className="text-lg">We are currently releasing our apps.</p>
        
        <p className="text-lg">
          If you'd like to be among the{" "}
          <span className="text-[hsl(var(--gradient-purple-start))] font-semibold drop-shadow-sm">first users</span>, 
          please enter your details below.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto pt-8">
          <div className="flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 bg-input border-border text-lg focus:border-accent"
            />
            <Button 
              type="submit"
              className="bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] hover:opacity-90 border-0 transition-all hover:scale-105 h-14 px-8 whitespace-nowrap shadow-lg text-foreground"
            >
              Join the Waiting List
            </Button>
          </div>
        </form>

          <div className="flex items-center justify-center gap-6 pt-8">
            <div className="flex flex-col items-center gap-3 p-6 bg-card/50 rounded-2xl border border-border/30 hover:scale-105 transition-transform">
              <Apple className="w-12 h-12" />
              <span className="text-sm font-medium">iOS</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-card/50 rounded-2xl border border-border/30 hover:scale-105 transition-transform">
              <Smartphone className="w-12 h-12" />
              <span className="text-sm font-medium">Android</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
