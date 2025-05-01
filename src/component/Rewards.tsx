'use client';

import React from 'react';

export default function WhyChooseSection() {
  return (
    <section className="bg-white px-6 md:px-20 py-20">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        
        {/* Left Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Personalized <span className='text-black'>Awards</span></h2>
          <p className="text-gray-700 text-lg">
            Tailor your rewarding experience with for  <br /> customers, partners and employees. 
          </p>
        </div>

        {/* Right 3 Boxes Section */}
        <div className="w-full flex flex-wrap justify-between gap-6 cursor-pointer">
  <div className="bg-[#D0E1FF] p-6 rounded-xl shadow-lg flex-1 min-w-[250px] max-w-[300px]">
    <h4 className="text-xl font-semibold text-blue-900 mb-2">Robust Support</h4>
    <p className="text-gray-700 text-sm">
      Our support team ensures your <br /> experience with Budgetree remains <br /> hassle-free.
    </p>
  </div>

  <div className="bg-[#D0E1FF] p-6 rounded-xl shadow-lg flex-1 min-w-[250px] max-w-[300px]">
    <h4 className="text-xl font-semibold text-blue-900 mb-2">AI Based Campaigns</h4>
    <p className="text-gray-700 text-sm">
      Deliver targeted and personalized <br /> reward experiences to boost <br /> engagement and conversions.
    </p>
  </div>

  <div className="bg-[#D0E1FF] p-6 rounded-xl shadow-lg flex-1 min-w-[250px] max-w-[300px]">
    <h4 className="text-xl font-semibold text-blue-900 mb-2">Multi Currency Support</h4>
    <p className="text-gray-700 text-sm">
      Handle global transactions with <br /> multiple currencies with ease.
    </p>
  </div>

  <div className="bg-[#D0E1FF] p-6 rounded-xl shadow-lg flex-1 min-w-[250px] max-w-[300px]">
    <h4 className="text-xl font-semibold text-blue-900 mb-2">Multi Development Options</h4>
    <p className="text-gray-700 text-sm">
      Integrate with different platforms <br /> via flexible development tools.
    </p>
  </div>
  <div className="bg-[#D0E1FF] p-6 rounded-xl shadow-lg flex-1 min-w-[250px] max-w-[300px]">
    <h4 className="text-xl font-semibold text-blue-900 mb-2">Multi Development Options</h4>
    <p className="text-gray-700 text-sm">
      Integrate with different platforms <br /> via flexible development tools.
    </p>
  </div>
  <div className="bg-[#D0E1FF] p-6 rounded-xl shadow-lg flex-1 min-w-[250px] max-w-[300px]">
    <h4 className="text-xl font-semibold text-blue-900 mb-2">Multi Development Options</h4>
    <p className="text-gray-700 text-sm">
      Integrate with different platforms <br /> via flexible development tools.
    </p>
  </div>
</div>


      </div>
    </section>
  );
}
