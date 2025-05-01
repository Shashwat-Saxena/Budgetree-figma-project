"use client";

import Image from "next/image";
import React from "react";
import loyalxImage from '@/Image/Group 199.svg'; 

export default function HomeLoyalX() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl w-full">

        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src={loyalxImage}
            alt="LoyalX Dashboard"
            width={700}
            height={500}
            className="rounded-xl  object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h3 className="text-4xl font-bold mb-4">LoyaltyX</h3>
          <p className="text-gray-700 text-lg mb-8">
            AI-powered rewards redemption options
          </p>

          {/* Points List - manually written */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-1">1. Plug & Play</h4>
              <p className="text-gray-600 text-sm">
                An API-ready solution to experience rapid implementation of <br /> your rewards redemption platform
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-1">2.White labeled solution</h4>
              <p className="text-gray-600 text-sm">
              Easily define reward types and target users to create impactful <br /> and personalized campaign experiences.

              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-1">3. Customizable Catalog</h4>
              <p className="text-gray-600 text-sm">
              Customize your rewards offerings to align with your brand and <br /> your customers’ needs
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-8">
            <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full text-sm hover:opacity-90 transition">
              Learn more
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
