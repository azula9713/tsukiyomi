import React from "react";
import collectionData from "../../App/Data/CollectionData";
import { CardWrapper, CollectionContainer } from "./CollectionStyles";

const Collection = () => {
  return (
    <CollectionContainer>
      {collectionData.map((item) => (
        <CardWrapper key={item.id}>
          <img src={item.image} alt={item.name} />
          <video autoPlay={true} loop={true} muted={true} playsInline={true}>
            <source src={item.video} type="video/mp4" />
          </video>
        </CardWrapper>
      ))}
    </CollectionContainer>
  );
};

export default Collection;
