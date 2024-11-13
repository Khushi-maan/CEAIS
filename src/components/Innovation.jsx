import React from "react";
import { FEATURE } from "./common/Helper";
import { Link } from "react-router-dom";
import { MAIN } from "../utils/const";
import { Rightarrow } from "./common/Icon";
import Heading from "./common/Heading";

const Innovation = () => {
  return (
    <div className="container lg:max-w-[1180px] lg:py-[140px] md:py-14 sm:py-12 py-10">
      <div className="flex justify-between items-center lg:flex-row flex-col lg:gap-0 sm:gap-4 gap-3">
        <Heading
          name="AI-Driven Innovation at Your Fingertips"
          className="lg:text-start lg:mx-0 max-w-[518px]"
        />
        <p className="sm:text-base text-sm text-gray font-open-sans font-normal max-w-[348px] max-lg:text-center">
          Lorem ipsum dolor sit amet consectetur. Consequat hendrerit vulputate
          tellus viverra arcu. Placerat amet sed pulvinar non.
        </p>
      </div>
      <div className="flex items-center lg:justify-between justify-center xl:gap-16 gap-10 max-lg:flex-wrap lg:mt-16 md:mt-8 mt-6">
        {FEATURE.map((value, index) => (
          <div
            key={index}
            className="w-full group max-w-[337px] flex flex-col max-lg:items-center"
          >
            <p className="text-yellow sm:text-custom-3xl text-3xl max-lg:text-center !leading-120 border-b border-light-gray md:pb-5 pb-3 font-semibold font-poppins">
              Feature {index + 1}
            </p>
            <div className="sm:w-[72px] sm:h-[72px] size-16 md:mt-5 mt-4 transition-all duration-300 ease-linear rounded-xl group-hover:bg-blue bg-transparent border-blue border-solid border flex items-center justify-center max-lg:mx-auto">
              {value.svg}
            </div>
            <p className="sm:mt-[23px] md:mt-5 mt-4 font-poppins font-semibold sm:text-2xl text-xl text-black !leading-120 max-lg:text-center">
              {value.title}
            </p>
            <p className="sm:mt-3 mt-2 sm:text-base text-sm font-normal font-open-sans text-gray line-clamp-3 max-lg:text-center">
              {value.description}
            </p>
            <Link
              to={MAIN}
              className="text-blue sm:text-base text-sm !leading-150 font-poppins inline-flex items-center gap-1.5 sm:mt-6 mt-3 font-semibold max-lg:mx-auto max-lg:justify-center"
            >
              Learn More <Rightarrow />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Innovation;
