import voiceFirstImg from "@/assets/voice-first.jpg";
import locationMapImg from "@/assets/location-map.jpg";
import permanentPersonalImg from "@/assets/permanent-personal.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const PlatformSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const features = [
    {
      title: "Voice-First",
      description: "Record your voice and share authentic moments. No text, no filters — just your voice.",
      image: voiceFirstImg,
    },
    {
      title: "Location-Anchored",
      description: "Pin your voice to real-world locations. Create a memory map that others can discover.",
      image: locationMapImg,
    },
    {
      title: "Permanent & Personal",
      description: "No timelines, no expiration. Your moments stay where you place them, forever.",
      image: permanentPersonalImg,
    },
  ];

  return (
    <section id="platform" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm uppercase tracking-widest text-[hsl(var(--section-label))] mb-4">
            THE PLATFORM
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">This is ReChord</h2>
          <p className="text-lg text-muted-foreground">
            A map filled with moments — voices placed, not posted.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`group transition-all duration-700`}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <div className="relative bg-gradient-to-br from-card via-card to-card/80 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 border-2 border-border/50 hover:border-[hsl(var(--gradient-coral-start))] shadow-lg hover:shadow-2xl">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent"></div>
                </div>
                <div className="relative p-8 space-y-4 bg-card/95 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] bg-clip-text text-transparent">{feature.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
