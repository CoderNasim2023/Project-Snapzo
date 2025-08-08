import { useContext, useState} from "react";
import { assets } from "../assets/assets";
import "./FoodItem.css";
import { StoreContext} from "../Context/StoreContext.jsx";

const FoodItem = ({id,name,price,description,image}) => {
  // its calls useState variable
  // const [itemCount,setItemCount] = useState(0)

  const { cartItems, addToCart, removeFromCart,url,currency} = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={url + "/images/" + image}
          alt=""
        />

        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            title="Add product to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              title="Decrease Quantity"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              title="Increase Quantity"
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">{currency}{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
