import React from "react";
import AboutUs from "../components/About/AboutUs";
import Foods from "../components/Foods Showcase/Food";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Header/Banner";
import Testimonials from "../components/About/Testimonials";

const HomeScreen = () => {
  return (
    <>
      <Banner />
      <AboutUs />
        <Foods />
        <Testimonials />
      <Footer />
    </>
  );
};

export default HomeScreen;
