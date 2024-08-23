import { formatCurrency } from "../../utils/helpers";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { image, title, quantity, id, price } = item;

  return (
    <div
      className="flex items-center justify-between gap-x-[10px] border-b border-gray 
    px-[10px] py-[5px] "
    >
      <img src={image} alt="" className="w-[60px]" />
      <div className="mr-auto font-bold">
        <h5 className="text-sm">{title}</h5>
        <span className="text-xs">
          {formatCurrency(price)} {quantity > 1 && `x ${quantity}`}
        </span>
      </div>

      <UpdateItemQuantity item={item} />
    </div>
  );
}

export default CartItem;
