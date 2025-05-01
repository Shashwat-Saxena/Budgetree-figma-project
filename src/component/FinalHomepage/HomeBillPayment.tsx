import React from 'react';
import Image from "next/image";

const HomeBillPayment = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">

      {/* Content Container */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 max-w-7xl w-full">

        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/image/upi .svg"
            alt="LoyalX Dashboard"
            width={700}
            height={500}
            className="rounded-xl shadow-2xl object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h3 className="text-4xl font-bold mb-4">Bill Payments</h3>
          <p className="text-gray-700 text-lg mb-8">
            Pay Bills Instantly, Securely, Anywhere
          </p>

          {/* Points List */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-1">1. Instant Bill Settlements</h4>
              <p className="text-gray-600 text-sm">
                Easily pay utility, mobile, broadband, and more bills instantly <br /> through a single, seamless platform.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-1">2. Multiple Payment Options</h4>
              <p className="text-gray-600 text-sm">
                Support payments through UPI, debit cards, wallets, and net <br /> banking for maximum flexibility and convenience.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-1">3. Secure and Reliable Transactions</h4>
              <p className="text-gray-600 text-sm">
                Enjoy encrypted, real-time bill payments with full transparency, <br /> tracking, and assured confirmation every time.
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

export default HomeBillPayment;
