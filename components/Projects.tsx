"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import FadeInOnScroll from "@/components/FadeInOnScroll";

const projects = [
  {
    title: "Careposting",
    subtitle: "",
    description:
      "An all-in-one EMR and advertising platform designed to simplify healthcare for providers.",
    image: "/images/careposting.svg",
    link: "#",
  },
  {
    title: "Subsync",
    subtitle: "",
    description:
      "A curated newsletter hub delivering deals, discounts, and updates from your favorite brands.",
    image: "/images/newsletter.svg",
    link: "#",
  },
  {
    title: "Hype Dog",
    subtitle: "",
    description:
      "A meme-powered token on the Base Network. Join the $HYPD community and grow with us.",
    image: "/images/hypedog.svg",
    link: "#",
  },
  {
    title: "Texxtile",
    subtitle: "",
    description:
      "Create and sell your custom apparel and merch with powerful tools and analytics built for creators.",
    image: "/images/textile.svg",
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

        <div className="grid gap-10 sm:grid-cols-2">
          {projects.map(
            ({ title, subtitle, description, image, link }, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md border border-gray-200 p-6 opacity-0 animate-fadeIn"
                style={{
                  animationDelay: `${idx * 150}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="w-full mb-4">
                  <Image
                    src={image}
                    alt={title}
                    width={600}
                    height={300}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold text-black mb-1">
                  {title}
                </h3>
                {subtitle && (
                  <h4 className="text-md font-medium text-gray-800 mb-1">
                    {subtitle}
                  </h4>
                )}
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
            )
          )}
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
