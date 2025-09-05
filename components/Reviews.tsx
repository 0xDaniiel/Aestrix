import React from "react";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { reviews } from "@/data";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});
const Reviews = () => {
  return (
    <div className="bg-[#FEFDFB] pb-5 mt-2" id="testimonial">
      <FadeInOnScroll>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2
            className={`${unbounded.className} text-3xl md:text-4xl font-extrabold mb-10 text-left text-[#011045]`}
          >
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-[#EABF83] to-[#D6A35D] text-transparent bg-clip-text">
              Say
            </span>
          </h2>
          <div className="flex flex-wrap gap-6 items-stretch">
            {reviews.map(({ name, role, feedback }, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg border-2 border-[#011B78] 
                 shadow-[3px_3px_0px_#011B78] p-6 flex flex-col justify-between 
                 w-full sm:w-[48%] lg:w-[30%] transition-transform duration-300 
                 hover:scale-105 before:content-['\201D'] before:absolute before:top-2 before:right-4 
                 before:text-[#011B78] before:text-6xl before:font-bold"
              >
                <div>
                  <p className={`${unbounded.className} text-[#011045]`}>
                    {role}
                  </p>
                  <p className="text-[#011045] font-bold">{name}</p>
                </div>
                <p className="text-[#011045] font-extralight text-base my-1">
                  {feedback}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeInOnScroll>
    </div>
  );
};

export default Reviews;
