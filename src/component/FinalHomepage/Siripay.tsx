'use client';
import React from 'react';
import Image from 'next/image';

const Siripay = () => {
  return (
    <div className="flex items-center justify-between py-16 px-6">
      <div className="w-1/2 ml-[33]">
        <h2 className="text-3xl font-bold mb-4 text-start">Siri Pay</h2>
        <p className="text-lg">
          SiriPay is an online platform that simplifies the purchase <br /> and gifting of digital gift cards from over 350 popular <br /> brands across categories like fashion, food, entertainment, <br /> and travel. It offers services such as Siripay Rewards, <br /> RewardX, LoyaltyX, and corporate gifting solutions, making <br /> it a one-stop-shop for rewards, engagement, and <br /> retention. Users can enjoy discounts of up to 54% on select <br /> gift cards and receive them via email or WhatsApp within <br /> 24 hours of purchase.
        </p>
        <button
          type="button"
          className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full text-sm hover:opacity-90 transition"
        >
          Explore
        </button>
      </div>
      <div className="w-1/2">
        <Image
          src="/Image/Component 12.svg"
          alt="SiriPay Illustration"
          width={500}
          height={400}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Siripay;
