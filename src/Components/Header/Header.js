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
import { getSessions, logoutUser } from "../../App/Api/Auth.api";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector(selectUser);

  const logout = async () => {
    if (loggedInUser.isLoggedIn) {
      dispatch(setSignOutStatus());
      await logoutUser();

      navigate("/");
    } else {
    }
  };

  const sessionFunction = async () => {
    const sessions = await getSessions();
    console.log("sessions", sessions);
  };

  useEffect(async () => {
    if (!loggedInUser.isLoggedIn) {
      console.log("step1");
      const sessions = await getSessions();
      if (sessions && sessions.length > 0) {
        console.log("step2 if");
        const decoded = jwt_decode(localStorage.getItem("refreshtoken"));
        dispatch(
          setUserLoginDetails({
            name: decoded.firstName + " " + decoded.lastName,
            email: decoded.email,
            photo: decoded.photoURL,
          })
        );
      } else {
        console.log("step2 else");
        navigate("/login");
      }
    } else {
      console.log("step1 else");
      const sessions = await getSessions();
      console.log(sessions);
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
              <span onClick={logout}>Log Out</span>
              <br />
              <span onClick={sessionFunction}>Get Sessions</span>
            </DropDownMenu>
          </Logout>
        </>
      )}
    </Nav>
  );
};

export default Header;
