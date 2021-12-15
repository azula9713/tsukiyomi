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
  RatingWrapper,
} from "./MovieDetailsStyles";
import Header from "../Header/Header";
import CommonLoader from "../Loaders/CommonLoader";

const MovieDetails = (props) => {
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
                <p>•</p>
                <p>{content.movieDuration}</p>
              </MetaData>
              {content?.movieGenre?.map(function (genre, index) {
                return <span key={index}>{(index ? ", " : "") + genre}</span>;
              })}
              <MetaData>
                <RatingWrapper>
                  <p>{content.movieRating}</p>
                </RatingWrapper>

                <RatingIcon>
                  <img alt="imdb" src="/images/IMDB.svg" />
                  <p>{content.movieScore?.imdb}</p>
                </RatingIcon>
                <RatingIcon>
                  <img
                    alt="imdb"
                    src={
                      content.movieScore?.rottenTomatoes > 60
                        ? "/images/Rotten_Tomatoes.svg"
                        : "/images/Rotten_Tomatoes_rotten.svg"
                    }
                  />
                  <p>{content.movieScore?.rottenTomatoes}%</p>
                </RatingIcon>
                <RatingIcon>
                  <img
                    alt="imdb"
                    src={
                      content.movieScore?.rottenTomatoesUser > 60
                        ? "/images/positive_audience.svg"
                        : "/images/negative_audience.svg"
                    }
                  />
                  <p>{content.movieScore?.rottenTomatoesUser}%</p>
                </RatingIcon>
                <RatingIcon>
                  <img alt="imdb" src="/images/Metacritic.png" />
                  <p>{content.movieScore?.metacritic}/100</p>
                </RatingIcon>
              </MetaData>
            </ContentMeta>
            <Description>{content.movieDescription}</Description>
            {/* <SubTitle>
              <p>Subtitle language</p>
              <select>
                <option>Select language</option>
                {content.movieSubtitles?.map((subtitle, index) => {
                  return (
                    <option key={index} value={subtitle}>
                      {subtitle}
                    </option>
                  );
                })}
              </select>
            </SubTitle> */}
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

export default MovieDetails;
