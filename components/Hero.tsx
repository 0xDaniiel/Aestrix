import Link from "next/link";
import React from "react";
import { Montserrat } from "next/font/google";
import FadeInOnScroll from "./FadeInOnScroll";
import { Button } from "./ui/button";

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "10+", label: "Members" },
  { value: "30+", label: "Projects Completed" },
];

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

        <section className=" py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            We Design & Build High-Performing Websites & Apps That Scale
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90">
            From idea to launch, we create tailored mobile apps, websites, and
            blockchain solutions. Designed to accelerate your business growth.
          </p>
        </section>

        {/* Call to Action Button */}
        <div className="flex justify-center mt-12">
          <Link href="/book-call" passHref legacyBehavior={false}>
            <Button className="inline-flex items-center bg-black text-white px-10 py-4 sm:px-14 sm:py-6 text-lg sm:text-3xl rounded-lg transition-transform transition-colors duration-300 hover:bg-gray-900 hover:scale-105">
              Hire Us
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-10 justify-center w-full max-w-6xl pt-10">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="w-full sm:w-72 bg-white rounded-xl shadow-lg p-10 text-center border border-gray-200"
            >
              <p className="text-6xl font-extrabold text-black mb-4">{value}</p>
              <p className="text-2xl text-gray-700 font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default Hero;
