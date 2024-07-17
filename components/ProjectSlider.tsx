"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { ProImages, ProImages2 } from "@/constants";
import Image from "next/image";

const ProjectSlider = () => {
  return (
    <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {[ProImages, ProImages2].map((imageSet, setIndex) => (
          <SwiperSlide key={setIndex} className="mb-14">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-8 md:px-12 lg:px-16">
              {imageSet.map((image) => (
                <div
                  className="relative group aspect-square w-full"
                  key={image.src}
                >
                  <Image
                    src={image.src}
                    alt="project image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                  <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
                  <div className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-sm sm:text-base md:text-lg">
                    View Project
                    <Image
                      src="/assets/icons/arrow-right.svg"
                      alt="arrow right"
                      width={20}
                      height={20}
                      className="invert brightness-0 ml-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;