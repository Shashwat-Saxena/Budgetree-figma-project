"use client";
// import img from 'next/image'
import logo1 from "@/Image/logo1.svg";
import logo2 from "@/Image/logo2.svg";
import logo3 from "@/Image/logo3.svg";

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-br bg-blue-900 border border-blue-950 md:px-25 py-36 text-center">
      <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-white via-blue-300 to-blue-500 bg-clip-text text-transparent">
        Effortless rewards management in 3 steps
      </h3>
      <p className="bg-gradient-to-r from-white via-blue-300 to-blue-500 bg-clip-text text-transparent">
        Acquire, retain and engage customers, employees and partners,
        <br />
        with customised solutions built for scale.
      </p>

      {/* Three parallel divs */}
      <div className="px-4 sm:px-6 flex flex-col md:flex-row justify-center md:justify-between gap-6 mt-10 flex-wrap">
        {/* Card 1 */}
        <div className="bg-[#D0E1FF] w-[368px] h-[200px] px-6 py-4 rounded-lg shadow-lg text-black text-left mx-auto">
          <img src={logo1} alt="Logo" className="w-10 h-10 mb-3 rounded-full" />
          <h4 className="text-lg font-semibold mb-2">Get onboarded</h4>
          <p className="text-sm">
            Get onboarded with minimal documentation and easy KYC.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#D0E1FF] w-[368px] h-[200px] px-6 py-4 rounded-lg shadow-lg text-black text-left mx-auto">
          <img src={logo2} alt="Logo" className="w-10 h-10 mb-3 rounded-full" />
          <h4 className="text-lg font-semibold mb-2">Create campaign</h4>
          <p className="text-sm">
            Define reward type and target user in campaign.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#D0E1FF] w-[368px] h-[200px] px-6 py-4 rounded-lg shadow-lg text-black text-left mx-auto">
          <img src={logo3} alt="Logo" className="w-10 h-10 mb-3 rounded-full" />
          <h4 className="text-lg font-semibold mb-2 mt-3">
            Analyze and optimize
          </h4>
          <p className="text-sm">
            Gain insights into reward performance and optimize for better
            engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
