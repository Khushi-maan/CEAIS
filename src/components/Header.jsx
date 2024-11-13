import React from "react";
import Navbar from "./common/Navbar";
import Cta from "./common/Cta";

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="container lg:max-w-[1180px] lg:pt-16 lg:pb-[91px] md:py-14 sm:py-12 py-10">
        <h1 className="sm:max-w-[642px] md:text-custom-5xl sm:text-5xl text-[36px] max-w-[400px] text-center mx-auto font-bold font-poppins !leading-120 text-black sm:mb-4 mb-3">
          Empowering Your <span className="text-yellow">Future With AI</span>
        </h1>
        <p className="sm:text-base text-sm text-gray font-open-sans font-normal max-w-[656px] text-center mx-auto md:mb-10 sm:mb-6 mb-4">
          Leverage our revolutionary AI technology to streamline operations,
          increase efficiency, and drive innovation in your business
        </p>
        <div className="flex items-center justify-center sm:gap-6 gap-2.5 flex-wrap">
          <Cta name="Get Started Today" />
          <Cta white name="Watch A Demo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
