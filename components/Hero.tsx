import Link from "next/link";
import React from "react";
import FadeInOnScroll from "./FadeInOnScroll";
import { Button } from "./ui/button";
import { Unbounded } from "next/font/google";
import { ArrowRight } from "lucide-react";
import { stats } from "@/data";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});
const Hero = () => {
  return (
    <FadeInOnScroll>
      <section
        className="relative w-full bg-white pt-16 md:pt-20"
        style={{
          backgroundImage: "url('/images/pattern.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto text-center">
          {/* Open to Work Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 text-xs rounded-full bg-green-100 border border-green-300 select-none cursor-default">
            <span
              className="inline-block w-2.5 h-2.5 rounded-full bg-green-500"
              aria-hidden="true"
            />
            <p className="text-green-700 font-medium text-xs sm:text-sm">
              Open to work
            </p>
          </div>

          <section className="py-6 sm:py-8 md:py-12 px-6 sm:px-8 md:px-12 text-center ">
            <h1
              className={`${unbounded.className} text-2xl sm:text-3xl md:text-5xl font-extrabold mb-10 leading-relaxed sm:leading-snug md:leading-tight text-[#011045]`}
            >
              Develop{" "}
              <span className="bg-gradient-to-r from-[#EABF83] to-[#D6A35D] bg-clip-text text-transparent">
                High-Performing
              </span>{" "}
              Products That Scale
            </h1>

            <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-xl text-[#011045] opacity-90 leading-relaxed">
              From idea to launch, solutions that accelerate growth, increase
              revenue, and simplify your business—guiding you every step of the
              way.
            </p>
          </section>

          {/* Call to Action Button */}
          <div className="flex justify-center ">
            <Link href="#contact-form" passHref legacyBehavior={false}>
              <Button
                className="
          group
          text-[#011B78] 
          bg-white 
          hover:bg-[#011B78] 
          hover:text-white 
          px-6 py-4 
          border-2 border-[#011B78] 
          shadow-[3px_3px_0px_#011B78] 
          hover:translate-x-[2px] hover:translate-y-[2px] 
          hover:shadow-[1px_1px_0px_#011B78] 
          active:translate-x-[2px] active:translate-y-[2px] 
          active:shadow-[1px_1px_0px_#011B78] 
          transition-all duration-200
        "
              >
                Let&apos;s talk{" "}
                <ArrowRight className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Stats Cards */}
          <div
            className={`${unbounded.className} flex flex-col sm:flex-row gap-6 max-w-6xl w-full px-4 pt-20 mx-auto`}
          >
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="sm:flex-1 p-8 text-center text-[#011045]"
              >
                <p className="text-5xl font-extrabold mb-2">{value}+</p>
                <p className="text-base font-light">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default Hero;
