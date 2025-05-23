import React from "react";
import { Smartphone, Monitor, Database } from "lucide-react"; // example icons
import FadeInOnScroll from "@/components/FadeInOnScroll";

const services = [
  {
    icon: <Smartphone className="w-10 h-10 text-black mb-4" />,
    title: "Mobile App Development",
    description:
      "Building sleek, high-performance mobile apps tailored to your business needs.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-black mb-4" />,
    title: "Web Development",
    description:
      "Creating responsive, user-friendly websites that drive engagement and conversions.",
  },
  {
    icon: <Database className="w-10 h-10 text-black mb-4" />,
    title: "Blockchain Solutions",
    description:
      "Implementing secure and scalable blockchain technology to empower your business.",
  },
];

const Services = () => {
  return (
    <FadeInOnScroll>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-center mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default Services;
