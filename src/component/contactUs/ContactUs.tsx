// components/ContactUs.jsx

export default function ContactUs() {
    return (
      <div className="flex flex-col lg:flex-row w-full min-h-screen bg-[#f4f8ff]">
        {/* Left Part */}
        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact us</h2>
          <p className="text-gray-600 mb-10">
            Tell us a bit about yourself, and we’ll tell you a lot more about us.
          </p>
  
          <div className="flex flex-col md:flex-row gap-6">
            {/* Support Box */}
            <div className="bg-white rounded-xl p-6 shadow-md flex-1">
              <div className="text-blue-500 text-3xl mb-3">📄</div>
              <h3 className="font-semibold text-lg mb-1">Support</h3>
              <p className="text-gray-600 text-sm">
                Our customer support team is ready to assist you anytime with quick, and reliable service.
              </p>
            </div>
  
            {/* Blog Box */}
            <div className="bg-white rounded-xl p-6 shadow-md flex-1">
              <div className="text-blue-500 text-3xl mb-3">🎧</div>
              <h3 className="font-semibold text-lg mb-1">Budgetree Blog</h3>
              <p className="text-gray-600 text-sm">
                Keep up with the latest news and trends in the global work landscape.
              </p>
            </div>
          </div>
        </div>
  
        {/* Right Part */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#1c2e83] to-[#4c70d4] p-10 text-white flex flex-col justify-center">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-2">Your name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-white text-white placeholder-white focus:outline-none"
              />
            </div>
  
            {/* Email */}
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-white text-white placeholder-white focus:outline-none"
              />
            </div>
  
            {/* Country and Phone */}
            <div className="flex gap-4">
              <select className="bg-transparent border border-white rounded-md px-4 py-2 text-white">
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
              <input
                type="text"
                placeholder="+91"
                className="flex-1 px-4 py-2 rounded-md bg-transparent border border-white text-white placeholder-white focus:outline-none"
              />
            </div>
  
            {/* Message */}
            <div>
              <textarea
                rows={4}
                placeholder="How can we help?"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-white text-white placeholder-white focus:outline-none"
              ></textarea>
            </div>
  
            {/* Submit */}
            <button
              type="submit"
              className="px-6 py-2 border border-white rounded-md hover:bg-white hover:text-[#1c2e83] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  