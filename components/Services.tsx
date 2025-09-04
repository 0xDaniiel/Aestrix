"use client";
import React, { useState } from "react";
import { Unbounded } from "next/font/google";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import Image from "next/image";
import { servicesData } from "@/data";
import { motion, AnimatePresence } from "framer-motion";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    <div className="bg-[#FEFDFB] pb-5 mt-2">
      <FadeInOnScroll>
        <section
          className="scroll-mt-24 max-w-7xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16"
          id="services"
        >
          <h2
            className={`${unbounded.className} text-3xl md:text-4xl font-extrabold mb-10 text-left text-[#011045]`}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#EABF83] to-[#D6A35D] text-transparent bg-clip-text">
              Services
            </span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left column: service cards */}
            <div className="flex flex-col gap-6 w-full lg:w-1/2">
              {servicesData.map((service) => (
                <div
                  key={service.title}
                  onClick={() => setSelectedService(service)}
                  className={`bg-white rounded-lg shadow-md p-6 text-center 
                           border-2 border-white  text-[#011045] font-semibold
                           transition-all duration-200 
                           hover:translate-x-[2px] hover:translate-y-[2px] 
                           hover:shadow-[1px_1px_0px_#011B78] 
                           cursor-pointer ${
                             selectedService.title === service.title
                               ? "border-[#011B78]"
                               : ""
                           }`}
                >
                  {service.title}
                </div>
              ))}
            </div>

            {/* Right column: image + tech stack */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService.title} // Triggers animation when service changes
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-64 relative mb-6"
                >
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService.title + "-tech"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap gap-3 justify-center"
                >
                  {selectedService.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#011045] text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
    </div>
  );
};

export default Services;
