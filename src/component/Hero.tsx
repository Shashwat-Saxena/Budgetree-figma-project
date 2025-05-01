'use client';

import Image from 'next/image';
import { ReactTyped } from 'react-typed';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl md:text-5xl font-[Times_New_Roman]">
          Your gateway to <br />
          <span className="text-blue-900 font-bold">
            <ReactTyped
              strings={['Payouts', 'Rewards', 'LoyaltyX', 'UPI Rewards']}
              typeSpeed={70}
              backSpeed={50}
              loop
            />
          </span>
        </h2>
        <p className="text-gray-600">
          Create unique and personalized reward <br />
          experiences with Budgetree&apos;s intelligent <br />
          automation platform.
        </p>
        <button className="mt-4 bg-blue-800 px-6 py-3 rounded-full cursor-pointer text-white">
          Get a demo
        </button>
      </div>

      {/* Right Section: Tilted Stacked Images */}
      <div className="md:w-1/2 relative h-[350px] w-full mt-10 md:mt-0 flex justify-center items-center">
        {/* Image 3 - back layer */}
        <div className="absolute top-16 left-16 z-10 transform rotate-[-8deg]">
          <Image
            src="/Image/section1_dashboard.png.svg"
            alt="Back"
            width={500}
            height={300}
            className="rounded-2xl shadow-2xl"
          />
        </div>
        {/* Image 2 - middle layer */}
        <div className="absolute top-8 left-8 z-20 transform rotate-[-4deg]">
          <Image
            src="/Image/section1_dashboard.png.svg"
            alt="Middle"
            width={500}
            height={300}
            className="rounded-2xl shadow-2xl"
          />
        </div>
        {/* Image 1 - top/front layer */}
        <div className="relative z-30 transform rotate-0">
          <Image
            src="/Image/section1_dashboard.png.svg"
            alt="Front"
            width={500}
            height={300}
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
