import React from "react";
import BlogCard from "../components/BlogCard";
import { Search, MoveRight } from "lucide-react";
import NewsCard from "../components/NewsCard";
import { ChevronRight } from "lucide-react";
import lego from "../assets/lego.png"

const Blog = () => {
  return (
    <div className="flex w-full flex-col  lg:flex-row gap-10 px-6 py-10  ">
      {/* Left section - Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 w-full lg:w-[70%]">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      {/* Right section - Sidebar */}

      <div className="w-full lg:w-[30%] flex flex-col gap-10">
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

        {/* Categories Section */}
        <div className="bg-white p-4 border border-[#E8E6E6] rounded-lg">
          <h2 className="text-[20px] text-[#001430] font-semibold mb-4">
            Categories
          </h2>
          <hr className="bg-amber-500 h-1 w-10 rounded-lg border-none" />

          <ul className="flex flex-col mt-4 font-medium gap-4">
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
                className="group relative flex items-center gap-2 pl-6 cursor-pointer text-gray-500 transition-all duration-300 hover:translate-x-2"
              >
                <span className="absolute left-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MoveRight className="text-[#00BBAE]" size={16} />
                </span>

                <a
                  href="#"
                  className="transition-colors duration-200 group-hover:text-[#00BBAE]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/*  popular news*/}
        <div className="bg-white p-4 border border-[#E8E6E6] rounded-lg">
          <h3 className="text-[20px] text-[#001430] font-semibold mb-4">
            Popular News
          </h3>
          <hr className="h-1 w-10 bg-amber-500  rounded-lg border-none " />
          <div className=" mt-4 flex flex-col gap-3">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>

        {/* achives  */}
        <div className="bg-white p-4 border border-[#E8E6E6] rounded-lg">
          <div className="">
            <h3 className="text-[20px] text-[#001430] font-semibold mb-4">
              Archives
            </h3>
            <hr className="h-1 w-10 bg-amber-500 rounded-lg border-none" />
            <div className="group flex items-center mt-2 gap-2 cursor-pointer transition-all">
              <MoveRight
                size={16}
                className="text-[#00BBAE] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              />

              <h3 className="text-gray-500 transition-all font-bold duration-300 group-hover:text-[#00BBAE] group-hover:translate-x-2">
                December 2023 (14)
              </h3>
            </div>
          </div>
        </div>

        {/* popular tag */}
        <div className="bg-white p-4 border border-[#E8E6E6] rounded-lg">
          <h3 className="text-[20px]  text-[#001430] font-semibold mb-4">
            Popular{" "}
          </h3>
          <hr className="h-1 w-10 bg-amber-500 rounded-lg border-none" />

          {/* tags */}
          <div className="text-gray-500  mt-2 flex flex-wrap   rounded-lg gap-2">
            <div className="p-1 border border-[#E8E6E6] hover:bg-[#00BBAE] hover:text-white font-medium  rounded-lg">
              Family Fun
            </div>
            <div className="p-1 border  border-[#E8E6E6] hover:bg-[#00BBAE] hover:text-white font-medium rounded-lg">
              {" "}
              Learn & Inspire
            </div>
            <div className="p-1 border border-[#E8E6E6] hover:bg-[#00BBAE] hover:text-white font-medium  rounded-lg">
              {" "}
              Tips & Tricks
            </div>
            <div className="p-1 border border-[#E8E6E6] hover:bg-[#00BBAE] hover:text-white font-medium  rounded-lg">
              {" "}
              Top Toys
            </div>
            <div className="p-1 border border-[#E8E6E6] hover:bg-[#00BBAE] hover:text-white font-medium rounded-lg">
              {" "}
              Toy Reviews
            </div>
            <div className="p-1 border border-[#E8E6E6] hover:bg-[#00BBAE] hover:text-white font-medium rounded-lg">
              Toy Trends
            </div>
          </div>
        </div>

        {/* offfer */}

        <div className="mt-3 rounded-lg flex justify-center items-center flex-col  bg-blue-500">
          <h3 className="text-[25px] text-center  mt-8 text-white">
            Unique & Awesome Toy Collection
          </h3>
          <p className=" text-white text-center">
            15% Off on Kids' Toys and Gifts!
          </p>

          <button className="bg-white px-5 py-3 rounded-full font-bold text-[#69778A] flex items-center gap-2 mt-2 w-50">
            See Collection
            <span>
              <ChevronRight />
            </span>
          </button>
          <img className="h-48 mt-5" src={lego} alt="lego" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
