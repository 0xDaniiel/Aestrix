import Book from "@/components/Book";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reason from "@/components/Reason";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Reason />
      <Reviews />
      <Book />
    </div>
  );
}
