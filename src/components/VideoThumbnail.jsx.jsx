import React from "react";
import { PlayCircle } from "lucide-react";
import video from "../assets/monkey.jpg";

const VideoThumbnail = () => {
  return (
    <div className="relative w-full mt-20 flex items-center justify-center overflow-hidden rounded-xl">
      {/* Background Image */}
      <img
        src={video}
        alt="video"
        className="w-full max-h-[800px] object-cover rounded-xl"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Spinner and play icon */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 flex items-center justify-center z-10">
          {/* Circular Spinner SVG */}
          <svg
            className="absolute animate-spin-slow w-full h-full"
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
          <PlayCircle  className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-[#00BBAE] bg-white rounded-full p-2 shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default VideoThumbnail;
