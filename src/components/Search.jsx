import React from "react";
import { Searchbar } from "./common/Icon";
import { SEARCH_ITEMS } from "./common/Helper";
import Button from "./common/Button";

const Search = () => {
  return (
    <div className="bg-alice-blue container lg:max-w-[1180px] md:max-w-[994px] lg:py-[72px] md:py-14 sm:py-12 py-10">
      <p className="sm:text-xl text-lg font-open-sans font-semibold text-center text-black !leading-150 lg:mb-8 md:mb-6 mb-4">
        How will regulatory changes affect my business?
      </p>
      <div class="relative w-full flex items-center gap-2 mx-auto border-light-gray border-solid border md:p-3.5 p-2 md:rounded-xl rounded-lg max-w-[522px] group lg:mb-16 md:mb-10 sm:mb-8 mb-6">
        <input
          type="text"
          placeholder="Search here..."
          class="w-full text-sm text-gray !leading-150 focus:outline-none focus:border-blue-500 bg-transparent"
        />
        <span class="flex items-center pl-3 text-gray-500 group-hover:scale-110 transition-all duration-300 ease-linear">
          <Searchbar />
        </span>
      </div>
      <p className="sm:text-xl text-lg font-open-sans font-semibold text-center text-black !leading-150">
        Search In
      </p>
      <div className="flex items-center justify-center lg:gap-x-8 sm:gap-x-6 gap-4 lg:mt-8 md:mt-6 mt-4 flex-wrap ">
        {SEARCH_ITEMS.map((value, index) => (
          <button
            key={index}
            className="sm:py-[13px] sm:px-[23px] py-2.5 px-5 sm:text-base text-sm font-semibold !leading-120 rounded-xl font-poppins border border-light-gray border-solid hover:bg-blue hover:text-white text-gray transition-all ease-linear duration-300"
          >
            {value.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Search;
