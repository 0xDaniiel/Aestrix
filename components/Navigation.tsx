"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { navLinks } from "@/data";
import MobileNav from "./MobileNav";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 py-5 px-4 sm:px-6 lg:px-8">
        {/* Mobile Navigation */}
        <MobileNav />

        {/* Desktop nav */}
        <div className="hidden sm:flex justify-center mt-1 w-full">
          <div className="flex items-center justify-between w-full px-8 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-semibold">Aestrix Devs</h1>
            </Link>

            {/* Navigation Links */}
            <section className="flex items-center gap-6">
              {navLinks.map(({ href, label }) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname?.startsWith(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-[#011B78] font-semibold"
                        : "text-gray-700 hover:text-[#011B78] hover:font-semibold"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </section>

            {/* Button */}
            <Link
              href="https://calendly.com/dannydotdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="
          group
          text-[#011B78] 
          bg-white 
          hover:bg-[#011B78] 
          hover:text-white 
          px-6 py-4 
          border-2 border-[#011B78] 
          shadow-[3px_3px_0px_#011B78] 
          hover:translate-x-[2px] hover:translate-y-[2px] 
          hover:shadow-[1px_1px_0px_#011B78] 
          active:translate-x-[2px] active:translate-y-[2px] 
          active:shadow-[1px_1px_0px_#011B78] 
          transition-all duration-200
        "
              >
                Let&apos;s talk{" "}
                <ArrowRight className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Padding for fixed nav */}
      <div className="pt-[72px]" />
    </>
  );
};

export default Navigation;
