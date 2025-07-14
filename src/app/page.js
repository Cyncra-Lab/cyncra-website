import AboutSection from "./components/AboutSection";
import ChooseSection from "./components/ChooseSection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServiceSection";
import StatsSection from "./components/StatsSection";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
      </div>
      <ChooseSection />
    </>
  );
}
