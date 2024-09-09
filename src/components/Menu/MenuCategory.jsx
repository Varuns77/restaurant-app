import React from "react";

const MenuCategory = ({ selectedCuisine, onCuisineSelect }) => {
  // List of cuisine types
  const cuisines = [
    "All",
    "Italian",
    "Indian",
    "American",
    "French",
    "Greek",
    "Spanish",
    "Mexican",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6">
      {cuisines.map((type) => (
        <p
          key={type}
          className={`p-2 sm:p-3 md:p-3 lg:p-3 cursor-pointer rounded-lg transition-colors duration-200 ${
            selectedCuisine === type
              ? "bg-primary text-white"
              : "bg-gray-200 text-black hover:bg-primary hover:text-white"
          } forum font-bold`}
          onClick={() => onCuisineSelect(type)}
        >
          {type}
        </p>
      ))}
    </div>
  );
};

export default MenuCategory;
