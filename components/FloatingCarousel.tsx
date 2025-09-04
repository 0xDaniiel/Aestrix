import React from "react";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const words = ["Innovate", "Create", "Inspire"];

const FloatingCarousel = () => {
  return (
    <div
      className={`${unbounded.className} overflow-hidden w-full bg-white py-8`}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First loop */}
        <div className="flex">
          {words.map((word, idx) => (
            <React.Fragment key={idx}>
              <span className="mx-10 bg-gradient-to-r from-[#EABF83] to-[#D6A35D] text-transparent bg-clip-text text-4xl">
                ◇
              </span>
              <span className="mx-10 text-[#011045] font-semibold text-4xl">
                {word}
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate loop for seamless scroll */}
        <div className="flex">
          {words.map((word, idx) => (
            <React.Fragment key={idx}>
              <span className="mx-10 bg-gradient-to-r from-[#EABF83] to-[#D6A35D] text-transparent bg-clip-text text-4xl">
                ◇
              </span>
              <span className="mx-10 text-[#011045] font-semibold text-4xl">
                {word}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingCarousel;
