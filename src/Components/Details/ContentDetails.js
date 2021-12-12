import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

const ContentDetails = (props) => {
  const { id } = useParams();
  const [content, setContent] = useState({});

  const fetchMovieData = async (id) => {
    const movieData = await getMovieData(id);
    console.log("data", movieData);
    setContent(movieData);
  };

  useEffect(() => {
    fetchMovieData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (content) {
  }

  return (
    <Container>
      <Background>
        <img alt={content?.movieTitle} src={content?.movieBanner} />
      </Background>
      <ContentData>
        <ImageTitle>
          <img alt={content?.movieTitle} src={content?.movieThumbnail} />
        </ImageTitle>
        <InformationSection>
          <MovieTitle>{content?.movieTitle}</MovieTitle>
          <ContentMeta>
            <MetaData>
              <p>{content?.movieReleaseDate}</p>
              <p>{content?.movieGenre}</p>
            </MetaData>

            <MetaData>
              <p>{content?.movieRating}</p>
              <RatingIcon>
                <p>{content?.movieScore?.imdb}</p>
              </RatingIcon>
              <p>{content?.movieScore?.rottenTomatoes}</p>
              <p>{content?.movieScore?.rottenTomatoesUser}</p>
              <p>{content?.movieScore?.metacritic}</p>
            </MetaData>
          </ContentMeta>
          <Description>{content?.movieDescription}</Description>
          <SubTitle>{content?.movieSubtitles}</SubTitle>
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
  );
};

export default ContentDetails;
