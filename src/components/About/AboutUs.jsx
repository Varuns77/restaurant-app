import React, { useEffect, useState } from "react";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectCoverflow,
  Pagination,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useFetch from "../../hooks/useFetch";

// import './Slider.css';

const AboutUs = () => {

  const [foods] = useFetch();

  return (
    <>
      <section
        className="bg-gray-100 animate-fadeIn flex flex-wrap lg:flex-row items-center gap-8 px-16 py-16 forum font-semibold"
        id="about"
      >
        <div className="image flex-1 min-w-[16rem]">
          <img
            src="public/assets/AboutUs/restaurant-private-room-with-blue-chairs-white-walls-fireplace-wide-window.jpg"
            alt="About"
            className="w-full lg:h-[30rem]"
          />
        </div>

        <div className="content flex-1 min-w-[16rem]">
          <h1 className="text-4xl text-black">
            Welcome to{" "}
            <span className="lobster-regular">Seven Spoons Restaurant</span>
          </h1>
          <p className="text-lg text-gray-700 py-4 leading-relaxed">
            Welcome to Seven Spoons Restaurant, where culinary delights from
            around the world come together. Whether you're craving authentic
            Italian, flavorful Indian, classic American, or exotic Greek dishes,
            we've got something for every palate. Discover a world of flavors
            under one roof with our diverse menu featuring seven international
            cuisines, all crafted with passion and the finest ingredients.
            Indulge in a dining experience that will satisfy your every craving!
          </p>
          <button
           
            className="bg-[#655DBB] text-white py-2 px-4 rounded hover:bg-[#8b85cc] transition"
          >
            Explore
          </button>

          <div className="icons-container flex flex-wrap gap-8 mt-12 ">
            <div className="flex-1 min-w-[12rem] text-center bg-white p-7 rounded">
              <img
                src="./assets/AboutUs/recommended-food.png"
                alt="Quality Food"
                className="h-20 mx-auto"
              />
              <h3 className="text-2xl text-gray-700 mt-4 font-semibold">
                Quality Food
              </h3>
            </div>

            <div className="flex-1 min-w-[12rem] text-center bg-white p-7 rounded">
              <img
                src="./assets/AboutUs/cocktail.png"
                alt="Food & Drinks"
                className="h-20 mx-auto"
              />
              <h3 className="text-2xl text-gray-700 mt-4 font-semibold">
                Food & Drinks
              </h3>
            </div>

            <div className="flex-1 min-w-[12rem] text-center bg-white p-7 rounded">
              <img
                src="./assets/AboutUs/chef.png"
                alt="Expert Chef"
                className="h-20 mx-auto"
              />
              <h3 className="text-2xl text-gray-700 mt-4 font-semibold">
                Expert Chef
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="p-4 bg-gray-100 px-16 ">
        <div className="text-center mb-5">
          <span className="sub-heading font-bold forum">popular dishes</span>
          <span className="block main-heading font-bold lobster-regular">
            Discover Our Delicious Selections
          </span>
          {/* <h3 className="text-4xl text-black"></h3> */}
        </div>
        <Swiper
          keyboard={{ enabled: true }}
          modules={[EffectCoverflow, Pagination, Keyboard, Autoplay]}
          effect="coverflow"
          loop={true}
          spaceBetween={30}
          slidesPerView={1} // Default for all screens
          autoplay={{
            delay: 3000, // Time in milliseconds before transitioning to the next slide
            disableOnInteraction: false, // Continue autoplay after user interactions like swiping
          }}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          grabCursor={true}
          coverflowEffect={{
            rotate: 0,
            slideShadows: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2, // For screens >= 768px
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3, // For screens >= 1024px
              spaceBetween: 40,
            },
          }}
        >
          {foods.slice(0, 6).map((item, index) => (
            <SwiperSlide key={index}>
              {" "}
              {/* Unique key prop */}
              <div className="slide-content flex items-center justify-center h-64 mb-12 mt-2 bg-white hover:shadow-md hover:scale-105">
                <div>
                  <img
                    className="w-56 lg:w-64 md:w-60"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                {/* <div>
                <p>title</p>
                <p>price</p>
              </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default AboutUs;
