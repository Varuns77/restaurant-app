import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import FoodItem from './FoodItem';
import Skeleton from './Skeleton';
import Filter from '../Filter/Filter';

const Foods = () => {
  const [menuTab, setMenuTab] = useState('veg');
  const [loading, setLoading] = useState(false);
  const [foods, setFoods] = useFetch();
  const [filteredFoods, setFilteredFoods] = useState([]);

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
      updatedFoods = updatedFoods.filter(item => item.cuisinetype === cuisineType);
    }

    // Apply Meal Type filter
    if (mealType) {
      updatedFoods = updatedFoods.filter(item => item.type === mealType);
    }

    // Apply Price filter
    if (price) {
      updatedFoods = updatedFoods.filter(item => {
        if (price === 'low') return item.price < 10;
        if (price === 'medium') return item.price >= 10 && item.price <= 20;
        if (price === 'high') return item.price > 20;
        return true;
      });
    }

    setFilteredFoods(updatedFoods);
  };

  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6">
      {/* Include the Filter component */}
      <Filter onApplyFilters={handleApplyFilters} />

      {/* Food Menu Tabs */}
      <div className="flex items-center justify-center space-x-6 mt-6">
        <p
          className={menuTab === 'veg' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"}
          onClick={() => handleMenuTabs('veg')}
        >
          Veg
        </p>
        <p
          className={menuTab === 'non-veg' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"}
          onClick={() => handleMenuTabs('non-veg')}
        >
          Non Veg
        </p>
      </div>

      {/* All Foods */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {loading ? (
          [...Array(6)].map((_, index) => <Skeleton key={index} />)
        ) : (
          filteredFoods
            .filter(item => menuTab === item.preferencetype)
            .map(item => (
              <FoodItem key={item.id} {...item} />
            ))
        )}
      </div>
    </section>
  );
};

export default Foods;