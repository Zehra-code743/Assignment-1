"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="about-page py-10 bg-gradient-to-r from-pink-100 to-yellow-100">
      <div className="container mx-auto px-4">
        {/* Intro Section */}
        <motion.div
          className="intro text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            This is our About Us Page
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our promise to you: At Perfume Direct, we are committed to providing
            an exceptional shopping experience with an easy-to-use website,
            fast shipping, and outstanding customer service.
            <br />
            <br />
            <strong>Our Mission:</strong> To supply the biggest fragrance and
            cosmetics brands at affordable prices to all. Orders Shipped: 800k
            and counting...
          </p>
        </motion.div>

        {/* Products Section */}
        <section className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <motion.div
            className="product-card bg-white shadow-lg p-6 rounded-lg text-center transition-transform"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-xl font-semibold text-gray-800 mb-2">Product 1</h1>
            <p className="text-gray-600 mb-4">
              Step 1: Take A Warm Bath, Dry Your Skin...
            </p>
            <Image
              src="/image7.png"
              alt="Product 1"
              height={300}
              width={300}
              className="mx-auto rounded-lg shadow-md"
            />
          </motion.div>

          {/* Product 2 */}
          <motion.div
            className="product-card bg-white shadow-lg p-6 rounded-lg text-center transition-transform"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-xl font-semibold text-gray-800 mb-2">Product 2</h1>
            <p className="text-gray-600 mb-4">Step 2: Moisturise...</p>
            <Image
              src="/image8.png"
              alt="Product 2"
              height={300}
              width={300}
              className="mx-auto rounded-lg shadow-md"
            />
          </motion.div>

          {/* Product 3 */}
          <motion.div
            className="product-card bg-white shadow-lg p-6 rounded-lg text-center transition-transform"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h1 className="text-xl font-semibold text-gray-800 mb-2">Product 3</h1>
            <p className="text-gray-600 mb-4">
              Step 3: Apply Perfume Focusing On Pulse Points...
            </p>
            <Image
              src="/image13.png"
              alt="Product 3"
              height={300}
              width={300}
              className="mx-auto rounded-lg shadow-md"
            />
          </motion.div>

          {/* Product 4 */}
          <motion.div
            className="product-card bg-white shadow-lg p-6 rounded-lg text-center transition-transform"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h1 className="text-xl font-semibold text-gray-800 mb-2">Product 4</h1>
            <p className="text-gray-600 mb-4">
              Step 4: Avoid Rubbing the Perfume on Your Body...
            </p>
            <Image
              src="/image14.png"
              alt="Product 4"
              height={300}
              width={300}
              className="mx-auto rounded-lg shadow-md"
            />
          </motion.div>
        </section>
      </div>
    </div>
  );
}
