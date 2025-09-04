import React from "react";
import Image from "next/image";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { reasons } from "@/data";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const WhyChooseUs = () => {
  return (
    <div>
      <FadeInOnScroll>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2
            className={`${unbounded.className} text-3xl md:text-4xl font-extrabold mb-10 text-left text-[#011045]`}
          >
            Why{" "}
            <span className="bg-gradient-to-r from-[#EABF83] to-[#D6A35D] text-transparent bg-clip-text">
              Choose Us
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map(({ title, description, images }) => (
              <div
                key={title}
                className="bg-white rounded-lg shadow-md p-6 text-center 
                           border-2 border-white 
                           transition-all duration-200 
                           hover:translate-x-[2px] hover:translate-y-[2px] 
                           hover:shadow-[1px_1px_0px_#011B78]  "
              >
                <div className="mx-auto mb-4 w-12 h-12 relative">
                  <Image
                    src={images}
                    alt={title}
                    width={64}
                    height={64}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h2 className="text-xl font-extrabold mb-2 text-[#011045]">
                  {title}
                </h2>
                <p className="font-light text-[#011045]">{description}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeInOnScroll>
    </div>
  );
};

export default WhyChooseUs;
