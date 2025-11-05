import worldMapThumb from "@/assets/world-map-video-thumb.jpg";

const VideoSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-sm uppercase tracking-widest text-[hsl(var(--section-label))] mb-4">
            INTRODUCTION
          </p>
          <h2 className="text-4xl md:text-6xl font-bold">Introduction to ReChord</h2>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-slide-up bg-card/50 backdrop-blur-sm border border-border/30">
          <video 
            controls
            className="w-full aspect-video"
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
