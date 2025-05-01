import React from 'react'
import Image from 'next/image';
import pciLogo from '@/Image/image 13.svg'; 
import isoLogo from '@/Image/image 14.svg';

const Priority = () => {
  return (
    <>
    <section className="w-full bg-gradient-to-br bg-white border border-white text-black px-6 py-20 text-black">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Left Text Section */}
            <div className="text-black max-w-xl p-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug  text-black font-poppins">
                Prioritizing security, privacy,<br />and compliance
              </h2>
              <p className="text-base md:text-lg  leading-relaxed  text-black font-poppins">
                At Budgetree, we prioritize data protection,<br />
                ensuring a secure, compliant loyalty<br />
                ecosystem with top standards in data<br />
                security and privacy.
              </p>
            </div>
    
            {/* Right Image Card */}
            <div className="bg-white rounded-xl shadow-lg px-8 py-6 flex items-center gap-8 w-[200px] md:w-[260px] justify-center m-21 font-poppins ">
              <Image src={isoLogo} alt="ISO Logo" width={60} height={60} />
              <Image src={pciLogo} alt="PCI Logo" width={60} height={60} />
              {/* <Image src={isoLogo} alt='Logo ISO' width={60} height={60}></Image> */}
            </div>
          </div>
        </section>
    </>
  )
}

export default Priority