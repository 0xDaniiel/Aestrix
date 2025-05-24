"use client";
import Link from "next/link";
import React from "react";
import FadeInOnScroll from "@/components/FadeInOnScroll";

const projects = [
  {
    title: "Form Builder Platform",
    description:
      "A user-friendly platform that allows users to create, share, and publish custom forms with ease.",
    link: "#",
  },
  {
    title: "Healthcare Website",
    description:
      "A modern, responsive website for healthcare services with appointment booking and patient resources.",
    link: "#",
  },
  {
    title: "Blockchain Token Launch",
    description:
      "A comprehensive solution for whitelist management, airdrops, and token launches on the blockchain.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <FadeInOnScroll>
      <section
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        id="projects"
      >
        <h2 className="text-3xl font-extrabold text-center mb-10">
          Our Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map(({ title, description, link }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md border border-gray-200 p-6 opacity-0 animate-fadeIn"
              style={{
                animationDelay: `${idx * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="w-full h-40 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-400 font-bold text-xl">
                Image
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
              <p className="text-gray-700 mb-4">{description}</p>
              {link && (
                <Link
                  href={link}
                  className="text-black font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Link>
              )}
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
            from {
              opacity: 0;
              transform: translateY(10px);
            }
          }
          .animate-fadeIn {
            animation-name: fadeIn;
            animation-duration: 0.5s;
            animation-timing-function: ease-out;
          }
        `}</style>
      </section>
    </FadeInOnScroll>
  );
};

export default Projects;
