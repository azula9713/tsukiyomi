import React from "react";
import { Link } from "react-router-dom";

import { Login, Logo, Nav, NavMenu } from "./HeaderStyles";
import NavMenuItems from "../../Data/NavMenuItems";

const Header = () => {
  return (
    <Nav>
      <Logo>
        <Link to="/">
          <img src="/images/logo.png" alt="logo" />
        </Link>
      </Logo>
      <NavMenu>
        {NavMenuItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <img src={item.icon} alt={item.title} />
            <span>{item.title}</span>
          </Link>
        ))}
      </NavMenu>
      <Login>Login</Login>
    </Nav>
  );
};

export default Header;
