"use client";

import { FaStar, FaUsers, FaShoppingCart, FaTruck } from "react-icons/fa";

const stats = [
  { icon: <FaUsers />, number: 12000, label: "Happy Customers" },
  { icon: <FaShoppingCart />, number: 35000, label: "Orders Delivered" },
  { icon: <FaTruck />, number: 150, label: "Cities Covered" },
  { icon: <FaStar />, number: 4.8, label: "Average Rating" },
];

export default function Achieved() {
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-green-700">
          Our Achievements
        </h2>
        <p className="text-gray-600 mb-12">
          We are proud of the milestones we have achieved.Here's what we've done so far!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center justify-center"
            >
              <div className="text-green-600 text-4xl mb-3">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-green-700 mb-1">
                {stat.number}
                {stat.label === "Average Rating" && "★"}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
