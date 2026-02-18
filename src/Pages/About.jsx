import AboutHero from "../components/about/AboutHero";
import StorySection from "../components/about/StorySection";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import Achievements from "../components/about/Achievements";
import TeamSection from "../components/about/TeamSection";
import CTASection from "../components/about/CTASection";
const About = () => {
  return (
    <div className="w-full bg-blue-50/50">
      <main className="flex flex-col gap-0 pt-20">
        <AboutHero />
        <StorySection />
        <MissionVision />
        <CoreValues />
        <Achievements />
        <TeamSection />
        <CTASection />
      </main>
    </div>
  );
};

export default About;
