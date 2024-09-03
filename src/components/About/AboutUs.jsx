import React, { useEffect, useState } from "react";
import AboutItem from "./AboutItem";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectCoverflow,
  Pagination,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useFetch from "../../hooks/useFetch";

// import './Slider.css';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState([]);

  const [foods] = useFetch();

  //fetching about us data
  useEffect(() => {
    fetch("/aboutus.json")
      .then((res) => res.json())
      .then((data) => setAboutData(data));
  }, []);
  return (
    <>
      <section
        className="flex flex-wrap lg:flex-row items-center gap-8 px-16 py-16"
        id="about"
      >
        <div className="image flex-1 min-w-[16rem]">
          <img
            src="public/assets/Untitled design.png"
            alt="About"
            className="w-full"
          />
        </div>

        <div className="content flex-1 min-w-[16rem]">
          <h3 className="text-4xl text-black font-bold">
            Welcome to our Restaurant
          </h3>
          <p className="text-lg text-gray-700 py-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            excepturi sint aspernatur ab harum iure nisi, quo ad. Cumque et
            repellat qui, tempore quia minima. Minima dolores quidem dolore
            possimus.
          </p>
          <a
            href="#"
            className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Read More
          </a>

          <div className="icons-container flex flex-wrap gap-8 mt-12">
            <div className="icons flex-1 min-w-[12rem] text-center bg-gray-100 p-8 rounded">
              <img
                 src="./assets/AboutUs/recommended-food.png"
                alt="Quality Food"
                className="h-20 mx-auto"
              />
              <h3 className="text-2xl text-gray-700 mt-4 font-normal">
                Quality Food
              </h3>
            </div>

            <div className="icons flex-1 min-w-[12rem] text-center bg-gray-100 p-8 rounded">
              <img
                src="./assets/AboutUs/cocktail.png"
                alt="Food & Drinks"
                className="h-20 mx-auto"
              />
              <h3 className="text-2xl text-gray-700 mt-4 font-normal">
                Food & Drinks
              </h3>
            </div>

            <div className="icons flex-1 min-w-[12rem] text-center bg-gray-100 p-8 rounded">
              <img
                src="./assets/AboutUs/chef.png"
                alt="Expert Chef"
                className="h-20 mx-auto"
              />
              <h3 className="text-2xl text-gray-700 mt-4 font-normal">
                Expert Chef
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="p-4 bg-gray-100 px-16">
        <div className="text-center mb-5">
          <span className="text-[2rem] text-[#cd9452] font-bold">
            Our Popular Dishes
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
