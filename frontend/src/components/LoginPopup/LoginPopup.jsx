import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";


const LoginPopup = ({ setShowLogin }) => {
  const  {url,setToken,loadCartData} = useContext(StoreContext)   //usecontext  variable 
  const [currentState, setCurrentState] = useState("Sign Up"); 
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };


  const onLogin = async (e) => {
    e.preventDefault();

    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);  //to save login,signup  token in localStorage
      loadCartData({ token:response.data.token });
      setShowLogin(false);
    } 
    else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Sign Up" ? (
            <input
              name="name"
              type="text"
              onChange={onChangeHandler}
              value={data.name}
              placeholder="Your name"
              required
            />
          ) : (
            <></>
          )}

          <input
            name="email"
            type="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Enter your email"
            required
          />
          <input
            name="password"
            type="password"
            onChange={onChangeHandler}
            value={data.password}
            placeholder="Enter your  Password"
            required
          />
        </div>
        <button type="submit">
          {currentState === "Login" ? "Login" : "Create account"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" required />
          <p>I agree Snapzo's all terms&conditions , privacy policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already Have an account?
            <span onClick={() => setCurrentState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
