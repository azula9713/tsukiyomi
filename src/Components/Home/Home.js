import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";

import { setMovies } from "../../App/Features/Movie/MovieSlice";
import Collection from "../Collection/Collection";
import ImageSlider from "../ImageSlider/ImageSlider";
import ContentCard from "../ContentCard/ContentCard";
import { HomeContainer } from "./HomeStyles";
import { getAllMovies } from "../../App/Api/Movie.api";

const Home = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const payload = await getAllMovies();
    dispatch(setMovies(payload)); // set movies in redux store
  };

  useEffect(() => {
    getMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>Tsukiyomi - Home</title>
      </Helmet>
      <HomeContainer>
        <ImageSlider />
        <Collection />
        <ContentCard title="Recommended For You" type="recommended" />
        {/* <ContentCard title="Continue Watching" type="continue" />
        <ContentCard title="Newly Arrived" type="newly" />
        <ContentCard title="Tsukiyomi Originals" type="originals" /> */}
      </HomeContainer>
    </>
  );
};

export default Home;
