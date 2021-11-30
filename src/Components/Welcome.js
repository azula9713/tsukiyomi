import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Welcome = () => {
  return (
    <>
      <Helmet>
        <title>Tsukiyomi - Welcome</title>
      </Helmet>
      <WelcomeContainer>
        <WelcomeContent>
          <CTA>
            <CTALogoOne src="/images/Asset_28.png" alt="logo" />
            <Desc>
              <h3>
                <marquee behavior="slide" direction="up">
                  IT'S THE CYBER MONDAY SALE!
                </marquee>
              </h3>
              <p>
                Stream Mayor of Kingstown, SOUTH PARK: POST COVID & more for 1
                month FREE. Offer ends today.
              </p>
            </Desc>
            <SignUp>Enter Tsukiyomi</SignUp>
          </CTA>
          <BgImage />
        </WelcomeContent>
      </WelcomeContainer>
    </>
  );
};

const WelcomeContainer = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const WelcomeContent = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;

  @media only screen and (max-width: 479px) {
    justify-content: center;
  }
`;

const BgImage = styled.div`
  background-image: url("/images/9263.jpeg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  opacity: 0.5;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  padding-left: 2vw;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 0;
  text-align: left;
  align-items: left;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;

  @media only screen and (max-width: 479px) {
    align-items: center;
    margin-bottom: 0;
    text-align: center;
    justify-content: center;
  }
`;

const Desc = styled.div`
  h3 {
    font-size: 50px;
    margin: 0;
    margin-top: 5px;
    font-weight: 900;
  }
  @media only screen and (max-width: 479px) {
    marquee {
      text-align: center;
    }
  }
`;

const CTALogoOne = styled.img`
  width: 100%;
  max-width: 200px;
  min-height: 1px;
  display: block;
`;

const SignUp = styled.button`
  max-width: max-content;
  text-transform: uppercase;
  letter-spacing: 1.75px;
  background: red;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 20px;
  margin-top: 20px;
  font-weight: 900;
  font-size: 25px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    color: red;
    background: white;
  }
`;

export default Welcome;
