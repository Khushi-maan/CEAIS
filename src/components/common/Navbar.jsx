import React, { useState } from "react";
import { Logo } from "./Icon";
import { Link } from "react-router-dom";
import Button from "./Button";
import Hamburger from "hamburger-react";
import { ABOUT, FAQ, HOME, HOWITWORKS, MAIN } from "../../utils/const";
import { NAV_BAR } from "./Helper";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  if (isOpen === true) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  return (
    <div className="border border-blue border-opacity-20 lg:py-7 sm:py-5 py-3.5">
      <div className="container lg:max-w-[1180px]">
        <div className="flex justify-between items-center">
          <Link to={MAIN}>
            <Logo />
          </Link>
          <ul
            className={`flex items-center gap-x-9 max-lg:fixed max-lg:top-0 max-lg:bg-white max-lg:flex-col max-lg:justify-center max-lg:min-h-screen max-lg:z-10 max-lg:w-full max-lg:gap-5 transition-all duration-300 ease-linear ${
              isOpen ? "max-lg:left-0" : "max-lg:left-[-100%]"
            }`}
          >
            {NAV_BAR.map((value, index) => (
              <li key={index} onClick={() => setOpen(!isOpen)}>
                <Link
                  to={value.link}
                  className="text-sm sm:text-base font-normal font-open-sans hover:text-black text-gray transition-all ease-linear duration-300 capitalize"
                >
                  {value.title}
                </Link>
              </li>
            ))}
            <li className="hidden max-lg:block transition-all duration-300 ease-linear">
              <Button name="Contact Us" />
            </li>
          </ul>
          <div className="max-lg:hidden">
            <Button name="Contact Us" />
          </div>

          <div
            onClick={() => setOpen(!isOpen)}
            className="lg:hidden w-[28px] h-[20px] relative z-[55] flex gap-1.5 flex-col"
          >
            <span
              className={`${
                isOpen ? " rotate-[50deg] translate-y-[7px]" : ""
              } bg-black h-[2.5px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
            ></span>
            <span
              className={`${
                isOpen ? "hidden" : ""
              } bg-black h-[2.5px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
            ></span>
            <span
              className={`${
                isOpen ? " rotate-[-50deg] translate-y-[-50%]" : ""
              } bg-black h-[2.5px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
