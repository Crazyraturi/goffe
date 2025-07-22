import Image1 from "../assets/blogimg/blog_05.jpg";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import PopularNews from "../components/PopularNews";
import Archives from "../components/Archives";
import OfferSection from "../components/OfferSection";
import PopularTags from "../components/PopularTags";
import ReviewForm from "../components/ReviewForm";
import BlogContent from "../components/BlogContent";
import TagShareSection from "../components/TagShareSection";
import AuthorInfo from "../components/AuthorInfo";
import NextPostCard from "../components/NextPostCard";
import BlogHeader from "../components/BlogHeader";
import RelatedPost from "../components/RelatedPost";

const BlogDetail = () => {
  return (
    <div className="bg-[#F9F9F9] max-w-[1400px]  m-auto ">
      <div className="  flex flex-col  md:flex-col lg:flex-row justify-between ">
        {/* left secton */}
        <div className="max-w-[1008px] m-autobg-[#F9F9F9] mt-10  ">
          <div className="border border-[#E8E6E6] rounded-lg ">
            {/* Blog-Image */}
            <div className="max-w-[1008px]">
              <div className=" flex  mx-[32px] items-center justify-center">
                {" "}
                <img className="rounded-lg  mt-10 " src={Image1} alt="image" />
              </div>
            </div>
            <BlogHeader />
            <BlogContent />
            <TagShareSection />
          </div>
          <div>
            <AuthorInfo />
            <NextPostCard />
            <div className="flex items-center w-full  gap-5  mt-10 bg-white  border  border-[#E8E6E6]  rounded-lg ">
              <ReviewForm />
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="w-full lg:w-[30%] px-4 py-10">
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

    <div className="relative max-w-[1400px] mx-auto mt-20 bg-[#F9F9F9] px-4 sm:px-6 md:px-8 py-10 rounded-xl shadow-sm">
  <RelatedPost />
</div>

    </div>
  );
};

export default BlogDetail;
