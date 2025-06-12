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
      "A platform that merges electronic medical records with marketing tools, empowering healthcare providers to streamline operations while growing their online presence.",
    image: "/images/careposting.svg",
    link: "https://careposting.com/",
  },
  {
    title: "Hype Dog",
    subtitle: "",
    description:
      "A meme-fueled crypto project built on Base, $HYPD blends humor, community, and web3 culture into a playful, fast-growing token ecosystem.",
    image: "/images/hypedog.svg",
    link: "https://hype-dog.vercel.app/",
  },

  // Apps
  {
    title: "LisBon User",
    subtitle: "",
    description:
      "More than a ride—LisBon rewards everyday commuters with lifetime earnings while offering safe, affordable, and community-driven transportation.",
    image: "/images/lisbonuser.png",
    link: "https://apps.apple.com/ng/app/lisbon-user/id6737439784",
  },
  {
    title: "Colonny: Communities app",
    subtitle: "",
    description:
      "Turn your local campus or city into a buzzing social economy. Colonny lets users earn from posts and comments while building real-world connections.",
    image: "/images/colony.png",
    link: "https://apps.apple.com/ng/app/colonny-communities-app/id6462746411",
  },
  {
    title: "Subsync",
    subtitle: "",
    description:
      "Your inbox’s new best friend—Subsync curates exclusive deals and product drops from your favorite brands into one stylish, easy-to-read newsletter hub.",
    image: "/images/newsletter.svg",
    link: "https://subsync-newsletter.vercel.app/",
  },

  {
    title: "Texxtile",
    subtitle: "",
    description:
      "Built for creators, Texxtile makes it insanely easy to launch custom merch lines—with built-in analytics, seamless design tools, and direct-to-customer sales.",
    image: "/images/textile.svg",
    link: "https://my-texttile-two.vercel.app/",
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
                className="bg-white rounded-lg shadow-md border border-gray-200 p-6 opacity-0 animate-fadeIn transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col justify-between"
                style={{
                  animationDelay: `${idx * 150}ms`,
                  animationFillMode: "forwards",
                  minHeight: "100%", // ensures full height for flex children
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
                    Visit Project
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
