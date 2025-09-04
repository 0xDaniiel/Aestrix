import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ScrollToTopButton from "@/components/ScrollToTop";
import About from "@/components/About";
import FloatingCarousel from "@/components/FloatingCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <FloatingCarousel />
      <WhyChooseUs />
      <Services />
      <Projects />
      <Reviews />
      <About />
      <ScrollToTopButton />
    </div>
  );
}
