import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <div className="header">
        <div>
          <Link to="/">
            <img
              className="header__logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
            />
          </Link>
        </div>
      </div>
      <div className="display-right-nav">
        <h2>login</h2>
        <h2>Register</h2>
        <h2>Multi-lang-Drop-Down</h2>
      </div>
      <div>
        <h1>Find best deals in india</h1>
      </div>
      <div className="header__search">
        <input className="header__searchIn" type="text" />
      </div>
    </>
  );
};

export default Navbar;
