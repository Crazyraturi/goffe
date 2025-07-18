import React from "react";
import { Play } from "lucide-react";
import video from "../assets/monkey.jpg";

const VideoThumbnail = () => {
  return (
    <div className="relative mt-20 mb-20 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={video}
        alt="video"
        className="w-full "
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Spinner and play icon */}
        <div className="relative w-24 h-24  md:w-50 md:h-50 flex items-center justify-center z-10">
          {/* Circular Spinner SVG */}
          <svg
            className="absolute animate-[spin-slow_8s_linear_infinite] w-full h-full"
            viewBox="0 0 200 200"
          >
            <defs>
              <path
                id="circlePath"
                d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>
            <text
              fill="white"
              className="uppercase text-[12px] sm:text-[14px] md:text-[18px] font-semibold tracking-wide"
            >
              <textPath href="#circlePath" startOffset="0" textLength="470">
                Watch Video  *  Watch Video * Watch Video *
              </textPath>
            </text>
          </svg>

          {/* Play Button */}
          <Play  fill="#00BBAE"
            className="h-15 w-15 md:h-28 md:w-28 text-[#00BBAE]  bg-white rounded-full p-3 shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoThumbnail;
