import React from "react";
import { Helmet } from "react-helmet";
// import { useSelector } from "react-redux";

// import { selectUser } from "../../App/Features/User/UserSlice";
import Collection from "../Collection/Collection";
import ImageSlider from "../ImageSlider/ImageSlider";
import ContentCard from "../ContentCard/ContentCard";
import { HomeContainer } from "./HomeStyles";

const Home = () => {
  // const loggedInUser = useSelector(selectUser);

  return (
    <>
      <Helmet>
        <title>Tsukiyomi - Home</title>
      </Helmet>
      <HomeContainer>
        <ImageSlider />
        <Collection />
        <ContentCard title="Recommended For You" type="recommended" />
        <ContentCard title="Continue Watching" type="continue" />
        <ContentCard title="Newly Arrived" type="newly" />
        <ContentCard title="Tsukiyomi Originals" type="originals" />
      </HomeContainer>
    </>
  );
};

export default Home;
