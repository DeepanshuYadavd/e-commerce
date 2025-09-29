import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import lapi from "../assets/lapi.jpg";
import toy from "../assets/toy1.jpg";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperDetails = [
    {
      title: "Toys",
      image: lapi,
      description:
        "Fun and creative toys for kids of all ages to enjoy and learn while playing.",
    },
    {
      title: "Laptops",
      image: toy,
      description:
        "High-performance laptops for work, study, and entertainment.",
    },
    {
      title: "Books",
      image: toy,
      description:
        "A wide range of books across genres to inspire learning and imagination.",
    },
    {
      title: "Tablets",
      image: toy,
      description:
        "Portable tablets designed for reading, gaming, and productivity on the go.",
    },
    {
      title: "Watches",
      image: lapi,
      description:
        "Stylish and modern watches to complement your lifestyle and fashion.",
    },
    {
      title: "Headphones",
      image: toy,
      description:
        "Premium quality headphones offering immersive sound and comfort.",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-around p-3 min-h-[80dvh]">
        <div className="">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          >
            {swiperDetails.map((item, index) => {
              return (
                <>
                  <SwiperSlide>
                    <img
                      className="h-[100%]"
                      src={item.image}
                      alt={item.title}
                    />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
        <div className=" text-center  shadow-xl shadow-purple-500 bg-gradient-to-r from-gray-500 to-blue-400 rounded-lg p-4 opacity-80 min-h-[20rem] min-w-[16rem]">
          <h1 className="text-[5rem] text-orange-700">
            {swiperDetails[currentIndex].title}
          </h1>
          <div className="flex items-center justify-center flex-col">
            <h3 className="text-[1.2rem]">
              {swiperDetails[currentIndex].description}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
