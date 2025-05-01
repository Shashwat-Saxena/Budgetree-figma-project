'use client'

export default function AboutSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 md:px-20 py-16 bg-white text-center">
    <div className="inline-block group relative mb-6">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition duration-300"></div>
  <h5 className="relative text-3xl md:text-4xl text-gray-900 px-6 py-3 bg-white rounded-xl border border-gray-200">
    About Us
  </h5>
</div>







      {/* Header */}
      <h1 className="text-4xl md:text-6xl font-bold text-black font-poppins mb-6">
        Seamless rewards, effortless <br/> payments -that's Budgetree.
      </h1>

      {/* Paragraph */}
      <p className="text-lg md:text-2xl text-gray-600 max-w-3xl">
      At Budgetree, we believe in simplifying the way businesses engage  with <br /> their customers and partners. As a leading SaaS platform for loyalty <br /> rewards and payment solutions, our mission is to empower businesses <br /> of all sizes—whether B2B or B2C—to create memorable experiences and <br /> foster deeper relationships through innovative rewards programs.
      </p>
    </section>
  )
}
// 