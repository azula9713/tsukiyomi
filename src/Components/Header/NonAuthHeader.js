import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectUser } from "../../App/Features/User/UserSlice";
import { NonAuthLogin, NonAuthNav } from "./NonAuthHeaderStyles";

const NonAuthHeader = () => {
  const navigate = useNavigate();
  const loggedInUser = useSelector(selectUser);

  useEffect(() => {
    if (loggedInUser.isLoggedIn) {
      navigate("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInUser.isLoggedIn]);

  return (
    <NonAuthNav>
      <NonAuthLogin
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </NonAuthLogin>
    </NonAuthNav>
  );
};

export default NonAuthHeader;
