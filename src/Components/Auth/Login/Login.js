import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../../App/Api/Auth.api";
import {
  apiResult,
  setRequestAPIError,
  setRequestAPIStart,
  setRequestAPISuccess,
} from "../../../App/Features/RequestAPI/RequestAPISlice";
import {
  setUserLoginDetails,
  selectUser,
} from "../../../App/Features/User/UserSlice";
import NonAuthHeader from "../../Header/NonAuthHeader";
import {
  BgImage,
  LoginContainer,
  LoginContent,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  ForgotPassword,
  Button,
  Input,
} from "./LoginStyles";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector(selectUser);
  const results = useSelector(apiResult);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (loggedInUser.isLoggedIn) {
      navigate("/home");
    }
  }, [loggedInUser, navigate]);

  return (
    <>
      <Helmet>
        <title>Tsukiyomi - Login</title>
      </Helmet>
      <NonAuthHeader />
      <LoginContainer>
        <LoginContent>
          <WelcomeText>Welcome</WelcomeText>
          <InputContainer>
            <Input
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </InputContainer>
          <ButtonContainer>
            <Button
              onClick={async () => {
                dispatch(
                  setRequestAPIStart({
                    isLoading: true,
                  })
                );
                console.log("res", results);
                const userData = await loginUser(email, password);
                if (userData) {
                  dispatch(
                    setRequestAPISuccess({
                      data: userData,
                    })
                  );
                  dispatch(
                    setUserLoginDetails({
                      name: userData.firstName + " " + userData.lastName,
                      email: userData.email,
                      photo: userData.photoURL,
                    })
                  );
                } else {
                  dispatch(
                    setRequestAPIError({
                      errorMessage: "Error",
                    })
                  );
                }
              }}
              content={results.isLoading ? "Loading..." : "Login"}
            />
          </ButtonContainer>
          {/* <LoginWith>OR LOGIN WITH</LoginWith> */}
          {/* <HorizontalRule /> */}
          {/* <IconsContainer>
            <Icon color={FacebookBackground}>
              <FaFacebookF />
            </Icon>
            <Icon color={InstagramBackground}>
              <FaInstagram />
            </Icon>
            <Icon color={TwitterBackground}>
              <FaTwitter />
            </Icon>
          </IconsContainer> */}
          <ForgotPassword>Forgot Password ?</ForgotPassword>
          <BgImage />
        </LoginContent>
      </LoginContainer>
    </>
  );
};

export default Login;
