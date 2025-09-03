"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { navLinks } from "@/data";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile nav: logo left, hamburger right */}
      <div className="sm:hidden flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <h1 className="text-2xl font-semibold">Aestrix Devs</h1>
        </Link>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          type="button"
          className="transition-transform duration-300"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full py-4 bg-white">
          <div className="flex flex-col items-center gap-4 px-5">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="w-full text-left text-gray-700 hover:text-black transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}

            <Link
              href="https://calendly.com/dannydotdev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                className="
            group w-full
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
                onClick={() => setIsOpen(false)}
              >
                Let&apos;s talk{" "}
                <ArrowRight className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
