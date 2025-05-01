"use client";

import Image from "next/image";
import React from "react";
import dashboard from '@/Image/dashboard1.svg';

export default function HomeRewardX() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      
      {/* Main Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Simplify Employee Recognition Effortlessly
      </h2>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">

        {/* Left Content */}
        <div className="flex-1">
          <h3 className="text-4xl font-semibold mb-4">RewardX</h3>
          <p className="text-gray-700 mb-6">Distribute rewards your way.</p>

          {/* Points List - manually written */}
          <div className="flex flex-col gap-6">

            <div>
              <h4 className="text-lg font-semibold mb-1">1. Seamless Reward Linking</h4>
              <p className="text-gray-600 text-sm">
                Connect rewards automatically to your email or phone number for easy, instant access anytime, anywhere.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-1">2.Flexible Redemption Options</h4>
              <p className="text-gray-600 text-sm">
              Redeem partially or combine reward codes for bigger, more valuable rewards tailored to your needs.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-1">3. Instant Reward Delivery</h4>
              <p className="text-gray-600 text-sm">
              Send unique reward links via email or SMS for fast, hassle-free redemption with personalized choices.
              </p>
            </div>

          </div>

          {/* Button */}
          <div className="mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm hover:bg-blue-700 transition">
              Learn more
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-[1] flex justify-center">
          <Image
            src={dashboard} 
            alt="RewardX Dashboard"
            width={2700}
            height={2500}
            className="rounded-lg object-contain w-full h-auto md:w-3/4 lg:w-2/3"
          />
        </div>

      </div>
    </div>
  );
}
