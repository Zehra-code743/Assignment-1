"use client";

import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';  // Importing icons from React Icons

export default function Contact() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <motion.section
        className="contact-form bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Form</h2>

        <form>
          {/* Full Name Input */}
          <div className="input-box mb-4 relative">
            <label className="text-gray-700">Full Name</label>
            <div className="absolute left-3 top-2 text-gray-400">
              <FaUser />
            </div>
            <input
              type="text"
              className="field pl-10 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Address Input */}
          <div className="input-box mb-4 relative">
            <label className="text-gray-700">Email Address</label>
            <div className="absolute left-3 top-2 text-gray-400">
              <FaEnvelope />
            </div>
            <input
              type="email"
              className="field pl-10 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Textarea */}
          <div className="input-box mb-4 relative">
            <label className="text-gray-700">Your Message</label>
            <textarea
              className="field pl-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="submit-btn w-full py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <FaPaperPlane className="inline mr-2" />
            Send Message
          </motion.button>
        </form>
      </motion.section>
    </div>
  );
}
