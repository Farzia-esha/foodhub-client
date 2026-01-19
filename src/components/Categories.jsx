"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    title: "Burgers",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    title: "Pizza",
    img: "https://images.unsplash.com/photo-1548365328-9f547fb0952e",
  },
  {
    title: "Fried Chicken",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    title: "Pasta",
    img: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
  },
  {
    title: "Sandwich",
    img: "https://images.unsplash.com/photo-1553909489-cd47e0907980",
  },
  {
    title: "Seafood",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    title: "Desserts",
    img: "https://images.unsplash.com/photo-1505253216365-4cfa2b6c9a03",
  },
  {
    title: "Drinks",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
  },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-[#78C841] to-[#3fa11a] bg-clip-text text-transparent">
        Explore Our Categories
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Choose your favorite food category and enjoy delicious meals
      </p>

      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 1800, disableOnInteraction: false }}
        loop={true}
        navigation
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        className="pb-10"
      >
        {categories.map((cat, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition text-center group cursor-pointer">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-28 object-cover mx-auto transform group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-800">
                {cat.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}





