import React from "react";
import { CardContainer, CardDescirption, CardImg, CardRow1, CardRow2, CardTitle } from "./CardsElements";

const CardItem = ({ ImgSrc, Title, Description }) => {
  return (
    <CardContainer>
      <CardRow1>
        <CardImg src={ImgSrc} />
        <CardTitle>{Title}</CardTitle>
      </CardRow1>
      <CardRow2>
        <CardDescirption>{Description}</CardDescirption>
      </CardRow2>
    </CardContainer>
  );
};

export default CardItem;
