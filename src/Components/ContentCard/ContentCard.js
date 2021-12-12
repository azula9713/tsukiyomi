import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectMovies } from "../../App/Features/Movie/MovieSlice";
import { RecommendsContainer, Card, ContentWrapper } from "./ContentCardStyles";

const ContentCard = ({ title }) => {
  const movies = useSelector(selectMovies);

  return (
    <RecommendsContainer>
      <h4>{title}</h4>
      <Card>
        {movies &&
          movies.map((item) => (
            <ContentWrapper key={item.movieId}>
              <Link to={`/contentdetail/${item.movieId}`}>
                <img src={item.movieThumbnail} alt={item.movieTitle} />
              </Link>
            </ContentWrapper>
          ))}
      </Card>
    </RecommendsContainer>
  );
};

export default ContentCard;
