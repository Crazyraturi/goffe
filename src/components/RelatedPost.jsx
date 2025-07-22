import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BI1 from "../assets/blogimg/bi1.jpg";
import BI2 from "../assets/blogimg/bi2.jpg";
import BI3 from "../assets/blogimg/bi3.jpg";
import BI4 from "../assets/blogimg/bi4.jpg";
import BlogCard from "../components/BlogCard";

const RelatedPost = () => {
  return (
    <div className="w-full px-4 py-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-[26px] font-semibold">Related Post</h2>
        <div className="h-1 w-10 bg-[#00BBAE] rounded-lg"></div>
      </div>

      {/* Swiper for mobile & grid for large */}
      <div className="lg:hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
        slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <BlogCard Image={BI1} Tag={"Top Toys"} />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard Image={BI2} Tag={"Family Fun"} />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard Image={BI3} Tag={"Learn and Inspire"} />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCard Image={BI4} Tag={"Kids Activities"} />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Grid for tablets and PCs */}
      <div className="hidden lg:grid grid-cols-4 gap-7">
        <BlogCard Image={BI1} Tag={"Top Toys"} />
        <BlogCard Image={BI2} Tag={"Family Fun"} />
        <BlogCard Image={BI3} Tag={"Learn and Inspire"} />
        <BlogCard Image={BI4} Tag={"Kids Activities"} />
      </div>
    </div>
  );
};

export default RelatedPost;
