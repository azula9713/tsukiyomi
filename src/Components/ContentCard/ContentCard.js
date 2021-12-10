import React from "react";
import { Link } from "react-router-dom";

import { RecommendsContainer, Card, ContentWrapper } from "./ContentCardStyles";

const ContentCard = (props) => {
  return (
    <RecommendsContainer>
      <h4>{props.title}</h4>
      <Card>
        <ContentWrapper>
          <Link to="#">
            <img
              src="https://m.media-amazon.com/images/M/MV5BYjM0MDRkYzctMTNhMS00ODYwLTgwMWItZDYxNDlhOGY1YjRlXkEyXkFqcGdeQXVyMzExMzk5MTQ@._V1_.jpg"
              alt=""
            />
          </Link>
        </ContentWrapper>
      </Card>
    </RecommendsContainer>
  );
};

export default ContentCard;
