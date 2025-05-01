'use client';

import Image from 'next/image';
import indiaMap from '@/Image/india-country-dot-map-section3.svg';

import visa from '@/Image/visa_frame_section3.svg';
import astral from '@/Image/Astral_pipes_section3.svg';
import axis from '@/Image/Axa_section3_frame.svg';
import uob from '@/Image/UOB_section3.svg';
import microsoft from '@/Image/section3_Microsoft_frame.svg';
import nestle from '@/Image/Nestle_frame.svg';

const brandImages = [
  { name: 'Visa', src: visa },
  { name: 'Astral', src: astral },
  { name: 'Axis', src: axis },
  { name: 'UOB', src: uob },
  { name: 'Microsoft', src: microsoft },
  { name: 'Nestle', src: nestle },
];

export default function Brands() {
  return (
    <section className="bg-white px-6 md:px-20 py-16">
      <h1 className="text-center text-3xl md:text-5xl mb-10 font-[poppins]">
        Brands that love us <br />
        across <span className="text-blue-900 font-bold font-poppins">India</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <Image src={indiaMap} alt="India Map" width={550} height={650} />
        <div className="flex flex-wrap justify-center items-center gap-6 cursor-pointer">
          {brandImages.map((brand) => (
            <Image
              key={brand.name}
              src={brand.src}
              alt={brand.name}
              width={180}
              height={140}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
