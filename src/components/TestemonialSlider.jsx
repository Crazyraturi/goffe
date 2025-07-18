import React from "react";
import Slider from "react-slick";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-4  transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
    onClick={onClick}
  >
    <ArrowRight className="text-[#00BBAE] w-5 h-5" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
    onClick={onClick}
  >
    <ArrowLeft className="text-[#00BBAE] w-5 h-5" />
  </div>
);

// Main Component
const TestimonialSlider = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="px-4 relative max-w-7xl mt-16 mx-auto py-10">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 mx-3  rounded-xl shadow-md flex flex-col items-center  justify-center text-center h-full"
          >
            <img
              src={item.image}
              alt={item.name}
             className="rounded-full h-24 w-24 object-cover shadow-md mb-4 mx-auto"
            />
            <div className="flex gap-1 mb-3 justify-center">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} fill="#f88e0f" className="text-[#f88e0f]" />
              ))}
            </div>
            <p className="text-[#69778A] mb-4 text-sm leading-relaxed">
              {item.feedback}
            </p>
            <div>
              <h2 className="text-xl font-semibold text-[#001430]">{item.name}</h2>
              <h3 className="text-[#00BBAE]">{item.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
