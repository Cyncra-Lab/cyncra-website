import AboutSection from "./components/AboutSection";
import ChooseSection from "./components/ChooseSection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServiceSection";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ChooseSection />
        <Testimonials />
      </div>
    </>
  );
}
