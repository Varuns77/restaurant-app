import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import FoodItem from "./FoodItem";
import Skeleton from "./Skeleton";
// import Filter from "../Filter/Filter";
import { Link, useNavigate } from "react-router-dom";
import ScrollReveal from "../../utils/ScrollReveal";

const Foods = () => {
  const [menuTab, setMenuTab] = useState("veg");
  const [loading, setLoading] = useState(false);
  const [foods, setFoods] = useFetch();
  const [filteredFoods, setFilteredFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setFilteredFoods(foods); // Initialize filtered foods with all foods
    }, 1000);

    return () => clearTimeout(timer);
  }, [foods]);

  const handleMenuTabs = (type) => {
    setMenuTab(type);
  };

  const handleApplyFilters = (filters) => {
    const { cuisineType, mealType, price } = filters;
    let updatedFoods = foods;

    // Apply Cuisine Type filter
    if (cuisineType) {
      updatedFoods = updatedFoods.filter(
        (item) => item.cuisinetype === cuisineType
      );
    }

    // Apply Meal Type filter
    if (mealType) {
      updatedFoods = updatedFoods.filter((item) => item.type === mealType);
    }

    // Apply Price filter
    if (price) {
      updatedFoods = updatedFoods.filter((item) => {
        if (price === "low") return item.price < 10;
        if (price === "medium") return item.price >= 10 && item.price <= 20;
        if (price === "high") return item.price > 20;
        return true;
      });
    }

    setFilteredFoods(updatedFoods);
  };

  return (
    <ScrollReveal>
      <section className="flex justify-center items-center mr-8 bg-gray-100">
        <div className="flex justify-center xl:flex-row lg:flex-row md:flex-col sm:flex-col">
          <div className="flex flex-col w-full">
            <div className="flex flex-col items-center justify-center mt-12">
              <span className="sub-heading font-bold">special selection</span>
              <span className="main-heading font-bold">Delicious Menu</span>
            </div>

            {/* All Foods */}
            <div className="animate-slideInTop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {loading
                ? [...Array(6)].map((_, index) => <Skeleton key={index} />)
                : filteredFoods
                    .filter((item) => menuTab === item.preferencetype)
                    .slice(0, 6)
                    .map((item) => <FoodItem key={item.id} {...item} />)}
            </div>
            <div className="mt-7 mb-10 flex items-center gap-2 justify-center">
              <span
                className="text-center text-xl forum font-bold cursor-pointer"
                onClick={() => navigate("/orderedItems")}
              >
                <u>Explore All Foods</u>
              </span>
              <div className="w-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Foods;
