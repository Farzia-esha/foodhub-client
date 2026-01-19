"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Icons
import { HiMenu, HiX } from "react-icons/hi";
import { FaPlus, FaBox } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

// Auth
import { AuthContext } from "@/context/AuthContext";

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const pathname = usePathname();
  const isActive = (route) =>
    pathname === route
      ? "text-green-600 font-semibold"
      : "text-gray-700 hover:text-green-600";

  const handleLogout = async () => {
    await signOutUser();
    setDropdown(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow">
      <div className="grid items-center grid-cols-3 px-4 py-3 mx-auto max-w-7xl">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <div className="text-4xl font-extrabold ">Food<span className="text-red-600" >Hub </span></div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="items-center justify-center hidden gap-6 md:flex">
          <Link href="/" className={isActive("/")}>Home</Link>
          <Link href="/menu" className={isActive("/menu")}>Menu</Link>
          <Link href="/about" className={isActive("/about")}>About</Link>
          <Link href="/offers" className={isActive("/offers")}>Offers</Link>
          <Link href="/contact" className={isActive("/contact")}>Contact</Link>
        </div>

        {/* DESKTOP RIGHT */}
        <div className="items-center justify-end hidden gap-4 md:flex">
          {!user ? (
            <>
              <Link
                href="/login"
                className="px-4 py-2 bg-[#78C841] text-white rounded-md hover:bg-green-700"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 border border-[#78C841] text-[#78C841] rounded-md hover:bg-green-50"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative flex items-center gap-4 ">
              {/* PROFILE */}
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-2"
              >
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="user"
                  className="w-10 h-10 rounded-full border"
                />
                <span className={`transition-transform ${dropdown ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>


              

              {/* DROPDOWN */}
              {dropdown && (
                <div className="absolute right-0 top-14 w-48 bg-white shadow rounded-md p-3 z-50">
                  <p className="font-semibold">{user.displayName}</p>
                  <p className="text-xs mb-2">{user.email}</p>

                  {/* <Link
                    href="/add-product"
                    className="flex items-center gap-2 py-2 hover:bg-gray-100 rounded"
                  >
                    <FaPlus /> Add Product
                  </Link>

                  <Link
                    href="/manage-products"
                    className="flex items-center gap-2 py-2 hover:bg-gray-100 rounded"
                  >
                    <FaBox /> Manage Products
                  </Link> */}

                  <button
                    onClick={handleLogout}
                    className="mt-2 w-full flex items-center justify-center gap-2 bg-[#78C841] text-white py-2 rounded"
                  >
                    <IoLogOut /> Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="text-3xl md:hidden justify-self-end"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="px-4 pb-4 bg-white md:hidden">
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/menu" className="block py-2">Menu</Link>
          <Link href="/about" className="block py-2">About</Link>
          <Link href="/offers" className="block py-2">Offers</Link>
          <Link href="/contact" className="block py-2">Contact</Link>

          {!user ? (
            <>
              <Link href="/login" className="block mt-3 bg-[#78C841] text-white py-2 rounded text-center">
                Login
              </Link>
              <Link href="/register" className="block mt-2 border border-[#78C841] text-[#78C841] py-2 rounded text-center">
                Register
              </Link>
            </>
          ) : (
            <>
              <div className="mt-3 pt-3 border-t">
                <p className="font-semibold">{user.displayName}</p>
                <p className="text-xs">{user.email}</p>
              </div>

              {/* <Link href="/add-product" className="block py-2">Add Product</Link>
              <Link href="/manage-products" className="block py-2">Manage Products</Link> */}

              <button
                onClick={handleLogout}
                className="w-full mt-2 bg-[#78C841] text-white py-2 rounded"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
