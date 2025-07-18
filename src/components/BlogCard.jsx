import React from "react";
import blogImg1 from "../assets/blog_img_1.jpg";
import { Calendar } from "lucide-react";
import { CircleUserRound } from "lucide-react";

const BlogCard = () => {
  return (
    <div className="w-[280px] h-auto border-[#E8E6E6] rounded-lg overflow-hidden bg-white shadow">
      {/* image div */}
      <div className="relative p-1 rounded-lg">
        <img className="w-full h-60  rounded-lg object-cover" src={blogImg1} alt="Blog" />
        <span className="absolute top-4  left-3 bg-[#00BBAE] text-white  font-semibold px-5 py-2 rounded-lg shadow">
          Top Toy
        </span>
      </div>

      <div className="p-4 mt-3 space-y-2">
        <div className="flex items-center  w-[127px] h-[37px px-1 py-1 rounded-lg border-1 border-[#E8E6E6]  text-gray-500 gap-1">
          <Calendar className="w-5 h-5 text-[#00BBAE]" />
          <span className="text-[#001430">27, Dec 2023</span>
        </div>
        <h1 className="text-md mt-2 text-[20px] hover:text-[#00BBAE] text-[#001430]  font-semibold ">
          Toy Emporium: Playful Picks for Kids’ Delightful Days
        </h1>
        <p className="text text-[#69778A]">
          Lorem ipsum dolor sit amet construct. Quis vel nunc est aliquam
          luctus.
        </p>
        <div
          className="flex items-center gap-1 h-[63px] w-[252px] border-t-1 border-t-[#E8E6E6] text-sm text-gray-500"
        >
          <CircleUserRound className="w-7 h-7" />
          <span className="text-[16px] font-medium">Posted by: admin</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
