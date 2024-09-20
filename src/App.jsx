import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AuthProvider from "./contexts/AuthProvider";
import DeliveryProvider from "./contexts/DeliveryProvider";
// import OrderProvider from "./contexts/OrderProvider";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import ErrorScreen from "./screens/ErrorScreen";
import FoodDetailScreen from "./screens/FoodDetailScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderSuccessfulScreen from "./screens/OrderSuccessfulScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import Menu from "./components/Menu/Menu";
import OrderedItems from "./screens/OrderedItems";

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                {/* <OrderProvider> */}
                    <DeliveryProvider>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<HomeScreen />} />
                            <Route element={<PublicRoute />}>
                                <Route path="/signin" element={<SignInScreen />} />
                                <Route path="/signup" element={<SignUpScreen />} />
                            </Route>
                            <Route element={<PrivateRoute />}>
                                <Route path="/foods/:title" element={<FoodDetailScreen />} />
                                <Route path="/orders" element={<PlaceOrderScreen />} />
                                <Route path="/menu" element={<Menu />} />
                                <Route path="/orderedItems" element={<OrderedItems />} />
                                <Route path="/order-successful" element={<OrderSuccessfulScreen />} />
                            </Route>
                            <Route path="*" element={<ErrorScreen />} />
                        </Routes>
                    </DeliveryProvider>
                {/* </OrderProvider> */}
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
