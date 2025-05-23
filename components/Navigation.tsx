"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full px-4 sm:px-6 lg:px-8 py-5 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo or Company Name */}
        <div className="text-2xl font-semibold">Aestrix</div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="sm:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          type="button"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Navigation Links - Hidden on Mobile */}
        <div className="hidden sm:flex items-center gap-8 text-lg">
          <Link
            href="#services"
            className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
          >
            Contact
          </Link>

          {/* Book a Call as a Link-wrapped Button */}
          <Link href="/book-call" passHref legacyBehavior={false}>
            <Button className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300">
              Book a Call
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu - Overlay */}
      {isOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-md z-50 py-4 px-5 text-center text-lg">
          <Link
            href="#services"
            className="block text-gray-700 hover:text-purple-600 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#about"
            className="block text-gray-700 hover:text-purple-600 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="block text-gray-700 hover:text-purple-600 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link href="/book-call" passHref legacyBehavior={false}>
            <Button
              className="w-full bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300 mt-3"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
