import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import iosLogo from "@/assets/ios-logo.png";
import androidLogo from "@/assets/android-logo.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WaitlistSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    // Only block if invalid — otherwise let the browser post to PHP
    if (!email.trim()) {
      e.preventDefault();
      toast.error("Please enter your email");
      return;
    }
    // Do NOT call e.preventDefault() here, so the form submits to PHP
  };

  return (
    <section id="waitlist" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl text-center">
        <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-6xl font-bold">
            Join the{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] bg-clip-text text-transparent drop-shadow-lg">
              Waiting List
            </span>
          </h2>

          <p className="text-lg">We are currently releasing our apps.</p>

          <p className="text-lg">
            If you'd like to be among the{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] bg-clip-text text-transparent font-semibold drop-shadow-sm">
              first users
            </span>
            , please enter your details below.
          </p>

          <form
            onSubmit={handleSubmit}
            action="https://be.rechord.life/waiting.php"
            method="POST"
            className="max-w-2xl mx-auto pt-8"
          >
            {/* Honeypot (bot trap, ignored in PHP if filled) */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-4">
              <Input
                type="email"
                name="email" // PHP expects this key
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                inputMode="email"
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
              <img src={iosLogo} alt="iOS" className="w-12 h-12 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(92%) sepia(10%) saturate(476%) hue-rotate(8deg) brightness(96%) contrast(92%)' }} />
              <span className="text-sm font-medium">iOS</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-card/50 rounded-2xl border border-border/30 hover:scale-105 transition-transform">
              <img src={androidLogo} alt="Android" className="w-10 h-12 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(92%) sepia(10%) saturate(476%) hue-rotate(8deg) brightness(96%) contrast(92%)' }} />
              <span className="text-sm font-medium">Android</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
