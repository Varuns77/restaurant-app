import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo2.png";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";
import Cart from "../PlaceOrder/Cart";

const Navbar = () => {
  const [changeHeader, setChangeHeader] = useState(false);
  const navigate = useNavigate();
  const { user, signOutUser } = useAuth();
  const order = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleShowCart = () => {
    setShowCart((prev) => !prev);
  };

  // Header change function
  const onChangeHeader = () => {
    if (window.scrollY >= 20) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  // Change header by scrolling
  window.addEventListener("scroll", onChangeHeader);

  return (
    <header
      className={
        changeHeader
          ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500"
          : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"
      }
    >
      <nav className="flex items-center max-w-screen-xl mx-auto justify-between px-5">
        <div className="flex backdrop-blur-sm rounded-sm">
          <img
            className="w-[5.5rem] cursor-pointer"
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Right Section for Cart and Menu */}
        <div className="flex items-center space-x-6 md:hidden">
          {/* Cart Icon */}
          <div
            className="relative flex cursor-pointer"
            onClick={toggleShowCart}
          >
            <span className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white forum font-bold absolute -right-2 -top-2">
              {order.length}
            </span>
            <BsCart2 className="cursor-pointer w-6 h-6 text-gray-700" />
          </div>
          <Cart showCart={showCart} setShowCart={setShowCart} />

          {/* Hamburger Menu */}
          <button
            className="space-y-1 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-1 bg-black rounded-sm"></div>
            <div className="w-6 h-1 bg-black rounded-sm"></div>
            <div className="w-6 h-1 bg-black rounded-sm"></div>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="gap-2 !hidden md:!flex">
          <p
            className="forum text-lg font-bold hover:cursor-pointer hover:text-[#93c5fd]"
            onClick={() => navigate("/")}
          >
            Home
          </p>
          <p
            className="forum text-lg font-bold hover:cursor-pointer hover:text-[#93c5fd]"
            onClick={() => navigate("/menu")}
          >
            Menu
          </p>
          <p
            className="forum text-lg font-bold hover:cursor-pointer hover:text-[#93c5fd]"
            onClick={() => navigate("/orderedItems")}
          >
            Order
          </p>
        </div>

        {/* User Section for Desktop */}
        {user?.displayName ? (
          <>
            <div className="items-center justify-end space-x-4 !hidden md:!flex">
              <div
                className="relative flex cursor-pointer"
                onClick={toggleShowCart}
              >
                <span className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white forum font-bold absolute -right-2 -top-2">
                  {order.length}
                </span>
                <BsCart2 className="cursor-pointer w-6 h-6 text-gray-700" />
              </div>
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-10 h-10 rounded-full border-black"
              />
              <p className="text-gray-700 forum hidden md:block lg:block">
                {user.displayName}
              </p>
              <FiLogOut
                className="cursor-pointer w-6 h-6 text-gray-700"
                onClick={signOutUser}
              />
            </div>
            <Cart showCart={showCart} setShowCart={setShowCart} />
          </>
        ) : (
          <div className="flex items-center justify-end space-x-6">
            <button className="forum" onClick={() => navigate("/signin")}>
              Sign In
            </button>
            <button
              className="bg-primary px-6 py-3 text-white forum rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        )}

        {/* Responsive Dropdown Menu */}
        <ul
          className={`bg-white w-screen pb-5 absolute top-0 right-0 transform ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300 ease-in-out flex flex-col space-y-3 justify-end`}
        >
          <button
            className="px-10 py-8 ml-auto relative"
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-6 h-1 bg-black rounded-sm rotate-45 absolute"></div>
            <div className="w-6 h-1 bg-black rounded-sm -rotate-45 absolute"></div>
          </button>
          <li
            className="flex justify-center w-full py-4 forum text-lg font-bold hover:cursor-pointer hover:text-[#93c5fd]"
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
          >
            Home
          </li>
          <li
            className="flex justify-center w-full py-4 forum text-lg font-bold hover:cursor-pointer hover:text-[#93c5fd]"
            onClick={() => {
              navigate("/menu");
              setMenuOpen(false);
            }}
          >
            Menu
          </li>
          <li
            className="flex justify-center w-full py-4 forum text-lg font-bold hover:cursor-pointer hover:text-[#93c5fd]"
            onClick={() => {
              navigate("/orderedItems");
              setMenuOpen(false);
            }}
          >
            Order
          </li>
          <li
            className="flex justify-center w-full py-4 forum text-lg font-bold hover:cursor-pointer hover:text-[#93c5fd]"
            onClick={signOutUser}
          >
            Logout
          </li>
        </ul>
      </nav>
    </header>

    // <header className={changeHeader ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"}>
    //     <nav className="flex items-center max-w-screen-xl mx-auto justify-between">
    //         {/* Left  */}
    //         <div className="flex backdrop-blur-sm bg-white/20 rounded-sm">
    //             <img className="w-[5.5rem] cursor-pointer" src={logo} alt="logo" onClick={() => navigate('/')} />
    //         </div>

    //         {/* Middle */}
    //         <div className="flex gap-2">
    //             <p className='forum text-lg font-bold hover:cursor-pointer hover:text-[#93c5fd]'  onClick={() => navigate('/')}>Home</p>
    //             <p className='forum text-lg font-bold hover:cursor-pointer hover:text-[#93c5fd]' onClick={() => navigate('/menu')}>Menu</p>
    //         </div>

    //         {/* Right  */}
    //         {user?.displayName ? (
    //             <>
    //                 <div className="flex items-center justify-end space-x-4">
    //                     <div className="relative flex cursor-pointer" onClick={toggleShowCart}>
    //                         <span className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white forum font-bold absolute -right-2 -top-2">{order.length}</span>
    //                         <BsCart2 className="cursor-pointer w-6 h-6 text-gray-700" />
    //                     </div>
    //                     <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full border-black" />
    //                     <p className="text-gray-700 forum hidden md:block lg:block">{user.displayName}</p>
    //                     <FiLogOut className="cursor-pointer w-6 h-6 text-gray-700" onClick={signOutUser} />
    //                 </div>
    //                 <Cart showCart={showCart} setShowCart={setShowCart} />
    //             </>
    //         ) : (
    //             <>
    //                 <div className="flex items-center justify-end space-x-6">
    //                     <button className="forum" onClick={() => navigate('/signin')}>Sign In</button>
    //                     <button className="bg-primary px-6 py-3 text-white forum rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105" onClick={() => navigate('/signup')}>Sign Up</button>
    //                 </div>
    //             </>
    //         )}
    //     </nav>
    // </header>
  );
};

export default Navbar;
