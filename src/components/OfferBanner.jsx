import React from 'react';
import cta from "../assets/cta_02.png";

const OfferBanner = () => {
  return (
    <div className="w-full px-4 py-6">
      <div className="bg-[#001430] flex flex-col md:flex-row justify-between items-center rounded-2xl p-6 md:p-10 gap-6">
        
        {/* Text Content */}
        <div className="text-white text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold max-w-xl">
            Get 25% discount in all kinds of superhero themes!
          </h2>
        </div>

        {/* Image */}
        <div>
          <img
            className="w-50 sm:w-62 md:w-92 "
            src={cta}
            alt="offerBanner"
          />
        </div>

      </div>
    </div>
  );
};

export default OfferBanner;
