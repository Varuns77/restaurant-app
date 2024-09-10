import React from "react";

const Banner = () => {
  return (
    <section className="header-banner animate-slideInTop h-96 w-full bg-yellow-50">
      <div className="flex flex-col items-center justify-center h-full">
        {/* <h1 className="text-center text-3xl md:text-4xl lg:text-5xl forum font-semibold border-2 backdrop-blur-sm p-6 bg-white/30 rounded-lg text-gray-700">Welcome to <span className='main-heading text-5xl'>Seven Spoons Restaurant</span></h1> */}
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl forum font-bold border-2 backdrop-blur-sm p-6 bg-white/30 rounded-lg text-gray-700">
          Discover the World's Flavors at{" "}
          <span className="main-heading text-5xl">
            <br></br>Seven Spoons Restaurant!
          </span>
        </h1>

        {/* <div className="rounded-full p-1 box-border mt-8 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center">
                        <input type="text" className=" rounded-full px-4 focus:outline-none w-full bg-transparent" placeholder="Search here ......." />
                        <button className="text-sm bg-primary py-3 px-6 rounded-full text-white forum ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform">Search</button>
                    </div> */}
      </div>
    </section>
  );
};

export default Banner;
