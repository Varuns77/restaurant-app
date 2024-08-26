import React from 'react';
// import { useOrder } from '../../contexts/OrderProvider';
import { useSelector } from 'react-redux';

const OrderPrice = () => {

    const totalAmount = useSelector((state) => state.cart?.totalAmount);

    const subTotal = parseFloat(totalAmount.toFixed(2));
    const tax = parseFloat((totalAmount % 5).toFixed(2));
    const deliveryFee = parseFloat((totalAmount % 20).toFixed(2));
    const total = parseFloat((subTotal + tax + deliveryFee).toFixed(2))
    
    return (
        <div className="flex flex-col space-y-3 my-4">
            <div className="flex items-center">
                <span className="flex-grow poppins text-gray-700">Subtotal</span>
                <span className="poppins font-semibold text-black">${subTotal}</span>
            </div>
            <div className="flex items-center">
                <span className="flex-grow poppins text-gray-700">Tax</span>
                <span className="poppins font-semibold text-black">${tax}</span>
            </div>
            <div className="flex items-center">
                <span className="flex-grow poppins text-gray-700">Delivery Fee</span>
                <span className="poppins font-semibold text-black">${deliveryFee}</span>
            </div>
            <div className="flex items-center">
                <span className="flex-grow poppins text-gray-700 text-xl">Total</span>
                <span className="poppins font-semibold text-black text-xl">${total}</span>
            </div>
        </div>
    )
}

export default OrderPrice
