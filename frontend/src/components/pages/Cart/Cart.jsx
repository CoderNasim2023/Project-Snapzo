import React, { useContext, useState } from "react";
import "./Cart.css";
import { assets } from "../../../assets/assets";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../../Context/StoreContext.jsx";

const Cart = () => {
  const navigate= useNavigate();
  const { cartItems, food_list, removeFromCart,getTotalCartAmount,url,currency,deliveryCharge} = useContext(StoreContext)

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{currency}{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{currency}{item.price * cartItems[item._id]}</p>
                  <img
                    onClick={() => removeFromCart(item._id)} 
                    // className="cross" 
                    title="Remove Product" src={assets.remove_icon_red}
                  ></img>
                </div>
                <hr />
              </div>
            );
          }

        })}


        
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals:</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal:</p>
              <p>
                {currency}
                {getTotalCartAmount()}
              </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee:</p>
              <p>
                {currency}{getTotalCartAmount() === 0 ? 0 :deliveryCharge}
              </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total price</p>
                <b>{currency}{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliveryCharge}</b>
            </div>
          </div>
          <button onClick={() =>  navigate("/order")}>{
            // console.log("Proceed button clicked")
            }
            Proceed to Checkout
          </button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promo code , Enter it here </p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter Promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
