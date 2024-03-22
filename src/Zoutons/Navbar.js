import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>
    </div>
  )
}

export default Navbar
