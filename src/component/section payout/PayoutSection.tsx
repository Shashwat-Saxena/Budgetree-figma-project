import Image from 'next/image';

export default function PayoutSection() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Gradient Section */}
      <section className="min-h-[400px] w-[90%] max-w-[1250px] h-[700px] flex items-center justify-center bg-gradient-to-br from-[#0D1F93] to-[#3A67F2] text-white rounded-[32px] px-4 mt-24 relative overflow-visible text-center">
        <div className="z-20 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Payouts</h1>
          <p className="text-lg md:text-xl mb-8">
            All-in-one payout stack for seamless, secure, efficient business transactions — Budgetree simplifies everything.
          </p>
          <button className="px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-[#0D1F93] transition">
            Schedule a Demo
          </button>
        </div>
      </section>

      {/* Image BELOW Section */}
      <div className="w-full max-w-[1000px] -mt-60 z-10">
        <Image
          src="/image/payout.png.svg" // ✅ Updated path
          alt="Payout Dashboard"
          width={1000}
          height={600}
          className="rounded-2xl w-full mx-auto"
        />
      </div>
    </div>
  );
}
