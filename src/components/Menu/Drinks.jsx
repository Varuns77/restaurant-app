import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Swiper pagination styles
// import { EffectCoverflow, Pagination } from 'swiper';

import { EffectCoverflow, Pagination } from "swiper/modules";
import useFetch from "../../hooks/useFetch";

const Drinks = ({ drinkType }) => {
  const [foods] = useFetch();

  const Drinks = foods.filter((item) => item.type === drinkType);
  console.log(Drinks);

  return (
    <>
      {/* Initialize Swiper */}
      <div className="w-full h-full">
        <div className="flex flex-col items-center justify-center mt-8">
          <span className="sub-heading font-bold">drinks</span>
          <span className="main-heading font-bold mb-6 text-center">
            Cheers to Choice: Discover Our Drink Menu
          </span>
        </div>
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect="coverflow"
          loop={true}
          spaceBetween={30}
          slidesPerView={1} // Default for all screens
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          grabCursor={true}
          coverflowEffect={{
            rotate: 0,
            slideShadows: false,
          }}
          className="coverflow"
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
          {Drinks.map((drink) => (
            <SwiperSlide>
              <div className="slide-content border-2 border-solid border-gray-400 bg-white max-w-[480px] lg:max-w-[100%] lg:max-h-[100%] md:max-w-[500px] flex gap-3 items-center justify-start mb-12">
                <div className="h-60 w-44 lg:max-h-[250px] lg:max-w-[180px] md:w-[200px] flex-shrink-0">
                  <img src={drink.image} alt="" className="h-full w-full" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-black font-bold pb-1 lg:text-2xl md:text-xl">
                    {drink.title}
                  </h3>
                  <div className="price text-xl mb-1 lg:text-2xl md:text-xl">
                    ${drink.price}
                  </div>
                  <button
                    className="bg-primary text-white px-3 py-2 text-sm focus:outline-none forum font-bold rounded-full transform transition duration-300 hover:scale-105 block"
                    //   onClick={handleRoute}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Drinks;
