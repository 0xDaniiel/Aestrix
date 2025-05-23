import Link from "next/link";
import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "10+", label: "Members" },
  { value: "30+", label: "Projects Completed" },
];

const Hero = () => {
  return (
    <section className="flex flex-col items-center mt-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      {/* Open to Work mini header */}
      <div className="relative inline-flex items-center gap-2 px-4 py-1 rounded-full cursor-default select-none mb-6">
        {/* Light gray background with subtle edges */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-gray-300 opacity-25 blur-[1.5px] border border-gray-200"
        />

        {/* Pulsing green dot */}
        <span
          className="relative inline-block w-3 h-3 rounded-full bg-green-500 animate-pulse"
          aria-hidden="true"
        ></span>

        <p className="relative text-gray-800 font-semibold">Open to work</p>
      </div>
      <section className={`${montserrat.className} flex flex-col items-center`}>
        {/* Main Hero Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Building Digital Products That Scale Businesses
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mb-8">
          From idea to launch, we deliver tailored digital products and services
          designed to accelerate your success.
        </p>
      </section>

      {/* Book a 30 minutes call button */}
      <Link
        href="#book-call"
        className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-full font-bold transition-colors duration-300 hover:bg-purple-700 mb-12"
      >
        Book a 30 minutes call
      </Link>

      {/* Cards Container */}
      <div className="flex flex-col sm:flex-row gap-8 justify-center w-full max-w-5xl">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="flex-1 bg-white rounded-xl shadow-lg p-10 text-center border border-gray-200 min-w-[250px]"
          >
            <p className="text-5xl font-extrabold text-purple-600 mb-3">
              {value}
            </p>
            <p className="text-xl sm:text-2xl text-gray-700 font-semibold">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
