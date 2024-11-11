import React from "react";
import { FEATURE } from "./common/Helper";

const Innovation = () => {
  return (
    <div className="container lg:max-w-[1180px] lg:py-[140px] md:py-14 sm:py-12 py-10">
      <div className="flex justify-between items-center lg:flex-row flex-col lg:gap-0 sm:gap-4 gap-3">
        <h2 className="sm:text-5xl text-3xl !leading-120 max-w-[518px] font-semibold font-poppins text-black max-lg:text-center">
          AI-Driven Innovation at Your Fingertips
        </h2>
        <p className="sm:text-base text-sm text-gray font-open-sans font-normal max-w-[348px] max-lg:text-center">
          Lorem ipsum dolor sit amet consectetur. Consequat hendrerit vulputate
          tellus viverra arcu. Placerat amet sed pulvinar non.
        </p>
      </div>
      <div className="flex items-center justify-between gap-16 mt-16">
        {FEATURE.map((value, index) => (
          <div key={index} className="w-full group max-w-[337px]">
            <p className="text-yellow text-custom-3xl !leading-120 border-b border-light-gray pb-5 font-semibold font-poppins">
              Feature {index + 1}
            </p>
            <div className="w-[72px] h-[72px] mt-5 transition-all duration-300 ease-linear rounded-xl group-hover:bg-blue bg-transparent border-blue border-solid border flex items-center justify-center">
              {value.svg}
            </div>
            <p className="mt-[23px] font-poppins font-semibold text-2xl text-black !leading-120">
              {value.title}
            </p>
            <p className="mt-3 text-base font-normal font-open-sans text-gray line-clamp-3">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Innovation;
