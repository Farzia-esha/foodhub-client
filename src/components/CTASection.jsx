"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-12 bg-green-100">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Hungry? Let FoodHub Handle It!
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Discover delicious meals from our menu and get them delivered fresh,
          fast, and right to your doorstep.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/menu">
            <button className="px-8 py-3 bg-white border-2 text-[#78C841] font-semibold rounded-xl hover:bg-gray-100 transition">
              Explore Menu
            </button>
          </Link>

          <Link href="/login">
            <button className="px-8 py-3 border-2 font-semibold rounded-xl hover:bg-white hover:text-[#78C841] transition">
              Login to Order
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
