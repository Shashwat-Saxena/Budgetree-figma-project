"use client";
import Link from "next/link";

export default function CategoryNav() {
  const categories = [
    { name: "User Stories", path: "/blogs/user-stories" },
    { name: "Finance", path: "/blogs/finance" },
    { name: "Freelancing", path: "/blogs/freelancing" },
    { name: "Tips & Tools", path: "/blogs/tips-tools" },
    { name: "News", path: "/blog" }, 
  ];

  return (
    <div className="bg-[#eaf1ff] py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-4 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => (
            <Link href={category.path} key={index}>
              <button className="text-sm md:text-base font-medium text-gray-700 hover:text-blue-600 transition duration-200 whitespace-nowrap">
                {category.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
