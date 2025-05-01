import Image from 'next/image';

export default function UpiHero() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Gradient Section */}
      <section className="min-h-[400px] w-[90%] max-w-[1250px] h-[700px] flex items-center justify-center bg-gradient-to-br from-[#0D1F93] to-[#3A67F2] text-white rounded-[32px] px-4 mt-24 relative overflow-visible text-center">
        <div className="z-20 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">UPI Rewards</h1>
          <p className="text-lg md:text-xl mb-8 font-poppins">
            UPI Rewards Stack empowers you to deliver cash <br /> rewards directly to their users through UPI.
          </p>
          <button className="px-6 py-2 font-poppins border border-white rounded-full text-white hover:bg-white hover:text-[#0D1F93] transition">
            Schedule a Demo
          </button>
        </div>
      </section>

      {/* Image BELOW Section */}
      <div className="w-full max-w-[800px] -mt-46 z-10">
        <Image
          src="image\upi .svg" 
          alt="RewardX Dashboard"
          width={800}
          height={600}
          className="rounded-2xl w-full mx-auto"
        />
      </div>
    </div>
  );
}
