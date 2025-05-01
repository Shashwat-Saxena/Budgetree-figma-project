'use client'

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-br bg-blue-900 px-6 md:px-20 py-16 text-white flex flex-col md:flex-row gap-16">
      {/* Left part (Text) */}
      <div className="flex-1">
        <h1 className="text-6xl font-semibold font-poppins mb-6 text-[#D0E1FF]">
          Fly with Us
        </h1>
        <p className="text-2xl font-poppins bg-gradient-to-r from-white via-blue-300 to-blue-500 bg-clip-text text-transparent">
          Enhance employee and customers engagement with <br /> smart rewards and payouts---email us to explore <br /> tailored solutions!
        </p>
      </div>

      {/* Right part (Form) */}
      <div className="flex-1 bg-[#D0E1FF] p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold font-poppins mb-6">Contact Form</h3>
        <form action="#" method="POST">
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-poppins font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 rounded-md bg-white border border-gray-300 text-black"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium font-poppins mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 rounded-md bg-white border border-gray-300 text-black"
              placeholder="Enter your email"
            />
          </div>

          {/* Region */}
          <div className="mb-4">
            <label htmlFor="region" className="block text-lg font-medium font-poppins mb-2">Region</label>
            <select
              id="region"
              name="region"
              required
              className="w-full p-3 rounded-md bg-white border border-gray-300 text-black"
            >
              <option value="">Select your region</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
            </select>
          </div>

          {/* Users */}
          <div className="mb-4">
            <label htmlFor="users" className="block text-lg font-medium font-poppins mb-2">Users</label>
            <select
              id="users"
              name="users"
              required
              className="w-full p-3 rounded-md bg-white border border-gray-300 text-black"
            >
              <option value="">Select number of users</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-100">51-100</option>
              <option value="100+">100+</option>
            </select>
          </div>

          {/* Phone Number with Country */}
          <div className="mb-4 flex items-center gap-4">
            <div className="w-1/3">
              <label htmlFor="country" className="block text-lg font-medium mb-2 font-poppins">Country</label>
              <select
                id="country"
                name="country"
                required
                className="w-full p-3 rounded-md bg-white border border-gray-300 text-black"
              >
                <option value="">Select Country</option>
                <option value="US">United States</option>
                <option value="IN">India</option>
                <option value="UK">United Kingdom</option>
                <option value="RU">Russia </option>
                <option value="🇨🇦">Canada </option>
                <option value="🇦🇺 ">Australia</option> 
                <option value="🇩🇪 ">	Germany</option>  
                <option value="🇮🇹 ">Italy</option> 
                {/* Add more countries here */}
              </select>
            </div>
            <div className="w-2/3">
              <label htmlFor="phone" className="block text-lg font-medium mb-2 font-poppins">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full p-3 rounded-md bg-white border border-gray-300 text-black"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* If any (Optional message) */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium mb-2 font-poppins">If Any</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-3 rounded-md bg-white border border-gray-300 text-black"
              placeholder="Write any additional information or queries"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 text-white font-semibold font-poppins rounded-md hover:bg-blue-700 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
