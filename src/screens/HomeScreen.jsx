import React from "react";
import AboutUs from "../components/About/AboutUs";
import Foods from "../components/Foods Showcase/Food";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Header/Banner";
import Testimonials from "../components/About/Testimonials";
// import Filter from "../components/Filter/Filter";
// import Slider from '../components/Foods Slider/Slider';

const HomeScreen = () => {
  return (
    <>
      <Banner />
      <AboutUs />
        <Foods />
      {/* <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col">
        <Filter />
      </div> */}
      {/* <Slider /> */}
        <Testimonials />
      <Footer />
    </>
  );
};

export default HomeScreen;
