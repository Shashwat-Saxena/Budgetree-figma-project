import React from 'react';
import Image from "next/image";

const HomePayouts = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
    
      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl w-full">
    
        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/Image/payout.png.svg"
            alt="LoyalX Dashboard"
            width={700}
            height={500}
            className="rounded-xl object-cover"
          />
        </div>
    
        {/* Right Content */}
        <div className="flex-1">
          <h3 className="text-4xl font-bold mb-4">Payouts</h3>
          <p className="text-gray-700 text-lg mb-8">
            Seamless Payments. Extraordinary Offers
          </p>
    
          {/* Points List */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-1">1. Instant Payout Processing</h4>
              <p className="text-gray-600 text-sm">
                Send bulk or individual payments instantly to bank accounts, UPI <br /> IDs, or digital wallets effortlessly.
              </p>
            </div>
    
            <div>
              <h4 className="text-lg font-semibold mb-1">2. Flexible Payout Options</h4>
              <p className="text-gray-600 text-sm">
                Choose from multiple payout modes like UPI, bank transfer, or <br /> gift cards to suit every need.
              </p>
            </div>
    
            <div>
              <h4 className="text-lg font-semibold mb-1">3. Secure and Compliant Transactions</h4>
              <p className="text-gray-600 text-sm">
                Experience fast, encrypted, and fully compliant payouts ensuring <br /> complete transparency and trust for all stakeholders.
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
};

export default HomePayouts;
