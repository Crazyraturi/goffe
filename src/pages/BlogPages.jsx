import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import { Search, MoveRight, ChevronRight } from "lucide-react";
import NewsCard from "../components/NewsCard";
import lego from "../assets/lego.png";

import BI1 from "../assets/blogimg/bi1.jpg";
import BI2 from "../assets/blogimg/bi2.jpg";
import BI3 from "../assets/blogimg/bi3.jpg";
import BI4 from "../assets/blogimg/bi4.jpg";
import BI5 from "../assets/blogimg/bi5.jpg";
import BI6 from "../assets/blogimg/bi6.jpg";
import BI7 from "../assets/blogimg/bi7.jpg";
import BI8 from "../assets/blogimg/bi8.jpg";
import BI9 from "../assets/blogimg/bi9.jpg";
import BI10 from "../assets/blogimg/bi10.jpg";

import BTI1 from "../assets/blogtinyimg/bti1.jpg";
import BTI2 from "../assets/blogtinyimg/bti2.jpg";
import BTI3 from "../assets/blogtinyimg/bti3.jpg";
import BTI4 from "../assets/blogtinyimg/bti4.jpg";
import BTI5 from "../assets/blogtinyimg/bti5.jpg";

const Blog = () => {
  const blogs = [
    { Image: BI1, Tag: "Top Toys" },
    { Image: BI2, Tag: "Family Fun" },
    { Image: BI3, Tag: "Kids Activities" },
    { Image: BI4, Tag: "Learn and Inspire" },
    { Image: BI5, Tag: "Learn and Inspire" },
    { Image: BI6, Tag: "Top Toys" },
    { Image: BI7, Tag: "Family Fun" },
    { Image: BI8, Tag: "Kids Activities" },
    { Image: BI9, Tag: "Learn and Inspire" },
    { Image: BI10, Tag: "Learn and Inspire" },
    { Image: BI1, Tag: "Family Fun" },
    { Image: BI3, Tag: "Kids Activities" },
    { Image: BI6, Tag: "Top Toys" },
    { Image: BI7, Tag: "Family Fun" },
    { Image: BI8, Tag: "Kids Activities" },
    { Image: BI9, Tag: "Learn and Inspire" },
    { Image: BI10, Tag: "Learn and Inspire" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentBlogs = blogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  return (
    <div className="flex max-w-[1400px] w-full px-5 mx-auto flex-col bg-[#F9F9F9] lg:flex-row gap-10 py-10">
      {/* Left Section - Blog Cards & Pagination */}
      <div className="w-full flex  flex-col items-center lg:w-[70%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {currentBlogs.map((blog, index) => (
            <BlogCard key={index} Image={blog.Image} Tag={blog.Tag} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex justify-center  text-xl gap-5">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-3 py-2 bg-[#00BBAE] text-white rounded disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-3 rounded ${
                currentPage === i + 1
                  ? "bg-[#00BBAE] text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-3 py-2 bg-[#00BBAE] text-white rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Right Section - Sidebar */}
      <div className="w-full lg:w-[26%] flex flex-col gap-10">
        {/* Search Bar */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search blog..."
            className="w-full pr-12 pl-4 py-3 border border-[#E8E6E6] bg-white text-black placeholder:text-gray-500 rounded-lg outline-none"
          />
          <button
            type="submit"
            className="absolute top-1/2 -translate-y-1/2 right-2 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition"
          >
            <Search size={20} />
          </button>
        </div>

        {/* Categories */}
        <div className="bg-white p-4  border border-[#E8E6E6] rounded-lg">
          <h2 className="text-[20px] text-[#001430] font-semibold mb-2">
            Categories
          </h2>
          <hr className="bg-amber-500 h-1 w-10 rounded-lg border-none mb-4" />
          <ul className="flex flex-col font-medium gap-4">
            {[
              "Family Fun (1)",
              "Kids Activities (1)",
              "Learn & Inspire (1)",
              "Tips & Tricks (1)",
              "Top Toys (5)",
              "Toy Reviews (2)",
              "Toy Trends (3)",
            ].map((item, index) => (
              <li
                key={index}
                className="group relative flex items-center gap-2 pl-6 cursor-pointer text-gray-500 hover:translate-x-2 transition-all"
              >
                <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MoveRight className="text-[#00BBAE]" size={16} />
                </span>
                <a className="group-hover:text-[#00BBAE] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular News */}
        <div className="bg-white p-4 border  border-[#E8E6E6] rounded-lg">
          <h3 className="text-[20px] text-[#001430] font-semibold">
            Popular News
          </h3>
          <hr className="h-1 w-10 bg-amber-500 rounded-lg border-none mb-4" />
          <div className="flex flex-col gap-3">
            <NewsCard Image={BTI1} />
            <NewsCard Image={BTI2} />
            <NewsCard Image={BTI3} />
            <NewsCard Image={BTI4} />
            <NewsCard Image={BTI5} />
          </div>
        </div>

        {/* Archives */}
        <div className="bg-white p-4 border  border-[#E8E6E6] rounded-lg">
          <h3 className="text-[20px] text-[#001430] font-semibold mb-2">
            Archives
          </h3>
          <hr className="h-1 w-10 bg-amber-500 rounded-lg border-none mb-4" />
          <div className="group flex items-center gap-2 cursor-pointer">
            <MoveRight
              size={16}
              className="text-[#00BBAE] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            />
            <h3 className="text-gray-500 font-bold group-hover:text-[#00BBAE] group-hover:translate-x-2 transition-all">
              December 2023 (14)
            </h3>
          </div>
        </div>

        {/* Popular Tags */}
        <div className="bg-white p-4 border mt-1 border-[#E8E6E6] rounded-lg">
          <h3 className="text-[20px] text-[#001430] font-semibold mb-2">
            Popular Tags
          </h3>
          <hr className="h-1 w-10 bg-amber-500 rounded-lg border-none mb-4" />
          <div className="text-gray-500 flex flex-wrap gap-2">
            {[
              "Family Fun",
              "Learn & Inspire",
              "Tips & Tricks",
              "Top Toys",
              "Toy Reviews",
              "Toy Trends",
            ].map((tag, i) => (
              <div
                key={i}
                className="p-1 border border-[#E8E6E6] hover:bg-[#00BBAE] hover:text-white font-medium rounded-lg"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Offer Section */}
        <div className=" rounded-lg flex flex-col justify-center items-center bg-blue-500 text-white text-center px-5 py-8">
          <h3 className="text-[25px] font-bold">
            Unique & Awesome Toy Collection
          </h3>
          <p>15% Off on Kids' Toys and Gifts!</p>
          <button className="group relative overflow-hidden rounded-full font-bold mt-4 px-4 py-2 transition-colors duration-300 bg-white text-[#69778A]">
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
              See Collection
              <ChevronRight />
            </span>
            <span className="absolute inset-0 bg-[#00BBAE] scale-x-0 origin-left transition-transform duration-700 rounded-full ease-in-out group-hover:scale-x-100 z-0" />
          </button>
          <img className="h-48 mt-10" src={lego} alt="lego" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
