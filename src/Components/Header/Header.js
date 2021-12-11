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
  Login,
  Logo,
  Logout,
  Nav,
  NavMenu,
  UserImg,
} from "./HeaderStyles";
import NavMenuItems from "../../App/Data/NavMenuItems";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector(selectUser);

  const handleAuth = () => {
    if (loggedInUser.isLoggedIn) {
      dispatch(setSignOutStatus());
      navigate("/");
    }
  };

  useEffect(() => {
    if (!loggedInUser.isLoggedIn) {
      navigate("/login");
    }
  }, [loggedInUser, navigate]);

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
              <span onClick={handleAuth}>Log Out</span>
            </DropDownMenu>
          </Logout>
        </>
      )}
    </Nav>
  );
};

export default Header;
