import Image1 from "../assets/blogimg/blog_05.jpg";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import PopularNews from "../components/PopularNews";
import Archives from "../components/Archives";
import OfferSection from "../components/OfferSection";
import PopularTags from "../components/PopularTags";
import profile from "../assets/profile.png";
import { Grip } from "lucide-react";
import { ChevronRight } from "lucide-react";
import  BlogCard from "../components/BlogCard"
import BI1 from "../assets/blogimg/bi1.jpg";
import BI2 from "../assets/blogimg/bi2.jpg";
import BI3 from "../assets/blogimg/bi3.jpg";
import BI4 from "../assets/blogimg/bi4.jpg";

import {
  CircleUser,
  Dribbble,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  CalendarDays,
  Codesandbox,
} from "lucide-react";
import ReviewForm from "../components/ReviewForm";

const BlogDetail = () => {
  return (
    <div className="bg-[#F9F9F9]   ">
    <div className="  h-full max-w-[1400px] flex justify-between m-auto">
        {/* left secton */}
      <div className="max-w-[1008px] m-auto bg-white mt-10  ">
        <div className="border  border-[#E8E6E6] rounded-lg ">
          {/* Blog-Image */}
          <div className="max-w-[1008px]">
            <div className=" flex   mx-[32px] items-center justify-center">
              {" "}
              <img className="rounded-lg w-full" src={Image1} alt="image" />
            </div>
          </div>

          {/* Detail-header */}
          <div className="flex mt-5 mx-[32px] gap-10">
            {/* postedby */}
            <div className="flex items-center  gap-2">
              <span className="bg-[#d1d5db] p-2 text-white  rounded-full">
                <CircleUser className=" h-7 w-7" />
              </span>
              <div>
                <h3 className="text-[#69778A] text-[14px]">posted by:</h3>
                <h2 className="text-[#001430] text-[16px]">Admin</h2>
              </div>
            </div>
            {/* date */}
            <div className="flex items-center  gap-2">
              <div className="text-teal-400 p-2 rounded-full bg-teal-100">
                {" "}
                <CalendarDays />
              </div>
              <div>
                <h3 className="text-[#69778A] text-[14px]">Date:</h3>
                <h3 className="text-[#001430] text-[16px]">27 Dec,2023</h3>
              </div>
            </div>
            {/* category */}
            <div className="flex items-center gap-2">
              <div className="text-amber-500 p-2 rounded-full bg-amber-100">
                {" "}
                <Codesandbox />
              </div>
              <div>
                <h3 className="text-[#69778A] text-[14px]">Categories</h3>
                <h3 className="text-[#001430] text-[16px]">Top Toyes</h3>
              </div>
            </div>
          </div>

          {/* main content */}
          <div className="mt-5 mx-[32px]">
            <h1 className="text-[36px]  font-semibold text-[#001430]">
              Toy Emporium: Playful Picks for Kids’ Delightful Days
            </h1>
            <div>
              <p className="text-[16px]  mt-5 text-[#69778A]">
                Lorem ipsum dolor sit amet construct. Quis vel nunc est aliquam
                luctus morbi massa et faucibus. Tristique tincidunt risus at
                urna ut enim augue eget. Bibendum mi in eu tortor eget nullam
                commodo lectus commodo. Nibh netus sed blandit quam. Justo Id ut
                fermentum quis etiam athendrerit sed amet diam sociis
                pellentesque risus eget dui. Dui semper a phasellus id fusce.
                Dignissim accumsan turpis et neque laoreet.
              </p>
            </div>
            <p className="text-[16px] mt-5 text-[#69778A]">
              Condimentum suspendisse condimentum faucibus urna. Nunc leo
              suscipit at vitae id interdum. Risus aliquam ullamcorper egestas
              commodo tristique nec volutpat integer. Pharetra gravida justo
              eleifend id ac elementum curabitur mauris. Vitae posuere turpis
              consequat phasellus tellus quam. Vulputate risus purus gravida
              morbi neque ut diam ac. Id ut fermentum quis etiam at tempor felis
              nunc. Posuere est eu ornare cras suspendisse ac. Eu cursus nullam
              tortor posuere. Varius enim pharetra euismod maecenas lacus
              penatibus odio. Tortor egestas ut ac turpis. Viverra aenean eget
              blandit semper cursus mi nunc dictum. Est mi et pellentesque
              molestie diam lacus fusce ornare. Dignissim et varius morbi diam.
              Adipiscing habitant imperdiet in mattis. Nascetur at hendrerit sed
              auctor suspendisse. Mi consectetur elementum non donec diam felis
              amet dignissim. Pellentesque consectetur nibh fermentum sed quam
              id. Nam nullam velit tortor et neque metus praesent. Maecenas ut.
            </p>

            <p className="text-[22px] py-10  border-[#001430] border-l-5 px-10 mt-5  bg-teal-100 text-[#001430]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
              mauris there ultrices praesent eleifend. Magnis pulvinar interdum
              tempus, tempus dictum egestas vitae suspendisse vel, nibh morbi
              sapien.
            </p>

            <p className="text-[16px]  mt-5 text-[#69778A]">
              Condimentum suspendisse condimentum faucibus urna. Nunc leo
              suscipit at vitae id interdum. Risus aliquam ullamcorper egestas
              commodo tristique nec volutpat integer. Pharetra gravida justo
              eleifend id ac elementum curabitur mauris. Vitae posuere turpis
              consequat phasellus tellus quam. Vulputate risus purus gravida
              morbi neque ut diam ac. Id ut fermentum quis etiam at tempor felis
              nunc. Posuere est eu ornare cras suspendisse ac. Eu cursus nullam
              tortor posuere. Varius enim pharetra euismod maecenas lacus
              penatibus odio. Tortor egestas ut ac turpis. Viverra aenean eget
              blandit semper cursus mi nunc dictum. Est mi et pellentesque
              molestie diam lacus fusce ornare. Dignissim et varius morbi diam.
              Adipiscing habitant imperdiet in mattis. Nascetur at hendrerit sed
              auctor suspendisse. Mi consectetur elementum non donec diam felis
              amet dignissim. Pellentesque consectetur nibh fermentum sed quam
              id. Nam nullam velit tortor et neque metu.
            </p>

            <p className="text-[16px] mt-5  text-[#69778A]">
              Condimentum suspendisse condimentum faucibus urna. Nunc leo
              suscipit at vitae id interdum. Risus aliquam ullamcorper egestas
              commodo tristique nec volutpat integer. Pharetra gravida justo id
              ac elementum curabitur mauris. Vitae posuere turpis consequat
              phasellus tellus quam. Vulputate risus purus gravida morbi neque
              ut diam ac. Id ut fermentum quis etiam at tempor felis nunc.
              Posuere est eu ornare cras suspendisse ac.
            </p>
          </div>
          {/* tags */}
          <div className="flex  border-t-1  justify-between border-[#E8E6E6] ">
            <div className="flex items-center m-[32px]  gap-3 ">
              <h3 className="text-[18px] text-[#001430] font-semibold">
                Tags:
              </h3>
              <div className="p-1 border border-[#E8E6E6] hover:bg-[#00BBAE] hover:text-white font-medium rounded-lg">
                Family Fun
              </div>

              <div className="p-1 border border-[#E8E6E6] hover:bg-[#00BBAE] hover:text-white font-medium rounded-lg">
                Learn &Inspire
              </div>

              <div className="p-1 border border-[#E8E6E6] hover:bg-[#00BBAE] hover:text-white font-medium rounded-lg">
                Toy Trends
              </div>
            </div>

            <div className="flex items-center m-[32px]  gap-3 ">
              <h3 className="text-[18px] text-[#001430] font-semibold ">
                Share:
              </h3>
              <div className=" h-10 w-10 flex text-[#69778A] items-center  justify-center rounded-full border border-[#E8E6E6] hover:bg-[#00BBAE] hover:text-white font-medium ">
                <Facebook />
              </div>
              <div className="h-10 w-10 flex items-center text-[#69778A]  justify-center  border border-[#E8E6E6] hover:bg-[#00BBAE] hover:text-white font-medium rounded-full">
                <Dribbble />
              </div>
              <div className="h-10 w-10 flex items-center text-[#69778A]  justify-center  border border-[#E8E6E6] hover:bg-[#00BBAE] hover:text-white font-medium rounded-full">
                <Linkedin />
              </div>
              <div className="h-10 w-10 flex items-center text-[#69778A]  justify-center  border border-[#E8E6E6] hover:bg-[#00BBAE] hover:text-white font-medium rounded-full">
                <Twitter />
              </div>
              <div className="h-10 w-10 flex items-center  text-[#69778A] justify-center  border border-[#E8E6E6] hover:bg-[#00BBAE] hover:text-white font-medium rounded-full">
                <Instagram />
              </div>
            </div>
          </div>

          <div></div>
        </div>

        <div>
          {/* admin intro */}

          <div className="flex items-center  gap-5  mt-5 bg-white  border  p-[32px] border-[#E8E6E6] rounded-lg  ">
            <div className="w-96   ">
              <img src={profile} className="rounded-full" alt="Img" />
            </div>
            <div className=" flex flex-col gap-3  p-5  ">
              <div>
                {" "}
                <span className="text-16px text-[#69778A]"> </span>posted by:{" "}
                <span className="text-18px font-semibold">Admin</span>
              </div>
              <p className="text-[#69778A]">
                Lorem ipsum dolor sit amet consectetur. Viverra sed laoreet
                viverra eget donec ultricies nibh tellus. Adipiscing consequat
                egestas sit arcu a consectetur nibh. Ut scelerisque massa
                adipiscing vel. Netus in porttitor eget semper est ornare
                sagittis gravida. Sed a dolor pellentesque ultrices amet eget
                vitae.
              </p>
              <div>
                <div className="flex items-center   gap-3 ">
                  <div className=" h-8 w-8 flex items-center  justify-center text-[#69778A] rounded-full border border-[#E8E6E6] p-1 hover:bg-[#00BBAE] hover:text-white font-medium ">
                    <Facebook />
                  </div>
                  <div className="h-8 w-8 flex items-center  justify-center text-[#69778A]  border border-[#E8E6E6] hover:bg-[#00BBAE] p-1 hover:text-white font-medium rounded-full">
                    <Dribbble />
                  </div>
                  <div className="h-8 w-8  p-1 flex items-center  justify-center text-[#69778A]  border border-[#E8E6E6] hover:bg-[#00BBAE] hover:text-white font-medium rounded-full">
                    <Linkedin />
                  </div>
                  <div className="h-8 w-8 p-1 flex items-center  justify-center  text-[#69778A] border border-[#E8E6E6] hover:bg-[#00BBAE] hover:text-white font-medium rounded-full">
                    <Twitter />
                  </div>
                  <div className="h-8 w-8 p-1 flex items-center  justify-center text-[#69778A]  border border-[#E8E6E6] hover:bg-[#00BBAE] hover:text-white font-medium rounded-full">
                    <Instagram />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between  gap-5  mt-10 bg-white  border  border-[#E8E6E6] rounded-lg">
            <div className="p-5  text-[#69778A]">
              {" "}
              <Grip />
            </div>
            <div className="flex flex-col p-[32px]">
              <div className="flex  flex-row-reverse text-[#69778A]">
                {" "}
                <span>
                  <ChevronRight />
                </span>{" "}
                NextPost
              </div>
              <h1 className=" text-[#001430] mt-1 font-semibold">
                Tiny Emporium: Playful Picks for Kids’ Delightful Days!
              </h1>
            </div>
          </div>
          {/* review form  */}
          <div className="flex items-center  gap-5  mt-10 bg-white  border  border-[#E8E6E6]  rounded-lg ">
            <div className="p-[32px]  gap-10 flex flex-col">
              <div>
                <h2 className="text-[26px] font-semibold">Write a Review</h2>
              <p className="text-[#69778A]">
                Your email address will not be published. Required fields are
                marked *
              </p>
              </div>
              <textarea className="border border-[#E8E6E6] rounded-lg w-full px-5  py-5" type="text" placeholder="comment*" />
              <div className="flex gap-5">
                <input className="border border-[#E8E6E6] rounded-lg w-[448px] px-5  py-5" type="text" placeholder="Name*" />
                <input className="border-[#E8E6E6] border rounded-lg w-[448px] px-5 " type="email" placeholder="Email*" />
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="condition" id="condition" />
                <label className="text-[#69778A]" htmlFor="condition">
                  {" "}
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>
               <div>

              <button className="text-white bg-[#00BBAE] hover:bg-amber-500 px-6 text-[18px] font-medium py-4 rounded-lg">
                Post Comment
              </button>
               </div>
            </div>
          </div>
        
        </div>
      </div>

      {/* right section */}
      <div className="w-[30%] flex px-10 py-10">
        <div className="flex gap-10 flex-col">
          <SearchBar />
          <Categories />
          <PopularNews />
          <Archives />
          <PopularTags />
          <OfferSection />
        </div>
      </div>
    </div>
   
    <div className="relative  max-w-[1400px]   bg-[#F9F9F9] mt-20 mx-auto">
     {/* Horizontal Line */}
     <hr className="border-t-1  borde-[#E8E6E6] "/>

      {/* "Related Post" Label on Top */}
       <div className="absolute -top-4 left-0   bg-[#F9F9F9] px-4 flex items-center gap-4">
        <h2 className="text-[26px] font-semibold">Related Post</h2>
        <div className="h-1 w-10 bg-[#00BBAE] rounded-lg"></div>
     </div>
      
        <div className="flex mt-10 absolute justify-between">
          <BlogCard Image={BI1} Tag={"Top Toys"}/>
          <BlogCard Image={BI2} Tag={"Family Fun"}/>
        <BlogCard Image={BI3} Tag={"Learn and Inspire" }/>
        <BlogCard Image={BI4} Tag={"Kids Activities"}/>

        </div>
      </div>

    </div>

  
  );
};

export default BlogDetail;

