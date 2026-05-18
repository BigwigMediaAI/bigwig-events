import FloatingContact from "@/components/Floating";
import About from "../components/home/about";
import BlogSection from "@/components/home/BlogSection";
import CTA from "@/components/home/CTA";
import FeaturedWork from "@/components/home/FeaturedWork";
import InstagramSection from "@/components/home/Followup";
import Gallery from "@/components/home/Followup";
import Hero from "@/components/home/Hero";
import FeatureStrip from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ClientsSection from "@/components/home/Client";
import TestimonialSection from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <FeatureStrip />
      <WhyChooseUs />
      <FeaturedWork />

      <ClientsSection />
      <TestimonialSection />
      <InstagramSection />
      <FloatingContact />
      <Footer />
    </main>
  );
}
