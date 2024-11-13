import React from "react";
import Heading from "./common/Heading";
import { Link } from "react-router-dom";
import { MAIN } from "../utils/const";
import { Logo } from "./common/Icon";
import { FOOTER_LINK } from "./common/Helper";
import Cta from "./common/Cta";

const Footer = () => {
  return (
    <div className="bg-alice-blue lg:pt-[70px] md:pt-14 sm:pt-12 pt-10">
      <div className="container lg:max-w-[1180px]">
        <Heading
          name="Ready to Transform Your Business with AI?"
          className="max-w-[682px]"
        />
        <p className="font-open-sans font-normal sm:text-base text-sm text-center text-gray lg:mb-11 md:mb-8 sm:my-4 mt-3 mb-4">
          Get started with a free demo or contact our sales team for a
          personalized solution
        </p>
        <div className="flex items-center justify-center gap-6">
          <Cta name="Book a Demo" />
          <Cta name="Contact Sales" white />
        </div>
        <div className="flex items-end justify-between gap-6 lg:mt-[72px] md:mt-12 mt-10 lg:pb-8 sm:pb-6 pb-4 border-b border-light-gray">
          <Link to={MAIN}>
            <Logo />
          </Link>
          <div className="flex items-center gap-3">
            {FOOTER_LINK.map((value, index) => (
              <Link
                key={index}
                to={"/"}
                className="size-8 border border-black border-solid rounded-full flex items-center justify-center"
              >
                {value.svg}
              </Link>
            ))}
          </div>
        </div>
        <p className="sm:mt-4 font-open-sans font-normal sm:text-base text-sm text-gray text-center lg:pb-6 sm:pb-4 mt-2 pb-2">Copyright © 2024 CEAIS, All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
