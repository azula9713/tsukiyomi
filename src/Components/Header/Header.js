import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

import {
  selectUser,
  setSignOutStatus,
  setUserLoginDetails,
} from "../../App/Features/User/UserSlice";
import {
  DropDownMenu,
  Login,
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
      dispatch(setSignOutStatus());
      await logoutUser();
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("refreshtoken");
      window.location.reload();
      navigate("/");
    } else {
    }
  };

  useEffect(() => {
    if (!loggedInUser.isLoggedIn && !localStorage.getItem("accesstoken")) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInUser]);

  return (
    <Nav>
      <Logo>
        <Link to="/">
          <img src="/images/logo.png" alt="logo" />
        </Link>
      </Logo>
      {!loggedInUser.isLoggedIn ? (
        <Login
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Login>
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
          <Logout>
            <UserImg src={loggedInUser.photo} alt="user" />
            <DropDownMenu>
              <span onClick={logout}>Log Out</span>
            </DropDownMenu>
          </Logout>
        </>
      )}
    </Nav>
  );
};

export default Header;
