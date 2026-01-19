"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
      <h1 className="mb-10 bg-[#5bb52a] bg-clip-text text-transparent text-4xl font-bold text-center">Contact Us</h1>
        {/* ===== Where to Find Us ===== */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          {/* Text */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-[#78C841] mb-4">
              Where to Find Us
            </h2>
            <p className="text-gray-700">
              Visit our restaurant or reach out to us anytime. We are located in the heart of Dhaka and always ready to serve fresh and healthy meals.
            </p>
            <p className="text-gray-700">
                <br/>
              <strong>Opening hours:</strong> <br />
              Mon – Thu: 10:00 am – 01:00 am <br />
              Fri – Sun: 10:00 am – 02:00 am
            </p>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
              alt="FoodHub Location"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* ===== Get in Touch & Form ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left: Get in Touch */}
          <div className="flex flex-col justify-center gap-6 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-[#78C841]">Get in Touch</h3>
            <p className="text-gray-700">
              Have questions or want to place an order? Contact us and our friendly team will respond as soon as possible.
            </p>

            <div className="flex flex-col gap-4 text-gray-700">
              <p className="flex items-center gap-2"><FaPhoneAlt className="text-green-600" /> +880 1234 567890</p>
              <p className="flex items-center gap-2"><FaEnvelope className="text-green-600" /> info@foodhub.com</p>
              <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-green-600" /> Dhaka, Bangladesh</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"><FaFacebookF /></a>
              <a href="#" className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"><FaTwitter /></a>
              <a href="#" className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"><FaInstagram /></a>
            </div>
          </div>

          {/* Right: Send Message Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-[#78C841] mb-6">Send a Message</h3>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <textarea
                placeholder="Your Message"
                className="p-3 border rounded-lg w-full h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button className="bg-[#78C841] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
