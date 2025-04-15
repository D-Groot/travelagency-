
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedDestinations />
      <AboutSection />
      <WhyChooseUs />
      <TrustSection />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
