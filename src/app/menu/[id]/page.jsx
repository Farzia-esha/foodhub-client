
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ItemDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/items/${id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.find(i => i._id === item._id);
    if (exists) alert("Item already in cart");
    else {
      cart.push({ ...item, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Item added to cart");
    }
  };

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (!item) return <p className="text-center py-20 text-red-600">Item not found</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <img
          src={item.image || "https://via.placeholder.com/500"}
          alt={item.name}
          className="rounded-lg w-full h-96 object-cover"
        />
      </div>
      <div className="md:w-1/2 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{item.name}</h1>
        <p className="text-gray-700">{item.description}</p>
        <p className="text-green-600 font-semibold text-xl">Price: ৳ {item.price}</p>
        <p className="text-gray-500">Stock: {item.stock}</p>
        <p className="text-yellow-500">Rating: {item.rating} ★</p>

        <button
          onClick={addToCart}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition mt-4"
        >
          Add to Cart
        </button>
        <button
          onClick={() => router.back()}
          className="text-gray-600 bg-green-600 text-white px-6 py-3 rounded-lg hover:text-green-700 mt-2 mb-5"
        >
          ← Back to Menu
        </button>
      </div>
    </div>
  );
}
