"use client";

import FadeInOnScroll from "@/components/FadeInOnScroll";

const Footer = () => {
  return (
    <div className="bg-[#FEFDFB] pb-5">
      <FadeInOnScroll>
        <section className="max-w-7xl bg-[#D9D9D9] rounded-md flex items-center justify-between  mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-5">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Aestrix. All rights reserved.
          </p>
        </section>
      </FadeInOnScroll>
    </div>
  );
};

export default Footer;
