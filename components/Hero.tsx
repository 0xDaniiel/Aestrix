import Link from "next/link";
import React from "react";
import FadeInOnScroll from "./FadeInOnScroll";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <FadeInOnScroll>
      <section className="flex flex-col items-center mt-20 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto text-center">
        {/* Open to Work Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 border border-green-300 shadow-sm select-none cursor-default">
          <span
            className="inline-block w-3 h-3 rounded-full bg-green-500"
            aria-hidden="true"
          />
          <p className="text-green-800 font-semibold text-sm sm:text-base">
            Open to work
          </p>
        </div>

        <section className="py-16 px-6 sm:px-8 md:px-12 text-center md:py-20">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-10 leading-relaxed sm:leading-snug md:leading-tight">
            We Develop High-Performing Products That Scale
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl opacity-90 leading-relaxed">
            From idea to launch, solutions that accelerate growth, increase
            revenue, and simplify your business—guiding you every step of the
            way.
          </p>
        </section>

        {/* Call to Action Button */}
        <div className="flex justify-center my-12">
          <Link href="/book-call" passHref legacyBehavior={false}>
            <Button className="inline-flex items-center bg-black text-white px-10 py-4 sm:px-14 sm:py-6 text-lg sm:text-3xl rounded-lg transition-colors duration-300 hover:bg-gray-900 hover:scale-105">
              Hire Us
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
      </section>
    </FadeInOnScroll>
  );
};

export default Hero;
