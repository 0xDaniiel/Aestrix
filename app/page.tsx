import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reason from "@/components/Reason";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ScrollToTopButton from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Reason />
      <Reviews />
      <Services />
      <Projects /> {/* <-- Add Projects here */}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
