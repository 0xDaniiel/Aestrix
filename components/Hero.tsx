import React from "react";

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

      {/* Main Hero Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
        We Build & Design High-Performing Websites & Apps
      </h1>

      {/* Hero Description */}
      <p className="text-lg sm:text-xl text-gray-700 max-w-xl mb-8">
        Get a website or App that will fulfill your business goals and drive
        conversions.
      </p>

      {/* Book a 30 minutes call button */}
      <a
        href="#book-call"
        className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-full font-bold transition-colors duration-300 hover:bg-purple-700"
      >
        Book a 30 minutes call
      </a>
    </section>
  );
};

export default Hero;
