import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQuery, useQueryClient } from "react-query";

import {
  selectUser,
  setSignOutStatus,
  setUserLoginDetails,
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
import { logoutUser, validateUser } from "../../App/Api/Auth.api";
import CommonLoader from "../Loaders/CommonLoader";

const Header = () => {
  const dispatch = useDispatch();
  const client = useQueryClient();
  const loggedInUser = useSelector(selectUser);

  const { isLoading: validating } = useQuery("validateToken", validateUser, {
    retry: false,
    onSuccess: (res) => {
      if (res.status === 200) {
        const user = res.data;

        dispatch(
          setUserLoginDetails({
            name: user.firstName + " " + user.lastName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      }
    },
    onError: (err) => {
      //Add error handling
      window.location.replace("/");
    },
  });

  const logout = async () => {
    if (loggedInUser.isLoggedIn) {
      await logoutUser();
      dispatch(setSignOutStatus());
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("refreshtoken");
    }
  };

  useEffect(() => {
    if (!loggedInUser.isLoggedIn) {
      client.refetchQueries("validateToken");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInUser.isLoggedIn]);

  if (validating) {
    return <CommonLoader />;
  }

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
