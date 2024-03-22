import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SignIn from "../Task2/Signin";

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
        <div className="flex-style" >
        <div className="flex-style">
          <h2>login </h2>
        </div>
        <div className="flex-style">
          <h2>Register</h2>
        </div>
        <div className="flex-style">
          <h2>Multi-lang</h2>
        </div>
        </div>
      </div>
      <div>
        <h1>Find best deals in india</h1>
      </div>
    </>
  );
};

export default Navbar;
