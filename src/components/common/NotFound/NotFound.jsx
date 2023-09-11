import React from "react";
import { BackBtn, BackIcon, NotFoundContainer, NotFoundImg, NotFoundTitle } from "./404Elements";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <BackBtn to="/">
        <BackIcon />
      </BackBtn>
      <NotFoundTitle>Not Found | 404</NotFoundTitle>
      <NotFoundImg src={require("../../../images/NotFound404.svg").default} />
    </NotFoundContainer>
  );
};

export default NotFound;
