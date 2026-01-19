"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Banner() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="h-full"
      >
        {/* ===== Slide 1 ===== */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-end px-10 md:px-40"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1470&q=80')",
            }}
          >
            <div className="bg-white px-8 md:px-12 py-16 rounded-lg shadow-lg max-w-lg text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#78C841] mb-4">
                Welcome to FoodHub
              </h2>
              <p className="text-gray-700 mb-4">
                Delicious meals delivered fresh to your doorstep.
              </p>
              <button className="bg-[#78C841] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                Order Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ===== Slide 2 ===== */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center px-10 md:px-40"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1471&q=80')",
            }}
          >
            <div className="bg-white px-8 md:px-12 py-16 rounded-lg shadow-xl text-center border-2 border-[#78C841]">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-3">
                Fresh & Organic
              </h2>
              <p className="text-gray-700 mb-4">Healthy meals for your family</p>
              <button className="bg-[#78C841] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                Explore Menu
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ===== Slide 3 ===== */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-start px-10 md:px-40"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1470&q=80')",
            }}
          >
            <div className="bg-white px-8 md:px-12 py-16 rounded-lg shadow-lg max-w-lg text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
                Exclusive Offers
              </h2>
              <p className="text-gray-700 mb-4">Get up to 30% off on your first order!</p>
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition">
                Grab Offer
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* ===== Custom Navigation Buttons ===== */}
        <div className="swiper-button-prev-custom absolute left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 cursor-pointer flex items-center justify-center rounded-full shadow-lg bg-[#78C841]">
          <span className="text-white text-xl font-bold">‹</span>
        </div>
        <div className="swiper-button-next-custom absolute right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 cursor-pointer flex items-center justify-center rounded-full shadow-lg bg-[#78C841]">
          <span className="text-white text-xl font-bold">›</span>
        </div>
      </Swiper>
    </div>
  );
}
