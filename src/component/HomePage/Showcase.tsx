'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import img1 from '@/Image/Frame 226.svg';
import img2 from '@/Image/Frame 225.svg';
import img3 from '@/Image/Frame 224.svg';
import img4 from '@/Image/Frame 223.svg';
import img5 from '@/Image/Frame 222.svg';
import img6 from '@/Image/Frame 221.svg';
import img7 from '@/Image/Frame 220.svg';

const images = [img1, img2, img3, img4, img5, img6, img7];

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
          {[...images, ...images].map((img, i) => (
            <Image
              key={`slider1-${i}`}
              src={img}
              alt={`Brand ${i + 1}`}
              className="w-70 h-34 object-contain inline-block"
            />
          ))}
        </motion.div>

        {/* Second Slider - right to left */}
        <motion.div
          className="flex gap-10 whitespace-nowrap w-max mt-6"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {[...images, ...images].map((img, i) => (
            <Image
              key={`slider2-${i}`}
              src={img}
              alt={`Brand ${i + 5}`}
              className="w-70 h-34 object-contain inline-block"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
