"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion for animations

const Product = () => {
  return (
    <div className="product-container max-w-4xl mx-auto p-6">
      {/* Eau de Parfum Section */}
      <motion.div
        className="product-item mb-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Eau de Parfum
        </motion.h1>
        <motion.div
          className="image-container mb-4"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/perfume12.png"
            alt="Perfume"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.p
          className="text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Experience the essence of elegance with our exclusive Eau de Parfum.
          Perfect for any occasion.
        </motion.p>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </motion.div>

      {/* Another Variant Section */}
      <motion.div
        className="product-item mb-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-2xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Another Variant
        </motion.h2>
        <motion.div
          className="image-container mb-4"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/perfume13.png"
            alt="Another Perfume Variant"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.p
          className="text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover a new scent with our additional perfume variant. Ideal for
          those who want something different.
        </motion.p>
        <motion.div
          className="price-container mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-xl font-semibold text-gray-800">$89.99</span>
        </motion.div>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </motion.div>

      {/* Limited Edition Section */}
      <motion.div
        className="product-item mb-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-2xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Limited Edition
        </motion.h2>
        <motion.div
          className="image-container mb-4"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/perfume14.png"
            alt="Limited Edition Perfume"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.p
          className="text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Celebrate a special occasion with our limited edition perfume.
        </motion.p>
        <motion.div
          className="price-container mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-xl font-semibold text-gray-800">$99.99</span>
        </motion.div>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </motion.div>
    </div>
  );
};

export default Product;
