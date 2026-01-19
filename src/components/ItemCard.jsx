

import Link from "next/link";

export default function ItemCard({ item }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <img
        src={item.image || "https://via.placeholder.com/400x300"}
        className="w-full h-52 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        {/* <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p> */}
        <p className="text-gray-600 text-sm line-clamp-2">Category: {item.category}</p>
        <p className="text-gray-600 text-sm line-clamp-2"> Rating: {item.rating}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-green-700 font-bold">tk- {item.price}</span>
          <Link href={`/menu/${item._id}`}>
            <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
