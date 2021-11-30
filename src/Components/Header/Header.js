import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
import { signInWithPopup, signOut } from "@firebase/auth";
import { auth, provider } from "../../Firebase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector(selectUser);

  const handleAuth = () => {
    if (!loggedInUser.isLoggedIn) {
      signInWithPopup(auth, provider)
        .then((result) => {
          handleUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      signOut(auth)
        .then(() => {
          dispatch(setSignOutStatus());
          navigate("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const handleUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        handleUser(user);
        navigate("/home");
      }
    });
  }, [loggedInUser]);

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
