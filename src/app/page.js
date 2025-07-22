export const metadata = {
  title: "Cyncra Technologies, Scalable Digital Solutions for Growth",
  description:
    "We design and develop scalable websites, mobile apps, and digital experiences that drive business growth. Launch faster, scale smarter, and transform your brand online.",
  keywords: [
    "Cyncra",
    "Web development",
    "Mobile app development",
    "Product design",
    "Tech agency",
    "UI/UX",
    "Digital strategy",
    "Lagos Nigeria",
  ],
  authors: [{ name: "Cyncra Technologies" }],
  creator: "Cyncra Technologies",
  publisher: "Cyncra Technologies",
  metadataBase: new URL("https://cyncra.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cyncra Technologies, Scalable Digital Solutions for Growth",
    description:
      "Launch smarter with Cyncra. From design to development, we help brands thrive in the digital world.",
    url: "https://cyncra.com",
    siteName: "Cyncra Technologies",
    images: [
      {
        url: "https://cyncra.com/wp-content/uploads/2025/02/Cy-logo-new-.png",
        width: 1200,
        height: 630,
        alt: "Cyncra homepage preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyncra Technologies | Scalable Digital Solutions",
    description:
      "Launch smarter with Cyncra. From design to development, we help brands thrive in the digital world.",
    images: ["https://cyncra.com/wp-content/uploads/2025/02/Cy-logo-new-.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import AboutSection from "./components/AboutSection";
import ChooseSection from "./components/ChooseSection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServiceSection";
import Testimonials from "./components/Testimonials";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cyncra Technologies",
  url: "https://cyncra.com",
  logo: "https://cyncra.com/wp-content/uploads/2025/02/Cy-logo-new-.png",
  description:
    "We design and develop scalable websites, mobile apps, and digital experiences that drive business growth.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "Nigeria",
  },
  serviceArea: {
    "@type": "Place",
    name: "Nigeria",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description: "Custom website development and web applications",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description: "iOS and Android mobile application development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design",
          description: "User interface and user experience design services",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <main className="w-full min-h-screen">
        <h1 className="sr-only">
          Cyncra Technologies - Scalable Digital Solutions for Growth
        </h1>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ChooseSection />
        <Testimonials />
      </main>
    </>
  );
}
