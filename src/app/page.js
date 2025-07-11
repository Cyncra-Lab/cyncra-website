import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServiceSection";
import StatsSection from "./components/StatsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
