import React from "react";
import Heading from "./common/Heading";
import { Business, Implement, Support } from "./common/Icon";

const HowItWorks = () => {
  return (
    <div className="bg-alice-blue lg:py-[92px] md:py-14 sm:py-12 py-10">
      <div className="container lg:max-w-[1180px]">
        <Heading
          name="How It Works in Three Simple Steps"
          className="max-w-[518px]"
        />
        <div className="mt-[74px] max-w-[936px] w-full mx-auto relative lg:pl-0 md:pl-14 sm:pl-12 pl-6">
          <div className="flex lg:gap-[172px] md:gap-8 gap-6 lg:justify-end items-center lg:flex-row flex-col">
            <Business />
            <div className="lg:max-w-[382px] w-full">
              <p className="font-poppins font-semibold sm:text-custom-3xl text-2xl !leading-120 text-yellow">
                Step 1
              </p>
              <p className="font-poppins font-semibold sm:text-2xl text-xl !leading-150 text-black lg:mt-5 sm:my-3 my-1.5">
                Analyze Your Business
              </p>
              <p className="font-open-sans font-normal sm:text-base text-sm text-gray">
                We conduct a comprehensive analysis to understand your business
                needs and how AI can best serve them
              </p>
            </div>
          </div>
          <div className="flex lg:gap-[172px] md:gap-8 gap-6 items-center lg:mt-[120px] mt-10 lg:flex-row flex-col-reverse">
            <div className="lg:max-w-[382px] w-full">
              <p className="font-poppins font-semibold sm:text-custom-3xl text-2xl !leading-150 text-yellow">
                Step 2
              </p>
              <p className="font-poppins font-semibold sm:text-2xl text-xl !leading-120 text-black lg:mt-5 sm:my-3 my-1.5">
                Implement Custom AI Solutions
              </p>
              <p className="font-open-sans font-normal sm:text-base text-sm text-gray">
                We design and implement custom AI solutions tailored to your
                specific challenges and goals.
              </p>
            </div>
            <Implement />
          </div>
          <div className="flex lg:gap-x-[172px] md:gap-8 gap-6 lg:justify-end items-center lg:mt-[120px] md:mt-10 mt-8 lg:flex-row flex-col">
            <Support />
            <div className="lg:max-w-[382px] w-full">
              <p className="font-poppins font-semibold sm:text-custom-3xl text-2xl !leading-120 text-yellow">
                Step 3
              </p>
              <p className="font-poppins font-semibold sm:text-2xl text-xl !leading-150 text-black lg:mt-5 sm:my-3 my-1.5">
                Ongoing Support and Optimization
              </p>
              <p className="font-open-sans font-normal sm:text-base text-sm text-gray">
                Our team provides continuous monitoring, support, and
                optimization to ensure maximum efficiency.
              </p>
            </div>
          </div>
          <div className="absolute top-0 bottom-0 w-[2px] bg-gray lg:left-1/2 left-0"></div>
          <div className="absolute top-0 bottom-[77%] lg:left-1/2 left-0 -translate-x-[1px]">
            <div className="size-4 rounded-full bg-blue -translate-x-1.5"></div>
            <div className="h-full bg-blue w-[3px] translate-y-[-1px]"></div>
            <div className="size-4 rounded-full bg-blue -translate-x-1.5 -translate-y-[2px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
