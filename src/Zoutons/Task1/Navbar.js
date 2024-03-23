import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SignIn from "../Task2/Signin";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Task2/firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const handleSignup =()=>{
    navigate('/signup')
  }
  const handleLogin=()=>{
    navigate('/login')
  }
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };
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

        <div></div>

        <div className="flex-style header__option ">
          <Stack spacing={4} direction="row">
            {authUser ? (
              <>
                <Button variant="outlined" onClick={userSignOut}>
                  Sign-uot
                </Button>
              </>
            ) : (
              <>
                <Button variant="contained" onClick={handleSignup}>
                  Signup
                </Button>
                <Button variant="text" onClick={handleLogin}> Login</Button>
              </>
            )}
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Navbar;
