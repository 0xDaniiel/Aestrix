"use client";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import FadeInOnScroll from "@/components/FadeInOnScroll";

const Footer = () => {
  return (
    <div className="bg-[#fbf8f4] pb-5">
      <FadeInOnScroll>
        <section className="max-w-7xl bg-[#D1D5DB] rounded-md flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-5">
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/aestrix-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub
                size={22}
                className="text-[#011B78] hover:opacity-80 transition"
              />
            </Link>
            <Link
              href="https://x.com/aestrixdevs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX
                size={22}
                className="text-[#011B78] hover:opacity-80 transition"
              />
            </Link>
          </div>

          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Aestrix. All rights reserved.
          </p>

          <h3 className="text-xl text-[#011045] font-semibold">Aestrix Devs</h3>
        </section>
      </FadeInOnScroll>
    </div>
  );
};

export default Footer;
