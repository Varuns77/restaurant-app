import React from "react";
import { useNavigate } from "react-router-dom"; // Updated import

const FoodItem = ({ image, title, description, price, type, cuisinetype }) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`/foods/${title}`);
  };

  return (
    <div className="bg-white border border-gray-200 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
      <span className="bg-blue-100 border border-blue-500 rounded-full text-primary text-sm forum font-bold px-4 py-1 inline-block mb-4 ">
        {type}
      </span>
      <span className="bg-blue-100 border border-blue-500 rounded-full text-primary text-sm forum font-bold px-4 py-1 absolute top-4 right-4 inline-block">
        {cuisinetype}
      </span>
      <img
        className="w-72 h-56 object-contain mx-auto transform transition duration-300 hover:scale-105"
        src={image}
        alt={title}
      />
      <div className="flex flex-col items-center my-3 space-y-2">
        <h1 className="text-gray-900 forum text-2xl font-bold">{title}</h1>
        {/* <p className="text-gray-500 poppins text-sm text-center">{description.slice(0, 50)}</p> */}
        <h2 className="text-gray-900 forum text-xl">${price}</h2>
        <button
          className="bg-primary text-white px-8 py-2 focus:outline-none forum font-bold rounded-full mt-24 transform transition duration-300 hover:scale-105"
          onClick={handleRoute}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
