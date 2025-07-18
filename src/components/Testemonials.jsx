import React from "react";
import TestimonialSlider from "./TestemonialSlider";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO at Acme Corp",
    feedback: "This service is amazing. Highly recommend to everyone!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    title: "Marketing Head",
    feedback: "Their team is professional and reliable!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Samuel Green",
    title: "Developer",
    feedback: "They really understand client needs. Great job!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Alice Johnson",
    title: "Designer",
    feedback: "Smooth communication and timely delivery.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const TestimonialsPage = () => {
  return (
    <div >
      <h2 className="text-center text-3xl font-bold text-[#001430] mb-8">
        What Our Clients Say
      </h2>
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
};

export default TestimonialsPage;
