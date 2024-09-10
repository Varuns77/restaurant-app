import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../Redux/AddToCart/cartSlice'; // Import the action to clear orders

const OrderCard = (props) => {
    // const copyObj = {...props}
    // const [quantity, setQuantity] = useState(props.quantity);
    // const { removeOrder } = useOrder();
    const dispatch = useDispatch();

    return (
        <div className=" rounded-lg p-1 flex space-x-3">
            <div className="flex">
                <img className="w-24 object-contain" src={props.image} alt="" />
            </div>
            <div className="flex flex-col space-y-3 flex-grow mt-4">
                <h5 className="text-xl font-bold forum">{props.title}</h5>
                <h1 className="font-semibold text-lg text-primary forum">${props.price.toFixed(2)}</h1>
                {/* <p className="text-sm font-bold forum text-gray-400">{props.type}</p> */}
            </div>

            <div className="flex items-center px-4 py-2 space-x-3">
                <span className="text-lg text-gray-700 forum select-none">{props.quantity} items</span>
            </div>
           
            {/* remove button  */}
            <div className="flex flex-col items-center justify-center">
                <AiOutlineDelete className="w-6 h-6 text-gray-600 transform transition hover:scale-105 duration-500 cursor-pointer" onClick={() => dispatch(removeItem(props.id))} />
            </div>
        </div>
    )
}

export default OrderCard
