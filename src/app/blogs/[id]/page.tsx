"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion for animations

type Data = {
  id: number;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
};

const data: Data[] = [
  {
    id: 1,
    title: "The Art of Perfume",
    description: "Explore the intricate world of fragrance creation.",
    content:
      "Discover the fascinating history and craftsmanship behind perfume-making. Learn about the raw materials, the artistry of blending scents, and the influence of culture on fragrance.",
    imageUrl: "/perfume1.png",
  },

  {
    id: 2,
    title: "Top 10 Perfumes of 2023",
    description: "Discover the most popular scents of this year.",
    content:
      "Presenting the top 10 fragrances that have defined 2023. This list highlights a mix of iconic classics and innovative newcomers. Each entry features a description of its scent profile, key notes, and what makes it a favorite among fragrance enthusiasts.",
    imageUrl: "/perfume2.png",
  },
  {
    id: 3,
    title: "Choosing Your Signature Scent",
    description: "Learn how to select the perfect fragrance for you.",
    content:
      "Selecting a signature scent can be daunting. This guide walks you through understanding fragrance families—floral, oriental, woody, and fresh. Tips include how to consider personal style, occasion, and even the seasons when choosing a fragrance that resonates with your identity.",
    imageUrl: "/perfume3.png",
  },
  {
    id: 4,
    title: "The History of Perfume",
    description: "Dive into the rich history of perfume-making.",
    content:
      "Trace the evolution of perfume from ancient Egypt, where it was used in religious ceremonies, to the modern-day luxury industry. Learn about pivotal moments in fragrance history, including the introduction of synthetic materials and the rise of famous perfume houses. Discover how societal trends and artistic movements have influenced fragrance development.",
    imageUrl: "/perfume4.png",
  },
  {
    id: 5,
    title: "Perfume Tips and Tricks",
    description: "Essential tips to make your fragrance last longer.",
    content:
      "Maximize your fragrance's longevity and impact with expert tips. Learn about the best application techniques, such as pulse points and layering. Understand the role of skin type and climate in scent performance. Get advice on how to store your fragrances to keep them fresh and potent.",
    imageUrl: "/perfume5.png",
  },
  {
    id: 6,
    title: "The Science of Smell",
    description: "Understanding how fragrance affects our emotions.",
    content:
      "Explore the fascinating connection between scent and emotions. Discover how the olfactory system processes fragrances and their power to evoke memories and influence mood. Learn about scent therapy and how different fragrances can promote relaxation, focus, or energy.",
    imageUrl: "/perfume6.png",
  },
];

const BlogPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const b = data.find((i) => i.id === parseInt(id));

  return (
    <div className="blog-container">
      {b ? (
        <motion.div
          className="blog-content max-w-4xl mx-auto p-6"
          initial={{ opacity: 0, y: 50 }} // Initial state (invisible, below screen)
          animate={{ opacity: 1, y: 0 }}  // Animated to visible state
          transition={{ duration: 0.8 }}  // Transition duration
        >
          <motion.div
            className="image-container mb-6"
            initial={{ scale: 0.9 }}  // Initial image size
            animate={{ scale: 1 }}    // Animate image to normal size
            transition={{ duration: 0.6 }}
          >
            <Image
              src={b.imageUrl}
              alt={b.title}
              width={800}
              height={400}
              className="rounded-full shadow-lg"
            />
          </motion.div>

          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}    // Initial opacity for title
            animate={{ opacity: 1 }}    // Animate to full opacity
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {b.title}
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0 }}    // Initial opacity for description
            animate={{ opacity: 1 }}    // Animate to full opacity
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {b.description}
          </motion.p>

          <motion.div
            className="content"
            initial={{ opacity: 0 }}    // Initial opacity for content
            animate={{ opacity: 1 }}    // Animate to full opacity
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>{b.content}</p>
          </motion.div>
        </motion.div>
      ) : (
        <p>Blog not found.</p>
      )}
    </div>
  );
};

export default BlogPage;
