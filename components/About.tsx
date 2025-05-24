"use client";
import React, { useState, useEffect } from "react";
import FadeInOnScroll from "@/components/FadeInOnScroll";

const stats = [
  { value: 6, label: "Years Experience" },
  { value: 10, label: "Team Members" },
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

const About = () => {
  return (
    <FadeInOnScroll>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl w-full px-4 py-20 mx-auto">
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
    </FadeInOnScroll>
  );
};

export default About;
