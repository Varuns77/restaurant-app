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
import Drinks from "../Menu/Drinks";
import Footer from "../Footer/Footer";
import useFetch from "../../hooks/useFetch";

const Menu = () => {
  const [cuisineType, setCuisineType] = useState("All"); // New state for cuisine type

  const handleCuisineType = (type) => {
    setCuisineType(type);
  };

  return (
    <>
      <section className="py-20 mx-auto p-[4.5rem_2rem] lg:p-[4.5rem_5rem] forum bg-gray-100" id="menu">
        <div className="text-center mb-12">
          <span className="text-4xl font-bold sub-heading">our menu</span>
          <h3 className="text-5xl main-heading mt-2">Experience Our Gourmet Collection</h3>
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
            <h3 className="title p-4 text-4xl font-bold text-white bg-[#655DBB] mb-4 text-center">
              Breakfast
            </h3>
            <div className="flex items-center justify-center font-semibold space-x-6 mb-4">
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
            <h3 className="title p-4 text-4xl font-bold text-white bg-[#655DBB] mb-4 text-center">
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
            <h3 className="title p-4 text-4xl font-bold text-white bg-[#655DBB] mb-4 text-center">
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
        <Drinks drinkType="Beverage"/>
      </section>
      <Footer />
    </>
  );
};

export default Menu;
