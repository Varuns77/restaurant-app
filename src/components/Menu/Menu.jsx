import React, { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { getAuth } from "firebase/auth";
import Back from "../../routes/Back";
// import { Food } from "../assets/MediumData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Swiper pagination styles

import { Pagination } from "swiper/modules";
import MenuItem from "../Menu/menuItem";
import useFetch from "../../hooks/useFetch";

const Menu = () => {
  const [cuisineType, setCuisineType] = useState("All"); // New state for cuisine type

  const handleCuisineType = (type) => {
    setCuisineType(type);
  };

  return (
    <>
      {/* <main className=" h-screen ">
        <div className="max-w-screen-xl pt-16 mx-auto px-6"> */}
      {/* <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper> */}
      {/* <Swiper
        spaceBetween={30}
        grabCursor:true
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
      {/* </div> */}
      {/* </main> */}
      <section className="py-20 mx-auto p-[4.5rem_2rem] lg:p-[4.5rem_5rem] bg-gray-100" >
        <div className="text-center mb-12">
          <span className="text-2xl text-[#cd9452]">our menu</span>
          <h3 className="text-4xl text-black">our popular dishes</h3>
        </div>

        {/* Initialize Swiper */}
        <Swiper
          modules={[Pagination]}
          grabCursor={true}
          loop={true}
          autoHeight={true}
          centeredSlides={true}
          spaceBetween={20}
          pagination={{ clickable: true }}
          className="menu-slider"
        >
          {/* Breakfast Slide */}
          <SwiperSlide>
            <h3 className="title p-4 text-3xl text-white bg-[#cd9452] mb-4 text-center">
              Breakfast
            </h3>
            <div className="flex items-center justify-center space-x-6 mb-4">
              <MenuCategory
                selectedCuisine={cuisineType}
                onCuisineSelect={handleCuisineType}
              />
            </div>
            <div className="box-container flex flex-wrap gap-8 pb-16">
              <MenuItem mealType="Breakfast" cuisineType={cuisineType} />
            </div>
          </SwiperSlide>

          {/* Lunch Slide */}
          <SwiperSlide className="swiper-slide slide">
            <h3 className="title p-4 text-3xl text-white bg-[#cd9452] mb-4 text-center">
              Lunch
            </h3>
            <div className="flex items-center justify-center space-x-6 mb-4">
              <MenuCategory
                selectedCuisine={cuisineType}
                onCuisineSelect={handleCuisineType}
              />
            </div>
            <div className="box-container flex flex-wrap gap-8 pb-16">
              <MenuItem mealType="Lunch" cuisineType={cuisineType} />
            </div>
          </SwiperSlide>

          {/* Dinner Slide */}
          <SwiperSlide className="swiper-slide slide">
            <h3 className="title p-4 text-3xl text-white bg-[#cd9452] mb-4 text-center">
              Dinner
            </h3>
            <div className="flex items-center justify-center space-x-6 mb-4">
              <MenuCategory
                selectedCuisine={cuisineType}
                onCuisineSelect={handleCuisineType}
              />
            </div>
            <div className="box-container flex flex-wrap gap-8 pb-16">
              <MenuItem mealType="Dinner" cuisineType={cuisineType} />
            </div>
          </SwiperSlide>
        </Swiper>
        <Drinks drinkType="Beverage" />

        {/* Dinner Slide */}
        {/* <SwiperSlide className="swiper-slide slide">
          <h3 className="title p-4 text-3xl text-white bg-[#cd9452] mb-12 text-center">dinner</h3>
          <div className="box-container flex flex-wrap gap-8 pb-16">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="box flex items-center justify-between bg-white p-8 shadow-lg border border-gray-300 flex-1 min-w-[41rem] transition-transform duration-300 hover:scale-95 cursor-pointer">
                <div className="info">
                  <h3 className="text-2xl text-black pb-2">dinner</h3>
                  <p className="text-base text-gray-600 leading-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus!
                  </p>
                </div>
                <div className="price text-2xl text-[#cd9452]">$59.99</div>
              </div>
            ))}
          </div>
        </SwiperSlide> */}

        {/* Drinks Slide */}
        {/* <SwiperSlide className="swiper-slide slide">
          <h3 className="title p-4 text-3xl text-white bg-[#cd9452] mb-12 text-center">drinks</h3>
          <div className="box-container flex flex-wrap gap-8 pb-16">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="box flex items-center justify-between bg-white p-8 shadow-lg border border-gray-300 flex-1 min-w-[41rem] transition-transform duration-300 hover:scale-95 cursor-pointer">
                <div className="info">
                  <h3 className="text-2xl text-black pb-2">drinks</h3>
                  <p className="text-base text-gray-600 leading-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus!
                  </p>
                </div>
                <div className="price text-2xl text-[#cd9452]">$59.99</div>
              </div>
            ))}
          </div>
        </SwiperSlide> */}

        {/* Dessert Slide */}
        {/* <SwiperSlide className="swiper-slide slide">
          <h3 className="title p-4 text-3xl text-white bg-[#cd9452] mb-12 text-center">dessert</h3>
          <div className="box-container flex flex-wrap gap-8 pb-16">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="box flex items-center justify-between bg-white p-8 shadow-lg border border-gray-300 flex-1 min-w-[41rem] transition-transform duration-300 hover:scale-95 cursor-pointer">
                <div className="info">
                  <h3 className="text-2xl text-black pb-2">dessert</h3>
                  <p className="text-base text-gray-600 leading-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus!
                  </p>
                </div>
                <div className="price text-2xl text-[#cd9452]">$59.99</div>
              </div>
            ))}
          </div>
        </SwiperSlide> */}
      </section>
    </>
  );
};

export default Menu;
