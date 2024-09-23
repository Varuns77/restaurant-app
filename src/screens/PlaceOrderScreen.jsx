import React from "react";
import { useNavigate } from "react-router-dom"; // Updated import
import swal from "sweetalert";
import DeliveryForm from "../components/PlaceOrder/DeliveryForm";
import OrderCard from "../components/PlaceOrder/OrderCard";
import OrderPrice from "../components/PlaceOrder/OrderPrice";
import { useDelivery } from "../contexts/DeliveryProvider";
import Back from "../routes/Back";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../Redux/AddToCart/cartSlice"; // Import the action to clear orders
import { db } from "../config/firebase";
import { updateDoc, doc, arrayUnion } from "firebase/firestore"; // Import Firestore functions
import { getAuth } from "firebase/auth"; // Import Firebase auth to get current user

const PlaceOrderScreen = () => {
  const order = useSelector((state) => state.cart.items); // Access the order items from Redux store
  const totalAmount = useSelector((state) => state.cart?.totalAmount);
  const { input, disabled } = useDelivery();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Updated hook from useHistory to useNavigate
  const auth = getAuth();
  const currentUser = auth.currentUser;

  // Function to save the order in Firestore under the user's document
  const saveOrderToFirestore = async (orderItems) => {
    if (!currentUser) {
      swal("Error", "User not authenticated", "error");
      return;
    }

    try {
      // Reference to the user's document in Firestore
      const userRef = doc(db, "Users", currentUser.uid);

      // Extract only the required fields from each item
      const simplifiedOrderItems = orderItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        price: item.price,
        totalPrice: item.totalPrice,
      }));

      // Data to be added in Firestore
      const orderData = {
        items: simplifiedOrderItems, // Array of ordered items
        totalAmt: totalAmount,
        deliveryDetails: input, // Include delivery form input details
        createdAt: new Date().toISOString(), // Timestamp of order creation
      };

      // Update the user's document with the new order
      await updateDoc(userRef, {
        orders: arrayUnion(orderData), // Add the new order to the orders array
      });

      console.log("Order has been saved successfully");
    } catch (error) {
      console.error("Error saving order to Firestore:", error);
    }
  };

  return (
    <main className=" h-screen bg-gray-100">
      <div className="max-w-screen-xl pt-16 mx-auto px-6 bg-gray-100">
        <Back />
        {order.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {/* left side form  */}
              <div className="col-span-1">
                <DeliveryForm />
              </div>
              {/* right side  */}
              <div className="col-span-1 ">
                <div className="glass p-6 box-border border border-gray-300 rounded-lg">
                  {/* orders  */}
                  <div className="flex flex-col space-y-3 h-64 overflow-y-scroll orderContainer ">
                    {order.map((item) => (
                      <OrderCard key={item.id} {...item} />
                    ))}
                  </div>
                  {/* price  */}
                  <OrderPrice />
                  {/* place order button  */}
                  <div>
                    {disabled ? (
                      <button
                        disabled="disabled"
                        className="w-full px-6 py-3 rounded-lg bg-primary text-white forum ring-red-300 focus:ring-4 transition duration-500 opacity-40"
                      >
                        Place Order
                      </button>
                    ) : (
                      <button
                        className="w-full px-6 py-3 rounded-lg bg-primary text-white forum ring-red-300 focus:ring-4 transition duration-500"
                        onClick={async () => {
                          // Save order to Firestore
                          await saveOrderToFirestore(order);

                          // Show success message
                          swal(
                            "Congratulations!!!",
                            `You have ordered ${order.length} items successfully`,
                            "success"
                          );

                          // Redirect to order success page
                          navigate("/order-successful"); // Updated to use navigate

                          // Clear the cart using Redux action
                          dispatch(clearCart());
                        }}
                      >
                        Place Order
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="pt-24">
            <h1 className="text-center text-5xl text-primary forum">
              No Order has added!!
            </h1>
          </div>
        )}
      </div>
    </main>
  );
};

export default PlaceOrderScreen;
