import React from "react";
import NonAuthHeader from "../Header/NonAuthHeader";

const LoginLoader = () => {
  return (
    <>
      <NonAuthHeader />
      <div>Please wait while we validate your credentials</div>
    </>
  );
};

export default LoginLoader;
