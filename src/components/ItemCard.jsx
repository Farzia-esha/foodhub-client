import Link from "next/link";

export default function ItemCard({ item }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <img src={item.image} className="w-full h-52 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-bold text-[#78C841]">৳ {item.price}</span>
          <Link href={`/menu/${item._id}`}>
            <button className="bg-[#78C841] text-white px-3 py-1 rounded hover:bg-green-600">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
