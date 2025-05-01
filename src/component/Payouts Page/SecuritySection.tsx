'use client';

import Image from 'next/image';
// Update the paths to reflect the correct locations in the public directory
const pciLogo = '/images/image 13.svg'; // Updated path for PCI Logo
const isoLogo = '/images/image 14.svg'; // Updated path for ISO Logo

export default function SecuritySection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#1C2A5B] to-[#4D71C6] px-6 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Text Section */}
        <div className="text-white max-w-xl p-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug font-poppins ">
            Prioritizing security, privacy,<br />and compliance
          </h2>
          <p className="text-base md:text-lg text-blue-100 leading-relaxed font-poppins">
            At Budgetree, we prioritize data protection,<br />
            ensuring a secure, compliant loyalty<br />
            ecosystem with top standards in data<br />
            security and privacy.
          </p>
        </div>

        {/* Right Image Card */}
        <div className="bg-white rounded-xl shadow-lg px-8 py-6 flex items-center gap-8 w-[200px] md:w-[260px] justify-center m-21 ">
          <Image src={isoLogo} alt="ISO Logo" width={60} height={60} />
          <Image src={pciLogo} alt="PCI Logo" width={60} height={60} />
        </div>
      </div>
    </section>
  );
}
