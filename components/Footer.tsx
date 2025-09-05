"use client";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import FadeInOnScroll from "@/components/FadeInOnScroll";

const Footer = () => {
  return (
    <div className="bg-[#fbf8f4] pb-5">
      <FadeInOnScroll>
        <section className="max-w-7xl bg-gray-100 rounded-md flex items-center justify-between mx-auto px-3 sm:px-6 lg:px-8 py-2 md:py-4">
          {/* Social links */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="https://github.com/aestrix-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub
                size={18} // smaller on mobile
                className="text-[#011B78] hover:opacity-80 transition sm:size-22"
              />
            </Link>
            <Link
              href="https://x.com/aestrixdevs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX
                size={18} // smaller on mobile
                className="text-[#011B78] hover:opacity-80 transition sm:size-22"
              />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-[10px] sm:text-xs text-gray-500 text-center truncate max-w-[120px] sm:max-w-none">
            &copy; {new Date().getFullYear()} Aestrix. All rights reserved.
          </p>

          {/* Brand name */}
          <h3 className="text-base sm:text-lg md:text-xl text-[#011045] font-semibold whitespace-nowrap">
            Aestrix Devs
          </h3>
        </section>
      </FadeInOnScroll>
    </div>
  );
};

export default Footer;
