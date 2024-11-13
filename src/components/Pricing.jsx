import React from "react";
import Heading from "./common/Heading";
import { PRICING_DATA } from "./common/Helper";
import { RightTick } from "./common/Icon";
import Cta from "./common/Cta";

const Pricing = () => {
  return (
    <div className="bg-alice-blue lg:py-[100px] md:py-14 sm:py-12 py-10">
      <div className="container max-w-[1180px]">
        <Heading name="Flexible Pricing for Every Business" />
        <p className="font-open-sans font-normal text-base text-gray text-center max-w-[678px] mx-auto sm:mt-4 mt-3">
          Lorem ipsum dolor sit amet consectetur. Consequat hendrerit vulputate
          tellus viverra arcu. Placerat amet sed pulvinar non.
        </p>
        <div className="flex gap-6 items-center justify-center lg:mt-20 md:mt-12 sm:mt-10 mt-8 max-lg:flex-wrap">
          {PRICING_DATA.map((value, index) => (
            <div
              className={`border-[1.5px] border-light-gray sm:rounded-2xl rounded-xl sm:p-6 p-4 max-lg:max-w-[364px] w-full relative  ${
                index === 1 && "bg-white !border-blue"
              }`}
            >
              <p className="font-poppins font-semibold sm:text-base text-sm !leading-150 text-clay">
                Tier {index + 1}
              </p>
              <p className="font-poppins font-semibold md:text-5xl sm:text-4xl text-3xl !leading-150 text-clay md:my-4 sm:my-2 my-1.5">
                {value.price}
              </p>
              <p className="font-open-sans font-normal text-sm !leading-150 text-gray sm:mb-6 mb-4">
                {value.title}
              </p>
              <Cta
                name={value.button}
                white
                className={`!w-full ${index === 1 && "!bg-blue !text-white"}`}
              />
              <div className="sm:my-6 my-4 border-[1.5px] border-light-gray"></div>
              {value.feature.map((obj, index) => (
                <div key={index}
                  className={`flex items-center gap-2 ${
                    obj === 1 ? "" : "sm:mt-3 mt-1.5"
                  }`}
                >
                  <RightTick />
                  <p className="font-open-sans font-normal sm:text-base text-sm text-gray">
                    {obj.name}
                  </p>
                </div>
              ))}
              {index === 1 && (
                <button className="absolute -top-2.5 right-6 py-1.5 px-3 rounded-full text-base text-white font-semibold !leading-150 font-poppins bg-blue">
                  Popular
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
