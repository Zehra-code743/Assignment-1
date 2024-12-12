"use client";

import Image from "next/image"; 
import { motion } from "framer-motion";

export default function Home() {
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
        <motion.a
          href="/shop"
          className="shopNowButton mt-8 inline-block px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-md hover:bg-pink-600 transition-all"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.a>
      </div>
    </div>
  );
}
