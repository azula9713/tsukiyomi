import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { getMovieData } from "../../App/Api/Movie.api";
import {
  AddList,
  Background,
  Container,
  ContentMeta,
  Controls,
  Description,
  GroupWatch,
  ImageTitle,
  Player,
  SubTitle,
  Trailer,
  ContentData,
  InformationSection,
  MovieTitle,
  MetaData,
  RatingIcon,
} from "./ContentDetailsStyles";
import Header from "../Header/Header";
import CommonLoader from "../Loaders/CommonLoader";

const ContentDetails = (props) => {
  const { id } = useParams();
  const [content, setContent] = useState({});

  const { isLoading: movieLoading } = useQuery(
    ["fetchMovie", id],
    () => getMovieData(id),
    {
      retry: false,
      onSuccess: (res) => {
        if (res.status === 200) {
          setContent(res.data);
        }
      },
      onError: (err) => {
        //Add error handling
        console.log(err);
      },
    }
  );

  if (movieLoading) {
    return <CommonLoader />;
  }

  return (
    <>
      <Helmet>
        <title>{`${content.movieTitle} | Tsukiyomi`}</title>
      </Helmet>
      <Header />
      <Container>
        <Background>
          <img alt={content.movieTitle} src={content.movieBanner} />
        </Background>
        <ContentData>
          <ImageTitle>
            <img alt={content.movieTitle} src={content.movieThumbnail} />
          </ImageTitle>
          <InformationSection>
            <MovieTitle>{content.movieTitle}</MovieTitle>
            <ContentMeta>
              <MetaData>
                <p>{content.movieReleaseDate}</p>
                <p>{content.movieGenre}</p>
              </MetaData>

              <MetaData>
                <p>{content.movieRating}</p>
                <RatingIcon>
                  <p>{content.movieScore?.imdb}</p>
                </RatingIcon>
                <p>{content.movieScore?.rottenTomatoes}</p>
                <p>{content.movieScore?.rottenTomatoesUser}</p>
                <p>{content.movieScore?.metacritic}</p>
              </MetaData>
            </ContentMeta>
            <Description>{content.movieDescription}</Description>
            <SubTitle>{content.movieSubtitles}</SubTitle>
          </InformationSection>
        </ContentData>

        <ContentMeta>
          <Controls>
            <Player>
              <img src="/images/play-icon-black.png" alt="" />
              <span>Play</span>
            </Player>
            <Trailer>
              <img src="/images/play-icon-white.png" alt="" />
              <span>Trailer</span>
            </Trailer>
            <AddList>
              <span />
              <span />
            </AddList>
            <GroupWatch>
              <div>
                <img src="/images/group-icon.png" alt="" />
              </div>
            </GroupWatch>
          </Controls>
        </ContentMeta>
      </Container>
    </>
  );
};

export default ContentDetails;
