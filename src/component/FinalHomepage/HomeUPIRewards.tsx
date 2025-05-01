"use client";

import Image from "next/image";
import React from "react";
import loyalxImage from '@/Image/upi (1) 1.svg'; 

export default function HomeUPI() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">

      {/* Content Container */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 max-w-7xl w-full">

        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src={loyalxImage}
            alt="LoyalX Dashboard"
            width={700}
            height={500}
            className="rounded-xl shadow-2xl object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h3 className="text-4xl font-bold mb-4">UPI Rewards</h3>
          <p className="text-gray-700 text-lg mb-8">
            The Smart Choice: Budgetree UPI Stack
          </p>

          {/* Points List - manually written */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-1">1. Instant UPI Transfer</h4>
              <p className="text-gray-600 text-sm">
              Send rewards directly to users’ bank accounts via UPI for <br /> immediate, hassle-free money transfers.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-1">2. Seamless Redemption Experience</h4>
              <p className="text-gray-600 text-sm">
              Recipients claim their rewards instantly through a simple UPI link <br /> —no apps, no complications involved.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-1">3. Secure and Reliable Payments</h4>
              <p className="text-gray-600 text-sm">
              Enjoy fast, encrypted UPI transactions ensuring safe, transparent, <br /> and trustworthy reward experiences for all users.
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
