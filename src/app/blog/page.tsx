"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Importing motion from framer-motion

type IData = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const data: IData[] = [
  {
    id: 1,
    title: "The Art of Perfume",
    description: "Explore the intricate world of fragrance creation.",
    imageUrl: "/luxury1.png",
  },
  {
    id: 2,
    title: "Top 10 Perfumes of 2023",
    description: "Discover the most popular scents of this year.",
    imageUrl: "/luxury2.png",
  },
  {
    id: 3,
    title: "Choosing Your Signature Scent",
    description: "Learn how to select the perfect fragrance for you.",
    imageUrl: "/luxury3.png",
  },
  {
    id: 4,
    title: "The History of Perfume",
    description: "Dive into the rich history of perfume-making.",
    imageUrl: "/luxury4.png",
  },
  {
    id: 5,
    title: "Perfume Tips and Tricks",
    description: "Essential tips to make your fragrance last longer.",
    imageUrl: "/luxury5.png",
  },
  {
    id: 6,
    title: "The Science of Smell",
    description: "Understanding how fragrance affects our emotions.",
    imageUrl: "/luxury6.png",
  },
];

export default function Blogs() {
  return (
    <div className="blogs-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {data.map((idata) => (
        <motion.div
          key={idata.id}
          className="blog-card relative overflow-hidden rounded-lg shadow-lg bg-white"
          whileHover={{ scale: 1.05 }} // Add hover effect
          initial={{ opacity: 0, y: 50 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          transition={{ duration: 0.5 }} // Transition duration for animation
        >
          <div className="image-container">
            <Image
              src={idata.imageUrl}
              alt={idata.title}
              width={500}
              height={300}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{idata.title}</h2>
            <p className="text-gray-600 mb-4">{idata.description}</p>
            <Link href={`/blogs/${idata.id}`}>
              <button className="read-more-btn text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Read More
              </button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
