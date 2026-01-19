"use client";

import React from "react";
import { FaShippingFast, FaLeaf, FaStar, FaHeadset } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Fast Delivery",
    desc: "Get your favorite meals delivered quickly while they’re still hot and fresh.",
    icon: <FaShippingFast />,
  },
  {
    id: 2,
    title: "Fresh Ingredients",
    desc: "We use high-quality, fresh ingredients to ensure the best taste and nutrition.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Top Rated Dishes",
    desc: "Our menu is loved by customers and highly rated for taste and quality.",
    icon: <FaStar />,
  },
  {
    id: 4,
    title: "24/7 Support",
    desc: "Our support team is always ready to help you with any questions or issues.",
    icon: <FaHeadset />,
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-[#3fa11a] bg-clip-text text-transparent">
            Why Choose FoodHub
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            We provide the best food experience with quality, speed, and customer satisfaction.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl group-hover:bg-green-600 group-hover:text-white transition">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
