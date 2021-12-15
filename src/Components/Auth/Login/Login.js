import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../../App/Api/Auth.api";

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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    isLoading: loginLoading,
    mutate: login,
    isError: loginError,
  } = useMutation(loginUser, {
    onSuccess: (res) => {
      console.log("res", res);
      if (res.status === 200) {
        localStorage.setItem("accesstoken", res.data.accessToken);
        localStorage.setItem("refreshtoken", res.data.refreshToken);
        dispatch(
          setUserLoginDetails({
            name: res.data.user.firstName + " " + res.data.user.lastName,
            email: res.data.user.email,
            photo: res.data.user.photoURL,
          })
        );
      }
    },
    onError: (data) => {
      // openErrorSnackbar('Error logging in', durations.snackbarDuration);
      // setShowLoader(false);
    },
  });

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
                const credentials = {
                  email: email,
                  password: password,
                };
                login(credentials);
              }}
              content={loginLoading ? "Logging In..." : "Login"}
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
