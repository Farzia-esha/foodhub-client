"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Rahman",
    img: "https://i.pravatar.cc/100?img=47",
    text: "The food from FoodHub was absolutely delicious. Delivery was fast and everything arrived fresh.",
  },
  {
    id: 2,
    name: "Tanvir Hasan",
    img: "https://i.pravatar.cc/100?img=56",
    text: "Great quality burgers and pizzas. The taste and portion size were totally worth the price.",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    img: "https://i.pravatar.cc/100?img=32",
    text: "Ordering from FoodHub is very easy and convenient. I received my food right on time.",
  },
  {
    id: 4,
    name: "Rafi Ahmed",
    img: "https://i.pravatar.cc/100?img=36",
    text: "FoodHub has become my favorite food ordering platform. The quality is consistently good.",
  },
  {
    id: 5,
    name: "Mehjabin Islam",
    img: "https://i.pravatar.cc/100?img=38",
    text: "Loved the food quality and neat packaging. Everything tasted fresh and flavorful.",
  },
  {
    id: 6,
    name: "Sakib Chowdhury",
    img: "https://i.pravatar.cc/100?img=60",
    text: "Affordable prices with great food quality. Customer service was also very helpful.",
  },
];

const Testimonial = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 md:py-16 px-4 md:px-6 text-center">
      <h2 className="bg-gradient-to-r from-[#78C841] via-[#5fbf2a] to-[#3fa11a] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        What Our Customers Say
      </h2>
      <p className="text-gray-500 mb-8 md:mb-10 text-sm sm:text-base">
        Real Reviews from FoodHub Customers
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="bg-green-50 border border-green-100 rounded-2xl shadow-md p-6 sm:p-8 flex flex-col justify-between h-full text-left hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex gap-1 mb-3 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 sm:w-5 sm:h-5" />
                  ))}
                </div>

                <p className="text-gray-700 italic leading-relaxed text-sm sm:text-base">
                  “{t.text}”
                </p>
              </div>

              <div className="flex items-center gap-3 mt-5">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-green-300"
                />
                <p className="font-semibold text-gray-800 text-sm sm:text-base">
                  {t.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
