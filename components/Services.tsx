import React from "react";
import { Smartphone, Monitor, Database } from "lucide-react";
import FadeInOnScroll from "@/components/FadeInOnScroll";

const services = [
  {
    icon: <Smartphone className="w-10 h-10 text-black mb-4" />,
    title: "Mobile App Development",
    description:
      "Cross-platform (iOS and Android) mobile apps that perform reliably and connect you with users everywhere.",
    stack: [
      "React Native",
      "Flutter",
      "TypeScript",
      "Figma",
      "Expo",
      "PostgreSQL",
    ],
  },
  {
    icon: <Monitor className="w-10 h-10 text-black mb-4" />,
    title: "Web Development",
    description:
      "Fullstack websites and web apps that engage users, convert better, and scale with your business.",
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
    ],
  },
  {
    icon: <Database className="w-10 h-10 text-black mb-4" />,
    title: "Blockchain Solutions",
    description:
      "From NFTs to trading bots, we build secure Web3 products that deliver real-world value and scale with confidence.",
    stack: [
      "Solidity",
      "Hardhat",
      "Ethereum",
      "Polygon",
      "Solana",
      "Go",
      "Python",
      "IPFS",
    ],
  },
];

const Services = () => {
  return (
    <FadeInOnScroll>
      <section
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24"
        id="services"
      >
        <h2 className="text-3xl font-extrabold text-center mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon, title, description, stack }) => (
            <div
              key={title}
              className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
              <ul className="flex flex-wrap justify-center gap-2 text-sm text-gray-500 mt-4">
                {stack.map((tech) => (
                  <li
                    key={tech}
                    className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default Services;
