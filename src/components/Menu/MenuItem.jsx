import React from "react";
import useFetch from "../../hooks/useFetch";

const MenuItem = ({ mealType, cuisineType }) => {
  console.log(mealType);

  const [foods] = useFetch();

  const specificFood = foods.filter(
    (item) =>
      item.type === mealType &&
      (cuisineType === "All" || item.cuisinetype === cuisineType)
  );
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
            <h3 className="text-2xl text-black pb-1">{item.title}</h3>
            {/* <div>
              <img
                src="assets/icons8-non-veg-48.png"
                className="w-[20px] block right-0"
              ></img>
            </div> */}

            {/* <p className="text-base text-gray-600 leading-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias, voluptatibus!
                  </p> */}
            <div className="price text-2xl text-[#cd9452] mb-1">
              ${item.price}
            </div>
            {/* <span className="bg-blue-100 border border-blue-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-2 mt-2">
              {item.preferencetype}
            </span> */}
            <button
              className="bg-primary text-white px-4 py-2 focus:outline-none poppins rounded-full transform transition duration-300 hover:scale-105 block"
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
