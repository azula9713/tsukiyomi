import React from "react";
import { Helmet } from "react-helmet";
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
  return (
    <>
      <Helmet>
        <title>Tsukiyomi - Login</title>
      </Helmet>
      <LoginContainer>
        <LoginContent>
          <WelcomeText>Welcome</WelcomeText>
          <InputContainer>
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </InputContainer>
          <ButtonContainer>
            <Button content="Login" />
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
