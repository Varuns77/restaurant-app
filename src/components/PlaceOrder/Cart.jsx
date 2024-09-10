import { MdClose } from "react-icons/md";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../Redux/AddToCart/cartSlice";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useNavigate } from "react-router-dom"; 

function Cart({ showCart, setShowCart }) {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => {
    console.log(state);
    return state.cart?.items;
  });

  const totalAmount = useSelector((state) => state.cart?.totalAmount);

  const handleOrder = () => {
    console.log("Order has been added");
    navigate("/orders"); 
    setShowCart(false);
  };

  return (
    <>
      <div
        className={`transition-right fixed z-50 duration-300 ease-in-out ${
          showCart ? "right-0" : "right-[-100%]"
        } top-[88px]
      h-[calc(100vh-88px)] w-full border-l-[3px] border-t-[3px] border-gray bg-white md:w-[400px]`}
      >
        <div className="flex h-[40px] items-center justify-between border-b-2 bg-gray px-[10px] font-bold forum text-lg">
          <p className="">Shopping Cart</p>
          {/* <hr className="w-full p-1 flex-col" /> */}
          <MdClose
            className="cursor-pointer text-xl"
            onClick={() => setShowCart(false)}
          />
        </div>

        <div className="flex h-[calc(100%-40px)] flex-col justify-between">
          <div className="mt-[10px] flex flex-col gap-[10px] overflow-y-auto">
            {cartItems?.length > 0 ? (
              cartItems.map((item) => {
                return <CartItem item={item} key={item.image} />;
              })
            ) : (
              <EmptyCart />
            )}
          </div>

          <div className="text-center">
            <div className="flex items-center justify-between bg-gray p-[10px]">
              <h5 className="forum text-lg font-black">Total:</h5>
              <p className="forum text-lg font-black">{formatCurrency(totalAmount || 0)}</p>
            </div>

            <div className="flex items-center justify-around gap-[10px] p-[10px]">
              <button
                className="bg-primary text-white px-8 py-2 font-bold focus:outline-none forum rounded-full transform transition duration-300 hover:scale-105"
                onClick={handleOrder}
              >
                Order Now
              </button>
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-primary text-white px-8 py-2 font-bold focus:outline-none forum rounded-full transform transition duration-300 hover:scale-105"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed left-0 top-[88px] z-20 ${
          showCart ? "h-full" : "h-0"
        } w-full bg-[#00000080]`}
        onClick={() => setShowCart(false)}
      ></div>
    </>
  );
}

export default Cart;
