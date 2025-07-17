import React from "react";
import { Star } from "lucide-react";
import testimonial_1 from "../assets/testimonial_1.jpg";
import testimonial_2 from "../assets/testimonial_2.jpg";
import testimonial_3 from "../assets/testimonial_3.jpg";

// Testimonial Data
const testimonials = [
  {
    name: "Mr. Karim Jackerty",
    title: "CEO @ Codefill",
    image: testimonial_1,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic neque doloremque in laudantium ratione, aliquam consequatur reprehenderit fugit veritatis?",
  },
  {
    name: "Ms. Alina Robins",
    title: "CTO @ DevWorks",
    image: testimonial_2,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur reprehenderit fugit veritatis? Laboriosam hic neque doloremque.",
  },
  {
    name: "John Doe",
    title: "Founder @ PixelSmiths",
    image: testimonial_3,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic neque doloremque in laudantium ratione, aliquam consequatur reprehenderit fugit veritatis?",
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">
      {/* Section Header */}
      <div className="text-center mb-10 px-2">
        <h1 className="text-2xl md:text-3xl font-bold text-[#001430]">
          What Customers Say About Us
        </h1>
        <p className="text-[#69778A] mt-2 max-w-xl mx-auto text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur. Id fames vulputate eget dolor.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
          >
            {/* User Image */}
            <img
              src={item.image}
              alt={item.name}
              className="rounded-full h-24 w-24 object-cover shadow-md mb-4"
            />

            {/* Stars */}
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} fill="#f88e0f" className="text-[#f88e0f]" />
              ))}
            </div>

            {/* Feedback */}
            <p className="text-[#69778A] mb-4 text-sm leading-relaxed">
              {item.feedback}
            </p>

            {/* Name & Title */}
            <div>
              <h2 className="text-base font-semibold text-[#001430]">{item.name}</h2>
              <h3 className="text text-[#00BBAE]">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
