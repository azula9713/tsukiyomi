import React from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";

import { setMovies } from "../../App/Features/Movie/MovieSlice";
import Collection from "../Collection/Collection";
import ImageSlider from "../ImageSlider/ImageSlider";
import ContentCard from "../ContentCard/ContentCard";
import { HomeContainer } from "./HomeStyles";
import { getAllMovies } from "../../App/Api/Movie.api";
import Header from "../Header/Header";
import CommonLoader from "../Loaders/CommonLoader";

const Home = () => {
  const dispatch = useDispatch();

  const { isLoading: moviesFetching } = useQuery(
    "fetchAllMovies",
    getAllMovies,
    {
      retry: false,
      onSuccess: (res) => {
        if (res.status === 200) {
          const movies = res.data;

          dispatch(setMovies(movies));
        }
      },
      onError: (err) => {
        //Add error handling
        console.log(err);
      },
    }
  );

  if (moviesFetching) {
    return <CommonLoader />;
  }

  return (
    <>
      <Helmet>
        <title>Tsukiyomi - Home</title>
      </Helmet>
      <Header />
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
