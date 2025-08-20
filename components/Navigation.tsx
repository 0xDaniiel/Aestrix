"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react"; // Import X icon

const navLinks = [
  // { href: "#about", label: "Why Us" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 py-5 px-4 sm:px-6 lg:px-8">
        {/* Mobile nav: logo left, hamburger right with background + blur */}
        <div className="sm:hidden flex items-center justify-between bg-white/30 backdrop-blur-lg backdrop-saturate-150 shadow-sm rounded-lg px-4 py-3">
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

        {/* Desktop nav: centered content with background */}
        <div className="hidden sm:flex justify-center mt-1">
          <div className="inline-flex items-center gap-10 bg-white/30 backdrop-blur-lg backdrop-saturate-150 shadow-md rounded-lg px-8 py-3">
            {/* Logo + Text */}
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-semibold">Aestrix Devs</h1>
            </Link>

            <section className="flex items-center gap-4">
              {/* Navigation Links */}
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-gray-700 hover:text-black transition-colors duration-300 hover:font-bold "
                >
                  {label}
                </Link>
              ))}
            </section>
            {/* Button */}
            <Link
              href="https://calendly.com/dannydotdev"
              passHref
              legacyBehavior={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-black text-white px-6 py-4 hover:bg-gray-900 transition-colors duration-300">
                Schedule a Call
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden absolute top-full left-0 w-full bg-white backdrop-blur-md shadow-md z-50 py-4 px-5 text-center text-lg rounded-b-lg">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block text-gray-700 hover:text-black transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="https://calendly.com/dannydotdev"
              passHref
              legacyBehavior={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="w-full bg-black text-white px-5 py-3 hover:bg-gray-900 transition-colors duration-300 mt-3"
                onClick={() => setIsOpen(false)}
              >
                Schedule a Call
              </Button>
            </Link>
          </div>
        )}
      </nav>

      {/* Padding for fixed nav */}
      <div className="pt-[72px]" />
    </>
  );
};

export default Navigation;
