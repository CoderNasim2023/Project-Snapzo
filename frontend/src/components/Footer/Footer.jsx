import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo image" />
          <h3>🛵Snap. Eat. Repeat. Only on Snapzo.</h3>
          <p>
            At Snapzo, we believe food is not just fuel — it's an emotion.
            That’s why we’ve built an intuitive and delightful platform where
            taste meets technology. With real-time tracking, secure payments,
            customizable orders, and lightning-fast delivery, Snapzo ensures
            every bite is worth the wait except there’s barely any waiting!.
          </p>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/Itsnasim254/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.facebook_icon} />
            </a>
            <a href="https://www.linkedin.com/in/mdnasimakhtar/">
              <img src={assets.linkedin_icon} alt="" />
            </a>
            <a href="https://x.com/ItsNasim254">
              <img src={assets.twitter_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Terms&Conditions</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch </h2>
          <ul>
            <li>033 2300 7831</li>
            <li>Connect@Snapzo24/7.in</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright ©️ 2025 | All rights reserved to Snapzo E-commerce pvt ltd..
      </p>
    </div>
  );
}

export default Footer