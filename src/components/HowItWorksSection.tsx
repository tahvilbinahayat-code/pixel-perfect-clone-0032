import { Mic, MapPin, Share2 } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Mic,
      title: "Record",
      description: "Speak naturally. Your authentic voice, captured in the moment.",
      gradient: "bg-gradient-coral",
    },
    {
      icon: MapPin,
      title: "Pin",
      description: "Choose your location. Anchor your voice to a place that matters.",
      gradient: "bg-gradient-pink",
    },
    {
      icon: Share2,
      title: "Share",
      description: "Let others discover your voice when they visit that place.",
      gradient: "bg-gradient-pink",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-sm uppercase tracking-widest text-[hsl(var(--section-label))] mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-4xl md:text-6xl font-bold space-y-2">
            <div>Simple.</div>
            <div className="text-[hsl(var(--gradient-coral-start))]">Friendly.</div>
            <div>Authentic.</div>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="text-center space-y-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center">
                <div className={`${step.gradient} w-24 h-24 rounded-3xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-12 h-12 text-white" />
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
