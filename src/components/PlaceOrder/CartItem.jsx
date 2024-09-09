import { formatCurrency } from "../../utils/helpers";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { image, title, quantity, id, price } = item;

  return (
    <div
      className="flex items-center justify-between gap-x-[10px] border-b border-gray 
    px-[10px] py-[5px]"
    >
      <img src={image} alt="" className="w-[60px]" />
      <div className="mr-auto">
        <h5 className="text-md forum font-bold">{title}</h5>
        <span className="text-md font-bold forum">
          {formatCurrency(price)} {quantity > 1 && `x ${quantity}`}
        </span>
      </div>

      <UpdateItemQuantity item={item} />
    </div>
  );
}

export default CartItem;
