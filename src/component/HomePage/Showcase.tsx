'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const imagePaths = [
  '/image/Frame 226.svg',
  '/image/Frame 225.svg',
  '/image/Frame 224.svg',
  '/image/Frame 223.svg',
  '/image/Frame 222.svg',
  '/image/Frame 221.svg',
  '/image/Frame 220.svg',
];

export default function ShowcaseSection() {
  return (
    <section className="w-full bg-white py-20 px-4 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-black mb-4">
          All at One Place
        </h2>
        <p className="text-lg text-black font-poppins mb-12">
          integrates with 30+ SAAS platforms
        </p>
      </div>

      {/* Sliders Full Width */}
      <div className="w-full">
        {/* First Slider - left to right */}
        <motion.div
          className="flex gap-10 whitespace-nowrap w-max"
          animate={{ x: ['-100%', '0%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {[...imagePaths, ...imagePaths].map((path, i) => (
            <Image
              key={`slider1-${i}`}
              src={path}
              alt={`Brand ${i + 1}`}
              width={140}
              height={70}
              className="inline-block object-contain"
            />
          ))}
        </motion.div>

        {/* Second Slider - right to left */}
        <motion.div
          className="flex gap-10 whitespace-nowrap w-max mt-6"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {[...imagePaths, ...imagePaths].map((path, i) => (
            <Image
              key={`slider2-${i}`}
              src={path}
              alt={`Brand ${i + 5}`}
              width={140}
              height={70}
              className="inline-block object-contain"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
