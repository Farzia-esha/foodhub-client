"use client";

import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
            alt="About FoodHub"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            About Food<span className="text-red-600">Hub </span>
          </h2>
          <p className="text-gray-700 mb-4">
            At FoodHub, we deliver fresh, healthy, and delicious meals straight to your doorstep. Our ingredients are 100% organic and carefully sourced from trusted farmers.
          </p>
          <p className="text-gray-700 mb-6">
            Our mission is to provide tasty meals that promote a healthy lifestyle, all while being affordable and convenient.
          </p>
          <Link href="/menu" className="bg-[#78C841] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
            Explore Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
