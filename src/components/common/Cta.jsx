import React from "react";

const Cta = (props) => {
  return (
    <button
      className={`sm:py-[13px] sm:px-[23px] py-2.5 px-5 whitespace-nowrap sm:text-base text-sm font-semibold !leading-120 rounded-xl font-poppins border border-blue border-solid ${
        props.white ? "bg-transparent text-blue" : "bg-blue text-white"
      } ${props.className}`}
    >
      {props.name}
    </button>
  );
};

export default Cta;
