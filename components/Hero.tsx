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
    <section className="flex flex-col items-center mt-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-12">
      {/* Open to Work mini header */}
      <div className="relative inline-flex items-center gap-2 px-4 py-1 rounded-full cursor-default select-none">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-gray-300 opacity-25 blur-[1.5px] border border-gray-200"
        />
        <span
          className="relative inline-block w-3 h-3 rounded-full bg-green-500 animate-ping"
          aria-hidden="true"
        ></span>
        <p className="relative text-gray-800 font-semibold">Open to work</p>
      </div>

      {/* Hero Heading and Paragraph */}
      <section
        className={`${montserrat.className} flex flex-col items-center space-y-6`}
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          Building Digital Products That Scale
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl">
          From idea to launch, we deliver tailored mobile apps, websites, and
          blockchain solutions designed to accelerate your business.
        </p>
      </section>

      {/* Book a Call Button */}
      <Link
        href="#book-call"
        className="inline-flex items-center bg-black text-white px-6 py-3 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-2xl transition-colors duration-300 hover:bg-gray-900"
      >
        Book a 30 minutes call
      </Link>

      {/* Stats Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center w-full max-w-6xl pt-6">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="w-full sm:w-[350px] bg-white rounded-xl shadow-lg p-10 text-center border border-gray-200"
          >
            <p className="text-5xl font-extrabold text-black mb-3">{value}</p>
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
