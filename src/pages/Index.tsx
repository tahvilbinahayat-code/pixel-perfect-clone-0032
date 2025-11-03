import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlatformSection from "@/components/PlatformSection";
import ShareSection from "@/components/ShareSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import StorySection from "@/components/StorySection";
import TeamSection from "@/components/TeamSection";
import WaitlistSection from "@/components/WaitlistSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PlatformSection />
      <ShareSection />
      <HowItWorksSection />
      <StorySection />
      <TeamSection />
      <WaitlistSection />
    </div>
  );
};

export default Index;
