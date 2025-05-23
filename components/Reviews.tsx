import React from "react";

const reviews = [
  {
    name: "Mousa",
    role: "CEO, Thermotrap (Saudi Arabia)",
    feedback:
      "Exceptional mobile app development tailored for our needs — highly recommend!",
  },
  {
    name: "Yasmin",
    role: "CFO, Careposting Healthcare",
    feedback:
      "The healthcare website they built has been a game changer for our company’s outreach and patient engagement.",
  },
  {
    name: "Donald James",
    role: "CTO, Lumanagi",
    feedback:
      "Their expertise with whitelist management, airdrops, and token launch helped us execute flawlessly.",
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
