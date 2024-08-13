import React from "react";
// import AboutUs from '../components/About/AboutUs';
import Foods from "../components/Foods Showcase/Food";
import Filter from "../components/Filter/Filter";
import Banner from "../components/Header/Banner";
import Footer from "../components/Footer/Footer";

const HomeScreen = () => {
  return (
    <>
      <Banner />
      <div className="flex">
        <Filter />
        <Foods />
      </div>
      {/* <AboutUs /> */}
      <Footer />
    </>
  );
};

export default HomeScreen;
