import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom"; // Updated import
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../components/Redux/AddToCart/cartSlice";
import useFetch from "../hooks/useFetch";
import Back from "../routes/Back";

const FoodDetailScreen = () => {
  const { title } = useParams();
  const [foods] = useFetch();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Updated hook from useHistory to useNavigate

  const cartItems = useSelector((state) => state.cart.items);
  const isDisabled = cartItems.find(item => item.title === title)?.disabled || false;

  const handleAddToCart = (food) => {
    dispatch(addItem(food));
    swal("Wow!!!", "Your order has been added to the cart", "success");
  };

  return (
    <main className="max-w-screen-xl mx-auto px-6 my-16">
      <Back />
      {foods
        ?.filter((item) => item.title === title)
        ?.map((food) => (
          <div className="flex flex-col justify-center items-center h-screen" key={food.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {/* Left side */}
              <div className="order-2 md:order-1 lg:order-1 flex flex-col justify-center">
                <h1 className="text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4 text-gray-700 select-none">
                  {food.title}
                </h1>
                <p className="text-center md:text-left lg:text-left text-sm poppins text-gray-500 leading-relaxed select-none">
                  {food.description}
                </p>

                {/* Price and add button */}
                <div className="pt-8">
                  <h1 className="text-3xl font-bold text-black poppins select-none">
                    ${food.price.toFixed(2)}
                  </h1>
                  <div className="mt-8 flex items-center justify-center md:justify-start lg:justify-start">
                    <button
                      disabled={isDisabled}
                      className={
                        isDisabled
                          ? "opacity-30 flex items-center space-x-3 bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"
                          : "flex items-center space-x-3 bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"
                      }
                      onClick={() => handleAddToCart(food)}
                    >
                      <BsCart2 className="text-xl" />
                      <span>{isDisabled ? "Added" : "Add to Cart"}</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Right side */}
              <div className="order-1 md:order-2 lg:order-2">
                <img
                  src={`../../${food.image}`}
                  className="w-3/4 md:w-3/4 lg:w-full mx-auto"
                  alt={food.title}
                />
              </div>
            </div>
          </div>
        ))}
    </main>
  );
};

export default FoodDetailScreen;
