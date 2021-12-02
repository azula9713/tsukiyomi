import styled from "styled-components";

const RecommendsContainer = styled.section`
  padding: 0 0 26px;
  color: white;
  margin-left: 20px;
`;

const Card = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 30px;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ContentWrapper = styled.div`
  max-height: 300px;
  width: 100%;
  object-fit: contain;

  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  margin-right: 20px;

  img {
    max-height: 300px;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
    top: 0;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 3px solid rgba(249, 249, 249, 0.1);

    &:hover {
      border-color: rgba(249, 249, 249, 0.8);
    }

    @media (max-width: 768px) {
      max-height: 200px;
    }
  }

  &:hover {
    transform: scale(1.05);

    @media (max-width: 768px) {
      transform: scale(1);
    }
  }
`;

export { RecommendsContainer, Card, ContentWrapper };
