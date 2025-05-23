import React from "react";
import { CheckCircle } from "lucide-react"; // or any icon library you use

const reasons = [
  {
    title: "Expert Team",
    description:
      "Our skilled professionals deliver high-quality solutions tailored to your needs.",
  },
  {
    title: "Innovative Solutions",
    description:
      "We leverage the latest technologies including blockchain, mobile, and web development.",
  },
  {
    title: "Customer Focused",
    description:
      "Your success is our priority — we work closely with you every step of the way.",
  },
  {
    title: "Proven Results",
    description:
      "30+ projects completed with measurable growth for our clients.",
  },
];

const Reason = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <h2 className="text-3xl font-extrabold text-center mb-10">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map(({ title, description }) => (
          <div
            key={title}
            className="bg-white rounded-lg shadow-md p-6 text-center"
          >
            <CheckCircle className="mx-auto mb-4 text-black w-10 h-10" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reason;
