import worldMapThumb from "@/assets/world-map-video-thumb.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const VideoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="introduction" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--gradient-purple-start))]/5 to-transparent"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[hsl(var(--gradient-coral-start))] to-[hsl(var(--gradient-purple-start))] bg-clip-text text-transparent">
            Introduction to ReChord
          </h2>
        </div>

        <div className={`relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[hsl(var(--gradient-coral-start))]/30 hover:border-[hsl(var(--gradient-coral-start))]/60 transition-all duration-700 delay-200 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--gradient-coral-start))]/20 via-transparent to-[hsl(var(--gradient-purple-start))]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <video 
            controls
            className="w-full aspect-video relative z-10"
            poster={worldMapThumb}
          >
            <source src="https://rechord.life/ReChord%20Intro.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
