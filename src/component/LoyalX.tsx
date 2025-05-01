'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


import img2 from '@/Image/slider-image-2.svg';
import img3 from '@/Image/slider-image-3.svg';
import img4 from '@/Image/slider-image-4.svg';
import img5 from '@/Image/slider-image-5.svg';

const images = [ img2, img3,img4, img5]; 

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
        {/* <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent mb-6">
          RewardX
        </h3> */}
        <button className="self-start ml-69   text-white border border-white px-5 py-3 cusrsor-pointer mt-129 rounded-full">
          Explore More
        </button>
      </div>
    </section>
  );
}
