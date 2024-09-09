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
        key={item.id} // Ensure each item has a unique key
        className="box flex sm:flex-row items-center justify-between bg-white p-4 sm:p-5 shadow-lg border border-gray-300 flex-1 min-w-full sm:min-w-[22rem] md:min-w-[25rem] lg:min-w-[28rem] transition-transform duration-300 hover:scale-95 cursor-pointer mb-4 sm:mb-0"
      >
        <div className="flex-1">
          <span className="text-xl sm:text-2xl text-black pb-1 font-bold flex items-center gap-2">
            {item.title}{" "}
            {item.preferencetype == "veg" ? (
              <img
                src="assets/icons8-veg-48.png"
                className="w-[20px] inline"
              ></img>
            ) : (
              <img
                src="assets/icons8-non-veg-48.png"
                className="w-[20px] inline"
              ></img>
            )}
          </span>
          {/* If needed, you can uncomment the non-veg icon */}
          {/* <div>
            <img
              src="assets/icons8-non-veg-48.png"
              className="w-[20px] block right-0"
            ></img>
          </div> */}

          <div className="price text-xl sm:text-2xl mb-1">${item.price}</div>
          {/* Uncomment if you want to display item preferences */}
          {/* <span className="bg-blue-100 border border-blue-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-2 mt-2">
            {item.preferencetype}
          </span> */}
          <button
            className="bg-primary text-white px-4 py-2 focus:outline-none forum font-bold rounded-full transform transition duration-300 hover:scale-105 mt-2"
            // onClick={handleRoute}
          >
            Order Now
          </button>
        </div>
        <img
          src={item.image}
          alt={item.title}
          className="w-[80px] sm:w-[100px] mt-4 sm:mt-0 sm:ml-4"
        />
      </div>
      ))}
    </>
  );
};

export default MenuItem;
