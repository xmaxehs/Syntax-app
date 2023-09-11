import React from "react";
import {
  GitHubIcon,
  HeroAbility,
  HeroAbilityContainer,
  HeroBg,
  HeroCol1,
  HeroCol2,
  HeroContainer,
  HeroHireBtn,
  HeroName,
  HeroRow,
  HeroRowCol1,
  HeroSocial,
  HeroTitle,
  HireBtn,
  HomeImg,
  HomeImgContainer,
  InstagramIcon,
  LinkedInIcon,
  SocialLinks,
  TelegramIcon,
} from "./HeroElements";

const HeroSection = ({
  Developer,
  Ability,
  GitHubLink,
  InstagramLink,
  TelegramLink,
  LinkedinLink,
  HomeImgSrc,
  imgStart,
}) => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <HeroRow imgStart={imgStart}>
          <HeroCol1>
            <HeroRowCol1>
              <HeroTitle>Hey , I`m</HeroTitle>
            </HeroRowCol1>
            <HeroRowCol1>
              <HeroName>{Developer}</HeroName>
            </HeroRowCol1>
            <HeroRowCol1>
              <HeroAbilityContainer>I`m A 
                <HeroAbility>{Ability}</HeroAbility>
              </HeroAbilityContainer>
            </HeroRowCol1>
            <HeroRowCol1>
              <HeroSocial>
                <SocialLinks to={GitHubLink}>
                  <GitHubIcon />
                </SocialLinks>
                <SocialLinks to={InstagramLink}>
                  <InstagramIcon />
                </SocialLinks>
                <SocialLinks to={LinkedinLink}>
                  <LinkedInIcon />
                </SocialLinks>
                <SocialLinks to={TelegramLink}>
                  <TelegramIcon />
                </SocialLinks>
                <HeroHireBtn>
                  <HireBtn>Hire Me</HireBtn>
                </HeroHireBtn>
              </HeroSocial>
            </HeroRowCol1>
          </HeroCol1>
          <HeroCol2>
            <HomeImgContainer>
              <HomeImg src={HomeImgSrc} alt="HomePage | Image" />
            </HomeImgContainer>
          </HeroCol2>
        </HeroRow>
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
