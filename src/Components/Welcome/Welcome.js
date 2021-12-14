import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectUser } from "../../App/Features/User/UserSlice";
import NonAuthHeader from "../Header/NonAuthHeader";

import {
  BgImage,
  CTA,
  CTALogoOne,
  Desc,
  SignUp,
  WelcomeContainer,
  WelcomeContent,
} from "./WelcomeStyles";

const Welcome = () => {
  const loggedInUser = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser.isLoggedIn) {
      navigate("/home");
    }
  }, [loggedInUser]);

  return (
    <>
      <Helmet>
        <title>Tsukiyomi - Welcome</title>
      </Helmet>
      <NonAuthHeader />
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

export default Welcome;
