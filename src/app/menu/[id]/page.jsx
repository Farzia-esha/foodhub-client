// "use client";
// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { fetchItemById } from "@/lib/api";

// export default function ItemDetails() {
//   const { id } = useParams();
//   const [item, setItem] = useState(null);

//   useEffect(() => {
//     fetchItemById(id).then(setItem);
//   }, [id]);

//   if (!item) return <p className="text-center py-10">Loading...</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <img src={item.image} className="w-full h-96 object-cover rounded-lg" />
//       <h1 className="text-3xl font-bold mt-6">{item.name}</h1>
//       <p className="mt-4 text-gray-700">{item.description}</p>
//       <p className="text-2xl font-bold text-[#78C841] mt-4">
//         ৳ {item.price}
//       </p>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ItemDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (!item) return <div className="text-center mt-20 text-red-600">Item not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <img
          src={item.image || "https://via.placeholder.com/500"}
          alt={item.name}
          className="rounded-lg w-full h-96 object-cover"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-start gap-4">
        <h1 className="text-3xl font-bold text-gray-800">{item.name}</h1>
        <p className="text-gray-700">{item.description}</p>
        <p className="text-green-600 font-semibold text-xl">Price: ৳ {item.price}</p>
        <p className="text-gray-500">Stock: {item.stock}</p>
        <p className="text-yellow-500">Rating: {item.rating} ★</p>

        <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Add to Cart
        </button>

        <button
          onClick={() => router.back()}
          className="mt-2 text-gray-600 underline hover:text-green-600"
        >
          ← Back to Menu
        </button>
      </div>
    </div>
  );
}
