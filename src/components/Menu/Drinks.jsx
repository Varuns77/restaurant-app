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
              <div className="border-2 border-solid border-gray-400 bg-white max-w-[480px] lg:max-w-[100%] lg:max-h-[100%] md:max-w-[500px] flex gap-3 items-center justify-start mb-12">
                <div className="h-60 w-44 lg:max-h-[250px] lg:max-w-[180px] md:w-[200px] flex-shrink-0">
                  <img src={drink.image} alt="" className="h-full w-full" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-black pb-1 lg:text-2xl md:text-xl">
                    {drink.title}
                  </h3>
                  <div className="price text-xl text-[#cd9452] mb-1 lg:text-2xl md:text-xl">
                    ${drink.price}
                  </div>
                  <button
                    className="bg-primary text-white px-2 py-2 text-sm focus:outline-none poppins rounded-full transform transition duration-300 hover:scale-105 block"
                    //   onClick={handleRoute}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Breakfast Slide */}
          {/* <SwiperSlide>
          <div className="text-center p-16 rounded-lg transform scale-90 opacity-50 mb-16 cursor-pointer swiper-slide-active:hover:scale-100 swiper-slide-active:hover:opacity-100 swiper-slide-active:hover:bg-white swiper-slide-active:hover:shadow-md swiper-slide-active:hover:border">
            <img
              src="/assets/Beverages/Coke.png"
              alt=""
              className="h-64 mb-4 mx-auto"
            />
            <h3 className="text-2xl py-4 text-gray-800">delicious food</h3>
            <div className="text-2xl text-orange-600">$59.99</div>
          </div>
        </SwiperSlide> */}

          {/* Lunch Slide */}
          {/* <SwiperSlide className="swiper-slide slide"> */}
          {/* <div class="swiper-slide slide" data-name="food-2">
                <img src="/assets/Beverages/OrangeJuice.png" alt=""/>
                <h3>delicious food</h3>
                <div class="price">$59.99</div>
            </div> */}

          {/* <div className="text-center p-16 rounded-lg transform scale-90 opacity-50 mb-16 cursor-pointer swiper-slide-active:hover:scale-100 swiper-slide-active:hover:opacity-100 swiper-slide-active:hover:bg-white swiper-slide-active:hover:shadow-md swiper-slide-active:hover:border">
            <img
              src="/assets/Beverages/OrangeJuice.png"
              alt=""
              className="h-64 mb-4 mx-auto"
            />
            <h3 className="text-2xl py-4 text-gray-800">delicious food</h3>
            <div className="text-2xl text-orange-600">$59.99</div>
          </div>
        </SwiperSlide> */}

          {/* Dinner Slide */}
          {/* <SwiperSlide className="swiper-slide slide">
          <div className="text-center p-16 rounded-lg transform scale-90 opacity-50 mb-16 cursor-pointer swiper-slide-active:hover:scale-100 swiper-slide-active:hover:opacity-100 swiper-slide-active:hover:bg-white swiper-slide-active:hover:shadow-md swiper-slide-active:hover:border">
            <img
              src="/assets/Beverages/OrangeJuice.png"
              alt=""
              className="h-64 mb-4 mx-auto"
            />          
            <h3>delicious food</h3>
            <div class="price">$59.99</div>
          </div>
        </SwiperSlide> */}

          {/* <SwiperSlide className="mb-12">
          <div className="border-2 border-solid border-gray-400 w-full">
            <div className="h-72 w-64">
              <img
                src="/assets/Beverages/OrangeJuice.png"
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 border-solid border-gray-400 w-full">
            <div className="h-72 w-64">
              <img
                src="/assets/Beverages/LemonSoda.png"
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 border-solid border-gray-400 bg-white w-full flex gap-3 items-center justify-start">
            <div className="h-72 w-64">
              <img
                src="/assets/Beverages/Coke.png"
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className="">
              <h3 className="text-2xl text-black pb-1">Juice</h3>
              <div className="price text-2xl text-[#cd9452] mb-1">$8.99</div>
              <button
                className="bg-primary text-white px-2 py-1 text-sm focus:outline-none poppins rounded-full transform transition duration-300 hover:scale-105 block"
                //   onClick={handleRoute}
              >
                Order Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 border-solid border-gray-400 bg-white w-full">
            <div className="h-72 w-64 ">
              <img
                src="/assets/Beverages/StrawberryJuice.png"
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>
        </SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
};

export default Drinks;
