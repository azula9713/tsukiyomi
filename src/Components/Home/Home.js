import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import { selectUser } from "../../App/Features/User/UserSlice";
import Collection from "../Collection/Collection";
import ImageSlider from "../ImageSlider/ImageSlider";
import { HomeContainer } from "./HomeStyles";

const Home = () => {
  const loggedInUser = useSelector(selectUser);

  return (
    <>
      <Helmet>
        <title>Tsukiyomi - Home</title>
      </Helmet>
      <HomeContainer>
        <ImageSlider />
        <Collection />
      </HomeContainer>
    </>
  );
};

export default Home;
