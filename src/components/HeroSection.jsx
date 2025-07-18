import React from "react";
import childPlay from "../assets/about_01.jpg";
import { Shield, Blocks } from "lucide-react";
import sun from "../assets/sun.svg";
import parashuit from "../assets/parasuit.svg";
import rainbow from "../assets/rainbow.svg";
import cloud from "../assets/cloud-2.svg";

const HeroSection = () => {
  return (
    <div className="flex flex-col  md:flex-row gap-10  items-center px-4 md:px-40  py-10 ">
      <div className="left-div md:block  margin-auto relative flex justify-center md:w-1/2">
        <img
          className="rounded-full aspect-square object-cover w-full max-w-[350px] md:max-w-[83%]  shadow-lg"
          src={childPlay}
          alt="children playing img"
        />

        <img
          src={sun}
          alt="sun"
          className="absolute  sm:block  hidden w-20 h-20 top-[+10px] left-[+20px] a animate-[spin-slow_8s_linear_infinite] "
        />
        <img
          src={parashuit}
          alt="parachute"
          className="absolute hidden  sm:block  bottom-[20px] left-10 animate-[updown_5s_ease-in-out_infinite]"
        />
        <img
          src={rainbow}
          alt="rainbow"
          className="absolute   sm:block  hidden top-[10%]  right-[100px] animate-[updown_5s_ease-in-out_infinite]"
        />
        <img
          src={cloud}
          alt="cloud"
          className="absolute   sm:block   hidden bottom-[20px] right-40  animate-[move-horizontal_4s_ease-in-out_infinite]"
        />
      </div>

      <div className="right-div md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
        <h3 className="uppercase font-bold text-[#00BBAE] tracking-wide">
          about us
        </h3>
        <h1 className="text-3xl md:text-[36px] mt-4 text-[#001430] font-semibold">
          Unleash endless adventures - your toy kingdom awaits!
        </h1>
        <p className="mt-4 text-base text-[#69778A] px-2 md:px-0">
          When an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap types remaining essentially unchanged. It was
          popularised.
        </p>

        <div className="bottom-right mt-10 flex flex-col md:flex-row gap-6 items-center md:items-start justify-center md:justify-start">
          {/* Card 1 */}
          <div className="flex group w-full max-w-xs transition-transform transform hover:-translate-y-2 duration-300 flex-col p-5 rounded-lg items-center bg-white text-center ">
            <div className="relative h-20 w-20 rounded-full bg-white p-3 shadow-[0_0_20px_rgba(34,197,94,0.4)] mb-4 overflow-hidden flex items-center justify-center group">
              <Blocks className="absolute inset-0 m-auto h-12 w-12 text-green-500 transition-all duration-500 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0" />

              <Blocks className="absolute inset-0 m-auto h-12 w-12 text-green-500 translate-y-4 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100" />
            </div>
            <h2 className="text-xl font-semibold">Variety of Toys</h2>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet contur. egestas pretium massa.
            </p>
          </div>

          <div className="flex group w-full max-w-xs transition-transform transform hover:-translate-y-2 duration-300 flex-col p-5 rounded-lg items-center bg-white text-center ">
            <div className="relative h-20 w-20 rounded-full bg-white p-3 shadow-[0_0_20px_rgba(255,140,0,0.4)] mb-4 overflow-hidden flex items-center justify-center group">
              <Shield className="absolute inset-0 m-auto h-12 w-12 text-orange-500 transition-all duration-500 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0" />

              <Shield className="absolute inset-0 m-auto h-12 w-12 text-orange-500 translate-y-4 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100" />
            </div>
            <h2 className="text-xl font-semibold">Safety Standards</h2>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet contur. egestas pretium massa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
