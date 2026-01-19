"use client";

import { useEffect, useState } from "react";
import ItemCard from "@/components/ItemCard";
import Link from "next/link";

export default function LatestItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/latestItems")
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-4">
        Latest Items
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Recently added delicious dishes
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map(item => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/menu"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          View Full Menu
        </Link>
      </div>
    </section>
  );
}
