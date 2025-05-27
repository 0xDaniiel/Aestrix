"use client";
import React, { useState, useEffect } from "react";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import toast from "react-hot-toast";

const stats = [
  { value: 6, label: "Years Experience" },
  { value: 10, label: "Team Members" },
  { value: 30, label: "Projects Completed" },
];

interface CountUpProps {
  target: number;
  duration?: number;
}

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("https://formspree.io/f/meogbwbw", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setFormData({ name: "", email: "", message: "" });
      toast.success("✅ Message sent successfully!");
    } else {
      toast.error("❌ Something went wrong. Please try again.");
    }
  };

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

      <div className="max-w-3xl mx-auto mt-12 text-center px-4 pb-20">
        <p className="text-lg text-gray-700 leading-relaxed">
          We&apos;ve collaborated with startups and businesses across the globe
          — navigating time zones, cultures, and requirements to deliver
          reliable, on-time solutions. Wherever you are, we adapt and deliver.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4" id="contact-form">
        <h3 className="text-2xl font-bold text-center mb-6">
          Send us a message
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </FadeInOnScroll>
  );
};

export default About;
