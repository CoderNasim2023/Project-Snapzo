import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Cart from "./components/pages/Cart/Cart.jsx";
import PlaceOrder from "./components/pages/PlaceOrder/PlaceOrder.jsx";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyOrders from "./components/pages/MyOrders/MyOrders.jsx";
import Verify from "./components/pages/Verify/Verify.jsx";


const App = () => {

  const [showlogin,setShowLogin] = useState(false)

  return (
    <>
      <ToastContainer />
      {showlogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<PlaceOrder />}></Route>
          <Route path="/myorders" element={<MyOrders/>}></Route>
          <Route path="/verify" element={<Verify />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
