import React, { useState } from "react";
import Heading from "./common/Heading";
import { FAQ_DATA } from "./common/Helper";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="lg:py-[150px] md:py-14 sm:py-12 py-10 container lg:max-w-[1180px]">
      <Heading name="Frequently Asked Questions" />
      <div className="lg:mt-14 sm:mt-10 mt-6">
        <div className="accordion max-w-[866px] w-full mx-auto">
          {FAQ_DATA.map((obj, index) => (
            <div
              key={index}
              className={`accordion-item border-b border-light-gray overflow-hidden lg:py-6 py-4 ${
                index === 5 && "!border-b-transparent"
              }`}
            >
              <input
                id={`accordion-trigger-${index}`}
                className="accordion-trigger-input overflow-hidden absolute whitespace-nowrap size-[1px]"
                type="checkbox"
                checked={activeIndex === index}
                readOnly
              />
              <label
                className="accordion-trigger block relative z-[1] cursor-pointer font-open-sans font-semibold sm:text-xl text-lg !leading-150 text-black pr-8"
                htmlFor={`accordion-trigger-${index}`}
                onClick={() => toggleAccordion(index)}
              >
                {index + 1}. {obj.title}
              </label>
              <section
                className={`accordion-animation-wrapper ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                <div className="accordion-animation">
                  <div className="accordion-transform-wrapper">
                    <div className="accordion-content pt-3 font-poppins font-normal sm:text-base text-base !leading-150 text-black">
                      {obj.description}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
