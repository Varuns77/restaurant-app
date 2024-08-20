import { useState } from "react";

const Filter = ({ onApplyFilters }) => {
  const [cuisineType, setCuisineType] = useState('');
  const [mealType, setMealType] = useState('');
  const [price, setPrice] = useState('');

  const handleApply = () => {
    // Pass selected filters back to the parent component
    onApplyFilters({ cuisineType, mealType, price });
  };

  const handleReset = () => {
    setCuisineType('');
    setMealType('');
    setPrice('');
    onApplyFilters({ cuisineType: '', mealType: '', price: '' });
  };

  return (
    <div className="w-[450px] md:max-w-[400px] md:bg-red-500">
      <div className="mx-auto px-4 mt-14 ">
        <div className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200">
          {/* Filter Options */}
          <div className="mt-4">
            <div className="mb-3">
              <label>Cuisine Type:</label>
              <select
                value={cuisineType}
                onChange={(e) => setCuisineType(e.target.value)}
                className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              >
                <option value="">All</option>
                <option value="Italian">Italian</option>
                <option value="Indian">Indian</option>
                <option value="American">American</option>
                <option value="French">French</option>
                <option value="Greek">Greek</option>
                <option value="Mexican">Mexican</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>
            <div className="mb-3">
              <label>Meal Type:</label>
              <select
                value={mealType}
                onChange={(e) => setMealType(e.target.value)}
                className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              >
                <option value="">All</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
            </div>
            <div>
              <label>Price:</label>
              <select
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              >
                <option value="">All</option>
                <option value="low">Below $10</option>
                <option value="medium">$10 - $20</option>
                <option value="high">Above $20</option>
              </select>
            </div>
          </div>
          {/* Apply and Reset Buttons */}
          <div className="flex justify-around">
            <button
              onClick={handleApply}
              className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-7 transform transition duration-300 hover:scale-105"
            >
              Apply
            </button>
            <button
              onClick={handleReset}
              className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-7 transform transition duration-300 hover:scale-105"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
