import Hero from "./components/Hero";
import FeaturedWork from "./components/FeaturedWork";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export const metadata = {
    title: 'Cyncra Technologies - Portfolio of Impactful Digital Projects',
    description: 'Browse our portfolio of custom websites, mobile apps, and digital solutions. See how Cyncra empowers businesses through design, development, and real-world projects.'
}

export default function PortfolioPage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Testimonials />
      <Contact />
    </>
  );
}
