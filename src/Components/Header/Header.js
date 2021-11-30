import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  selectUser,
  setUserLoginDetails,
} from "../../app/Features/User/UserSlice";
import { Login, Logo, Nav, NavMenu, UserImg } from "./HeaderStyles";
import NavMenuItems from "../../Data/NavMenuItems";
import { signInWithPopup } from "@firebase/auth";
import { auth, provider } from "../../Firebase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector(selectUser);

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(
          setUserLoginDetails({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Nav>
      <Logo>
        <Link to="/">
          <img src="/images/logo.png" alt="logo" />
        </Link>
      </Logo>
      {!loggedInUser.isLoggedIn ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            {NavMenuItems.map((item, index) => (
              <Link to={item.path} key={index}>
                <img src={item.icon} alt={item.title} />
                <span>{item.title}</span>
              </Link>
            ))}
          </NavMenu>
          <UserImg src={loggedInUser.photo} alt="user" />
        </>
      )}
    </Nav>
  );
};

export default Header;
