'use client'
import Image from 'next/image';

export default function ScrollingSection() {
  return (
    <section className="bg-[#D0E1FF] py-16 text-center">
      <h1 className="text-4xl font-[Times New Roman] text-black mb-12">
        Here From Our Happy <span className="font-bold text-blue-900">Budgetree</span> Users
      </h1>

      <div className="flex overflow-x-auto gap-6 px-6 md:px-20 snap-x snap-mandatory scrollbar-hide">
        {[
          { name: 'John D., Product Manager' },
          { name: 'Anita P., Operations Manager' },
          { name: 'Rahul K., Development Head' },
          { name: 'Jessica, Marketing Director' },
          { name: 'Siddharth, Customer Success' },
        ].map((user, index) => (
          <div
            key={index}
            className="min-w-[260px] flex-shrink-0 bg-white rounded-xl shadow-lg px-6 py-6 text-blue-900 snap-start transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-blue-300 hover:shadow-xl"
          >
            <h3 className="text-lg font-semibold text-left">{user.name}</h3>
            <p className="text-sm text-gray-600 mt-2 text-left">
              Budgetree made our employee <br />
              appreciation program effortless. The <br />
              gifting options are fantastic, and the <br />
              platform is super user-friendly.
            </p>
            <div className="flex gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/image/Star 3.svg"
                  alt="star"
                  width={20}
                  height={20}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
