import voiceFirstImg from "@/assets/voice-first.jpg";
import locationMapImg from "@/assets/location-map.jpg";
import permanentPersonalImg from "@/assets/permanent-personal.jpg";

const PlatformSection = () => {
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
    <section id="platform" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">This is ReChord</h2>
          <p className="text-lg text-muted-foreground">
            A map filled with moments — voices placed, not posted.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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
