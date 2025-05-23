import React from "react";

const reviews = [
  {
    name: "Jane Doe",
    role: "CEO, TechCorp",
    feedback:
      "Aestrix transformed our digital presence. Their mobile app and blockchain expertise exceeded expectations!",
  },
  {
    name: "John Smith",
    role: "Founder, StartUpX",
    feedback:
      "Professional, timely, and innovative. The team truly cares about delivering results.",
  },
  {
    name: "Sarah Lee",
    role: "Product Manager, WebWorks",
    feedback:
      "They understood our vision and brought it to life with a sleek website and flawless functionality.",
  },
];

const Reviews = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-center mb-10">
        What Our Clients Say
      </h2>
      <div className="space-y-8">
        {reviews.map(({ name, role, feedback }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
          >
            <p className="text-gray-700 italic mb-4">
              &ldquo;{feedback}&rdquo;
            </p>
            <div>
              <p className="font-semibold text-black">{name}</p>
              <p className="text-gray-500 text-sm">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
