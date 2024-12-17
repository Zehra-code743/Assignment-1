"use client";

import React from "react";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion for animation

export default function Footer() {
  return (
    <motion.div
      className="footer-parent bg-gray-800 text-white py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.ul
        className="footer-child space-y-4 text-lg"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.li
          className="text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A perfume is a liquid mixture used to emit a pleasant odour. It is
          formed from fragrant essential oils derived from plants and spices or
          synthetic aromatic compounds. Cosmetic fragrances applied to a persons
          body to emit a pleasant smell include perfume.
        </motion.li>
        <motion.li
          className="facebook flex items-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span>Facebook:</span>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition duration-300"
          >
            Visit our Facebook page
          </Link>
          <FaFacebook
            size={20}
            className="text-blue-600 hover:text-blue-500 transition duration-300"
          />
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
