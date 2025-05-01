// components/BlogGrid.jsx
import Image from 'next/image';
import coinImage from '@/Image/stack-four-rows-coins 1.svg';
const blogs = [
    {
      id: 1,
      title: "How to Calculate Freelance Hourly Rate in Greece",
      author: "Eran Karaso",
      category: "Finance",
      image: coinImage, 
    },
    
    {
      id: 2,
      title: "How to Calculate Freelance Hourly Rate in Greece",
      author: "Eran Karaso",
      category: "Finance",
      image: coinImage,
    },
    {
      id: 3,
      title: "How to Calculate Freelance Hourly Rate in Greece",
      author: "Eran Karaso",
      category: "Finance",
      image: coinImage,
    },
    {
      id: 4,
      title: "How to Calculate Freelance Hourly Rate in Greece",
      author: "Eran Karaso",
      category: "Finance",
      image: coinImage,
    },
    {
      id: 5,
      title: "How to Calculate Freelance Hourly Rate in Greece",
      author: "Eran Karaso",
      category: "Finance",
      image:  coinImage,
    },
    {
      id: 6,
      title: "How to Calculate Freelance Hourly Rate in Greece",
      author: "Eran Karaso",
      category: "Finance",
      image: coinImage,
    },
  ];
  
  export default function BlogGrid() {
    return (
     <section className="py-12 px-4 md:px-8">
           <h2 className="text-3xl font-bold text-gray-800 mb-4">Budgetree Blog</h2>
     
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {blogs.map((blog) => (
               <div
                 key={blog.id}
                 className="bg-[#eaf1ff] p-4 rounded-xl border border-blue-400"
               >
                 <Image
                   src={blog.image}
                   alt={blog.title}
                   className="rounded-md w-full h-48 object-cover mb-4"
                   width={500}
                   height={300}
                 />
                 <p className="text-sm text-blue-600 font-medium">{blog.category}</p>
                 <h3 className="text-md font-semibold text-gray-800 mt-1">
                   {blog.title}
                 </h3>
                 <p className="text-sm text-gray-600 mt-2">{blog.author}</p>
               </div>
             ))}
           </div>
     
           <div className="flex justify-center mt-8">
             <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition">
               More
             </button>
           </div>
         </section>
    );
  }
  