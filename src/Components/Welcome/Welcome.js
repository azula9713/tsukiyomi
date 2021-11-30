import React from "react";
import { Helmet } from "react-helmet";

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

export default Welcome;