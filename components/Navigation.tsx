"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full px-4 sm:px-6 lg:px-8 py-5 bg-white shadow-md z-50">
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

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex items-center gap-8 text-lg">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-700 hover:text-black transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
            <Link href="/book-call" passHref legacyBehavior={false}>
              <Button className="bg-black text-white rounded-full px-5 py-3 hover:bg-gray-900 transition-colors duration-300">
                Book a Call
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-md z-50 py-4 px-5 text-center text-lg">
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
            <Link href="/book-call" passHref legacyBehavior={false}>
              <Button
                className="w-full bg-black text-white rounded-full px-5 py-3 hover:bg-gray-900 transition-colors duration-300 mt-3"
                onClick={() => setIsOpen(false)}
              >
                Book a Call
              </Button>
            </Link>
          </div>
        )}
      </nav>

      {/* Add padding top to avoid content hidden behind fixed navbar */}
      <div className="pt-[68px]" />
      {/* Adjust 68px to your nav height if different */}
    </>
  );
};

export default Navigation;
