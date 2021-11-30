import React from "react";
import { Link } from "react-router-dom";

import { Login, Logo, Nav, NavMenu } from "./HeaderStyles";
import NavMenuItems from "../../Data/NavMenuItems";
import { signInWithPopup } from "@firebase/auth";
import { auth, provider } from "../../Firebase";

const Header = () => {
  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Nav>
      <Logo href="/">
        <img src="/images/logo.png" alt="logo" />
      </Logo>
      <NavMenu>
        {NavMenuItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <img src={item.icon} alt={item.title} />
            <span>{item.title}</span>
          </Link>
        ))}
      </NavMenu>
      <Login
        onClick={() => {
          handleAuth();
        }}
      >
        Login
      </Login>
    </Nav>
  );
};

export default Header;
