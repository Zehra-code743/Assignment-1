"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-r from-yellow-100 to-pink-100 flex flex-col items-center justify-center">
      {/* Fullscreen container */}
      <div className="container flex flex-col md:flex-row items-center gap-8 px-6 py-8">
        {/* Intro Text */}
        <motion.div
          className="intro max-w-md text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
            Discover the Essence of Luxury Perfume
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Perfume is a liquid that gives people, things, and rooms a good
            smell. It is made of oils which give off scent to the surrounding
            air. The odoriferous compounds that make up a perfume can be
            manufactured synthetically or extracted from plant or animal
            sources.
          </p>
        </motion.div>

        {/* Perfume Image */}
        <motion.div
          className="profilePic"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src={"/image10.png"} // Replace with your own image path
            alt="Perfume Bottle"
            height={500}
            width={500}
            className="rounded-lg shadow-xl"
          />
        </motion.div>

        {/* Shop Now Button */}
        <motion.button
          onClick={() => setShowContent(!showContent)}
          className="shopNowButton mt-8 inline-block px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-md hover:bg-pink-600 transition-all"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.button>
      </div>

      {/* Dynamic Content */}
      {showContent && (
        <motion.div
          className="additional-content mt-8 px-6 py-8 bg-white rounded-lg shadow-md w-3/4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Welcome to Our Exclusive Collection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                img: "/perfume1.png",
                title: "Perfume Rose Essence",
                description:
                  "An enchanting blend of rose and jasmine, perfect for every occasion.",
              },
              {
                img: "/perfume2.png",
                title: "Ocean Breeze",
                description:
                  "Refreshing aquatic notes inspired by the serenity of the ocean.",
              },
              {
                img: "/perfume3.png",
                title: "Citrus Delight",
                description:
                  "A vibrant citrus fragrance with hints of bergamot and orange zest.",
              },
              {
                img: "/perfume4.png",
                title: "Velvet Musk",
                description:
                  "A rich, luxurious musk scent with undertones of sandalwood.",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="product-card bg-gray-50 rounded-lg shadow p-4 text-center"
              >
                <Image
                  src={product.img} // Replace with your own image paths
                  alt={product.title}
                  height={200}
                  width={200}
                  className="mx-auto rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <motion.button
                  className="px-4 py-2 text-white bg-gradient-to-r from-purple-500 to-blue-600 rounded-full shadow-md hover:bg-blue-600 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Buy Now
                </motion.button>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
