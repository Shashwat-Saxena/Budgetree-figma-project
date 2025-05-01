'use client';

import Image from 'next/image';

import indiaMap from '@/Image/india-country-dot-map-section3.svg';
import redFM from '@/Image/Frame 176.svg';
import ircon from '@/Image/Frame 177.svg';
import astral from '@/Image/Astral_pipes_section3.svg';
import mahindra from '@/Image/Frame 124.svg';

import pineLabs from '@/Image/image 32.svg';
import idfc from '@/Image/image 34.svg';
import razorpay from '@/Image/image 28.svg';
import cashfree from '@/Image/image 30.svg';
import amazon from '@/Image/amazon.svg';

export default function Brands() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2C2C2C] mb-6">
          Our partners that love <span className="text-[#1D3ACF] font-bold">Budgtree</span><br className="hidden md:block" />
          across India
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-12">
          {/* Map Image */}
          <div className="w-[380px] md:w-[450px]">
            <Image src={indiaMap} alt="India Map" className="w-full h-auto object-contain" />
          </div>

          {/* Partner Logos */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-xl">
            {[redFM, ircon, astral, mahindra].map((logo, i) => (
              <div
                key={i}
                className="bg-white rounded-xl flex items-center justify-center p-1  hover:shadow-xl transition"
              >
                <Image src={logo} alt={`Partner Logo ${i + 1}`} className="max-h-52 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Trusted by text */}
        <p className="text-gray-500 text-sm mt-16 mb-6">
          Trusted by 5000+ enterprises across the globe
        </p>

        {/* Bottom logos with animation */}
        <div className="flex flex-wrap items-center justify-center gap-22 overflow-hidden">
          <div className="animate-marquee flex gap-22">
            {[pineLabs, idfc, razorpay, cashfree, amazon].map((logo, i) => (
              <Image
                key={i}
                src={logo}
                alt={`Trusted Brand ${i + 1}`}
                className="max-h-22 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
