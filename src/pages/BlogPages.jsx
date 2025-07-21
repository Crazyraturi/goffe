import React, { useState, useEffect, useRef } from "react";
import BlogCard from "../components/BlogCard";
import { Search, MoveRight } from "lucide-react";

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

import PopularNews from "../components/PopularNews";
import Archives from "../components/Archives";
import PopularTags from "../components/PopularTags";
import OfferSection from "../components/OfferSection";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";

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

  const blogTopRef = useRef(null);

  useEffect(() => {
    if (blogTopRef.current) {
      blogTopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  return (
    <div className="flex max-w-[1400px] w-full px-5 mx-auto flex-col bg-[#F9F9F9] lg:flex-row gap-10 py-10">
      {/* Left Section */}
      <div
        ref={blogTopRef}
        className="w-full flex flex-col items-center lg:w-[70%]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {currentBlogs.map((blog, index) => (
            <BlogCard key={index} Image={blog.Image} Tag={blog.Tag} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center text-xl gap-5 flex-wrap">
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

      {/* Right Sidebar */}
      <div className="w-full lg:w-[26%] flex flex-col gap-10">
        <SearchBar />
        <Categories />
        <PopularNews />
        <Archives />
        <PopularTags />
        <OfferSection />
      </div>
    </div>
  );
};

export default Blog;
