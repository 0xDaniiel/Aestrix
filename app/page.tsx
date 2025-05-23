import Book from "@/components/Book";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reason from "@/components/Reason";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Reason />
      <Reviews />
      <Book />
      <Services />
      <Footer />
    </div>
  );
}
