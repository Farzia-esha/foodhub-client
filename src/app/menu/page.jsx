"use client";
import { useEffect, useState } from "react";
import { fetchItems } from "@/lib/api";
import ItemCard from "@/components/ItemCard";

export default function MenuPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems().then(setItems);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
}
