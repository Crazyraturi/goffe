import React from "react";
import brand1 from "../assets/brand-1.svg";
import brand2 from "../assets/brand-2.svg";
import brand3 from "../assets/brand-3.svg";
import brand4 from "../assets/brand-4.svg";
import brand5 from "../assets/brand-5.svg";
import brand6 from "../assets/brand-6.svg";

const brandData = [
  { img: brand1, name: "Party" },
  { img: brand2, name: "Crafty" },
  { img: brand3, name: "ToyzHub" },
  { img: brand4, name: "PlayNest" },
  { img: brand5, name: "JoyLab" },
  { img: brand6, name: "HappyHands" },
];

const Brands = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#001430]">Popular Brands</h2>
        <p className="text-[#69778A] mt-2 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Fermentum facilisi id at
          adipiscing fermentum amet bibendum quis vitae blandit.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
        {brandData.map((brand, index) => (
          <div
            key={index}
            className="group bg-white p-6 rounded-2xl shadow-xl w-[140px] flex flex-col items-center transition-all duration-300 hover:shadow-2xl"
          >
            <div className="relative w-[100px] h-[100px] rounded-full shadow-md bg-white overflow-hidden mb-4">
              <img
                src={brand.img}
                alt={`brand-${index}`}
                className="absolute inset-0 m-auto h-[60px] w-[60px] object-contain transition-all duration-500 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0"
              />

              <img
                src={brand.img}
                alt={`brand-hover-${index}`}
                className="absolute inset-0 m-auto h-[90px] w-[90px] object-contain translate-y-4 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
              />
            </div>

            <h3 className="text-lg text-[#001430] font-medium text-center">
              {brand.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
