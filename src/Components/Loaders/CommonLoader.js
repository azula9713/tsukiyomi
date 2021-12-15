import React from "react";
import NonAuthHeader from "../Header/NonAuthHeader";
import { LoaderContainer } from "./CommonLoaderStyles";

const CommonLoader = () => {
  return (
    <>
      <LoaderContainer>
        <img src="/images/sharingan.gif" alt="loader" />
      </LoaderContainer>
    </>
  );
};

export default CommonLoader;
