import React from "react";

const Heading = (props) => {
  return (
    <h2
      className={`sm:text-5xl text-3xl !leading-120 max-w-[518px] font-semibold font-poppins text-black text-center mx-auto ${props.className}`}
    >
      {props.name}
    </h2>
  );
};

export default Heading;
