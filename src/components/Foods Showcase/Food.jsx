import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import FoodItem from './FoodItem';
import Skeleton from './Skeleton';

const Foods = () => {
    const [menuTab, setMenuTab] = useState('veg')
    const [loading, setLoading] = useState(false)
    const [foods] = useFetch();

    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },1000)
    },[])

    //food menu tab 
    const handleMenuTabs = (type) => {
        setMenuTab(type)
    }

    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">
            {/* food Menu tab  */}
            <div className="flex items-center justify-center space-x-6">
                <p className={menuTab === 'veg' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('veg')}>Veg</p>
                <p className={menuTab === 'non-veg' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('non-veg')}>Non Veg</p>
            </div>

            {/* all foods  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {foods.filter((item) => menuTab === item.preferencetype).map(item => (
                    loading ? <Skeleton key={item.id} /> : <FoodItem key={item.id} {...item} />
                ))}
            </div>
        </section>
    )
}

export default Foods
