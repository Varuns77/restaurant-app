import { useDispatch } from "react-redux";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import {
//   decreaseItemQuantity,
//   increaseItemQuantity,
// } from "../../redux/features/cartSlice";

import { addItem, removeItem } from "../Redux/AddToCart/cartSlice";

function UpdateItemQuantity({ item }) {
  // const { image, title, quantity, id, price } = item;

  const dispatch = useDispatch();

  return (
    <div className="flex items-center border border-gray-200 px-2 py-1 space-x-3 rounded-full md:gap-3">
      {/* <button
        className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-yellow hover:bg-white"
        onClick={() => dispatch(removeItem(item.id))}
      >
        -
      </button> */}
      <AiOutlineMinus
        onClick={() => dispatch(removeItem(item.id))}
        className="text-xl bg-primary w-6 h-6 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1"
      />
      <span className="text-sm font-medium">{item.quantity}</span>
      {/* <button
        className="ftext-lg text-gray-700 poppins select-none"
        onClick={() => dispatch(addItem(item))}
      >
        +
      </button> */}
      <AiOutlinePlus
        onClick={() => dispatch(addItem(item))}
        className="text-xl bg-primary w-6 h-6 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1"
      />
    </div>
  );
}

export default UpdateItemQuantity;