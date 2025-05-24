"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react"; // or any icon library you use
import FadeInOnScroll from "@/components/FadeInOnScroll";

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

const stats = [
  { value: 6, label: "Years Experience" },
  { value: 10, label: "Members" },
  { value: 30, label: "Projects Completed" },
];

interface CountUpProps {
  target: number;
  duration?: number;
}

// CountUp component animates from 0 to target number
function CountUp({ target, duration = 2000 }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 30);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count}+</>;
}

const Reason = () => {
  return (
    <FadeInOnScroll>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl w-full px-4 pt-20 mx-auto">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="bg-white rounded-xl shadow-lg p-10 text-center border border-gray-200"
          >
            <p className="text-6xl font-extrabold text-black mb-4">
              <CountUp target={value} />
            </p>
            <p className="text-2xl text-gray-700 font-semibold">{label}</p>
          </div>
        ))}
      </div>

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
    </FadeInOnScroll>
  );
};

export default Reason;
