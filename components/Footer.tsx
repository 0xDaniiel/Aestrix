"use client";
import React from "react";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-4">
        <p className="mb-4 text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Aestrix. All rights reserved.
        </p>

        <Link
          href="https://x.com/0xDaniiel"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-black hover:text-gray-800 font-semibold text-base"
        >
          <BsTwitterX className="w-5 h-5 text-black" />
          Connect with our Founder
        </Link>

        <Link
          href="mailto:founder@example.com"
          className="inline-block text-black hover:text-gray-800 font-semibold text-base"
        >
          founder@example.com
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
