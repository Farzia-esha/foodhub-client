"use client";

import { useEffect, useState } from "react";
import ItemCard from "@/components/ItemCard";

export default function OffersPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://project-server-two-delta.vercel.app/items`)
      .then(res => res.json())
      .then(data => {
        setItems(data.slice(0, 3));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10">Loading Offers...</p>;

  return (
    <div className="p-6 mx-auto space-y-12 max-w-7xl">

      {/* Hero Banner */}
      <section className="relative overflow-hidden shadow-lg rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="Offers Banner"
          className="object-cover w-full h-64"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white bg-black bg-opacity-40">
          <h1 className="mb-2 text-4xl font-bold">Hot Offers & Deals</h1>
          <p className="text-lg text-center">Grab your favorite dishes at special prices!</p>
        </div>
      </section>

      {/* Special Offers - 3 items only */}
      <section>
        <div className="max-w-7xl mx-auto p-6">
          <h1 className="text-3xl font-bold text-center text-green-600 mb-6">Special Offers</h1>
          <p className="text-center text-gray-600 mb-8">Check out our top 3 dishes on special offer!</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.length > 0 ? (
              items.map(item => <ItemCard key={item._id} item={item} />)
            ) : (
              <p className="text-center col-span-full text-gray-600">No offers available right now.</p>
            )}
          </div>
        </div>
      </section>

      {/* Coupon Codes */}
      <section className="p-6 mt-5 shadow-lg bg-green-50 rounded-xl">
        <h2 className="mb-4 text-3xl font-bold text-center text-[#78C841]">Coupon Codes</h2>
        <div className="flex flex-col justify-center gap-6 md:flex-row">
          <div className="flex-1 p-4 text-center transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
            <p className="text-lg font-bold text-green-600">SAVE10</p>
            <p className="mt-2 text-gray-600">Get 10% off on orders above ৳500</p>
          </div>
          <div className="flex-1 p-4 text-center transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
            <p className="text-lg font-bold text-green-600">FOOD20</p>
            <p className="mt-2 text-gray-600">20% off on select menu items</p>
          </div>
        </div>
      </section>

      {/* Category Offers */}
      <section>
        <h2 className="mt-5 mb-6 text-3xl text-[#78C841] font-bold text-center">Category Offers</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="p-6 text-center transition-transform duration-300 shadow-lg bg-yellow-50 rounded-xl hover:scale-105">
            <h3 className="mb-2 text-xl font-semibold">Burger</h3>
            <p className="font-bold text-[#78C841]">Up to 20% Off</p>
          </div>
          <div className="p-6 text-center transition-transform duration-300 shadow-lg bg-blue-50 rounded-xl hover:scale-105">
            <h3 className="mb-2 text-xl font-semibold">Pizza</h3>
            <p className="font-bold text-[#78C841]">Flat 15% Off</p>
          </div>
          <div className="p-6 text-center transition-transform duration-300 shadow-lg bg-orange-50 rounded-xl hover:scale-105">
            <h3 className="mb-2 text-xl font-semibold">Dessert</h3>
            <p className="font-bold text-[#78C841]">Buy 1 Get 1 Free</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="p-8 mt-5 text-center text-white bg-[#78C841] shadow-lg rounded-xl">
        <h2 className="mb-2 text-3xl font-bold">Don't Miss Out!</h2>
        <p className="mb-4">Order now and enjoy your favorite meals!</p>
        <button className="px-6 py-3 font-semibold text-white transition bg-gradient-to-r from-[#4f8928] to-[#529723] rounded-lg hover:from-green-700 hover:to-green-900">
          Order Now
        </button>
      </section>
    </div>
  );
}
