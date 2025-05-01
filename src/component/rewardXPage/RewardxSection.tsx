import Image from 'next/image'
import rewardImage from '@/Image/dashboard1.svg'

export default function RewardXSection() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Gradient Section */}
      <section className="min-h-[400px] w-[90%] max-w-[1250px] h-[700px] flex items-center justify-center bg-gradient-to-br from-[#0D1F93] to-[#3A67F2] text-white rounded-[32px] px-4 mt-24 relative overflow-visible text-center">
        <div className="z-20 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">RewardX</h1>
          <p className="text-lg md:text-xl mb-8 font-poppins">
            Send rewards and track their performance
          </p>
          <button className="px-6 py-2 font-poppins border border-white rounded-full text-white hover:bg-white hover:text-[#0D1F93] transition">
            Schedule a Demo
          </button>
        </div>
      </section>

      {/* Image BELOW Section */}
      <div className="w-full max-w-[1000px] -mt-86 z-10">
        <Image
          src={rewardImage}
          alt="RewardX Dashboard"
          className="rounded-2xl w-full mx-auto"
        />
      </div>
    </div>
  )
}
