'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Direct paths to images in /public/Image
const images = [
  '/Image/slider-image-2.svg',
  '/Image/slider-image-3.svg',
  '/Image/slider-image-4.svg',
  '/Image/slider-image-5.svg'
];

export default function RewardX() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] bg-blue-900 overflow-hidden">
      {/* Background image - Full section size */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={images[index]}
            alt={`RewardX Slide ${index + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-start text-center h-full px-6">
        <button className="self-start ml-69 text-white border border-white px-5 py-3 cursor-pointer mt-129 rounded-full">
          Explore More
        </button>
      </div>
    </section>
  );
}
