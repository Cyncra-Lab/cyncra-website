import AboutSection from "./components/AboutSection";
import CallToActionSection from "./components/CTASection";
import ChooseSection from "./components/ChooseSection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServiceSection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection";

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
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
