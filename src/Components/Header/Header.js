import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  selectUser,
  setSignOutStatus,
} from "../../App/Features/User/UserSlice";
import {
  DropDownMenu,
  Logo,
  Logout,
  Nav,
  NavMenu,
  UserImg,
} from "./HeaderStyles";
import NavMenuItems from "../../App/Data/NavMenuItems";
import { logoutUser } from "../../App/Api/Auth.api";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector(selectUser);

  const logout = async () => {
    if (loggedInUser.isLoggedIn) {
      const logoutData = await logoutUser();
      dispatch(setSignOutStatus());
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("refreshtoken");
      // localStorage.setItem("accesstoken", logoutData.accesstoken);
      // localStorage.setItem("refreshtoken", logoutData.refreshtoken);
    }
  };

  useEffect(() => {
    if (!loggedInUser.isLoggedIn) {
      console.log("hello");
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInUser.isLoggedIn]);

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
      <Logout>
        <UserImg src={loggedInUser.photo} alt="user" />
        <DropDownMenu>
          <span onClick={logout}>Log Out</span>
        </DropDownMenu>
      </Logout>
    </Nav>
  );
};

export default Header;
