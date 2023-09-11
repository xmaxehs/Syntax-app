import React from "react";
import {
  AboutBio,
  AboutCol1,
  AboutCol2,
  AboutContainer,
  AboutCounters,
  AboutImg,
  AboutRow,
  AboutTitle,
  CounterItem,
} from "./aboutElements";

const AboutSection = ({
  imgStart,
  happyCustomer,
  drinkCoffee,
  workSample,
  aboutImgSrc,
}) => {
  return (
    <AboutContainer id="about">
      <AboutRow imgStart={imgStart}>
        <AboutCol1>
          <AboutTitle>About Me</AboutTitle>
          <AboutBio>
            I'm Ehsan Pirnazar, a young front-end developer passionate about web
            development and React. Born in 2007, I started coding at 13 and have
            been working on projects to improve my skills. My goal is to create
            top-tier websites that blend design and functionality. Join me in
            pushing the boundaries of web development on my personal website.
            Welcome to my digital realm!
          </AboutBio>
          <AboutCounters>
            <CounterItem>{happyCustomer}</CounterItem>
            <CounterItem>{drinkCoffee}</CounterItem>
            <CounterItem>{workSample}</CounterItem>
          </AboutCounters>
        </AboutCol1>
        <AboutCol2>
          <AboutImg src={aboutImgSrc} />
        </AboutCol2>
      </AboutRow>
    </AboutContainer>
  );
};

export default AboutSection;