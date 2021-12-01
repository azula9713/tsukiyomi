import React from "react";
import collectionData from "../../App/Data/CollectionData";
import { CardWrapper, CollectionContainer } from "./CollectionStyles";

const Collection = () => {
  return (
    <CollectionContainer>
      {collectionData.map((item) => (
        <CardWrapper key={item.id}>
          <img src={item.image} alt={item.name} />
        </CardWrapper>
      ))}
    </CollectionContainer>
  );
};

export default Collection;
