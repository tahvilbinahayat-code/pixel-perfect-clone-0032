import { Mic, MapPin, Share2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const steps = [
    {
      icon: Mic,
      title: "Record",
      description: "Speak naturally. Your authentic voice, captured in the moment.",
      bgColor: "bg-[hsl(var(--record-icon))]",
      animate: true,
    },
    {
      icon: MapPin,
      title: "Pin",
      description: "Choose your location. Anchor your voice to a place that matters.",
      bgColor: "bg-[hsl(var(--pin-icon))]",
    },
    {
      icon: Share2,
      title: "Share",
      description: "Let others discover your voice when they visit that place.",
      bgColor: "bg-[hsl(var(--share-icon))]",
    },
  ];

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm uppercase tracking-widest text-[hsl(var(--section-label))] mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-4xl md:text-6xl font-bold space-y-2">
            <div>Simple.</div>
            <div className="bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] bg-clip-text text-transparent">Friendly.</div>
            <div>Authentic.</div>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="text-center space-y-6 transition-all duration-700"
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <div className="inline-flex items-center justify-center">
                <div className={`${step.bgColor} w-24 h-24 rounded-3xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-12 h-12 text-white ${step.animate ? 'animate-pulse' : ''}`} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
