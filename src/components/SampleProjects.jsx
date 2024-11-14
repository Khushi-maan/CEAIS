import React, { useRef, useEffect } from "react";
import Heading from "./common/Heading";
import { Rightarrow, SliderArrow } from "./common/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { SLIDER_DATA } from "./common/Helper";
import { Link } from "react-router-dom";

const SampleProjects = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;

      // Reassign navigation after initialization
      swiperInstance.params.navigation.prevEl = ".prev";
      swiperInstance.params.navigation.nextEl = ".next";
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <div className="container lg:max-w-[1180px] lg:py-[150px] md:py-14 sm:py-12 py-10">
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="lg:max-w-[348px] w-full">
          <Heading
            name="Real World Success with Our AI"
            className="lg:text-start"
          />
          <p className="font-open-sans font-normal sm:text-base text-sm text-gray sm:mt-4 mt-2.5 lg:text-start text-center">
            Lorem ipsum dolor sit amet consectetur. Consequat hendrerit
            vulputate tellus viverra arcu. Placerat amet sed pulvinar non.
          </p>
          <div className="lg:mt-20 sm:mt-10 mt-8 lg:flex items-center gap-4 hidden">
            <button className="size-12 prev rounded-full group transition-all duration-300 ease-linear border-[1.5px] border-blue bg-transparent hover:bg-blue flex items-center justify-center">
              <SliderArrow />
            </button>
            <button className="size-12 next rounded-full rotate-180 group transition-all duration-300 ease-linear border-[1.5px] border-blue bg-transparent hover:bg-blue flex items-center justify-center">
              <SliderArrow />
            </button>
          </div>
        </div>
        <div className="xl:max-w-[752px] lg:max-w-[650px] w-full">
          <Swiper
            ref={swiperRef}
            loop={true}
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {SLIDER_DATA.map((value, index) => (
              <SwiperSlide key={index} className="group/img">
                <div className="w-full overflow-hidden rounded-[7px]">
                  <img
                    src={value.img}
                    alt="images"
                    className="w-full object-cover object-center h-[196px] rounded-[7px] group-hover/img:scale-110 transition-all duration-300 ease-linear"
                  />
                </div>
                <p className="font-poppins font-semibold sm:text-2xl text-xl !leading-120 text-black sm:mt-[22px] mt-3 line-clamp-2">
                  {value.title}
                </p>
                <p className="font-open-sans font-normal sm:text-base text-sm text-gray sm:mt-3 mt-2 line-clamp-3">
                  {value.description}
                </p>
                <p className="mt-6">
                  <Link
                    to={"#"}
                    className="group inline-flex items-center gap-1.5 text-blue font-poppins font-semibold text-base !laeding-150"
                  >
                    {value.link}
                    <Rightarrow />
                  </Link>
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sm:mt-10 mt-8 flex items-center justify-center gap-4 lg:hidden">
            <button className="sm:size-12 size-10 prev rounded-full group transition-all duration-300 ease-linear border-[1.5px] border-blue bg-transparent hover:bg-blue flex items-center justify-center">
              <SliderArrow />
            </button>
            <button className="sm:size-12 size-10 next rounded-full rotate-180 group transition-all duration-300 ease-linear border-[1.5px] border-blue bg-transparent hover:bg-blue flex items-center justify-center">
              <SliderArrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleProjects;
