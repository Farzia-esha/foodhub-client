"use client";

import React, { useEffect, useState } from "react";
import ItemCard from "@/components/ItemCard";

export default function MenuPage() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setFilteredItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchInput.toLowerCase());
      const matchesCategory = categoryFilter ? item.category === categoryFilter : true;
      return matchesSearch && matchesCategory;
    });
    setFilteredItems(filtered);
  }, [searchInput, categoryFilter, items]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-4">All Menu</h1>
      <p className="text-center text-gray-600 mb-6">Explore our delicious FoodHub menu!</p>

      {/* Search + Category */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between items-center">
        <input
          type="text"
          placeholder="Search menu..."
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          className="px-4 py-2 border rounded w-full md:w-1/3 focus:outline-green-400"
        />
        <select
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
          className="px-4 py-2 border rounded w-full md:w-1/4 focus:outline-green-400"
        >
          <option value="">All Categories</option>
          <option value="Burger">Burger</option>
          <option value="Pizza">Pizza</option>
          <option value="Chicken">Chicken</option>
          <option value="Pasta">Pasta</option>
          <option value="Dessert">Dessert</option>
          <option value="Seafood">Seafood</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => <ItemCard key={item._id} item={item} />)
        ) : (
          <p className="text-center col-span-full text-gray-600">No items found.</p>
        )}
      </div>
    </div>
  );
}


