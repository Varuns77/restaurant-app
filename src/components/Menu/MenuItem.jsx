import React from "react";
import useFetch from "../../hooks/useFetch";

const MenuItem = ({ mealType }) => {
  console.log(mealType);

  const [foods] = useFetch();

  const specificFood = foods.filter((item) => item.type === mealType);
  console.log(specificFood);

  return (
    <>
      {/* {[...Array(6)].map((_, index) => ( */}
      {specificFood.map((item) => (
        <div
          // key={index}
          className="box flex items-center justify-between bg-white p-5 shadow-lg border border-gray-300 flex-1 min-w-[40rem] transition-transform duration-300 hover:scale-95 cursor-pointer"
        >
          <div>
            <h3 className="text-2xl text-black pb-2">{item.title}</h3>
            {/* <p className="text-base text-gray-600 leading-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias, voluptatibus!
                  </p> */}
            <div className="price text-2xl text-[#cd9452]">${item.price}</div>
            <span className="bg-blue-100 border border-blue-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">
              {item.preferencetype}
            </span>
            <span className="bg-blue-100 border border-blue-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">
              {item.type}
            </span>
            <p></p>
            <button
              className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full transform transition duration-300 hover:scale-105"
            //   onClick={handleRoute}
            >
              Order Now
            </button>
          </div>
          <img src={item.image} alt="" className="w-[100px]" />
        </div>
      ))}
    </>
  );
};

export default MenuItem;
