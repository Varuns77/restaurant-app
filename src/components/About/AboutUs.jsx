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
                src="images/about-icon-1.png"
                alt="Quality Food"
                className="h-20 mx-auto"
              />
              <h3 className="text-2xl text-gray-700 mt-4 font-normal">
                Quality Food
              </h3>
            </div>

            <div className="icons flex-1 min-w-[12rem] text-center bg-gray-100 p-8 rounded">
              <img
                src="images/about-icon-2.png"
                alt="Food & Drinks"
                className="h-20 mx-auto"
              />
              <h3 className="text-2xl text-gray-700 mt-4 font-normal">
                Food & Drinks
              </h3>
            </div>

            <div className="icons flex-1 min-w-[12rem] text-center bg-gray-100 p-8 rounded">
              <img
                src="images/about-icon-3.png"
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
          <span className="text-[2rem] text-[#cd9452] font-bold">Our Popular Dishes</span>
          {/* <h3 className="text-4xl text-black"></h3> */}
        </div>
        <Swiper
          // slidesPerView={1}
          // // spaceBetween={30}
          keyboard={{ enabled: true }}
          // pagination={{ clickable: true }}
          // navigation
          // modules={[Navigation, Pagination, Keyboard]} // Correct module usage
          // className="mySwiper"

          //   slidesPerView={3}
          //   keyboard={{ enabled: true }}
          // spaceBetween={50}
          // pagination={{
          //   clickable: true,
          // }}

          // modules={[Pagination, Keyboard]}
          // className="mySwiper"

          modules={[EffectCoverflow, Pagination, Keyboard]}
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
          {foods.slice(0, 6).map((item, index) => (
            <SwiperSlide key={index}>
              {" "}
              {/* Unique key prop */}
              <div className="flex items-center justify-center h-64 mb-10 bg-white hover:shadow-md hover:scale-105">
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

      <section
        className="section-testimonials bg-gray-100 grid grid-cols-1 lg:grid-cols-[45fr_55fr] items-center"
        id="section-testimonials"
      >
        <div className="gallery grid grid-cols-3 gap-4">
          <figure className="gallery-item">
            <img
              src="./assets/Gallery/gallery-1.jpg"
              alt="Gallery Image 1"
              className="w-full"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/Gallery/gallery-2.jpg"
              alt="Gallery Image 2"
              className="w-full"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/Gallery/gallery-3.jpg"
              alt="Gallery Image 3"
              className="w-full"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/Gallery/gallery-4.jpg"
              alt="Gallery Image 4"
              className="w-full"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/Gallery/gallery-5.jpg"
              alt="Gallery Image 5"
              className="w-full"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/Gallery/gallery-6.jpg"
              alt="Gallery Image 6"
              className="w-full"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/Gallery/gallery-7.jpg"
              alt="Gallery Image 7"
              className="w-full"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/Gallery/gallery-8.jpg"
              alt="Gallery Image 8"
              className="w-full"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/Gallery/gallery-9.jpg"
              alt="Gallery Image 9"
              className="w-full"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/Gallery/gallery-10.jpg"
              alt="Gallery Image 10"
              className="w-full"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/Gallery/gallery-11.jpg"
              alt="Gallery Image 11"
              className="w-full"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="./assets/Gallery/gallery-12.jpg"
              alt="Gallery Image 12"
              className="w-full"
            />
          </figure>
        </div>

        <div className="testimonials-container px-[3rem] py-[4rem] lg:p-[9.6rem_3.2rem] md:p-[4.5rem_3rem] sm:p-[4.5rem_3rem]">
          <span className="subheading text-xl font-bold uppercase text-center block mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl font-bold text-center mb-8">
            Once you try it, you can't go back
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <figure className="testimonial text-center">
              <img
                src="./Final Images/dave.jpg"
                alt="Dave Bryson"
                className="w-16 h-16 rounded-full mb-3 mx-auto"
              />
              <blockquote className="testimonial-text text-lg leading-7 mb-4">
                Inexpensive, healthy and great-tasting meals, without even
                having to order manually! It feels truly magical.
              </blockquote>
              <p className="testimonial-name text-base text-gray-500">
                &mdash; Dave Bryson
              </p>
            </figure>
            <figure className="testimonial text-center">
              <img
                src="./Final Images/steve.jpg"
                alt="Hannah"
                className="w-16 h-16 rounded-full mb-3 mx-auto"
              />
              <blockquote className="testimonial-text text-lg leading-7 mb-4">
                The AI algorithm is crazy good, it chooses the right meals for
                me every time. It's amazing not to worry about food anymore!
              </blockquote>
              <p className="testimonial-name text-base text-gray-500">
                &mdash; Hannah
              </p>
            </figure>
            <figure className="testimonial text-center">
              <img
                src="./Final Images/hannah.jpg"
                alt="Dave Bryson"
                className="w-16 h-16 rounded-full mb-3 mx-auto"
              />
              <blockquote className="testimonial-text text-lg leading-7 mb-4">
                Omnifood is a life saver! I just started a company, so there's
                no time for cooking. I couldn't live without my daily meals now!
              </blockquote>
              <p className="testimonial-name text-base text-gray-500">
                &mdash; Dave Bryson
              </p>
            </figure>
            <figure className="testimonial text-center">
              <img
                src="./Final Images/ben.jpg"
                alt="Dave Bryson"
                className="w-16 h-16 rounded-full mb-3 mx-auto"
              />
              <blockquote className=" text-lg leading-7 mb-4">
                I got Omnifood for the whole family, and it frees up so much
                time! Plus, everything is organic and vegan and without plastic.
              </blockquote>
              <p className="text-base text-gray-500">&mdash; Dave Bryson</p>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
