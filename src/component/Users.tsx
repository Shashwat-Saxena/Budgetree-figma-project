'use client'
import Image from 'next/image';
import star from '@/Image/Star 3.svg';

export default function ScrollingSection() {
  return (
    <section className="bg-[#D0E1FF] py-16 text-center">
      <h1 className="text-4xl font-[Times New Roman] text-black mb-12">Here From Our Happy <span className="font-bold text-blue-900">Budgetree</span> Users </h1>
      <div className="flex overflow-x-auto gap-6 px-6 md:px-20 snap-x snap-mandatory scrollbar-hide">
        
        {/* Box 1 */}
        <div className="min-w-[260px] flex-shrink-0 bg-white rounded-xl shadow-lg px-6 py-6 text-blue-900 snap-start transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-blue-300 hover:shadow-xl">
          <h3 className="text-lg font-semibold text-left">John D., Product Manager</h3>
          <p className="text-sm text-gray-600 mt-2 text-left">
            Budgetree made our employee <br /> appreciation program effortless. The <br /> gifting options are fantastic, and the <br /> platform is super user-friendly.
          </p>
          <div className="flex gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Image key={i} src={star} alt="star" width={20} height={20} />
            ))}
          </div>
        </div>

        {/* Box 2 */}
        <div className="min-w-[260px] flex-shrink-0 bg-white rounded-xl shadow-lg px-6 py-6 text-blue-900 snap-start transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-blue-300 hover:shadow-xl">
          <h3 className="text-lg font-semibold text-left">Anita P., Operations Manager</h3>
          <p className="text-sm text-gray-600 mt-2 text-left">
          Budgetree made our employee <br /> appreciation program effortless. The <br /> gifting options are fantastic, and the <br /> platform is super user-friendly.
          </p>
          <div className="flex gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Image key={i} src={star} alt="star" width={20} height={20} />
            ))}
          </div>
        </div>

        {/* Box 3 */}
        <div className="min-w-[260px] flex-shrink-0 bg-white rounded-xl shadow-lg px-6 py-6 text-blue-900 snap-start transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-blue-300 hover:shadow-xl">
          <h3 className="text-lg font-semibold text-left">Rahul K., Development Head</h3>
          <p className="text-sm text-gray-600 mt-2 text-left">
          Budgetree made our employee <br /> appreciation program effortless. The <br /> gifting options are fantastic, and the <br /> platform is super user-friendly.
          </p>
          <div className="flex gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Image key={i} src={star} alt="star" width={20} height={20} />
            ))}
          </div>
        </div>

        {/* Box 4 */}
        <div className="min-w-[260px] flex-shrink-0 bg-white rounded-xl shadow-lg px-6 py-6 text-blue-900 snap-start transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-blue-300 hover:shadow-xl">
          <h3 className="text-lg font-semibold text-left">Jessica, Marketing Director</h3>
          <p className="text-sm text-gray-600 mt-2 text-left">
          Budgetree made our employee <br /> appreciation program effortless. The <br /> gifting options are fantastic, and the <br /> platform is super user-friendly.
          </p>
          <div className="flex gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Image key={i} src={star} alt="star" width={20} height={20} />
            ))}
          </div>
        </div>

        {/* Box 5 */}
        <div className="min-w-[260px] flex-shrink-0 bg-white rounded-xl shadow-lg px-6 py-6 text-blue-900 snap-start transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-blue-300 hover:shadow-xl">
          <h3 className="text-lg font-semibold text-left">Siddharth, Customer Success</h3>
          <p className="text-sm text-gray-600 mt-2 text-left">
          Budgetree made our employee <br /> appreciation program effortless. The <br /> gifting options are fantastic, and the <br /> platform is super user-friendly.
          </p>
          <div className="flex gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Image key={i} src={star} alt="star" width={20} height={20} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
